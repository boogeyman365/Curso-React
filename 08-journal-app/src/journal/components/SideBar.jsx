import { TurnedInNot } from "@mui/icons-material";
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material";

export const SideBar = ({ drawerWidth = 240 }) => {
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
              <Typography variant="h6" noWrap component='div'>
                Boogey
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