const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        URI: process.env.URI
    },
    default:{
        SECRET: 'SUPERSECRETPASSWORD123',
        DATABASE: 'mongodb+srv://Kunj:Zluri@Contacts@cluster0.6b07i.mongodb.net/contacts?retryWrites=true&w=majority',
        GOOGLE_CLIENT_ID: '880916036413-7cakj7fghuhtoupfhns0l321paglaoj6.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: 'TVi-uDcBdyv3-tCH-LOCyEKZ',
        URI: "http://localhost:3001"
    }
}

exports.get = function get(env){
    return config[env] || config.default
} 
