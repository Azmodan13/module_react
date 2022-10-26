

export default function Registration( {setRegistration,setLogIn, registration, setRegisterEmail, setRegisterPassword, register}){

    function onClick(){
        setRegistration(false)
        setLogIn(true)
    }

    return(
        <div>
            {
                registration ? <div className='overlay'>
                <div className='modal__login'>
                    <div className='close' onClick={()=>setRegistration(false)} >
                    <span></span>
                    <span></span>
                    </div>
                    <h1 className='modal__login__title' >Реєстрація</h1>
                    <label htmlFor="email">   Ваш e-mail </label> <input  id='email' required type="email" name='email' onChange={(e) => setRegisterEmail(e.target.value)} />
                    <label htmlFor="password"> Ваш пароль </label>  <input id='password' required type="password" name='password' onChange={(e) => setRegisterPassword(e.target.value)}  />
                    <button  className='btn'  style={{width: '225px', height:'55px'}} onClick={register}> Зареєструватися </button>

    
                    <p onClick={()=>onClick()}>Вхід</p>
                </div>
            </div> : null
            }
        </div>
    )
}