import { useState, useEffect, useContext } from 'react'
import { UsernameContext } from '../context/UserContext';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {

    // const usernameProps = useFormInput('')
    // const passwordProps = useFormInput('')
    const usernameContext = useContext(UsernameContext)
    const loggedInContext = useContext(UsernameContext)
    // const [loggedIn, setLoggedIn] = React.useState(false)
    // console.log(loggedIn)


    const handleSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let username = data.get('username')
        let password = data.get('password')
        //login successful/true if both values exist and match
        // let isLoggedIn = (username && password && username === password)
        let isLoggedIn = (username && password && username === password)
        loggedInContext.setLoggedIn(isLoggedIn)
        isLoggedIn ? usernameContext.setUserName(username) : usernameContext.setUserName('')

        console.log(isLoggedIn)
        console.log('context' + loggedInContext.loggedIn)
        console.log({
            username: data.get('username'),
            password: data.get('password'),
        });
    };

    return (
        <div className='white-background'>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                            // backgroundColor: 'white'

                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            {loggedInContext.loggedIn ? 'You are signed in as ' + usernameContext.username : 'Sign in'}
                        </Typography>
                        {!loggedInContext.loggedIn && <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="username"
                                name="username"
                                autoComplete=""
                                autoFocus
                            // sx={{ input: { color: 'white' } }}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            // sx={{ input: { color: 'white' } }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            {/* <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid> */}

                        </Box>}
                        {usernameContext.username !== '' && <Button type="submit"
                            // fullWidth
                            onClick={() => { usernameContext.setUserName(''); loggedInContext.setLoggedIn(false) }}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}

                        >Logout</Button>}
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </div>
    );
}