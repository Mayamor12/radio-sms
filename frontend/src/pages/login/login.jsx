import React , { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const history=useNavigate();

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')




async function submit(e){
  e.preventDefault();

  try{

      await axios.post("http://localhost:8000/",{
          email,password
      })
      .then(res=>{
          if(res.data=="exist"){
              history("/Home",{state:{id:email}})
          }
          else if(res.data=="notexist"){
              alert("User have not sign up")
          }
      })
      .catch(e=>{
          alert("wrong details")
          console.log(e);
      })

  }
  catch(e){
      console.log(e);

  }




const Login = () => {
  return (
    <Box
    component="form"
    sx={{display:"flex",flexDirection:"column" , gap:2}}
    noValidate
    autoComplete="off"
  >
    <TextField id="standard-basic" label="Email" variant="standard"    
    onChange={(e) => { setEmail(e.target.value) }}/>
    
        <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        onChange={(e) => { setPassword(e.target.value) }}

      />


<Button variant="contained"  > <Link to={'/'}>Login</Link></Button>

<Button variant="contained" > <Link to={'/Singup'}>Singup</Link></Button>

      
  </Box>
  );
}
export default Login;
