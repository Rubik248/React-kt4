import { useEffect, useState } from "react";
import s from './ItemPage.module.css'
import { Link } from "react-router-dom";

function ItemsPage() {

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const currentPath = window.location.pathname;
    const path = parseInt(currentPath.split('').reverse().join(''))
    const pathNew = parseInt(String(path).split('').reverse().join(''))

    return (
        <div className={s.block}>
            {
                products.map(e => {
                    if (e.id === pathNew) {
                        return (
                            <div className={s.card}>
                                <h1 className={s.title}>{ e.title }</h1>
                                <img className={s.image} src={e.image} alt=""/>
                                <h3 className={s.price}>Price: {e.price} $</h3>
                                <p className={s.desc}>Description: {e.description}</p>
                                <Link to='/products'><button className={s.btn}>Go back</button></Link>
                            </div>
                        )
                    }
                })
            }
        </div>
     );
}

export default ItemsPage;