import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import Logout from '../pages/Logout';

const Header = () => {
  return (
    <Box data-testid="header-root" sx={{ flexGrow: 1 }}>
      <AppBar sx={{background: '#DDA0DD'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ flexGrow: 1 }}
          >
            ALEAPP
          </IconButton>
          <Logout />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;