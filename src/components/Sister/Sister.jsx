import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money,setMoney]=useContext(MoneyContext);
    return (
        <div>
            <p>sister</p>
            <p><small>GrandpaMoney:{money}</small></p>
        </div>
    );
};

export default Sister;