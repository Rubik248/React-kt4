import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import s from './ItemList.module.css'



function ItemsList() {

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    


    return (
        <div className={s.list}>
            {
                products.map(e => {
                    return (
                        <ItemCard 
                            title={e.title} 
                            price={e.price} 
                            img={e.image} 
                            id={e.id}
                        />
                    )
                })
            }
        </div>
     );
}

export default ItemsList;