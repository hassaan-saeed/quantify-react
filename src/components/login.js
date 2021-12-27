import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';



function Login() {

    return (

        <Stack spacing={2} bgcolor={'whitesmoke'} paddingY={16} borderRadius={10} paddingX={10}>
            <Typography variant="h4" gutterBottom component="div" color={'secondary'}>
                LOGIN
            </Typography>
            <TextField id="outlined-email" color="secondary" label="Email" variant="outlined" />
            <TextField
                color="secondary"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />

            <Button variant="contained" color="secondary" size='large'>Login</Button>
        </Stack>

    );
}

export default Login;