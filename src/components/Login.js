import React, { useState} from 'react';
import { NavLink,Navigate ,useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import App from '../App'



function Login() {
    let navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }


  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  const handleClick =() =>{
localStorage.setItem("login",true)
  navigate("/Home")
    
  }
  function handleSubmit(event) {
    event.preventDefault();
    // <Navigate to="/Home"/>
    // Add logic here to send a request to authenticate the user's credentials

  }

  return (
    <div>
      <h2 className='header'>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type='submit' onClick={(handleClick)}>Login</button>
      </form>
    </div>
  );
}

export default Login;
