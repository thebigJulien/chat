import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <header className="input-room">
                <form className="text-input">
                <input className="input" type="text"></input>
                <button>SEND</button>
                </form>
    
                <div className="characters">
                    <button className="you">YOU</button>
                    <button className="friend">YOUR FRIEND</button>
                </div>
            </header>
        )
    } 
};


export default Input