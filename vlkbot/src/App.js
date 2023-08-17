import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const userMessage = { text: inputValue, sender: 'user' };
      const botMessage = { text: "Ian, I don't know if we should be talking. It's kind of strange the way that it ended but I'm glad things happened the way they did.", sender: 'bot' };
      const newMessages = [...messages, userMessage, botMessage];
      setMessages(newMessages);
      setInputValue('');
      console.log(newMessages); // Check the messages array
    }
  };

  return (
    <div className="App">
      <h1>Vlkbot</h1>
      <div className="messages-container">
        {messages.map((message, index) => {
          console.log(message.text); // Check the text property
          return (
            <div
              key={index}
              className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}
            >
              {message.text}
            </div>
          );
        })}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;