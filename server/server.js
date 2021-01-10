const express = require('express');
const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const { google } = require('googleapis');
require('./config/mongoose')
const cors = require('cors')
const config = require('./config/config').get(process.env.NODE_ENV);

// app.use(cors())

const User = require('./models/user');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("> db connected");
});

// express, structure define
const app = express();
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept')
//     next()
// })

app.use(
    cors({
        origin: "http://localhost:3000", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true // allow session cookie from browser to pass through
    })
);


app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));

app.use(express.static('client/build'))


const port = process.env.PORT || 3001;
app.listen(port, () => console.log('App listening on port ' + port));

const passport = require('passport');
require('./config/passport.js')(app)


app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email', 'https://www.googleapis.com/auth/contacts'],
        accessType: 'offline',
        prompt: 'consent'
    })
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/error' }),
    async function (req, res) {
        // Successful authentication, redirect success.
        // const user = await User.findByEmail(req.user.emails[0].value)
        // res.json(user);
        res.redirect(process.env.NODE_ENV === 'production'? '/contact' : 'http://localhost:3000/contact')
    }
);

const storeContacts = require('./config/storeContacts')

app.get('/api/user',
    // passport.authenticate('google', { failureRedirect: '/error' }),
    async (req, res) => {
        // Successful authentication, redirect success.
        try {
            if (req.user) {
                // console.log(req.user)
                const user = await User.findByEmail(req.user.emails[0].value)
                res.json({
                    user,
                    ok: 200
                });
            } else {
                throw new Error("Unauthorized user")
            }
        } catch (err) {
            console.log(err)
            res.json({
                error: err.message
            })
        }
    }
);

app.get('/api/contacts',
    // passport.authenticate('google', { failureRedirect: '/error' }),
    async (req, res) => {
        // Successful authentication, redirect success.
        try {
            if (req.user) {
                
                const user = await User.findByEmail(req.user.emails[0].value)
                const authObj = new google.auth.OAuth2({
                    access_type: 'offline',
                    clientId: config.GOOGLE_CLIENT_ID,
                    clientSecret: config.GOOGLE_CLIENT_SECRET,
                    redirectUri: `${config.URI}/auth/google/contacts`,
                    scope: [`https://www.googleapis.com/auth/contacts`]
                });
                authObj.setCredentials({
                    access_token: user.accessToken,
                    refresh_token: user.refreshToken,
                });
                // let contacts
                storeContacts.listConnectionNames(authObj, req.user.emails[0].value, (contactsInner) => {
                    console.log("In contacts inner function")
                    console.log(contactsInner.length)
                    res.json({
                        contacts: contactsInner,
                        ok: 200
                    });
                    // contacts = contactsInner;
                })
                // storeContacts.listConnectionNames(authObj, req.user.emails[0].value).then((op) => {
                //     console.log(op)
                //     contacts = op
                // }).catch((err) => {
                //     console.log(err)
                // })
                // console.log(contacts)

                // // console.log(req.user)
                // console.log("In final main before contacts")
                // console.log(contacts)
                // console.log("After main")
                // const user = await User.findByEmail(req.user.emails[0].value)
                
            } else {
                throw new Error("Unauthorized user")
            }
        } catch (err) {
            console.log(err)
            res.json({
                error: err.message
            })
        }
    }
);

app.get('/api/logout', function (req, res) {
    req.logout();
    // res.redirect('http://localhost:3000/');
    res.json({
        ok: 200
    })
});

if(process.env.NODE_ENV === 'production') {
    const path = require('path')
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'../client', 'build', 'index.html'))
    })
}