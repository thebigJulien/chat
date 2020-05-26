import React from 'react';
import Face from '../assets/face.png';

const FriendMessages = () => {

    return(
        <div className="friend-messages">
            <img src={Face} alt="face"></img>
            <p>fuck off!</p>
            <time>9.99pm</time>
        </div>
    )
};

export default FriendMessages