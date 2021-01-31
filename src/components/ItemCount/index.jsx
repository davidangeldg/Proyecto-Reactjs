import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    contenedor: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection: "column",
    },
    centrado: {
        display:"flex",
        justifyContent: "space-between",
        boxShadow: "0px 1px 3px #cccccc",
        width: 183,
        flexFlow:"row wrap",
        marginBottom: 5,
    },
    cont: {
        padding: '1rem',
    },
})


export const ItemCount =({stock, onAdd, contador, onSubstract}) =>{
    const classes = useStyles();
    
    return(
        <div className={classes.contenedor}>
            <p>Producto X</p>
            < div className={classes.centrado}>
                {(contador > 1) ?
                <IconButton color="secondary" onClick={onSubstract}><RemoveCircleRoundedIcon /></IconButton>:
                <IconButton disabled><RemoveCircleRoundedIcon /></IconButton>
                } 
                <b className={classes.cont}>{contador}</b>
                {(contador < stock) ?
                <IconButton color="secondary" onClick={ () => {onAdd(stock)}}><AddCircleRoundedIcon /></IconButton>:
                <IconButton disabled><AddCircleRoundedIcon /></IconButton>
                }
            </div>
            <Button variant="outlined" color="secondary">Agregar al carrito</Button> 
        </div>
    )
};