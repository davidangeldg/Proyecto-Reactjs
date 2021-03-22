import { getFirestore } from "../../firebase";
import firebase from 'firebase/app';
import '@firebase/firestore';
import Button from '@material-ui/core/Button'

const BaseData = () => {
    const anadir= () => {
        let Buzos = {
            categoria: 'SqgBSjuxNYEsmVZl2QI4',
        categoryId: "1",
        description: 'Ponte en los zapatos de los cazafantasmas con las nuevas RGHOSTBUSTERS y vive una experiencia única con gran confort y calidad.', 
        id: 53, 
        image: "https://i.ibb.co/rwykYc0/zapatillas-re.jpg", 
        price: 300000, 
        stock: 10, 
        title: "X GHOSTBUSTERS", 
        }
        const baseDeDatos = getFirestore();
        const buzosCollection = baseDeDatos.collection('items');
        buzosCollection.add(Buzos)
    }

    return (
        <div>
            <Button variant="text" color="default" onClick={()=>{anadir()}}>
              click añadir
            </Button>
        </div>
    )
}

export default BaseData;
