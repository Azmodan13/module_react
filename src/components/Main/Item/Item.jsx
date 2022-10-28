import './Item.scss';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../redux/cartSlice';


export default function Item({data, title, id}){
    const dispatch = useDispatch()


    return(
        <section className='item__wrapper'>
            <p className='title' id={id}> {title} </p>
            <div className='items'>

                {
                    data ? data.map((item, index)=> {
                        return(
                <article key={item.id} id={item.id} className='item'>
                    <img className='item__img' src={item.image} alt={item.name} />
                    <p className='item__title'>{item.name}</p>
                    <p className='item__description'>{item.description}</p>
                    <div className='item__footer'>
                        <span>{item.price} грн.</span>
                        <button className='btn'  style={{width: '125px', height:'35px'}} onClick={()=> dispatch(addToCart(item))}>В кошик</button>
                    </div>
                </article>

                        )
                    }) : null
                }

            </div>

        </section>
    )
}


