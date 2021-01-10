const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: { 
        type: String, 
        trim: true, 
        default: '' 
    },
    resourceName: {
        type: String, 
        trim: true, 
        default: '',
        unique: true,
    },
    emails: [{ 
        type: String, 
        trim: true, 
        default: '' 
    }],
    phoneNumbers: [{ 
        type: String, 
        trim: true, 
        default: '' 
    }],
    userEmail: { 
        type: String, 
        trim: true, 
        default: '', 
    },
    photoUrl: {
        type: String,
        trim: true,
        default: '',
    }
})

ContactSchema.statics.findById = async (_id) => {
    // console.log(_id)
    const contact = await Contact.findOne({
        _id,
    })

    if (!contact) {
        throw new Error('Unable to find contact')
    }

    // console.log(user)
    return contact

}

ContactSchema.statics.findByUserId = async (userId) => {

    const contacts = await Contact.find({ userId })

    if (!contacts) {
        throw new Error('No contacts found')
    }

    return contacts
}


const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;
