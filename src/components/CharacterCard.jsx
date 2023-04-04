import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function CharacterCard({ avenger }) {
    const [character, setCharacter] = React.useState(null);
    React.useEffect(() => {
       setCharacter(avenger)
    }, [avenger])

  return (
      <Card sx={{ maxWidth: 900, height: 200, marginLeft: "auto", marginRight: "auto" , marginTop: 2}}>
        <CardHeader
              title={<Box sx={{display:"flex", justifyContent:"center",alignItems:"center   "}}>
                  <Avatar
                      alt={character?.name}
                      src={character?.thumbnail.path + "." + character?.thumbnail.extension}
                      sx={{ width: 56, height: 56, marginRight:2 }}
                  />
                  <Typography variant="h3">{character?.name} </Typography>
              </Box>}
              
      />
    
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {character?.description ? character?.description : "No description."}  
        </Typography>
      </CardContent>
   </Card>
  );
}