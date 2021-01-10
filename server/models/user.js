const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/config').get(process.env.NODE_ENV);
const SALT_I = 10;

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1,
        default: '',
    },
    password: {
        type: String,
        // required: true,
        // minlength: 6,
        default: '',
    },
    givenName: {
        type: String,
        maxlength: 100,
        required: true,
        trim: true,
        default: '',
    },
    familyName: {
        type: String,
        maxlength: 100,
        required: true,
        trim: true,
        default: '',
    },
    token: {
        type: String,
        trim: true,
        default: '',
    },
    photo: {
        type: String,
        trim: true,
        default: '',
    },
    accessToken: {
        type: String,
        trim: true,
        default: '',
    },
    refreshToken: {
        type: String,
        trim: true,
        default: '',
    },
    syncToken: {
        type: String,
        trim: true,
        default: '',
    },
    syncTokenDate: {
        type: Date,
        trim: true,
        default: new Date(1970, 1, 1),
    }
})

// UserSchema.pre('save',function(next){
//     var user = this;

//     if(user.isModified('password')){
//         bcrypt.genSalt(SALT_I,function(err,salt){
//             if(err) return next(err);

//             bcrypt.hash(user.password,salt,function(err,hash){
//                 if(err) return next(err);
//                 user.password = hash;
//                 next();
//             })
//         })
//     } else {
//         next()
//     }
// })

// UserSchema.methods.comparePassword = function(candidatePassword,cb){
//     bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
//         if(err) return cb(err);
//         cb(null,isMatch);
//     })
// }

// UserSchema.methods.generateToken = function(cb){
//     var user = this;
//     var token = jwt.sign(user._id.toHexString(),config.SECRET);

//     user.token = token;
//     user.save(function(err,user){
//         if(err) return cb(err);
//         cb(null,user)
//     })
// }

// UserSchema.statics.findByToken = function(token,cb){
//     var user  = this;

//     jwt.verify(token,config.SECRET,function(err,decode){
//         user.findOne({"_id":decode,"token":token},function(err,user){
//             if(err) return cb(err);
//             cb(null,user)
//         })
//     })
// }


// UserSchema.methods.deleteToken = function(token,cb){
//     var user = this;

//     user.update({$unset:{token:1}},(err,user)=>{
//         if(err) return cb(err);
//         cb(null,user)
//     })
// }

UserSchema.statics.findById = async (_id) => {
    //  console.log(email,password)
    const user = await User.findOne({
        _id
    })

    if (!user) {
        throw new Error('Unable to find User')
    }

    // console.log(user)
    return user
}

UserSchema.statics.findByEmail = async (email) => {
    //  console.log(email,password)
    const user = await User.findOne({
        email
    })

    if (!user) {
        throw new Error('Unable to find User')
    }

    // console.log(user)
    return user
}


UserSchema.statics.saveOrUpdate = async (ipUser) => {
    let updatedUser
    try {
        const user = await User.findByEmail(ipUser.email)
        updatedUser = await User.findByIdAndUpdate(user._id, {
            givenName: ipUser.givenName,
            familyName: ipUser.familyName,
            photo: ipUser.photo,
            accessToken: ipUser.accessToken,
            refreshToken: ipUser.refreshToken
        }, { new: true })
    } catch (err) {
        updatedUser = await ipUser.save()
        console.log(err)
    }
    return updatedUser
}


const User = mongoose.model('User', UserSchema)

module.exports = User   