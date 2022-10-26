
import './Nav.scss';
import Btn from '../../Btn/Btn';
import UpBtn from './UpBtn/UpBtn';
import {auth} from '../../../Firebase/firebaseConfig'
import { Link, animateScroll as scroll } from "react-scroll";

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';


function Nav({itemsCount, setLogIn, logOut}){

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    return(
        <div className='container'>
        <nav className='nav'>
            <div className='nav__wrapper' >
            <ul className='nav__list' >
                <li>
                    <Link
                    activeClass="active"
                    to="pizza"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Піца
                    </Link>
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="soup"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Супи
                    </Link>
                </li>



                <li>
                    <Link
                    activeClass="active"
                    to="salad"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Салати
                    </Link>
                </li>

                <li>
                    <Link
                    activeClass="active"
                    to="noodles"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Локшина
                    </Link>
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="noodles"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Напої
                    </Link>
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="drink"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Напої
                    </Link>
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="dessert"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Десерти
                    </Link>
                </li>
                <li>
                    <Link
                    activeClass="active"
                    to="stocks"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Акції
                    </Link>
                </li>


        

                <li >
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Контакты
                    </Link>
                    </li>
            </ul>

                <div className='nav__btn__wrapper'>


                    <p  onClick={logOut} className='nav__btn__login'> Вихід  </p>

                    <p  onClick={()=> setLogIn(true)} className='nav__btn__login'>Вхід  </p>




                    <Btn url='basket' btnText={`В кошик | ${itemsCount}` }/>
                </div>
            </div>

            <Link
                    activeClass="active"
                    to="logo"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        {scroll > document.documentElement.clientHeight && <UpBtn/>}
                    </Link>
        </nav>
        </div>

    )
}

const mapStateToProps = state => ({
    itemsCount: state.cart.cartItems.reduce((acc, item) => acc += item.quantity, 0)
  });

  export default connect(mapStateToProps)(Nav);