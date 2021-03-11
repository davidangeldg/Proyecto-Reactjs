import styles from './notFound.module.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


const NotFound = () => {
    return (
        <section className={styles.cont}>
            <Typography variant="h4" color="secondary">Uuups!</Typography>
            <Typography variant="subtitle2" color="initial">Lo sentimos, pero no encontramos la página que solicitaste</Typography>
            <div className={styles.errorContainer}>
                <span><span>4</span></span>
                <span>0</span>
                <span><span>4</span></span>
            </div>
            <div className={styles.linkContainer}>
                <Link to={`/`}><Button variant="contained" color="secondary">Vuele al inicio</Button></Link>
            </div>
        </section>
    )
}

export default NotFound;
