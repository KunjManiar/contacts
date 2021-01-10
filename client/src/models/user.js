// import moment from 'moment'

class User {
    constructor(_id, email, accessToken, givenName, familyName, photo, refreshToken, syncToken, syncTokenDate) {
        this._id = _id;
        this.email = email;
        this.accessToken = accessToken;
        this.givenName = givenName;
        this.familyName = familyName;
        this.photo = photo;
        this.refreshToken = refreshToken;
        this.syncToken = syncToken;
        this.syncTokenDate = syncTokenDate;
    }
}

export default User;