import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { makeStyles, Button } from '@material-ui/core'
import styles from "./navbar.module.scss"
import CartWidget from '../CartWidget';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    tittle: {
      flexGrow:1,
      display: 'flex',
    }
}))
const NavbarComponent = () => {
  const classes = useStyles();
  return (
    <>
        <AppBar position="fixed" color="secondary">
          <Toolbar flex="flex">
            {/* <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.tittle}>
              A-MARK
            </Typography>
            <nav>
              <ul className={styles.links}>
                  <li><a href="">Categorías</a></li>
                  <li><a href="">Historial</a></li>
                  <li><a href="">Ofertas</a></li>
                  <li><a href="">Contacto</a></li>
              </ul>
            </nav>
              <Button variant="text" color="inherit" startIcon={<AccountCircleRoundedIcon/>}>Login</Button>
              <CartWidget/>
          </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
    </>
  );
}

export default NavbarComponent ;