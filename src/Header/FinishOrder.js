import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Header.module.css';

function FinishOrder(props) {
    const order = () => {
        console.log("Ordering");
        props.closeHandler();
    }

    const portalDiv = document.getElementById("test");
    const backdropDiv = document.getElementById("background");

    const getTotal = function() {
        var totalAmount = 0;
        props.displayItems.map(meal => {
            totalAmount += meal.amount*parseFloat(meal.price.substring(1));
        });
        return totalAmount;
    }

    const PopUpDiv = function () {
        return (
            <div className={classes.popup}>
                {/* These will be in a loop */}
                <div className={classes.popupContent}>
                    {
                        props.displayItems.map(
                            meal => {
                                if (meal.amount !== 0) {
                                    return <React.Fragment key={meal.key}>
                                        <b>{meal.name}</b>
                                        <br/>
                                        <b>${meal.amount*parseFloat(meal.price.substring(1))}</b>
                                        <hr/>
                                    </React.Fragment>
                                }
                            }
                        )
                    }
                    <b> Total: {getTotal()}</b>
                    <br/>
                    <button onClick={props.closeHandler}>Close</button>
                    <button onClick={order}>Order</button>
                </div>
            </div>
        );
    };

    function BackDrop() {
        return (
            <div className={classes.backdrop}>
            </div>
        );
    }

    return (
        <>
            {
                ReactDOM.createPortal(<BackDrop />, backdropDiv)
            }
            {
                ReactDOM.createPortal(<PopUpDiv />, portalDiv)
            }
        </>
    );

}
export default FinishOrder;