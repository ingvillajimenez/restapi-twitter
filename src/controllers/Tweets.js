const ODM = require('mongoose');

const Tweet = require('../models/Tweet');
const User = require('../models/User');

const Tweets = {
    index: (request, response) => {
        Tweet
            .find()
            .populate({
                path: 'user',
                select: '_id firstName lastName'
            })
            .exec()
            .then(tweets => {
                response
                    .status(200)
                    .json({
                        meta: tweets.length,
                        data: tweets
                    })
            })
            .catch(error => console.log(error));
    },
    likes: (request, response) => {
        Tweet
            .findById(request.params.tweetId)
            .populate({
                path:'likes',
                select: '_id firstName lastName'
            })
            .exec()
            .then(foundTweet => {
                response
                    .status(200)
                    .json({
                        meta: foundTweet.likes.length,
                        data: foundTweet.likes
                    });
            })
            .catch(error => console.log(error));
    },
    createLike: (request, response) => {
        console.log(request.body)
        Tweet
            .findById(request.params.tweetId)
            .exec()
            .then(foundTweet => {
                User
                    .findById(request.body.user)
                    .exec()
                    .then(foundUser => {
                        foundTweet.likes.push(foundUser._id);
                        // foundTweet.likes.push(request.body.userId);
                        foundTweet.save();
                        response
                            .status(200)
                            .json({
                                data: `${foundUser.firstName} ${foundUser.lastName} liked the tweet`
                            });
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }
}

module.exports = Tweets