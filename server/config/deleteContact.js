const { google } = require('googleapis');
// var contacts = google.people('v1');
const Contact = require('../models/contact');

let finalReturn;

module.exports.deleteContact = (auth, resourceName, returnFunc) => {
    // console.log(auth)
    const service = google.people({
        version: "v1",
        auth
    });

    service.people.deleteContact({
        resourceName: "people/" + resourceName
    }, (err, res) => {
        if (err) return console.error("The API returned an error: " + err);
        // console.log(res) 
        returnFunc(true) 
    })

    // service.people.connections.list({
    //     resourceName: "people/me",
    //     pageSize: 1000,
    //     personFields: "names,emailAddresses,phoneNumbers,photos",
    //     requestSyncToken: true,
    //     // pageToken: pageToken
    // },
    //     (err, res) => {
    //         if (err) return console.error("The API returned an error: " + err);
    //         console.log(res)
    //     }
    // );
    // // console.log("Before final Return returns")
    // // console.log(returnAns)
    // // console.log(finalReturn)
    // // return returnAns;
}

