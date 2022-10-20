import './LogIn.scss'
import Btn from '../Btn/Btn'

export default function LogIn({title,footer, btn}){

    return(
        <div className='overlay'>
            <div className='modal__login'>
                <h1 className='modal__login__title' >{title}</h1>
                <label htmlFor="email">   Ваш e-mail </label> <input  id='email' required type="email" name='email' />
                <label htmlFor="password"> Ваш пароль </label>  <input id='password' required type="password" name='password' />

                <Btn btnText={btn} btnWidth='225px' btnHeight='55px'/>

                <p>{footer} </p>
            </div>
        </div>
    )
}