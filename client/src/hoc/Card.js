import React from 'react';

const Card = props => {
    return(
        <div style={{...styles.card, ...props.style}}>
            {props.children}
        </div>
    )
};

const styles = {
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    }
};

export default Card;