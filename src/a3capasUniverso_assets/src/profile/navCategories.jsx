import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ maxWidth: '480px', textAlign: 'center' }}>
      <Tabs 
        value={value} 
        onChange={handleChange} 
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          }, 
          backgroundColor:'#fff',
          textAlign:'center'
        }}
        >
        <Tab style={{ color:'#343d92', backgroundColor:'#fff' }} label="Faceted Meninas" />
        <Tab disabled style={{ color:'#666', backgroundColor:'#fff' }} label="Interitus (Soon)" />
        <Tab disabled style={{ color:'#666', backgroundColor:'#fff' }} label="Didrians (Soon)" />
        <Tab disabled style={{ color:'#666', backgroundColor:'#fff' }} label="Game Souvenirs (2022)" />
      </Tabs>
    </Box>
  );
}
