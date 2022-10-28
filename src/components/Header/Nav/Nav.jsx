
import './Nav.scss';
import Btn from '../../Btn/Btn';
import UpBtn from './UpBtn/UpBtn';
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



function Nav({setLogIn, logOut}){

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const cart = useSelector((state) => state.cart)

const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}

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


                    <Btn url='basket' btnText={`В кошик | ${getTotalQuantity()}`}/>
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



  export default Nav;