// import './main/scss';
import Item from "./Item/Item"
import Stocks from "./Stocks/Stocks"
import PayAndDelivery from "./PayAndDelivery/PayAndDelivery"

import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';


function Main({data, addItem}){

    return(
        <main>
        <div className='container'>
            <Item addItem={addItem} data={data.pizza}  id='pizza' title='Піца'/>
            <Item addItem={addItem} data={data.soup} id='soup' title='Супи'/>
            <Item addItem={addItem} data={data.salad} id='salad' title='Cалати'/>
            <Item addItem={addItem} data={data.noodles} id='noodles' title='Локшина'/>
            <Item addItem={addItem} data={data.drink} id='drink' title='Напої'/>
            <Item addItem={addItem} data={data.dessert} id='dessert' title='Десерти'/>
            <Stocks/>
        </div>
            <PayAndDelivery/>
        </main>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  })

  export default connect(null, mapDispatchToProps)(Main);