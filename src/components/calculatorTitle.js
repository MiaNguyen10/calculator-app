import React from 'react';
import "./style.css"

const CalculatorTitle = (props) => {
    return (
        <div className='calculator-title'>
            {props.value}
        </div>
    );
};

export default CalculatorTitle;