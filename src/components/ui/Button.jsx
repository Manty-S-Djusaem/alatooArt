import lupa from '../assets/lupa.png'
import Buton from './Button.module.scss'
import module from './Button.module.scss'

const Button = (props) => {

    return (
        <button className={module.btnquit}>
            Выйти
           {/* {props.text && <img src={lupa}></img>} */}
        </button>
    );
};

export default Button