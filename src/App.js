import React, {useState} from 'react';
import Data from './Data/Data';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import New from './components/New/New';
import Main from './components/Main/Main';


function App() {

const [data, setData] = useState([])


// console.log(data.new)
  return (
    <>
    <Data setData={setData}/>


    <Header/>
    <Carousel/>
    <New dataNew={data.new} />
    <Main data={data} />
    </>
  );
}

export default App;
