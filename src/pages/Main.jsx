import Button from "../components/ui/Button";
import { useReducer } from 'react'
import Modal from "../components/Modal";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../app/firebase'
import module from './Main.module.scss'

const Main = (props) => {
    const [modal, dispatch] = useReducer(reducer, {
        active: false,
        content: 'cart'
    });

    const [user, loading, error] = useAuthState(auth);

    function reducer(state, action) {
        switch (action.type) {
            case 'modal':
                return {
                    ...state,
                    active: action.modal
                };
            case 'content':
                return {
                    ...state,
                    content: action.content
                };
            default:
                return state
        }
    }

    const modalState = {
        props: modal,
        dispatch: dispatch,
    }

    async function openModal(content) {
        await dispatch({ type: 'content', content: content })
        await dispatch({ type: 'modal', modal: true })
    }

    const signOut = () => {
        auth.signOut();
    };

    if (user) {
        if (user.emailVerified)
            return (
                <div className="container center-flex">
                    <div className={module.flex}> 
                    <div> <img src={user.photoURL} alt="" /></div>
                    <div className={module.textt}> <div className={module.textdesc}>Поздравляю, вы вошли в свой аккаунт {user.displayName}</div>
                    <div className={module.textdesc}>Ваша почта: {user.email}</div>
                    <div className={module.avatar}>{user.avatar}</div>
                    
                    <div onClick={signOut}>
                        <div className={module.btnexit}><Button className={module.out} text='Выйти с аккаунта' /></div></div>
                    </div>
                </div>
                </div>
            )
        else
            return (
                <div className="container center-flex">
                    <h1 className={module.main}>Главная страница</h1>
                    <div className={module.textdesc}>Вам нужно подтвердить почту</div>
                    <div onClick={signOut}>
                        <div><Button className={module.out} text='Выйти с аккаунта' /></div>
                    </div>
                </div>
            )
    } else {
        return (
            <div className="container center-flex">

                <div onClick={() => openModal('cart')}>
                </div>
                <div onClick={() => openModal('registration')}>
                </div>
                <div>
                    <div onClick={() => openModal('Password-recovery')}>
                </div>
                </div>
                <Modal modal={modalState} />
            </div>
        );
    }
};

export default Main;