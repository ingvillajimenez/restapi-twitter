const ODM = require('mongoose');

const User = require('../models/User');
const Tweet = require('../models/Tweet');

const Users = {
    index: (request, response) => {
        User
            .find()
            .exec()
            .then(users => {
                response
                    .status(200)
                    .json({
                        meta: users.length,
                        data: users
                    });
            })
            .catch(error => console.log(error));
    },
    create: (request, response) => {
        const newUser = new User({
            _id: new ODM.Types.ObjectId(),
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            userName: request.body.userName,
            password: request.body.password
        });

        newUser
            .save()
            .then(createdUser => {
                response
                    .status(200)
                    .json({
                        data: createdUser
                    });
            })
            .catch(error => console.log(error));
    },
    tweets: (request, response) => {
        User
            .findById(request.params.userId)
            .populate('tweets')
            .exec()
            .then(foundUser => {
                response
                    .status(200)
                    .json({
                        meta: foundUser.tweets.length,
                        data: foundUser.tweets
                    });
            })
            .catch(error => console.log(error));
    },
    createTweet: (request, response) => {
        User
            .findById(request.params.userId)
            .exec()
            .then(foundUser => {
                const newTweet = new Tweet({
                    _id: new ODM.Types.ObjectId(),
                    description: request.body.description,
                    user: request.params.userId
                });

                newTweet
                    .save()
                    .then(createdTweet => {
                        foundUser.tweets.push(createdTweet._id)
                        foundUser.save();
                        response
                            .status(200)
                            .json({
                                data: createdTweet
                            });
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }
}

module.exports = Users;