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



function ResultAdd() {
    
    return (

        <Stack spacing={2} bgcolor={'whitesmoke'} paddingY={6} borderRadius={10} paddingX={10}>
            <Typography variant="h4" gutterBottom component="div" color={'secondary'}>
                ADD RESULT
            </Typography>
            <TextField id="outlined-template-name" color="secondary" label="Template Name" variant="outlined" />
            <TextField id="outlined-template-category" color="secondary" label="Template Category" variant="outlined" />
            <TextField id="outlined-image-path" color="secondary" label="Image Path" variant="outlined" />
            <TextField id="outlined-count" color="secondary" label="Count" variant="outlined" />
            <Button variant="contained" color="secondary" size='large'>ADD</Button>
        </Stack>

    );
}

export default ResultAdd;