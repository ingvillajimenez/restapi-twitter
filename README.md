# Twitter REST API

## Context

## The Assignment

Build a basic but real Twitter REST API.

### Setup Instructions

```sh
# (1) Create the project
$ mkdir restapi-twitter

# (2) Install needed dependencies
$ npm install --save «dependency-name»

# (3) Run the project
$ npm start
```

### Deliverables

+ A GitHub repository.
+ A deployed project uploaded to Trello.

```sh
git add .
git commit -m "«your commit msg»"
git push origin master
```

You will need to build associations amongst data.

### Routes Design

|#|HTTP Verb|Path|Description|Notes|
|-|---------|----|-----------|-----|
|1|GET|`/users`|Get all users|-|
|2|POST|`/users`|Create a new user|-|
|3|GET|`/users/:userId/tweets`|Get all tweets related to that user|-|
|4|POST|`/users/:userId/tweets`|Create a new tweet related to that user|-|
|5|GET|`/tweets`|Get all tweets|-|
|6|GET|`/tweets/:tweetId/likes`|Get all likes from that specific tweet|-|
|7|POST|`/tweets/:tweetId/likes`|Create a new like in that specific tweet|You must save the user id reference, because we need to know which users liked the tweet|

### Rules

+ A user can have many tweets
+ A tweet can be created only by one user
+ A tweet can have many likes
+ Also, a like must save a user id reference

#### User Information

This is the basic information schema you will need, if you want to add more fields go ahead.

|#|Field|Required|
|-|-----|--------|
|1|First name|Yes|
|2|Last name|Yes|
|3|Username|Yes|
|4|Password|Yes|
|5|Created At|No|
|6|Updated At|No|

Maybe you will need to add one more field to associate the model.

#### Tweet Information

This is the basic information schema you will need, if you want to add more fields go ahead.

|#|Field|Required|
|-|-----|--------|
|1|Description|Yes|
|2|Created At|No|
|3|Updated At|No|

Maybe you will need to add one more field to associate the model.

#### Like Information

You only need to save the user id. No need to create another model, check Tweet model.

**If you want to practice a difficult model, you can save the date when the user liked the tweet.**

### Iterations

#### Sprint 1 | Structure Your Schemas

Organise all schemas needed.

#### Sprint 2 | Manipulate Data with Models

Separate Models and Controllers.

#### Sprint 3 | Separate Logic and Delegate to Controllers

Relate all Controllers in Routes.

#### Sprint 4 | Add References

This is important to associate our collections.

#### Sprint 5 | Deploy Your API to Heroku

User Heroku and mLab to deploy the API.

---

##### Good luck!


