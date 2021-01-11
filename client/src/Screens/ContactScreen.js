import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react'
import Header from '../components/Header/Header'
// import FlatList from 'flatlist-react';
// import ImageIcon from '../components/UI/ImageIcon';
import ContactCard from '../components/UI/ContactCard';
import { Scrollbars } from 'react-custom-scrollbars';
import Loader from "../components/UI/Loader";

// import Colors from '../constants/Colors'

import * as contactsActions from '../store/actions/contacts'
import * as authActions from '../store/actions/auth'

import { useDispatch, useSelector } from 'react-redux';

import {
    PhoneNumberUtil,
    // using PNF alias to follow along with documentaion
    PhoneNumberFormat as PNF
} from 'google-libphonenumber';
import { useHistory } from 'react-router-dom';

const phoneUtil = PhoneNumberUtil.getInstance();

const getFormatedPhoneNumber = (phoneNumber) => {
    try {
        const number = phoneUtil.parse(phoneNumber, 'IN');

        // console.log(phoneUtil.isPossibleNumber(number));
        const ans = phoneUtil.format(number, PNF.INTERNATIONAL)
        // console.log(ans);
        return ans;
    } catch (err) {
        console.log(phoneNumber)
        // console.log(err)
    }
    return phoneNumber
}

const ContactScreen = props => {
    const history = useHistory()

    const [headerTitle, setHeaderTitle] = useState()

    const user = useSelector(state => state.auth.user)
    const contacts = useSelector(state => state.contacts.contacts)
    // console.log(user[0].daysFromJoining)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false);
    // const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();
    // const [contactCards, setContactCards] = useState([]);

    const loadUser = useCallback(async () => {
        setError(null);
        // setIsRefreshing(true);
        try {
            await dispatch(authActions.fetchUser())
        } catch (err) {
            console.log(err.message)
            setError(err.message);
        }
        // setIsRefreshing(false);
    }, [dispatch, setError]);

    const loadContacts = useCallback(async () => {
        setError(null);
        // setIsRefreshing(true);
        try {
            await dispatch(contactsActions.fetchContacts())
        } catch (err) {
            console.log(err.message)
            setError(err.message);
        }
        // setIsRefreshing(false);
    }, [dispatch, setError]);

    useEffect(() => {
        setIsLoading(true);
        loadUser().then(() => {
            // setIsLoading(false)
            // setAverageHealth(HEALTH)
            // setStatus(true)
            loadContacts().then(() => {
                setIsLoading(false)
                // setAverageHealth(HEALTH)
                // setStatus(true)
            });
        });

        // setIsLoading(false)
    }, [dispatch, loadContacts, loadUser]);

    // useEffect(() => {
    //     // const willFocusSub = props.navigation.addListener('willFocus', () => {
    //         loadContacts();
    //     // })

    //     // return () => { willFocusSub.remove(); }
    // }, [loadContacts]);


    useLayoutEffect(() => {
        if (window.innerWidth > 600) {
            setHeaderTitle(
                <div className="row" style={styles.detailsHeading}>
                    {/* <div className="col l1 m1 s1">
                    </div> */}
                    <div className="col l2 m2 s2">
                        <p style={{ ...styles.textStyleHeading, ...{ textAlign: 'center' } }}>NAME</p>
                    </div>
                    <div className="col l3 m3 s2">
                    </div>
                    <div className="col l2 m2 s2">
                        <p style={styles.textStyleHeading}>EMAIL</p>
                    </div>
                    <div className="col l2 m2 s2">
                    </div>
                    <div className="col l2 m2 s2">
                        <p style={{ ...styles.textStyleHeading }}>PHONE NUMBER</p>
                    </div>
                    <div className="col l1 m1 s1">
                    </div>
                </div>
            )
        } else {
            setHeaderTitle(
                <div className="row" style={styles.detailsHeading}>
                    {/* <div className="col l1 m1 s1">
                    </div> */}
                    <div className="col l2 m2 s2">
                        <p style={{ ...styles.textStyleHeading, ...{ textAlign: 'center' } }}>NAME</p>
                    </div>
                    {/* <div className="col l3 m3 s2">
                    </div>
                    <div className="col l2 m2 s2">
                        <p style={styles.textStyleHeading}>EMAIL</p>
                    </div> */}
                    <div className="col l2 m2 s5">
                    </div>
                    <div className="col l2 m2 s2">
                        <p style={{ ...styles.textStyleHeading }}>PHONE NUMBER</p>
                    </div>
                    <div className="col l1 m1 s1">
                    </div>
                </div>
            )
        }
    }, [])


    if (error) {
        // console.log(error)
        return (
            <div style={{ ...styles.centered, ...{ height: window.innerHeight } }}>
                <div><h4>An error Occurred!</h4></div>
                <div><h5>{error}</h5></div>
                <div><h4></h4></div>
                {/* <div><button onClick={loadContacts} style={styles.button} >Try Again</button></div> */}
                <button class="btn waves-effect waves-light" type="submit" name="action" style={styles.button} onClick={() => history.push('/')}>
                    Try Again
                    <i class="material-icons error-outline"></i>
                </button>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div style={{ ...styles.centered, ...{ height: window.innerHeight } }}>
                {/* <ActivityIndicator size='large' color={Colors.primary} /> */}
                {/* <p>Loading...</p> */}
                <Loader />
            </div>
        );
    }
    console.log(user)
    console.log(contacts)
    if (!user || !contacts) {
        return (
            <div style={{ ...styles.centered, ...{ height: window.innerHeight } }}>
                {/* <p>Loading...</p> */}
                <Loader />
                {/* <ActivityIndicator size='large' color={Colors.primary} /> */}
            </div>
        );
    }


    // ALL CONTACT CARDS DETAILS HERE

    // if(!!user && !!contacts) {

    // }
    // const getContactsCards = () => {
    //     if (!contacts) {
    //         console.log("Inside map contact not")
    //         return <div>Loading...</div>
    //     } else {
    //         console.log("Inside map")
    //         contacts.map(contact => {
    //             <ContactCard
    //                 imgLink={contact.photoUrl}
    //                 name={contact.name}
    //                 email={contact.email}
    //                 phoneNumber={getFormatedPhoneNumber(contact.phoneNumber)}
    //             />
    //         }
    //         )
    //         // console.log(phoneUtil.format(number, PNF.INTERNATIONAL));
    //     }
    // }



    return (
        <div style={styles.mainContainer}>
            {/* <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}> */}
            <Header
                imgLink={user.photo}
                givenName={user.givenName}
                familyName={user.familyName}
                email={user.email}
            />
            <div className="container">
                <div className="row" style={styles.topHeading}>
                    <span style={styles.mainTitle}>Contacts<span style={styles.totalContacts}>({contacts.length})</span></span>
                </div>
                {/* <div className="row" style={styles.detailsHeading}>
                    
                    <div className="col l2 m2 s2">
                        <p style={{ ...styles.textStyleHeading, ...{ textAlign: 'center' } }}>NAME</p>
                    </div>
                    <div className="col l3 m3 s2">
                    </div>
                    <div className="col l2 m2 s2">
                        <p style={styles.textStyleHeading}>EMAIL</p>
                    </div>
                    <div className="col l2 m2 s2">
                    </div>
                    <div className="col l2 m2 s2">
                        <p style={{ ...styles.textStyleHeading }}>PHONE NUMBER</p>
                    </div>
                    <div className="col l1 m1 s1">
                    </div>
                </div> */}
                {headerTitle}
            </div>
            {/* </div> */}
            <div className="container">
                <Scrollbars style={{ height: window.innerHeight - 225 }}>
                    {contacts.map((contact, index) => (
                        <ContactCard
                            imgLink={`${contact.photoUrl}&access_token=${user.accessToken}`}
                            name={contact.name}
                            email={contact.email}
                            phoneNumber={getFormatedPhoneNumber(contact.phoneNumber)}
                            key={index}

                        />)
                    )}
                    {/* {getContactCards} */}
                    {/* <ContactCard
                    imgLink="https://www.w3schools.com/howto/img_avatar.png"
                    name="Adrian Simpson"
                    email="simpsonadrian@bee.com"
                    phoneNumber="986-632-6262"
                />
                <ContactCard
                    imgLink="https://www.w3schools.com/howto/img_avatar.png"
                    name="Amelia Carpenter"
                    email="amelia.carp@soandso.com"
                    phoneNumber="181-542-1902"
                />
                <ContactCard
                    imgLink="https://www.w3schools.com/howto/img_avatar.png"
                    name="Amelia Carpenter"
                    email="amelia.carp@soandso.com"
                    phoneNumber="181-542-1902"
                />
                <ContactCard
                    imgLink="https://www.w3schools.com/howto/img_avatar.png"
                    name="Amelia Carpenter"
                    email="amelia.carp@soandso.com"
                    phoneNumber="181-542-1902"
                />
                <ContactCard
                    imgLink="https://www.w3schools.com/howto/img_avatar.png"
                    name="Amelia Carpenter"
                    email="amelia.carp@soandso.com"
                    phoneNumber="181-542-1902"
                />
                <ContactCard
                    imgLink="https://www.w3schools.com/howto/img_avatar.png"
                    name="Amelia Carpenter"
                    email="amelia.carp@soandso.com"
                    phoneNumber="181-542-1902"
                />
                <ContactCard
                    imgLink="https://www.w3schools.com/howto/img_avatar.png"
                    name="Amelia Carpenter"
                    email="amelia.carp@soandso.com"
                    phoneNumber="181-542-1902"
                />
                <ContactCard
                    imgLink="https://www.w3schools.com/howto/img_avatar.png"
                    name="Amelia Carpenter"
                    email="amelia.carp@soandso.com"
                    phoneNumber="181-542-1902"
                /> */}
                </Scrollbars>
            </div>
            {/* <div className="container">
                <iframe src="/contactList" width={window.innerWidth*0.7} height={window.innerHeight - 225} frameBorder="0"/>
            </div> */}

        </div>
    )
}

