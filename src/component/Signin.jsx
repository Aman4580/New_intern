import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../service/operations/authAPI';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await signIn(email, password);
        console.log(response);
        toast.success("SignIn Successfull");
        navigate('/');
    } catch (error) {
        console.error( error);
        toast.error("SignIn UnSuccessfull");
        
    }
};

  return (
    <div className="signin-modal">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
