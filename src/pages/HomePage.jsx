import React from "react";
import BasicCard from '../components/BasicCard'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import { Avatar } from '@mui/material'
import AlignItemsList from '../components/AlignItemList'
import SwitchListSecondary from '../components/SwitchListSecondary'

export default function HomePage({topAvenger, handleFilter, avengers, searchList}) {
    return (
        <div>
            <Grid container spacing={1} mt={2} justifyContent="center" alignItems="center">
         <Grid item xs={12}>
          <Typography variant="h3" component="h1" sx={{textAlign:"center", color: "white"}} >Top Avenger</Typography>
        </Grid >
        <Grid item xs={3} mt={2}>
                  <Avatar
      alt="Remy Sharp"
      src={topAvenger?.thumbnail.path + "." + topAvenger?.thumbnail.extension}
      sx={{ width: 300, height: 300}}
              />
        </Grid>
        <Grid item xs={6} mt={2}>
          <BasicCard topAvenger={topAvenger} />
        </Grid>
       
        <Grid item xs={12} mt={3} >
          <Grid container spacing={1} mt={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={4}>
                <SwitchListSecondary handleFilter={handleFilter} />
            </Grid>
            <Grid item xs={12} md={8}>
              <AlignItemsList avengers={avengers} searchList={searchList} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
        </div>
    )
}