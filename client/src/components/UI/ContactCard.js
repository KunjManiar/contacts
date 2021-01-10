import React from 'react';

import ImageIcon from './ImageIcon';

const ContactCard = props => {
    return (
        <div className="row" style={styles.card}>
            {/* <div className="col l1">
            </div> */}
            <div className="col l4 m3 s3">
                <div className="row" style={{ marginBottom: 0 }}>
                    <div className="col l2 m2 s2"></div>
                    <div className="col l2 m2 s4" style={styles.image}>
                        <ImageIcon
                            width={40}
                            imgLink={props.imgLink}
                            borderColor="#FFFFFF"
                            borderWidth={1}
                        />
                    </div>
                    <div className="col l8 m8 s6" style={styles.name}>
                        <p style={{ ...styles.textName }}>{props.name}</p>
                    </div>
                </div>
            </div>
            <div className="col l1 m2 s2">
            </div>
            <div className="col l2 m3 s1">
                <p style={styles.textEmail}>{props.email}</p>
            </div>
            <div className="col l2 m1 s4">
            </div>
            <div className="col l2 m2 s2" style={styles.phoneContainer}>
                <p style={styles.textName}>{props.phoneNumber}</p>
            </div>
            <div className="col l1">
            </div>
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
    },
    phoneContainer: {
        marginLeft: 10
    }
}

export default ContactCard;