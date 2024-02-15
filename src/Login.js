import { useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { Route, Routes,useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate= useNavigate()
  let [input, Setinput] = useState({
        email: '',
    passWord: ''
  })
  const fun3 = async(e) => {
    e.preventDefault();

    let res = await axios.post('http://localhost:4000/login',input)
    navigate('/home')
            
    console.log(res.data);
  }
  const fun2 = (e) => {
    let { name, value } = e.target
    Setinput({ ...input, [name]: value })
  }
  return (
    <div id='main'>
      <fieldset>
        <legend><h2>Login form</h2></legend>
      

      <span>Email </span>
      <input value={input.email} name='email' type='email' placeholder="Enter your Email" onChange={fun2} />
      <br></br>
      <br></br>

      <span> Password</span>
      <input value={input.passWord} name='passWord' type='password' placeholder="Enter your password" onChange={fun2} />
      <br></br>
      <br></br>

      <button type='submit' onClick={fun3}>Submit</button>  
          <Link to='/'>SignUp</Link>

      </fieldset>
    </div>
  )
}

export default Login