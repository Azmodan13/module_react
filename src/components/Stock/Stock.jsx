import './Stock.scss';
import Btn from '../Btn/Btn';


export default function Stock({dataStock}){


    return(
        <div className='container'>
            <section className='stock__wrapper'>
                <p className='title'> Акции </p>
                <div className='stock__items'>

                {
                    dataStock ? dataStock.map((item)=> {
                        return(
                        <article key={item.id}  className='stock__item'>
                        <img className='item__img' src={item.image} alt={item.title} />
                        <p className='item__title'>{item.title}</p>
                        <p className='item__description'>{item.decrtiption}</p>
                        <div className='item__footer'>
                            <Btn btnText='Подивитись' btnWidth={'100%'} btnHeight={'35px'}/>
                        </div>
                    </article>)
                    }) : null

                }


                    {/* <article   className='stock__item'>
                        <img className='item__img' src='https://nzl.theukrainians.org/wp-content/uploads/2022/02/come.back_.alive_.jpg"' alt='das' />
                        <p className='item__title'>Міжнародний Благодійний фонд</p>
                        <p className='item__description'>Ми працюємо, аби допомагати! Із початку широкомасштабного вторгнення Росії в Україну кожен із членів фонду самостійно підтримував фронт та простих українців. Ми робили все від нас залежне, аби полегшити життя військових та громадян. Згодом організувалися у злагоджену та дружню команду та долучили міжнародних партнерів. Відтоді усі ми - однодумці. У нашому доробку - десятки переданих на потреби армії автівок, сотні тонн гуманітарних вантажів (медикаменти, їжа та амуніція) та сотні вдячних українців. Ми не зупиняємося. Тож долучайтеся і ви! Ми відкриті до будь-якої співпраці та конструктивних пропозицій. Інвестуйте в наші проєкти. Покращуйте наші ідеї. Допоможемо і відбудуємо Україну разом!</p>
                        <div className='item__footer'>
                            <Btn btnText='Подивитись' btnWidth={'100%'} btnHeight={'35px'}/>
                        </div>
                    </article> */}
                </div>
            </section>
        </div>
    )
}