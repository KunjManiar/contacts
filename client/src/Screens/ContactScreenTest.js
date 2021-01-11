import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react'
import Header from '../components/Header/Header'
// import FlatList from 'flatlist-react';
// import ImageIcon from '../components/UI/ImageIcon';
import ContactCard from '../components/UI/ContactCard';
import { Scrollbars } from 'react-custom-scrollbars';
// import Loader from "../components/UI/Loader";

// import Colors from '../constants/Colors'

// import * as contactsActions from '../store/actions/contacts'
// import * as authActions from '../store/actions/auth'

// import { useDispatch, useSelector } from 'react-redux';

// import {
//     PhoneNumberUtil,
//     // using PNF alias to follow along with documentaion
//     PhoneNumberFormat as PNF
// } from 'google-libphonenumber';
// import { useHistory } from 'react-router-dom';

// const phoneUtil = PhoneNumberUtil.getInstance();

const ContactScreen = (props) => {

    return (
        <div style={styles.mainContainer}>
            {/* <img src="/images/Ellipse 51.svg" alt="ellipse" style={{ position: 'fixed', top: (window.innerHeight*0.827), left: (window.innerWidth*0.0082) }} /> */}
            <div style={{ position: 'fixed' }}>
                <img src="/images/Ellipse 49.svg" alt="ellipse" style={{position: 'fixed', zIndex: -1, opacity: '60%', left: 0}} />
                <img src="/images/Ellipse 50.svg" alt="ellipse" style={{position: 'fixed', zIndex: -1, opacity: '60%', right: 0}}/>
            </div>
            {/* <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}> */}
            <Header
                imgLink={"https://www.w3schools.com/howto/img_avatar.png"}
                givenName={"Kunj"}
                familyName={"Maniar"}
                email={"kunjmaniar1999@gmail.com"}
            />
            <div className="container">
                <div className="row" style={styles.topHeading}>
                    <span style={styles.mainTitle}>Contacts<span style={styles.totalContacts}>({140})</span></span>
                </div>
                <div className="row" style={styles.detailsHeading}>
                    
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
            </div>
            {/* </div> */}
            <div className="container">
                <Scrollbars style={{ height: window.innerHeight - 225 }}>

                    <ContactCard
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
                    />
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