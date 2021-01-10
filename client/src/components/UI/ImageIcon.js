import React from 'react'

const ImageIcon = props => {
    return (
        // <div>
            <img 
                width={props.width} 
                src={props.imgLink} 
                style={{ ...styles.image, ...{ borderColor: props.borderColor, borderWidth: props.borderWidth, }}} 
                alt="Icon"
            />
        // </div>
    )
}

const styles = {
    image: {
        borderRadius: '50%',
        borderWidth: 1,
        borderStyle: 'solid'
    }
}

export default ImageIcon;