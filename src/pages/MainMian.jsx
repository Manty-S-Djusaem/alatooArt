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
                    <h1 className={module.text1}>AlaToo Art</h1>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                        <div style={{ width: '48%', border: '2px solid #000000', padding: '10px' }}>
                            <h4 className={module.text2}>AlaToo Art – это современный магазин товаров для творчества и хобби в Бишкеке.
                                <br />
                                <br />
                                Мы представляем широкий выбор товаров для самых разнообразных видов хобби:
                                <br />
                                скрапбукинг, декупаж, пэчворк, рисование, конструирование, детское творчество, вязание, шитье и многое другое.
                                <br />
                                <br />
                                Ассортимент магазина постоянно расширяется, а в продажу регулярно поступают новинки от лучших брендов.
                                <br />
                                <br />
                                Мы стараемся подбирать товары с учетом интересов клиентов различного уровня, как профессионалов, так новичков и любителей.
                            </h4>
                        </div>
                        <div style={{ width: '48%', border: '2px solid #000000', padding: '10px' }}>
                            <h4>
                                Неоспоримым достоинством "AlaToo Art" является оптимальное соотношение цены и качества.
                                Мы сотрудничаем с проверенными, зарекомендовавшими себя производителями и торговыми марками.
                                Заботясь о наших клиентах, мы стараемся сделать все, чтобы процесс выбора товара был максимально простым и удобным:
                            </h4>
                            <br />
                            <h4>
                                Магазин AlaToo Art работает по принципу самообслуживания, весь товар можно посмотреть и потрогать,
                                а в случае, если у вас возникнут вопросы, на них всегда с радостью ответят наши квалифицированные консультанты.
                            </h4>
                            <br />
                            <h4>
                                Ознакомиться со всем нашим ассортиментом и сделать заказ, вы можете не выходя из дома через наш интернет-магазин.
                            </h4>
                        </div>
                    </div>
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
                <h1 className={module.text1}>AlaToo Art</h1>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                    <div style={{ width: '48%', border: '2px solid #000000', padding: '10px' }}>
                        <h4 className={module.text2}>AlaToo Art – это современный магазин товаров для творчества и хобби в Бишкеке.
                            <br />
                            <br />
                            Мы представляем широкий выбор товаров для самых разнообразных видов хобби:
                            <br />
                            скрапбукинг, декупаж, пэчворк, рисование, конструирование, детское творчество, вязание, шитье и многое другое.
                            <br />
                            <br />
                            Ассортимент магазина постоянно расширяется, а в продажу регулярно поступают новинки от лучших брендов.
                            <br />
                            <br />
                            Мы стараемся подбирать товары с учетом интересов клиентов различного уровня, как профессионалов, так новичков и любителей.
                        </h4>
                    </div>
                    <div style={{ width: '48%', border: '2px solid #000000', padding: '10px' }}>
                        <h4>
                            Неоспоримым достоинством "AlaToo Art" является оптимальное соотношение цены и качества.
                            Мы сотрудничаем с проверенными, зарекомендовавшими себя производителями и торговыми марками.
                            Заботясь о наших клиентах, мы стараемся сделать все, чтобы процесс выбора товара был максимально простым и удобным:
                        </h4>
                        <br />
                        <h4>
                            Магазин AlaToo Art работает по принципу самообслуживания, весь товар можно посмотреть и потрогать,
                            а в случае, если у вас возникнут вопросы, на них всегда с радостью ответят наши квалифицированные консультанты.
                        </h4>
                        <br />
                        <h4>
                            Ознакомиться со всем нашим ассортиментом и сделать заказ, вы можете не выходя из дома через наш интернет-магазин.
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
};

export default Main;