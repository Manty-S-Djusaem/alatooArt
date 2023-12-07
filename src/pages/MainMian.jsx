import Button from "../components/ui/Button";
import { useReducer } from 'react'
import Modal from "../components/Modal";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../app/firebase'//
import module from './Main.module.scss'
import { useEffect, useState } from "react";
import back from '../assets/mainback.jpg'
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = (props) => {
    const [modal, dispatch] = useReducer(reducer, {
        active: false,
        content: 'cart'
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

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

                <div className={module.main}>
                    <h1 className={module.text1}>Главная</h1>

                    <p className={module.text2}>Ничё ещё нет</p>

                    <p className={module.pp}></p>
                        {/* <Slider {...settings}>
                            <div className={module.slider1}>
                                <img src="https://d1zdxptf8tk3f9.cloudfront.net/ckeditor_assets/pictures/2601/content_collector_portfolio_page-3bdc29db3cf5c9e27186b38a9c86e2e4a81870fce77ec4a456a47949102db6bf.jpg" alt="Image 1" />
                            </div>
                            <div className={module.slider2}>
                                <img src="https://i.pinimg.com/564x/2c/5a/dd/2c5adda9ecff0b755eaa1c4eb1d0b824.jpg" alt="Image 2" />
                            </div>
                        </Slider> */}
                </div>

            )
        else
            return (
                <div className={module.main}>
                    Главная страница
                    <div>Вам нужно подтвердить почту</div>
                    <div onClick={signOut}>
                        <Button text='Выйти с аккаунта' />
                    </div>
                </div>
            )
    } else {
        return (
            <div className={module.main}>
                <h1 className={module.text1}>Главная</h1>

                <p className={module.text2}>Ничё ещё нет</p>

                <p className={module.pp}></p>

                {/* <Slider {...settings}>
                    <div className={module.slider1}>
                        <img src="https://d1zdxptf8tk3f9.cloudfront.net/ckeditor_assets/pictures/2601/content_collector_portfolio_page-3bdc29db3cf5c9e27186b38a9c86e2e4a81870fce77ec4a456a47949102db6bf.jpg" alt="Image 1" />
                    </div>
                    <div className={module.slider2}>
                        <img src="https://i.pinimg.com/564x/2c/5a/dd/2c5adda9ecff0b755eaa1c4eb1d0b824.jpg" alt="Image 2" />
                    </div>
                </Slider> */}
            </div>
        )
    }
};

export default Main;