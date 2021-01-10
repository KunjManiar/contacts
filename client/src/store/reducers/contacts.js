// import User from '../../models/user'
import { FETCH_CONTACTS } from '../actions/contacts'
import { LOGOUT } from '../actions/auth';

const initialState = {
    // pendingUsers: [],
    // confirmedUsers: [],
    contacts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS:
            return {
                ...state,
                contacts: action.contacts
            }
        case LOGOUT:
            return initialState;
        default:
            return state
    }
}