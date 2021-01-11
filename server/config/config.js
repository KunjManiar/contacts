const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.DATABASE,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        URI: process.env.URI
    },
    default:{
        SECRET: '',
        DATABASE: '',
        GOOGLE_CLIENT_ID: '',
        GOOGLE_CLIENT_SECRET: '',
        URI: "http://localhost:3000"
    }
}

exports.get = function get(env){
    return config[env] || config.default
} 
