import React from 'react';
import Face from '../assets/face.png';

const MyMessages = () => {

    return(
        <div className="my-messages">
            <img src={Face} alt="face"></img>
            <p>You look hot!</p>
            <time>6.66pm</time>
        </div>
    )
};

export default MyMessages