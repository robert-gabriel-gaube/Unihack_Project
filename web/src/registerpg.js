import React, { useRef, Component } from 'react';
import axios from 'axios';
import { Grid,Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import AttributionRoundedIcon from '@mui/icons-material/AttributionRounded';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Register=()=>{

    const paperStyle={padding :20,height:'62vh',width:480, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const usernameRef = useRef()
    const passwordRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const first_nameRef = useRef()
    const last_nameRef = useRef()

    return(
        <Grid>
            <Paper elevation={13} style={paperStyle}>
            <Grid container direction={"column"} spacing={2}>
                <Grid item>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AttributionRoundedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                </Grid>

                
                    <Grid item>
                <TextField inputRef={first_nameRef} variant="outlined" label='First Name' placeholder='First Name' fullWidth required/>
                    </Grid>
                    <Grid item>
                <TextField inputRef={last_nameRef} variant="outlined" label='Last Name' placeholder='Last Name' fullWidth required/>
                    </Grid>
                    <Grid item>
                <TextField inputRef={usernameRef} variant="outlined" label='Username' placeholder='Enter username' fullWidth required/>
                    </Grid>
                    <Grid item>
                <TextField inputRef={emailRef} variant="outlined" label='Email' placeholder='Enter Email' fullWidth required/>
                    </Grid>
                    <Grid item>
                <TextField inputRef={phoneRef} variant="outlined" label='Phone' placeholder='Enter phone number' fullWidth required/>
                    </Grid>
                    <Grid item>
                <TextField inputRef={passwordRef} variant="outlined" label='Password' placeholder='Enter password' type='password' fullWidth required/>
                    </Grid>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign up</Button>

                </Grid>
                
            </Paper>
        </Grid>
    )
}

export default Register