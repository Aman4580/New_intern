import React, { useState } from 'react';
// import signUp from '../../src/service/operations/authAPI';
import { signUp } from '../service/operations/authAPI';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await signUp(email, password);
        console.log(response);
        toast.success("Signup Successfull");
        navigate('/');
    } catch (error) {
        console.error( error);
        toast.error("Signup UnSuccessfull");
        
    }
};
const handler = ()=>{
    navigate('/signin');
}

  return (
    <div className="signup-modal">
      <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
        <h5>Or</h5>
        <button onClick={(e)=>handler(e)}>Already have an Account ??</button>
      </form>
    </div>
  );
}

export default Signup;
