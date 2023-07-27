import axios from 'axios';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Login copy.css';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[trigger,setTrigger]=useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          email: email,
          password: password,
        }
      );

      let token = response.data.token;
      console.log(token);
      let user = response.data.userResponse;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      alert("Successfully Login");
       navigate("/shop");
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
    {/* <ToastContainer /> */}
    <div className="l-container">
      
      {/* <h1 id="close" onClick={()=> props.setTrigger(false)} >❌</h1> */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password:</label>
          <div className="password-input-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              value={password}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              onChange={handlePasswordChange}
            />
            <div className="password-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <button type="submit" id='login' onClick={handleSubmit}>Login</button>
      </form>
    </div>
    </>

  );
};

export default Login;
