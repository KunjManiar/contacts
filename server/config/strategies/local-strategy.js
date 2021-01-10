const passport = require('passport');
const {
    Strategy
} = require('passport-local');

const User = require('../../models/user')
// const debug = require('debug')('app:local-strategy');



module.exports = function localStrategy() {
    // debug('localStrategy');

    passport.use(new Strategy({
        emailFeild: 'email',
        passwordField: 'password'
    }, (email, password, done) => {
        let user = {
            email,
            passport,
        };
        getUser(email).then(user => {
            if (user.password === password) {
                debug(user, 'localStrategy');

                done(null, user);
            } else {
                done(null, false);
            }
        }).catch(err => {
            debug(err)
        })

    }))
}

async function getUser(email) {
    // const url = 'mongodb://localhost:27017';
    // const dbName = 'libraryApp';
    let client;

    try {
        // client = await MongoClient.connect(url);
        // const 
        // debug('Connected correctly to server');

        // const db = client.db(dbName);
        // const col = db.collection('users');

        // const user = await col.findOne({
        //     username
        // });

        const user = await User.findOne({ email })
        if (!user)
            throw new Error("No user with email");

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.json({
                isAuth: false,
                message: 'Wrong password'
            });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie('auth', user.token).json({
                    isAuth: true,
                    id: user._id,
                    email: user.email
                })
            })
        })


    } catch (err) {
        console.log(err.stack);
    }
    // Close connection
    client.close();
}