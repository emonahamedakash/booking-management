import React from 'react'
import "./Login.css"

const Login = () => {
  const handleLogIn = () =>{
    window.alert("Log in button pressed");
  }
    return (
    <div className='login_container'>
        <h3>Login</h3><br />
        <form className='login_form'>
            <input type="text" placeholder='User Name'/>
            <br /> <br />
            <input type="password" placeholder='Password'/>
            <br /> <br />
            <button onClick={handleLogIn}>Log in</button>
        </form>    
    </div>
  )
}

export default Login