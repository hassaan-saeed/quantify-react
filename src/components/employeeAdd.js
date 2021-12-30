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

const roles = [
    {
        value: 'manager',
        label: 'Manager',
    },
    {
        value: 'worker',
        label: 'Worker',
    }
];

function EmployeeAdd() {
    const [role, setRole] = React.useState(false);

    const handleChange = (event) => {
        setRole(event.target.value);
    };
    return (

        <Stack spacing={2} bgcolor={'whitesmoke'} paddingY={6} borderRadius={10} paddingX={10}>
            <Typography variant="h4" gutterBottom component="div" color={'secondary'}>
                ADD EMPLOYEE
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
                id="outlined-select-role"
                select
                label="Select Role Type"
                color="secondary"
                value={role}
                onChange={handleChange}
                helperText="Please select your role type"
            >
                {roles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button variant="contained" color="secondary" size='large'>ADD</Button>
        </Stack>

    );
}

export default EmployeeAdd;