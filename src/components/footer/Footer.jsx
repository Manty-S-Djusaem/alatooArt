import React from 'react';
import module from './Footer.module.scss'
import phone_icon from '../assets/phone_icons.png'
import email_icon from '../assets/email_icons.png'
import location_icon from '../assets/location_icons.png'
import inst from '../assets/instag.png'
import tg from '../assets/teleg.png'
import ut from '../assets/face.png'
import discord from '../assets/discord.png'
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <footer>
            <div className={module.container}>
                <div className={module.contacts}>
                    <div className={module.company}>
                        <h4>Компания</h4>
                        <li> <Link to='/shop-template/about'>О нас</Link></li>
                        <li> <Link to='/shop-template/oferta'>Оферта</Link></li>
                    </div>
                    {/* <div className={module.customers}>

                       <h4>Покупателям </h4>
                            <li>Как оформить заказ</li>
                            <li>Условия доставки</li>
                       
                    </div> */}



                    <div className={module.our_conts}>
                        <h4> Наши контакты </h4>
                        <li className={module.phone_num}>  <p> <img id={module.phone_icon} src={phone_icon}></img> +996 (555)(555)(555) </p></li>
                        <li className={module.phone_num}> <p> <img id={module.email_icon} src={email_icon}></img>  ala-too-art@gmail.com  </p> </li>
                        <li className={module.phone_num}> <p> <img id={module.location_icon} src={location_icon}></img> ул. Пушкина </p> </li>

                    </div>
                    {/* <div className={module.line}></div> */}

                    {/* <div>
                    <ul>
                        <li>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span class="fa fa-discord"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://steamcommunity.com/id/djusay/">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span class="fa fa-steam"></span>
                            </a>
                        </li>
                    </ul>
                </div> */}
                </div>
                {/* <div>
                    <img id={module.icon} src={discord}></img>
                    <img id={module.icon} src={tg}></img>
                    <img id={module.icon} src={ut}></img>
                </div> */}

            </div>

        </footer>
    );
}

export default Footer;