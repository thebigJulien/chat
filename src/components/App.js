import React from 'react';
import '../scss/App.scss';
import Input from '../components/Input';
import MessageRoom from '../components/Message';

class App extends React.Component {

render(){

  return (
    <div className="App">
      <div className="middle">
      <MessageRoom></MessageRoom>
      <Input></Input>
      </div>
    </div>
   );
  }
}

export default App;
