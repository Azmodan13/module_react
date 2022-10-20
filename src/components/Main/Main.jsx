// import './main/scss';
import Item from "./Item/Item"
import Stocks from "./Stocks/Stocks"
import PayAndDelivery from "./PayAndDelivery/PayAndDelivery"

export default function Main({data}){


    return(
        <main>
        <div className='container'>
            <Item data={data.pizza} id='pizza' title='Піца'/>
            <Item data={data.soup} id='soup' title='Супи'/>
            <Item data={data.salad} id='salad' title='Cалати'/>
            <Item data={data.noodles} id='noodles' title='Локшина'/>
            <Item data={data.drink} id='drink' title='Напої'/>
            <Item data={data.dessert} id='dessert' title='Десерти'/>
            <Stocks/>
        </div>
            <PayAndDelivery/>
        </main>
    )
}