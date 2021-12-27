import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';

const accounts = [
    {
        value: false,
        label: 'Individual',
    },
    {
        value: true,
        label: 'Business',
    }
];

function Signup() {
    const [account, setAccount] = React.useState(false);

    const handleChange = (event) => {
        setAccount(event.target.value);
    };
    return (

        <Stack spacing={2} bgcolor={'whitesmoke'} paddingY={6} borderRadius={10} paddingX={10}>
            <Typography variant="h4" gutterBottom component="div" color={'secondary'}>
                SIGNUP
            </Typography>
            <TextField id="outlined-name" color="secondary" label="Name" variant="outlined" />
            <TextField id="outlined-email" color="secondary" label="Email" variant="outlined" />
            <TextField
                color="secondary"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <TextField
                id="outlined-select-account"
                select
                label="Select Account Type"
                color="secondary"
                value={account}
                onChange={handleChange}
                helperText="Please select your account type"
            >
                {accounts.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button variant="contained" color="secondary" size='large'>Signup</Button>
        </Stack>

    );
}

export default Signup;