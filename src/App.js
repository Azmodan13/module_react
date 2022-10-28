import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Data from './Data/Data';
import './App.css';

import LogIn from './components/LogIn/LogIn';
import DataStock from './Data/DataStock';
import Stock from './components/Stock/Stock';
import Basket from './components/Basket/Basket';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Header/Nav/Nav';
import Main from './components/Main/Main';
import New from './components/New/New';
import Carousel from './components/Carousel/Carousel';
import Registration from './components/Registration/Registration';

import {auth} from './Firebase/firebaseConfig'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, getAuth} from 'firebase/auth'




function App() {

const [data, setData] = useState([])
const [dataStock, setDataStock] = useState([])
const [logIn, setLogIn] = useState(false)
const [registration, setRegistration] = useState(false)

const [registerEmail, setRegisterEmail] = useState('')
const [registerPassword, setRegisterPassword] = useState(''
)
const [logInEmail, setLogInEmail] = useState('')
const [logInPassword, setLogInPassword] = useState('')

const [user, setUser] = useState([])

const auth = getAuth();
// onAuthStateChanged(auth, ( currentUser) => {
//   setUser(currentUser)
// })


const register = async () =>{
  try {
  const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword )
  console.log(user)
} catch (error) {
  console.log(error.message)
}
}


const login = async () =>{
  try {
  const user = await signInWithEmailAndPassword(auth,logInEmail,logInPassword )
  console.log(user)
} catch (error) {
  console.log(error.message)
  }
}




const logOut = async () => {
  await signOut(auth)
  .then(() => {
    console.log('Sign-out successful')
  }).catch((error) => {
    console.log(error.message)
  });
}


  return (
    <Router>
    <Data setData={setData}/>
    <DataStock setDataStock={setDataStock}/>

        <Header/>

          <Switch>
            <Route exact path='/' >
        <LogIn logIn={logIn} setLogIn={setLogIn} setRegistration={setRegistration} setLogInEmail={setLogInEmail} setLogInPassword={setLogInPassword} login={login}/>
        <Registration setLogIn={setLogIn} setRegistration={setRegistration} registration={registration} setRegisterEmail={setRegisterEmail} setRegisterPassword={setRegisterPassword} register={register} />
            <Nav setLogIn={setLogIn} logOut={logOut} user={user}/>
            <div>{auth.currentUser ? auth.currentUser.email : null}</div>
            <Carousel/>
            <New dataNew={data.new}/>
            <Main data={data} />
            </Route>
            <Route exact path='/basket'>
              <Basket></Basket>
            </Route>

            <Route exact path='/stock' >
              <Stock dataStock={dataStock}/>
            </Route>
          </Switch>
        <Footer/>
        </Router>
  );
}

export default App;
