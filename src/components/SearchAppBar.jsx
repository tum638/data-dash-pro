import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router-dom';







export default function SearchAppBar({avengers, setTopAvengerFromSearch }) {
 
  const navigateTo = useNavigate()
  const [names, setNames] = React.useState(null);
  React.useEffect(() => {
    const avengerNames = avengers.map((avenger) => avenger.name);
    setNames(avengerNames)
  }, [avengers])
  

  return (
    <Box className="box" >
      <AppBar position="static" sx={{ backgroundColor: '#36454f' }}>
        <Toolbar>
          <Link underline='always' className='hover' onClick={() => {
            navigateTo("/")
          }}><Typography component='h3' variant="h3x ">Home</Typography></Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}

          >
            MARVEL CHARACTERS
          </Typography>
          <Autocomplete

             getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => {

        setTopAvengerFromSearch(newValue.name);
      }}
      disablePortal
      id="combo-box-demo"
      options={avengers}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Characters" />}
    />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
