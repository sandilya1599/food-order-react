import React from 'react';
import img from './meals.jpg';
import sty from './Content.module.css';

function Content() {
    return (
        <div>
            <div className={sty.summary}>
                <h2> Good Food, Delivered to you</h2>
                <p> Choose your favourite meals from a selection of meals and enjoy a delicious meal at the favour of home.</p>
                <p> All of our meals are prepared with high quality ingredients, just-in-time and of course by great chefs.</p>
            </div>
            <div className={sty.im}>
                <img src={img} alt="Nope"/>
            </div>
        </div>
    )
}
export default React.memo(Content);