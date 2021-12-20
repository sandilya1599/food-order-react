import React from 'react';
import Meal from './Meal/Meal';
import styles from './Meals.module.css';

function Meals(props) {
    return (
        <div className={styles.meals}>
                    {
                        props.mealsList.map(meal =>
                            <Meal
                                name={meal.name}
                                description={meal.description}
                                price={meal.price}
                                amount={meal.amount}
                                key={meal.key}
                                dispatchFunc={props.dispatcherToCall}
                                index={meal.key}
                            />
                        )
                    }
        </div>
    );
}

export default Meals;