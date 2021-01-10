// import React, { useState, useEffect, useReducer, useCallback, useRef } from 'react';
import React, { useState, useEffect } from 'react';
// import React from 'react';
// import axios from 'axios';

//REDUX
// import { useDispatch } from 'react-redux';
// import * as authActions from '../store/actions/auth';

//COMPONENTS
// import Input from '../components/UI/Input';
// import Card from '../hoc/Card';

//CONSTANTS
// import Colors from '../constants/Colors';/

// const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

// const formReducer = (state, action) => {
//     if (action.type === FORM_INPUT_UPDATE) {
//         const updatedValues = {
//             ...state.inputValues,
//             [action.input]: action.value
//         };
//         const updatedValidities = {
//             ...state.inputValidities,
//             [action.input]: action.isValid
//         };
//         let updatedFormIsValid = true;
//         for (const key in updatedValidities) {
//             updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
//         }
//         return {
//             formIsValid: updatedFormIsValid,
//             inputValidities: updatedValidities,
//             inputValues: updatedValues
//         };
//     }
//     return state;
// };

const LoginScreen = props => {

    // const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    // const dispatch = useDispatch();

    // const [formState, dispatchFormState] = useReducer(formReducer, {
    //     inputValues: {
    //         email: '',
    //         password: ''
    //     },
    //     inputValidities: {
    //         email: false,
    //         password: false
    //     },
    //     formIsValid: false
    // });

    // const [formState, setFormState] = useState({
    //     inputValues: {
    //         email: '',
    //         password: ''
    //     },
    //     inputValidities: {
    //         email: false,
    //         password: false
    //     },
    //     formIsValid: false
    // })

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        if (error) {
            // Alert.alert('An Error Occurred!', error, [
            //     { text: 'Okay' }
            // ])
            alert("An Error Occureed");
        }
        setError(null)

    }, [error]);


    // const inputChangeHandler = useCallback(
    //     (inputIdentifier, inputValue, inputValidity) => {
    //         dispatchFormState({
    //             type: FORM_INPUT_UPDATE,
    //             value: inputValue,
    //             isValid: inputValidity,
    //             input: inputIdentifier
    //         });
    //     },
    //     [dispatchFormState]
    // );

    // const googleLoginHandler = async () => {
    //     try {
    //         const { data } = await axios.get('/auth/google', {
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*",
    //             }
    //         })
    //         // const {data} = await axios.get('/auth/google')
    //         console.log(data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        < div className="valign-wrapper row login-box" style={{ height: '100%', background: '#E5E5E5', margin: 0 }}>
            <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4" style={styles.card}>
                {/* <Card style={styles.authContainer}> */}
                <div className="card-content">
                    <div className="center">
                        <img width="30px" style={{ marginTop: '7px', marginRight: '8px' }} alt="Google sign-in"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                    </div>
                    <div className="center">
                        <span className="card-title" style={styles.title}>Sign in with Google</span>
                    </div>
                    <div className="row" style={{ paddingBottom: 0 }}>
                        <div className="input-field col s12">
                            {/* <label for="email">Email address</label> */}
                            <input style={styles.input} type="email" className="validate" name="email" id="email" placeholder="Email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-field col s12">
                            {/* <label for="password">Password </label> */}
                            <input style={styles.input} type="password" className="validate" name="password" id="password" placeholder="Password" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* </div> */}
                    <div className=" left-align" style={styles.cardAction}>
                        {/* <input type="reset" id="reset" className="btn-flat grey-text waves-effect" /> */}
                        {/* <input type="submit" className="btn green waves-effect waves-light" value="Login" /> */}

                        <button style={styles.button} type="submit" className="waves-light waves-effect">Sign In</button>
                        <div className="center-align" style={styles.signInWithGoogle} >
                            {/* onClick={googleLoginHandler}> */}
                            <a className="oauth-container btn darken-4 white black-text" href="/auth/google" style={styles.link}>
                                <div className="left">
                                    <img width="20px" style={{ marginTop: '8px', marginRight: '8px' }} alt="Google sign-in"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                </div>
                                <p style={{fontSize: 18, textAlign: 'center', fontWeight: 500}}>Login with Google</p>
                            </a>
                        </div>

                    </div>

                </div>
                {/* </Card> */}
            </div>
        </div>
    )

}

const styles = {
    screen: {
        // display: 'flex',
        // flex: 'auto',
        // flex: 1
    },
    card: {
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: 10
    },
    gradient: {
        // display: 'flex',
        // flex: 'auto',
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        height: '100%'
    },
    title: {
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: 20,
        color: '#222222',
        letterSpacing: '0.06em'
    },
    input: {
        // borderR: 1px solid #0A45C2
        border: '1px solid #0A45C2',
        borderRadius: '4px',
        paddingLeft: '20px',
        width: '93%'
        // paddingRight: '20px',
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        // maxHeight: 400,
        padding: 20
    },
    button: {
        width: '98%',
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: '0.06em',
        background: '#0A45C2',
        border: 0,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 4
    },
    buttonContainer: {
        marginTop: 10
    },
    link: {
        textTransform: 'none',
        width: 226
    },
    cardAction: {
        // paddingTop: 16,
        paddingBottom: 16
    },
    signInWithGoogle: {
        marginTop: 25,
        // marginBottom: 15,
    }
};

export default LoginScreen;