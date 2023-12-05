import React from 'react';
import module from './about.module.scss';
import frame from '../assets/frame.png';
function about(props) {
    return (
        <div className={module.account_box}>
            <div >
           <h1>О НАС </h1>
           <h3> Это современный магазин, предлагающий широкий ассортимент товаров для творческой и художественной деятельности.  Наша администрация и сотруднический состав, всегда рада вас приветсвовать в нашем магазине для оказания услуг в приобретении товаров нашего сегмента. </h3>
           </div>
           <div> <img src={frame}></img> </div>
        </div>
    );
}

export default about;