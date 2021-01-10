// import React, { useState, useEffect, useReducer, useCallback, useRef } from 'react';
import React, { useState, useEffect, useReducer, useCallback } from 'react';
// import axios from 'axios';

//REDUX
import { useDispatch } from 'react-redux';
// import * as authActions from '../store/actions/auth';

//COMPONENTS
import Input from '../components/UI/Input';
// import Card from '../hoc/Card';

//CONSTANTS
// import Colors from '../constants/Colors';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const LoginScreen = props => {

    // const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    // const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });


    useEffect(() => {
        if (error) {
            // Alert.alert('An Error Occurred!', error, [
            //     { text: 'Okay' }
            // ])
            alert("An Error Occureed");
        }
        setError(null)

    }, [error]);

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            });
        },
        [dispatchFormState]
    );



    return (
        <div className="container" style={styles.screen}>
            <div style={styles.gradient}>
                {/* <Card style={styles.authContainer}> */}
                <div className="card-content">
                    <span className="card-title">Enter credentials</span>
                    <div className="row">
                        <div className="col l3"></div>
                        <div className="col l6">
                            <Input
                                id="email"
                                label="Email"
                                required
                                type="email"
                                placeholder="Enter your email"
                                errorText="Please enter a valid Email."
                                onInputChange={inputChangeHandler}
                            />
                        </div>
                    </div>
                    <Input
                        id="password"
                        label="Password"
                        required
                        type="password"
                        placeholder="Enter your password"
                        errorText="Please enter a valid password."
                        onInputChange={inputChangeHandler}
                    />
                    {/* <button /> */}
                    {/* <div className="col s12 m6 offset-m3 center-align"
                     onClick={googleLoginHandler}>
                        <a className="oauth-container btn darken-4 white black-text" href="/auth/google" style={{ textTransform: 'none' }}>
                            <div className="left">
                                <img width="20px" style={{ marginTop: '7px', marginRight: '8px' }} alt="Google sign-in"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                            </div>
                            <p>Login with Google</p>
                        </a>
                    </div> */}
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
    gradient: {
        // display: 'flex',
        // flex: 'auto',
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        height: '100%'
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        // maxHeight: 400,
        padding: 20
    },
    buttonContainer: {
        marginTop: 10
    }
};

export default LoginScreen;