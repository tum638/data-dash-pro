import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link'

export default function AlignItemsList({ avengers, searchList}) {
  const [searchListState, setSearchList] = React.useState([])

  React.useEffect(() => {
    setSearchList(searchList);
  }, [searchList])

  const navigateTo = useNavigate();
  return (
    <List sx={{ width: 900, height: 500, bgcolor: 'background.paper', overflow: "scroll", marginBottom: 2 }}>
      {searchList.length === 0? (avengers.map((avenger, idx) => {
        return (
          <ListItem key={idx} alignItems="flex-start">
            <ListItemAvatar>
              <Link onClick={() => {
                navigateTo(`about/${avenger.id}`)
              }}>
                <Avatar alt={avenger.name} src={avenger.thumbnail.path + "." + avenger.thumbnail.extension} />
              </Link> 
            </ListItemAvatar>
            <ListItemText
              primary={<Link underline='always' onClick={() => {
                navigateTo(`about/${avenger.id}`)
              }
              }>{avenger.name}</Link>}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Number of movies - Number of Series - Number of Comics
                  </Typography>
              
                  {`|------------${avenger.stories.available}-----------|-----------${avenger.series.available}------------|-----------${avenger.comics.available}--------------|`}
                  <Divider variant="inset" component="li" />
              
                </React.Fragment>
            
              }
            />
            
          </ListItem>
        )
        
      }
      )
      ) : (
          (searchListState.map((avenger, idx) => {

          return (
            
< ListItem key = { idx } alignItems = "flex-start" >
            <ListItemAvatar>
          <Avatar alt={avenger.name} src={avenger.thumbnail.path + "." + avenger.thumbnail.extension} />
        </ListItemAvatar>
        <ListItemText
          primary={avenger.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Number of movies - Number of Series - Number of Comics
              </Typography>
               <Divider variant="inset" component="li" />
               {`|------------${avenger.stories.available}-----------|-----------${avenger.series.available}------------|-----------${avenger.comics.available}--------------|`}
              <Divider variant="inset" component="li" />
              
            </React.Fragment>
            
          }
            />
            
            </ListItem>
            )
            }
        )
      )
      )}

    </List>
  )
}