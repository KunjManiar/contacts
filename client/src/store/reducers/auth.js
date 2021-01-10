// import User from '../../models/user'
import { FETCH_USER, LOGOUT } from '../actions/auth';

const initialState = {
    // pendingUsers: [],
    // confirmedUsers: [],
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                user: action.user
            }
        case LOGOUT:
            return initialState;
        default:
            return state
    }
}