import { Link } from 'react-router-dom';
import s from './ItemCard.module.css'


function ItemCard(props) {

    let {title, price, img, id} = props

    


    return ( 
        <Link to={'product/' + id} className={s.card}>
            <img className={s.img} src={img} alt=""/>
            <h1 className={s.title}>{ title }</h1>
            <h2 className={s.price}>{ price } $</h2>
        </Link>
     );
}

export default ItemCard;