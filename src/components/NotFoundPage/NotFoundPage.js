import s from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'; 


function NotFoundPage() {
    return ( 
        <Link to='/products'><button className={s.btn}>Go back</button></Link>
     );
}

export default NotFoundPage;