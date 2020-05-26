import React from 'react';

const Input = () => {

    return(
        <header className="input-room">
            <div className="text-input">
            <input className="input" type="text"></input>
            <button>SEND</button>
            </div>

            <div className="characters">
                <button className="you">YOU</button>
                <button className="friend">YOUR FRIEND</button>
            </div>
        </header>
    )
};


export default Input