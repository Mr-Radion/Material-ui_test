import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useHomeStyles } from './theme';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useHomeStyles();
  const [value, setvalue] = React.useState<string>('recents');

  const handleChange = (e: any, newValue: any) => {
    setvalue(newValue);
  };

  return (
    <>
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
      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
          {/* paper background used as a background for the image. */}
          <Container fixed>
            {' '}
            {/* maxWidth="sm" sm, md, lg*/}
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                {/* lg, xl, md */}
                <div className={classes.mainFeaturesPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Text
                  </Typography>
                  <Typography component="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Text
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={5} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards &&
              cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  {/* 12 screen columns */}
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        Blog Post
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                      <LayerIcon />
                      <PlayCircleFilledIcon />
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          {' '}
          Footer{' '}
        </Typography>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
        <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
          Тестовый сайт
        </Typography>
      </footer>
    </>
  );
}

export default App;
