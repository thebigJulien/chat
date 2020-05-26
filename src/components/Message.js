import React from 'react';
import MyMessages from './myMessage';
import FriendMessages from './FriendMessage';

const MessageRoom = () => {
   

        return(
        <div className="message-room">
            <MyMessages></MyMessages>
            <FriendMessages></FriendMessages>
        </div>
        );
};


export default MessageRoom