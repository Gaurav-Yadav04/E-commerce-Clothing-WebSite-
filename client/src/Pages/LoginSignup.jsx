import React, { useState } from 'react'
import './CSS/loginSignup.css';

const LoginSignup = () => {

  const [state, setState] = useState("signup");
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:""
  })
  const changeHandler = (e) => {
      setFormData({...formData,[e.target.name]:e.target.value});
  }
      
  const Signup = async () => {
    console.log("Signup is Successfuly",formData);
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method:'post',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
        },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data);

  
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }else{
      alert(responseData.errors);
    }
  }



  const Login = async () => {
    console.log("Login is Successfuly",formData);
    let responseData;
    await fetch("http://localhost:4000/login",{
      method:'post',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
        },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data);

  
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup'>
     <div className="loginsignup-container">
      {state==='signup'?<h1>Signup</h1>:<h1>Login</h1>}
      <div className="loginsignup-fields">
        {state==='signup'?<input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name'  />:<></>}
        <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email Address'  />
        <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password'  />
      </div>
      <button onClick={()=>{state==='signup'?Signup():Login()}} >Continue</button>
      {state==='signup'?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState('login')}}>Login Here</span></p>
       :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState('signup')}}>Signup Here</span></p>}
      <div className="loginsignup-agree">
        <input type='checkbox' name='' id='' />
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
      </div>
     </div>
      
    </div>
  )
}

export default LoginSignup
