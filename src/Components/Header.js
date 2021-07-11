import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grow from '@material-ui/core/Grow';
import logo from './Assets/logo2.png';
import header from './Assets/header.jpg';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  header: {
    backgroundImage: `url(${header})`,
  },
  iconalign: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <div className={classes.title} >
            <img src={logo} alt="logo" style={{height: 50, width: 100, borderRadius:10 }}/>
          </div>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          edge="end"
          style={{paddingRight:40}}
        >
          <MenuIcon style={{color:"white"}} fontSize="large"/>
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} style={{width:250}}>
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Gallery</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Activites</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Department</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Team</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </div>
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}