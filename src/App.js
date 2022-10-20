import React, {useState} from 'react';
import Data from './Data/Data';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import New from './components/New/New';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import LogIn from './components/LogIn/LogIn';
import DataStock from './Data/DataStock';
import Stock from './components/Stock/Stock';

function App() {

const [data, setData] = useState([])
const [dataStock, setDataStock] = useState([])




  return (
    <>
    <Data setData={setData}/>
    <DataStock setDataStock={setDataStock} />

    <Header/>
    <Carousel/>
    <New dataNew={data.new} />
    {/* <Stock dataStock={dataStock.stock}/> */}
    <Main data={data} />
    <Footer/>
    {/* <LogIn title='Вхід на сай' footer='Зареєструватися' btn="Вхід" /> */}
    {/* <LogIn title='Реєстрація' footer='Вхід' btn="Зареєструватися" /> */}
    </>
  );
}

export default App;
