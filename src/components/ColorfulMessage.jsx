import React from 'react';

const colorfulMessage = (props) => {
    const {color,children} = props;
    const contentStyle = {
        color,
        fontSize: '40px'
    }
    return(
        <p style={contentStyle}>{children}</p>
    );
}

export default colorfulMessage;