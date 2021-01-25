import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { makeStyles, Button, Link } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    tittle: {
      flexGrow:1
    }
}))
const NavbarComponent = () => {
  const classes = useStyles();
  return (
    <>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.tittle}>
              A-MARK
            </Typography>
            <div>
              {/* <Link component="button" variant="text" color="inherit" className={classes.menuButton}>Categorías</Link>
              <Link component="button" variant="text" color="inherit" className={classes.menuButton}>Historial</Link> */}
              <Button variant="text" color="inherit">Categorias</Button>
              <Button variant="text" color="inherit">Historial</Button>
              <Button variant="text" color="inherit">Ofertas</Button>
              <Button variant="text" color="inherit">Ayuda</Button>
              <Button variant="text" color="inherit">Login</Button>
            </div>
            {/* <Button variant="text" color="inherit">
              Login
            </Button> */}
          </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
    </>
  );
}

export default NavbarComponent ;