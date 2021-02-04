import Item from "../Item";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    contenedor: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        flexFlow: "row wrap"
    },
})


const ItemList = ({ products }) => {
    const classes = useStyles();
    return (
        <div className= {classes.contenedor} >
            {products.map((product)=> {
                return <Item key={product.id} product={product}/>       
            })}
        </div>
    )
};

export default ItemList;
