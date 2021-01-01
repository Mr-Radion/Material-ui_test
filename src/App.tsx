// import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// useStyles is a function for generating classes
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2), // 1 = 8 px by default
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            {' '}
            {/*put buttons, links, pictures for a responsive menu here */}
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                Log in
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
              Sign up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default App;
