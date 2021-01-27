// contenedor para productos

import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from "../components/SimpleCard";

const useStyles = makeStyles({
    contenedor: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
    },
})

const ItemListContainer = ({greeting}) => {
    const classes = useStyles();

    return (
        <>
            <Typography 
            variant="h3" 
            color="secondary" 
            align="center"
            fontWeight={700}
            gutterBottom="true"
            >
            {greeting}
            </Typography>
            <div className={classes.contenedor}>
                <SimpleCard/>
                <SimpleCard/>
                <SimpleCard/>
            </div>
        </>
    )
}

export default ItemListContainer;