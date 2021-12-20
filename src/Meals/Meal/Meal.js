import styles from './Meal.module.css';
import {useEffect, useState} from 'react';
function Meals(props) {

    const [amount, setAmount] = useState(0);

    var updateAmountAdd = event => {
        setAmount(prevAmount => {
            return prevAmount + 1;
        });
    }

    var updateAmount = event => {
        if(isNaN(parseInt(event.target.value))){
            setAmount(0);
        }
        else{
            setAmount(parseInt(event.target.value));
        }
    }

    useEffect(() => {
        props.dispatchFunc(props.index, amount);
    },[props.index, amount]);

    return (
        <>
            <div className={styles.meal}>
                <div>
                    <b>{props.name}</b><br />
                    <i>{props.description}</i><br />
                    <b>{props.price}</b><br />
                </div>
                <div className={styles["meal-amount"]}>
                    <label><b>Amount</b></label>&nbsp;
                    <input type="text" value={amount} onChange={updateAmount} min={0}/> <br />
                    <button onClick={updateAmountAdd}>Add</button>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Meals;