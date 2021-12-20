import classes from './Header.module.css';
import Badge from 'react-bootstrap/Badge';
import React, { useContext } from 'react';
import { useState } from 'react';
import FinishOrder from './FinishOrder';
import ItemsAdded from '../Context/ItemData';


function Header() {
    const [showFinishOrder, setOrderState] = useState(false);
    const itemsAdded = useContext(ItemsAdded);
    const amountOfItems = () => {
        var amount = 0;
        itemsAdded.forEach(element => {
            amount += element.amount;
        });
        return amount;
    }
    const cartClickHandler = function () {
        console.log("Entered click handler");
        if (amountOfItems() !== 0) {
            setOrderState(true);
        }
    }

    const closeHandler = function () {
        setOrderState(false);
    }
    return (
        <>
            {
                showFinishOrder && <FinishOrder closeHandler={closeHandler} displayItems={itemsAdded} />
            }
            <div className={classes.header}>
                <div className={classes.title}>
                    HelloMeals
                </div>
                <div className={classes.cart}>
                    <div className={classes["cart-button"]} onClick={cartClickHandler}>
                        Your Cart <Badge pill bg="success">
                            {amountOfItems()}
                        </Badge>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;