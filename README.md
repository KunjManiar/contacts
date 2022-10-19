# Google Contacts Web App

Google contacts web app is a Express(Node.js) React and MongoDB atlas project for dealing with your contacts.

The application handles login with your google account through passport.js library and then imports your contacts through Google People's API.

The application's demo is hosted [here](https://guarded-escarpment-83929.herokuapp.com/).

> **Note:** This app neither stores user's information nor the contacts. All the session data is deleted as soon as your session expires or user logs out.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the packages for the project.

Go to the directory where you would like to clone the [repo](https://github.com/KunjManiar/contacts1).

```sh
$ git clone https://github.com/KunjManiar/contacts1.git
$ cd contacts1
$ npm install or yarn add
$ cd client
$ npm install or yarn add
$ cd..
```

\
Before running the project you need to follow the below steps to get google contacts:

- Register your project as [google developer](https://console.developers.google.com/).
- Create a new API Key (used in getting user images) for security add Application restrictions of HTTP referrers (websites)
- Create a new OAuth Client Id
  - Add authorized redirect URIs
    - http://localhost:(node_port)/auth/google/callback
    - http://localhost:(node_port)/auth/google/contacts
  - If hosting on some platform then (for me heroku free tier)
    - https://(heroku_project_name).herokuapp.com/auth/google/contacts
    - https://(heroku_project_name).herokuapp.com/auth/google/callback

\
There is a config.js file in server/config folder you need to configure before running the server.
Following are the variables you need to add to your default production environment and configure when publishing to online server:

- SECRET (In future registeration with user email and password is to be configured)
- DATABASE (MongoDB Atlas URI)
- GOOGLE_CLIENT_ID (Your client secret when you register your project with google)
- GOOGLE_CLIENT_SECRET (Your client secret when you register your project with google)
- URI (the port on which you are running your node server)

\
Lastly just add the API_KEY in the following location

- client\store\actions\contacts
- Line 3: API_KEY="(Your_API_KEY)"

\
To run it on the development server run the following command

```sh
$ npm run dev
```

The above command runs two servers concurrently

- Node server on port 3001
- React server on port 3000

## Things to Do

- Dockerize the application
- Write Test Cases
- Configuring bundlers like Webpack (The client project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
