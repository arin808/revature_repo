const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'thisisasecret',
    saveUninitialized: true,
    resave: false
}));    
// POST req w necessary details
/**
 * {
 * "username": "user1",
 * "password": "pass1"
 * }
 */

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // make req based off username
    if(username === 'user1' && password === 'pass1') {
        const currentSession = req.session;
        currentSession.username = username;
        currentSession.role = 'employee';
        res.send({"message": "Login successful"});
    } else {
        res.status(400).send('Login failed');
    }
    
    // validate if its correct
    // if true on both, authenticate client
    // if false fail authentication and notify client
});

app.get('/endpointforemployees', (req, res) => {
    const currentSession = req.session;
    if(currentSession.username && currentSession.role) {
        if(currentSession.role === 'employee') {
            res.send('This is the endpoint for employees');
        } else {
            res.status(401).send('You are not authorized to view this page');
        }
    } else {
        res.status(401).send('You are not authorized to view this page');
    }
});