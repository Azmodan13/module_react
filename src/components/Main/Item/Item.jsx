import './Item.scss';
import Btn from '../../Btn/Btn';

export default function Item({data, title, id}){

    return(
        <section className='item__wrapper'>
            <p className='title'> {title} </p>
            <div className='items'>

                {
                    data ? data.map((item, index)=> {
                        return(
                <article key={item.id} id={id} className='item'>
                    <img className='item__img' src={item.image} alt={item.name} />
                    <p className='item__title'>{item.name}</p>
                    <p className='item__description'>{item.description}</p>
                    <div className='item__footer'>
                        <span>{item.price} грн.</span>
                        <Btn btnText='В кошик' btnWidth={'125px'} btnHeight={'35px'}/>
                    </div>
                </article>

                        )
                    }) : null
                }

            </div>

        </section>
    )
}