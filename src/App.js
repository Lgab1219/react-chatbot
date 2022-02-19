import './App.css';
import React, {useState} from 'react';

function App() {

  const [Str, addStr] = useState('');
  const [messages, addMessage] = useState([]);
  const [botMessages, setbotMessage] = useState([]);
  

  const sendInput = (e) => {
      addStr(e.target.value);
  }

  const submitButton = () => {
    
    const details = {
      id: Math.floor(Math.random() *10000),
      string: Str,
    }
 
    //Adds an ID to every message on the array
    addStr(details);

    //Add messages from the string to the messages state array
    addMessage([...messages, Str]);

    //Add messages from the string to the botMessages state array
    setbotMessage([...botMessages, Str]);
 
  }

  return (
    <> 
    <div className="App">
      {
        messages.map((message) => (
          <div className='message-tile'>
            {/* Thanks to React.Fragment, it is posssible to add two
            different elements inside a single div
            - https://egghead.io/lessons/react-render-two-elements-side-by-side-with-react-fragments -*/}
            <React.Fragment>
              <h1 id='username'>Me</h1>
              <p key={message.id} className='message-text'>{message}</p>
              <h1 id='botname'>Bot</h1>
              <p key={message.id} className='bot-message-text'>{message}</p>
            </React.Fragment>
          </div>
        ))
      }
      <input type={'text'} className="input-bar" onChange={sendInput}></input>
      <button className='submit' onClick={submitButton}></button>
    </div>
    </>
  );
}

export default App;
