import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import NavCategories from './navCategories';
import CategoriesGrid from './categoriesGrid';

export default function NavTabs(props) {
  
  return (
    <Box sx={{ width: '100%' }}>
        <Grid container>
            <Grid item xs={12} alignItems='center' justify="center" sx={{ textAlign: 'center' }}>
                <NavCategories />
            </Grid>
            <Grid item xs={12} sx={{ width: "100%" }}>
              <CategoriesGrid />
            </Grid>
        </Grid>
    </Box>
  );
}
