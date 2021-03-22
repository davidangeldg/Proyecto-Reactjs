import styles from './footer.module.scss'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className={styles.contCol}>
                <div className={styles.column}>
                    <h5>Acerca de</h5>
                    <ul>
                        <li><Link to={'/'}>A-mark</Link></li>
                        <li><Link to={'/'}>Trabaja con nosotros</Link></li>
                        <li><Link to={'/'}>Tendencias</Link></li>   
                    </ul>
                </div>
                <div className={styles.column}>
                    <h5>Otros sitios</h5>
                    <ul>
                        <li><Link to={'/'}>Developers</Link></li>
                        <li><Link to={'/'}>Mercado Pago</Link></li>
                        <li><Link to={'/'}>A-mark Envíos</Link></li>
                        <li><Link to={'/'}>A-mark Ads</Link></li>
                        <li><Link to={'/'}>A-mark ideas</Link></li>    
                    </ul>
                </div>
                <div className={styles.column}>
                    <h5>Ayuda / PQR</h5>
                    <ul>
                        <li><Link to={'/'}>Comprar</Link></li>
                        <li><Link to={'/'}>Vender</Link></li>
                        <li><Link to={'/'}>Resolución de problemas</Link></li>
                        <li><Link to={'/'}>Centro de seguridad</Link></li>   
                    </ul>
                </div>
                <div className={styles.column}>
                    <h5>Redes sociales</h5>
                    <ul>
                        <li><Link to={'/'}>Facebook</Link></li>
                        <li><Link to={'/'}>Instagram</Link></li>
                        <li><Link to={'/'}>Twitter</Link></li>   
                    </ul>
                </div>
                <div className={styles.column}>
                    <h5>Mi cuenta</h5>
                    <ul>
                        <li><Link to={'/'}>Acceder</Link></li>
                        <li><Link to={'/'}>Vender</Link></li>  
                    </ul>
                </div>
            </div>
            <div className={styles.info}>
                <nav className={styles.navFoot}>
                    <Link >Trabaja con nosotros</Link>
                    <Link >Términos y condiciones</Link>
                    <Link >Cómo cuidamos tu privacidad</Link>
                    <Link >Ayuda</Link>
                    <Link >Avisos legales</Link>
                </nav>
                <small class="nav-footer-copyright">Copyright ©&nbsp;2021 A-mark Colombia S.A.S / David Angel DG</small>
            </div>
        </footer>
    )
}

export default Footer;
