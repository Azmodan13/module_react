import './Btn.scss';
import { Link, NavLink } from 'react-router-dom';

export default function Btn({btnText, btnWidth, btnHeight, url = '' }){

    return(
        <button  className='btn'  style={{width: btnWidth, height:btnHeight}}> <NavLink to={url}>{btnText}</NavLink>  </button>
    )
}