const { google } = require('googleapis');
// var contacts = google.people('v1');
const Contact = require('../models/contact');

let finalReturn;

module.exports.listConnectionNames = (auth, userEmail, returnFunction) => {
    console.log(auth)
    const service = google.people({
        version: "v1",
        auth
    });
    service.people.connections.list({
        resourceName: "people/me",
        pageSize: 1000,
        personFields: "names,emailAddresses,phoneNumbers,photos",
        requestSyncToken: true,
        // pageToken: pageToken
    },
        (err, res) => {
            if (err) return console.error("The API returned an error: " + err);
            const connections = res.data.connections;
            if (connections) {
                let arrContacts = []
                console.log("Connections:");
                connections.forEach(person => {
                    // console.log(person)
                    // if (person.names && person.names.length > 0) {
                    //     console.log(person.names[0].displayName);
                    // } else {
                    //     console.log("No display name found for connection.");
                    // }
                    const emailArray = []
                    if (person.emailAddresses && person.emailAddresses.length > 0) {
                        person.emailAddresses.forEach(email => {
                            emailArray.push(email.value)
                        })
                    }
                    const phoneNumberArray = []
                    if (person.phoneNumbers && person.phoneNumbers.length > 0) {
                        person.phoneNumbers.forEach(phone => {
                            phoneNumberArray.push(phone.canonicalForm)
                        })
                    }
                    let name = ''
                    if(person.names && person.names.length>0)
                        name = person.names[0].displayName                        
                    arrContacts.push(new Contact({
                        name: name,
                        resourceName: person.resourceName,
                        emails: emailArray,
                        phoneNumbers: phoneNumberArray,
                        userEmail: userEmail,
                        photoUrl: person.photos[0].url
                    }))
                });

                nextFunction(arrContacts, service, res.data.nextPageToken, res.data.nextSyncToken, userEmail, (inpAns) => {
                    console.log("In main Callback Function")
                    console.log(inpAns.length)
                    returnFunction(inpAns)
                })
                // finalReturn = nextFunction(arrContacts, service, res.data.nextPageToken, res.data.nextSyncToken, userEmail)
               
                
            } else {
                console.log("No connections found.");
            }
        }
    );
    // console.log("Before final Return returns")
    // console.log(returnAns)
    // console.log(finalReturn)
    // return returnAns;
}


const nextFunction = (arrContacts, service, pageToken, syncToken, userEmail, returnFunc) => {
    // while(!!pageToken) {
    console.log("In next Function " + pageToken)
    if (!!pageToken) {
        service.people.connections.list({
            resourceName: "people/me",
            pageSize: 1000,
            personFields: "names,emailAddresses,phoneNumbers,photos",
            requestSyncToken: true,
            pageToken: pageToken
        },
            (err, res) => {
                if (err) return console.error("The API returned an error: " + err);
                const connections = res.data.connections;
                let counter = 0;
                if (connections) {
                    console.log("Connections:");
                    connections.forEach(person => {
                        // console.log(person.names[0].displayName)

                        if (person.names && person.names.length > 0) {
                            // console.log(person.names[0].displayName);
                            // arrayNames.push(person.names[0].displayName)
                            // if (person.names[0].displayName.toLowerCase() === 'dad' || person.names[0].displayName.toLowerCase() === 'mummy' || person.names[0].displayName.toLowerCase() === 'ma') {
                            //     arrayKnown.push(person)
                            // }
                            
                            const emailArray = []
                            if (person.emailAddresses && person.emailAddresses.length > 0) {
                                person.emailAddresses.forEach(email => {
                                    emailArray.push(email.value)
                                })
                            }
                            const phoneNumberArray = []
                            if (person.phoneNumbers && person.phoneNumbers.length > 0) {
                                person.phoneNumbers.forEach(phone => {
                                    phoneNumberArray.push(phone.canonicalForm)
                                })
                            }
                            let name
                            if(person.names && person.names.length>0)
                                name = person.names[0].displayName      
                            arrContacts.push(new Contact({
                                name: name,
                                emails: emailArray,
                                phoneNumbers: phoneNumberArray,
                                userEmail: userEmail,
                                photoUrl: person.photos[0].url
                            }))
                            // if(counter<5){
                            //     console.log(person)
                            //     counter++;
                            // }

                        } else {
                            console.log("No display name found for connection.");
                        }
                    });
                } else {
                    console.log("No connections found.");
                }
                // syncToken = res.data.nextSyncToken
                // pageToken = res.data.nextPageToken
                // totalItems = res.data.totalItems
                // console.log(syncToken, pageToken, totalItems)
                
                nextFunction(arrContacts, service, res.data.nextPageToken, res.data.nextSyncToken, userEmail, (inpAns)=> {    
                    console.log("In next callback inside the next Function")
                    console.log(inpAns.length)
                    returnFunc(inpAns)
                })
            }
        );

    } else {
        console.log("final")
        console.log(syncToken)
        // Contact.insertMany(arrContacts).then(() => {
        //     console.log("Data inserted")
        // }).catch((err) => {
        //     console.log(err)
        // })
        // console.log(arrContacts)
        returnFunc(arrContacts);
        // console.log("final")
        // console.log("final")
        // console.log("/*******************/")
        // // syncToken = res.data.nextSyncToken
        // // pageToken = res.data.nextPageToken
        // // totalItems = res.data.totalItems
        // console.log(arrayNames.length)
        // console.log(syncToken, pageToken, totalItems)
        // console.log("/*******************/")
    }
}