const styles = {
    centered: {
        backgroundColor: '#E5E5E5',
        // position: 'fixed',
        // top: 50,  
        // margin: 'auto',
        // width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
        // height: 200,
        // border: '3px solid green',
    },
    button: {
        background: '#0F4EAC',
        color: '#FFFFFF'
    },
    mainContainer: {
        backgroundColor: '#E5E5E5',
        height: '100%'
    },
    stickHeader: {
        position: 'fixed',
        top: 0,
        // width: '100%'
    },
    topHeading: {
        marginTop: 32
    },
    mainTitle: {
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: 26,
        lineHeight: '39px',
        letterSpacing: '0.06em',
        color: '#053ED1'
    },
    totalContacts: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '24px',
        color: '#053ED1',
        marginLeft: 10,
    },
    detailsHeading: {
        marginBottom: 5
    },
    textStyleHeading: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: 12,
        lineHeight: '18px',
        color: '#B0C6FF',
    },
    card: {
        background: '#FFFFFF',
        boxShadow: '0px 2px 6px rgba(5, 62, 209, 0.14)',
        borderRadius: '8px',
    },
    image: {
        marginTop: 12,
        marginBottom: 12
    },
    textName: {
        margin: 0,
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '21px',
        color: '#000000',
        marginTop: 21
    },
    textEmail: {
        margin: 0,
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '18px',
        color: '#000000',
        marginTop: 21
    }
}

export default ContactScreen