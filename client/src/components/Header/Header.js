import React from 'react';
import  { useHistory } from 'react-router-dom'

import ImageIcon from '../UI/ImageIcon'


import * as authActions from '../../store/actions/auth'

import { useDispatch } from 'react-redux';

const Header = props => {
    
    const dispatch = useDispatch()
    const history = useHistory();
    return (
        <div className="row" style={{ ...styles.headerContainer }}>
            <div className="col s4 m3 l5" >
                <div className="row" style={{ marginBottom: 0 }}>
                    <div className="col l1 m4 s3" style={styles.image}>
                        <ImageIcon
                            width={54}
                            imgLink={props.imgLink}
                            borderColor="#FFFFFF"
                            borderWidth={2}
                        />
                    </div>
                    <div className="col l10 m7 s8">
                        <p style={styles.name}>{props.givenName} {props.familyName}</p>
                        <p style={styles.email}>{props.email}</p>
                    </div>
                </div>
            </div>
            {/* <div className="col s4 m4 l3">
            </div> */}
            <div className="col s7 m8 l6">
            </div>
            <div className="col s1 m1 l1">
                {/* <svg
                    width="38px"
                    height="38px"
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                >
                    <path  viewBox="0 0 38 38" d="M2.598 9h-1.055c1.482-4.638 5.83-8 10.957-8 6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7 5.795 0 10.5-4.705 10.5-10.5s-4.705-10.5-10.5-10.5c-4.568 0-8.459 2.923-9.902 7zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737 4.608-3.763h-14.828v-1h14.826z" />
                </svg> */}
                {/* <img style={styles.logout} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5OCA5aC0xLjA1NWMxLjQ4Mi00LjYzOCA1LjgzLTggMTAuOTU3LTggNi4zNDcgMCAxMS41IDUuMTUzIDExLjUgMTEuNXMtNS4xNTMgMTEuNS0xMS41IDExLjVjLTUuMTI3IDAtOS40NzUtMy4zNjItMTAuOTU3LThoMS4wNTVjMS40NDMgNC4wNzYgNS4zMzQgNyA5LjkwMiA3IDUuNzk1IDAgMTAuNS00LjcwNSAxMC41LTEwLjVzLTQuNzA1LTEwLjUtMTAuNS0xMC41Yy00LjU2OCAwLTguNDU5IDIuOTIzLTkuOTAyIDd6bTEyLjIyOCAzbC00LjYwNC0zLjc0Ny42NjYtLjc1MyA2LjExMiA1LTYuMTAxIDUtLjY3OS0uNzM3IDQuNjA4LTMuNzYzaC0xNC44Mjh2LTFoMTQuODI2eiIvPjwvc3ZnPg=="></img> */}
                <div 
                    onClick={async() => {
                    await dispatch(authActions.logout())
                    history.push('/')
                }}>
                    <i className="fas fa-sign-out-alt" style={styles.logout}></i>
                </div>
            </div>
        </div>
    )
}

const styles = {
    headerContainer: {
        paddingLeft: 62,
        paddingRight: 62,
        marginBottom: 0,
        // paddingTop: 12,
        // paddingBottom: 12,
        backgroundImage: 'linear-gradient(#053ED1, #0F4EAC)',
    },
    image: {
        paddingTop: 12,
        paddingLeft: 0,
        paddingRight: 0,
        marginRight: 8
    },
    name: {
        fontFamily: 'Poppins',
        fontSize: 18,
        lineHeight: '27px',
        color: '#FFFFFF',
        letterSpacing: '0.06em',
        marginTop: 16,
        marginBottom: 1,
    },
    email: {
        fontFamily: 'Poppins',
        fontSize: 12,
        lineHeight: '18px',
        color: '#FFFFFF',
        letterSpacing: '0.06em',
        marginTop: 1,
        marginBottom: 15,
    },
    logout: {
        fontSize: 24,
        marginTop: 23,
        color: '#FFFFFF'
    }
}

export default Header