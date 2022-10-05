
import './Nav.scss';
import Btn from '../../Btn/Btn';

export default function Nav(){


    return(

        <nav className='nav'>
            <div className='nav__wrapper' >
            <ul className='nav__list' >
                <li><a href="#">Паста</a></li>
                <li><a href="#">Супы</a></li>
                <li><a href="#">Салаты</a></li>
                <li><a href="#">Антипасти</a></li>
                <li><a href="#">Напитки</a></li>
                <li><a href="#">Десерты</a></li>
                <li><a href="#">Бакалея</a></li>
                <li><a href="#">Акции</a></li>
                <li><a href="#">Комбо</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>

                <div className='nav__btn__wrapper'>
                    <div className='nav__btn__login'>Войти</div>
                    <Btn btnText='Корзина |  1' />
                </div>
            </div>
        </nav>

    )
}