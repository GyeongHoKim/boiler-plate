# boiler-plate

practicing MERN stack

# functions

1. Register
2. Login
3. Logout

# Tech Stack

used MERN stack

## mongoDB

used mongoose.

1. User model

check user schema at `server/models/User.js`
I created these methods to communicate with backend

* pre-save: encrypt password with npm bcrypt
* comparePassword: get plain password from parameter and encrypt it. compare that and DB's password(already encrypted with bcrypt)
* generateToken: used jwt to generate token and return user schema to callback function.
* findByToken: get plain token from client's cookie and find user id with `jwt.verify()`. return user schema to callback function

## node.js

made user functions at /api/users

> /api/users/register  
> /api/users/login  
> /api/users/auth  
> /api/users/logout  

* register: save request from client using method save (mongoose) into User schema. returns value `{ success: true }` when success.
* login: find email from DB and compare password. if password is right, make token and save it to client's cookie. return value `{ loginSuccess: true, userId: user._id }` when success.
* auth: compare client's cookie and DB's token. return user info(check `/server/index.js`) when success.
* logout: find DB token that equals to request's token and update it with empty string `""`.

## redux

![redux](https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/640px-Redux_Logo.png)

to manage states, I used redux, react-redux

* made store with createStore.  
* made reducers in _reducers folder. merge all reducers into root reducer(combineReducer)  
* made actions: loginUser, registerUser, auth. object contains type and payload. used axios to post or get object  

## higher oreder component

to validate authentication of users, used hoc.

* get three parameters: components, option, admin.  
* compare option I made and response.payload.isAuth from backend.  
* with if statement, redirect for users