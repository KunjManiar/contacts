import Contact from "../../models/contact";

export const FETCH_CONTACTS = 'FETCH_CONTACTS';

export const fetchContacts = () => {
    return async (dispatch, getState) => {
        // console.log(getState())
        // const userId = getState().auth.userId;
        try {

            const response = await fetch("/api/contacts", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            });
            console.log(response);


            const resData = await response.json();
            if (resData === null || resData === undefined || resData.error) {
                throw new Error("No user Found")
            }
            // console.log(resData)
            const contactsArray = []
            for (let contact of resData.contacts) {
                contactsArray.push(new Contact(
                    contact.name,
                    contact.resourceName,
                    !!contact.emails[0] ? contact.emails[0] : '',
                    !!contact.phoneNumbers[0] ? contact.phoneNumbers[0] : '',
                    contact.photoUrl
                ))
            }
            dispatch({
                type: FETCH_CONTACTS,
                contacts: contactsArray.sort((a,b) => {
                    return a.name > b.name ? 1 : -1
                })
            })
        }
        catch (err) {
            throw err;
        }
    }
}