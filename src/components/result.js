import * as React from 'react';
import './employee.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ResultList from './resultList';
import ResultAdd from './resultAdd';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function Result() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className="Employee">
      <Tabs value={value} onChange={handleChange} centered textColor='white' indicatorColor='secondary'>
        <Tab label="VIEW" color='secondary' {...a11yProps(0)}/>
        <Tab label="ADD" color='secondary' {...a11yProps(1)}/>
      </Tabs>
      <TabPanel value={value} index={0}>
      <ResultList/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ResultAdd/>
      </TabPanel>
      
    </div>
  );
}

export default Result;
