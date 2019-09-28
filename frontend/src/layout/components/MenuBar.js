import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginRight: 10,
  }
}));

export default function MenuBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link href="/" color="inherit" underline="none">Home</Link>
          </Typography>
          |
          <Typography variant="h5" className={classes.title}>
            <Link href="/another-view" color="inherit" underline="none">Chat Room</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}