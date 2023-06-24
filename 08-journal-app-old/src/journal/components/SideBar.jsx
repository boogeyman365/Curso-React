import { TurnedInNot } from "@mui/icons-material";
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240 }) => {

  const { displayName, photoURL } = useSelector( state => state.auth);
  const { notes, active } = useSelector( state => state.journal);

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
                notes.map( note => (
                  <SideBarItem { ...note } key={ note.id } className={`${!!notes.find((el) => el.id === active?.id) ? 'active-note' : ''}`} />
                ))
              }
            </List>

        </Drawer>
    </Box>
  )
}
