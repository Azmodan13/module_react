import './Modal.scss'
import Btn from '../Btn/Btn'

export default function Modal( ) {

    return(
        <div className='overlay'>
            <div className='modal__item'>
                <div className='modal__item__left'>
                    <img src="" alt="" />
                </div>
                <div className='modal__item__right'>
                    <h1 className='modal__item__right__title'> </h1>
                    <div className='modal__item__right__description'> </div>
                <Btn btnText={'Додати до кошика'} btnWidth='225px' btnHeight='55px'/>
                </div>
                


            </div>
        </div>
    )
}