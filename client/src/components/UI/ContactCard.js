import React, { useState, useLayoutEffect } from 'react';

import ImageIcon from './ImageIcon';

const ContactCard = props => {

    const [namePhoto, setNamePhoto] = useState()
    const [email, setEmail] = useState()
    const [email2, setEmail2] = useState()
    const [phone, setPhone] = useState()
    const [phone2, setPhone2] = useState()
    const [phone3, setPhone3] = useState()

    useLayoutEffect(() => {
        if (window.innerWidth > 600) {
            setNamePhoto(
                <div className="col l4 m4 s4">
                    <div className="row" style={{ marginBottom: 0 }}>
                        <div className="col l2 m1 s1"></div>
                        <div className="col l2 m3 s3" style={styles.image}>
                            <ImageIcon
                                width={40}
                                imgLink={props.imgLink}
                                borderColor="#FFFFFF"
                                borderWidth={1}
                            />
                        </div>
                        <div className="col l8 m7 s8" style={styles.name}>
                            <p style={{ ...styles.textName }}>{props.name}</p>
                        </div>
                    </div>
                </div>
            )
            setEmail(
                <div className="col l1 m1 s1">
                </div>
            )
            setEmail2(
                <div className="col l2 m3 s3">
                    <p style={styles.textEmail}>{props.email}</p>
                </div>
            )
            setPhone(
                <div className="col l2 m1 s1">
                </div>
            )
            setPhone2(
                <div className="col l2 m2 s2" style={styles.phoneContainer}>
                    <p style={styles.textName}>{props.phoneNumber}</p>
                </div>
            )
            setPhone3(
                <div className="col l1">
                </div>
            )

        } else {
            setNamePhoto(
                <div className="col l4 m4 s7" style={{ height: 90 }}>
                    {/* <div className="row" style={{ marginBottom: 0 }}>
                        <div className="col l2 m1 s1"></div>
                        <div className="col l2 m3 s3" style={styles.image}>
                        <ImageIcon
                            width={40}
                            imgLink={props.imgLink}
                            borderColor="#FFFFFF"
                            borderWidth={1}
                        />
                    </div>
                        <div className="col l8 m7 s12" style={{textAlign: 'center'}}>
                            <p style={{ ...styles.textName }}>{props.name}</p>
                        </div>
                    </div> */}
                    <p style={{ ...styles.textNameSmall, ...{ display: 'table-cell', height: 90, verticalAlign: 'middle' } }}>{props.name}</p>
                    {/* <p>{props.name}</p> */}
                </div>
            )
            // setEmail2(
            //     <div className="col l2 m3 s4">
            //         <p style={styles.textEmail}>{props.email}</p>
            //     </div>
            // )
            setPhone2(
                <div className="col l2 m2 s5">
                    <p style={styles.textName}>{props.phoneNumber}</p>
                </div>
            )

        }
    }, [props.imgLink, props.name, props.email, props.phoneNumber])

    return (
        <div className="row" style={styles.card}>
            {/* <div className="col l1">
            </div> */}
            {/* <div className="col l4 m4 s4">
                <div className="row" style={{ marginBottom: 0 }}>
                    <div className="col l2 m1 s1"></div>
                    <div className="col l2 m3 s3" style={styles.image}>
                        <ImageIcon
                            width={40}
                            imgLink={props.imgLink}
                            borderColor="#FFFFFF"
                            borderWidth={1}
                        />
                    </div>
                    <div className="col l8 m7 s8" style={styles.name}>
                        <p style={{ ...styles.textName }}>{props.name}</p>
                    </div>
                </div>
            </div> */}
            {namePhoto}
            {/* <div className="col l1 m2 s1">
            </div> */}
            {email}
            {email2}
            {/* <div className="col l2 m3 s3">
                <p style={styles.textEmail}>{props.email}</p>
            </div> */}
            {phone}
            {phone2}
            {phone3}
            {/* <div className="col l2 m1 s1">
            </div> */}
            {/* <div className="col l2 m2 s2" style={styles.phoneContainer}>
                <p style={styles.textName}>{props.phoneNumber}</p>
            </div> */}
            {/* <div className="col l1">
            </div> */}
        </div>
    )
}

const styles = {
    card: {
        background: '#FFFFFF',
        boxShadow: '0px 2px 6px rgba(5, 62, 209, 0.14)',
        borderRadius: '8px',
        width: '97%'
    },
    image: {
        marginTop: 12,
        marginBottom: 12,
        paddingRight: 2,
        paddingLeft: 0,
    },
    name: {
        paddingLeft: 0,
        paddingRight: 0
    },
    textName: {
        margin: 0,
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '21px',
        color: '#000000',
        marginTop: 21,
        marginLeft: 2
    },
    textEmail: {
        margin: 0,
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '18px',
        color: '#000000',
        marginTop: 21
    },
    phoneContainer: {
        marginLeft: 10
    },
    textNameSmall: {
        margin: 0,
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '21px',
        color: '#000000',
        // marginTop: 21,
        marginLeft: 2
    },
}

export default ContactCard;