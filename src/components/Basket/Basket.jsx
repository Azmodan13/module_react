import './Basket.scss'
import Btn from '../Btn/Btn'
import BasketItem from './BasketItem/BasketItem';
import { useSelector } from 'react-redux'


function Basket() {

    const cart = useSelector((state) => state.cart)
    
    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
          totalQuantity += item.quantity
          totalPrice += item.price * item.quantity
        })
        return {totalPrice, totalQuantity}
      }


    return(
        <div className='basket__container'>
            <h1 className='basket__title'> Кошик</h1>
            <ul className='basket__list'>
                {   cart.length ?
                    cart.map(item => <BasketItem key={item.id} item={item}/>)
                    : <div className='err'> <img  src="https://krokus.zp.ua/images/views/cart/xnoorders.png.pagespeed.ic.RzAWt8CZyS.png" alt="" /></div>
                }
                
            </ul>
            <div className='basket__footer'>
                <div className='basket__footer__sum'>
                    Сумма замовлення:<span>{getTotal().totalPrice}грн</span>
                </div>
                <div className='basket__footer__checkout'>
                    <Btn btnText='Оформити замовлення' btnWidth='225px' btnHeight='55px'/>
                </div>
            </div>
        </div>
    )
}

  export default Basket;