import './LogIn.scss'

export default function LogIn({logIn, setLogIn, setRegistration, setLogInEmail, setLogInPassword, login}){

    function onClick(){
        setRegistration(true)
        setLogIn(false)
    }

    return(
        <div>
            {
                logIn ? <div className='overlay'>
                <div className='modal__login'>
                    <div className='close' onClick={()=>setLogIn(false)} >
                    <span></span>
                    <span></span>
                    </div>
                    <h1 className='modal__login__title' >Вхід</h1>
                    <label htmlFor="email">   Ваш e-mail </label> <input onChange={setLogInEmail}  id='email' required type="email" name='email'  />
                    <label htmlFor="password"> Ваш пароль </label>  <input onChange={setLogInPassword} id='password' required type="password" name='password'  />
                    <button  className='btn' onClick={login}  style={{width: '225px', height:'55px'}}> Увійти </button>

    
                    <p onClick={()=> onClick()}>Зареєструватися</p>
                </div>
            </div> : null
            }
        </div>
    )
}