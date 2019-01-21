import UserService from './businesslogic/UserService';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import cors from 'cors';

const calendar = express();

const userService = new UserService();

const PORT = 8080;
let userHTTPSession;

calendar.use(bodyParser.json());

calendar.use(bodyParser.urlencoded({extended: true}));

calendar.use(cookieParser());

calendar.use(session({
    secret: 'keyboard cat', saveUninitialized: true, resave: true
}));

calendar.use(cors({origin: '*'}));

mongoose.connect('mongodb://localhost/calendar')
    .then(() => console.log('mongo db is running'))
    .catch(console.log);

calendar.post('/login', async (req, res) => {
    const {login, password} = req.body;
    if (login && password) {
        let userId = await userService.isPasswordCorrect(login, password);
        if (userId) {
            userHTTPSession = userId;
            res.send({userId: userId});
            res.end()
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(404);
    }
    res.end();
});

calendar.post('/createLogin', (req, res) => {
    const {login, password} = req.body;
    userService.createLogin(login, password)
    res.send({mass: 'User successfully created'})
});

calendar.get('/logout', (req, res) => {
    userHTTPSession = '';
    res.send({mass: 'User was logout'});
});

calendar.get('/events', async (req, res) => {
    let userEvent = await userService.getUserEvents(userHTTPSession);
    res.send(userEvent);
});

calendar.post('/events', async (req, res) => {
    const eventData = req.body;
    eventData.login = userHTTPSession;
    let userEvent = await userService.createEvent(eventData);
    res.send(userEvent);
});

calendar.delete('/events/:id', async (req, res) => {
    const eventData = req.params;
    let updatedUser = await userService.deleteUserEvent(userHTTPSession, eventData.id);
    res.send(updatedUser);

});

calendar.get('/exportJson', (req, res) => {
    userService.exportUserEventData(userHTTPSession)
        .then(() => res.send({mass: 'successfully export'}));
});

calendar.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
});
