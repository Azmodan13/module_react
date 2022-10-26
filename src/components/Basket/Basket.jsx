import './Basket.scss'
import Btn from '../Btn/Btn'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import BasketItem from './BasketItem/BasketItem';


function Basket({items, total}) {

    return(
        <div className='basket__container'>
            <h1 className='basket__title'> Кошик</h1>
            <ul className='basket__list'>
                {   items.length ?
                    items.map(item => <BasketItem key={item.id} item={item}/>)
                    : <div className='err'> <img  src="https://krokus.zp.ua/images/views/cart/xnoorders.png.pagespeed.ic.RzAWt8CZyS.png" alt="" /></div>
                }
                
            </ul>
            <div className='basket__footer'>
                <div className='basket__footer__sum'>
                    Сумма замовлення:<span>{total} грн</span>
                </div>
                <div className='basket__footer__checkout'>
                    <Btn btnText='Оформити замовлення' btnWidth='225px' btnHeight='55px'/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems }}) => ({
    items: cartItems,
    total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
  });

  export default withRouter(
    connect(mapStateToProps)(Basket)
  );