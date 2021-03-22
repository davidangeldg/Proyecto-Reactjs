import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { makeStyles, Button, IconButton } from '@material-ui/core'
import styles from "./navbar.module.scss"
import CartWidget from '../CartWidget';
import { Link, NavLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    // tittle: {
    //   flexGrow:1,
    //   display: 'flex',
    // }
}))
const NavbarComponent = () => {
  const classes = useStyles();

  return (
    <>
        <AppBar position="fixed" color="secondary">
          <Toolbar className={styles.toolbar}>
            {/* <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={styles.tittle}>
              <Link to={'/'} className={styles.logo}>A-MARK</Link>
            </Typography>
            <nav>
              <input id={styles.navToggle} type="checkbox"/>
              <ul className={styles.links}> 
                  <li><NavLink to={`/category/Camisetas`} activeClassName={styles.active} className={styles.normal}>Camisetas</NavLink></li>
                  <li><NavLink to={`/category/Buzos`} activeClassName={styles.active} className={styles.normal}>Buzos</NavLink></li>
                  <li><NavLink to={`/category/Zapatillas`} activeClassName={styles.active} className={styles.normal}>Zapatillas</NavLink></li>
                  <li><NavLink to={`/category/Maletas`} activeClassName={styles.active} className={styles.normal}>Maletas</NavLink></li>
              </ul>
              <label for={styles.navToggle} className={styles.iconBurguer}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </label>
            </nav>
              <Link to={'/cart'}><CartWidget/></Link>
          </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
    </>
  );
}

export default NavbarComponent ;