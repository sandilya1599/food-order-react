import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Header.module.css';
import { Button } from 'react-bootstrap';

function FinishOrder(props) {
    const order = () => {
        console.log("Ordering");
        props.closeHandler();
    }

    const portalDiv = document.getElementById("test");
    const backdropDiv = document.getElementById("background");

    const getTotal = function() {
        var totalAmount = 0;
        props.displayItems.forEach(meal => {
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
                                } else{
                                    return <React.Fragment key={meal.key}></React.Fragment>;
                                }
                            }
                        )
                    }
                    <b> Total: &nbsp; ${getTotal()}</b>
                    <br/>
                    <Button onClick={order} className='ml-1 mt-1' variant='success'>Order</Button>
                    &nbsp;
                    <Button onClick={props.closeHandler} className='mr-1 mt-1' variant='danger'>Close</Button>
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