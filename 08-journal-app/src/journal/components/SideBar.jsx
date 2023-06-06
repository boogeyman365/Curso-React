import { TurnedInNot } from "@mui/icons-material";
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, Avatar } from "@mui/material";
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth = 240 }) => {

  const { displayName, photoURL } = useSelector( state => state.auth);

  return (
    <Box 
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>

        <Drawer
          variant="permanent"
          open={ true }
          sx={{ 
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
           }}>

            <Toolbar>
              <Avatar 
                alt={ displayName } 
                src={ photoURL } 
                sx={{ width: 25, height: 25, marginRight: 2 }} />
              <Typography variant="h6" noWrap component='div'>
                { displayName }
              </Typography>
            </Toolbar>

            <Divider />

            <List>
              {
                ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                  <ListItem key={ text } sx={{ borderRadius: 3 }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <TurnedInNot />
                      </ListItemIcon>
                      <Grid container>
                        <ListItemText primary={ text } />
                        <ListItemText secondary={ 'Ipsum labore et ut quis incididunt.' } />
                      </Grid>
                    </ListItemButton>
                  </ListItem>
                ))
              }
            </List>

        </Drawer>
    </Box>
  )
}
