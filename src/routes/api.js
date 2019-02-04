const {Router} =  require('express');

const Users = require('../controllers/Users');
const Tweets = require('../controllers/Tweets')

const app = Router();

app.route('/users')
    .get(Users.index)
    .post(Users.create);

app.route('/users/:userId/tweets')
    .get(Users.tweets)
    .post(Users.createTweet)

app.route('/tweets')
    .get(Tweets.index)

app.route('/tweets/:tweetId/likes')
    .get(Tweets.likes)
    .post(Tweets.createLike)

module.exports =  app;