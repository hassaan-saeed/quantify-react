import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Employee from './employee';
import Result from './result';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Graph from './graph';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Main() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div>
        <AppBar position="static" color="secondary">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quantify
          </Typography>
        </Toolbar>
      </AppBar>
    <Box
      sx={{ flexGrow: 1, bgcolor: '#282c34', display: 'flex', height: '100vh', color: 'white'}}
    >
      
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        indicatorColor='secondary'
        textColor='secondary'
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', color:'white' }}
      >
        <Tab label="Employees" {...a11yProps(0)} color='secondary'/>
        <Tab label="Results" {...a11yProps(1)} color='secondary'/>
        <Tab label="Graphs" {...a11yProps(2)} color='secondary'/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <Employee/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Result/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Graph />
      </TabPanel>
    </Box>
    </div>
  );
}
