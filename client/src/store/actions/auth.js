import User from "../../models/user";

export const FETCH_USER = 'FETCH_USER';


export const LOGOUT = 'LOGOUT';


export const fetchUser = () => {
    return async (dispatch, getState) => {
        // console.log(getState())
        // const userId = getState().auth.userId;
        try {

            const response = await fetch("/api/user", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            });
            // console.log(response)

            const resData = await response.json();
            if (resData === null || resData === undefined || resData.error) {
                throw new Error("No user Found")
            }

            // console.log(resData)

            const user = new User(
                resData.user._id,
                resData.user.email,
                resData.user.accessToken,
                resData.user.givenName,
                resData.user.familyName,
                resData.user.photo,
                resData.user.refreshToken,
                resData.user.syncToken,
                resData.user.syncTokenDate
            )

            dispatch({
                type: FETCH_USER,
                user: user
            })
        }
        catch (err) {
            throw err;
        }
    }
}

export const logout = () => {
    return async (dispatch, getState) => {
        // console.log(getState())
        // const userId = getState().auth.userId;

        try {
            const response = await fetch("/api/logout", {
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

            dispatch({
                type: LOGOUT
            })
        } catch (err) {
            throw err
        }
    }
}
