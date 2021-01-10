const mongoose = require('mongoose')

// const urlLocal = "mongodb://127.0.0.1:27017/contacts";
// const urlAtlas = ""
const config = require('./config').get(process.env.NODE_ENV);


try {
    mongoose.connect(config.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    });
} catch (e) {
    console.log(e)
}