import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault(); 
        const stringEnteredAmount = amountInputRef.current.value;
        const intEnteredAmount = +stringEnteredAmount;
        if (stringEnteredAmount.trim().length === 0 || intEnteredAmount < 1 || intEnteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(intEnteredAmount);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Plrease enter a valid amount(1-5).</p>}
        </form>
    );
}

export default MealItemForm;