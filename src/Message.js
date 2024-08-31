import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

const Message = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const [isEmail, setIsEmail] = useState(false);
  const [isValue, setIsValue] = useState('');

  const [isText, setIsText] = useState(false);
  const [isTextValue, setIsTextValue] = useState('');

  const handleTextArea = () => setIsText(true);
  const handleTextAreaBlur = () => {
    if(isTextValue === ''){
        setIsText(false)
    }
  }

  const handleEmail = () => setIsEmail (true);
  const handleBlurEmail = () => {
    if(isValue === ''){
        setIsEmail(false)
    }
  }

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };
  const handleChange = (event) => setValue(event.target.value);

  const handleChangeEmail = (event) => setIsValue(event.target.value);

  const handleChangeTextArea = (event) => setIsTextValue(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: value,          
      to_name: "Christian Betonio", 
      from_email: isValue,         
      message: isTextValue,        
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID               
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      console.log("Hello")
      alert('Your message has been successfully sent!');
    }).catch((error) => {
      console.log('FAILED...', error);
      alert('There was an error sending your message. Please try again later.');
      console.log("Hi")
    });
  };
  
  
  return (
    <div className="message-container">
      <h3 className="text-message">Contact Form</h3>
      <div className='input-containers'>
      <div
        className={`message-input ${isFocused || value ? 'focused' : ''}`}
      >
        <input 
          className="input-name"
          type="text"
          id="name"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <label htmlFor="name" className="input-text-name">Full Name</label>
      </div>
      
      <div className={`message-input-email ${isEmail || isValue ? 'email' : ''}`}>
      <input 
        className="input-email"
        type="email"
        id="isEmail"
        value={isValue}
        onFocus={handleEmail}
        onBlur={handleBlurEmail}
        onChange={handleChangeEmail}
      />
      <label htmlFor="isEmail" className="input-text-email">Email</label>
      </div>
      </div>
      
      <div className={`text-area-one ${isText || isTextValue ? 'textarea' : ''}`}>
            <textarea 
                className="area-text"
                id="textarea-one"
                value={isTextValue}
                onFocus={handleTextArea}
                onBlur={handleTextAreaBlur}
                onChange={handleChangeTextArea}
            />
            <label htmlFor="textarea-one" className="textarea-value">Write Message</label>
      </div>

    <button type="submit" className="submit-btn" onClick={handleSubmit} ><i class="bi-send">Send</i></button>
  
    </div>
  );
};

export default Message;
