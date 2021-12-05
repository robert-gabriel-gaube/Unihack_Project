import React, { useRef, Component } from 'react';
import apiClient from './apiClient';
import { Grid,Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

    


const Login=() => {

    const paperStyle={padding :20,height:400,width:480, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const usernameRef = useRef();
    const passwordRef = useRef();
    
    //useEffect 


    return(
        <Grid>
            <Paper elevation={13} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LoginIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField inputRef={usernameRef} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField inputRef={passwordRef} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />

                <Button 
                onClick={() => { console.log(usernameRef.current.value); }} 
                type='submit' 
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth>
                    Sign in
                </Button>

                <Typography >
                     <Link href="/" >
                        Forgot password? 
                </Link>
                </Typography>
                <Typography > Do you have an account? 
                     <Link href="/register" >
                        {" "}Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login