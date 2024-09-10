import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Avatar, Stack } from "@mui/material";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const history=useNavigate();

const [nom,setNom]=useState('')
const [prenom,setPrenom]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [number,setNumber]=useState('')

async function submit(e) {
  e.preventDefault();

  try{

      await axios.post("http://localhost:8000/signup",{
        nom,prenom,number ,email,password
      })
      .then(res=>{
          if(res.data=="exist"){
              alert("User already exists")
          }
          else if(res.data=="notexist"){
              history("/Home",{state:{id:email}})
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

}






const Singup = () => {


  return (
<Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      noValidate
      autoComplete="off"
    >
      <Stack>
        <Avatar sx={{ width: 150, height: 150 }} src="/broken-image.jpg" />
      </Stack>

      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          sx={{ flex: 1 }}
          label="Nom"
          variant="outlined"
          onChange={(e)=>{setNom(e.target.value)}}
        />
        <TextField
          sx={{ flex: 1 }}
          label="Prenom"
          variant="filled"
          onChange={(e)=>{setPrenom(e.target.value)}}
        />
      </Stack>

      <TextField id="standard-basic" label="Email" variant="standard"
        onChange={(e)=>{setEmail(e.target.value)}} />
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      
      />
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        onChange={(e)=>{setPassword(e.target.value)}}
      />

      <Button
        sx={{ display: "block", mt: "5px" }}
        variant="contained"
        endIcon={<SendIcon />}
        onClick={submit}
      >
        Send
      </Button>
    </Box>

  );
    
};

export default Singup;
