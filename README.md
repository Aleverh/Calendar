

## This is test project - calendar

To run this project you have to:

### `cd calendar-app` go to app directiry
### `npm i` install all libraries
### run mongo and mongod
### `npm run serverStart` run server 
### `npm start` run client

Next you have to create user.Then you can login<br>
In this project I could't use session.Because when I send any request to server,<br> and worked them, HTTPSession doesn't change<br>
You can switch between logins, for this you need to create a new user, and use him.<br>
In this application can be just two events in one period of time.<br>
Fo example: you set event that starts in 0 and have duration 10, if you create same event, it will be work fine. But not
with third. It depends of realisation events position, position in events is absolute
