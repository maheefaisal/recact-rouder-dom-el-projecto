import React, { useContext } from 'react';
import Couin from '../Cousin/Couin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney]= useContext(MoneyContext);
    return (
        <div>
            <h5>This is uncle</h5>
            <p><small>grandpa money:{money}</small></p>
            <button onClick={()=>setMoney(money+1000)}>Send $1000</button>
            <section className='flex'>
                <Couin>Noob</Couin>
                <Couin>Koob</Couin>
            </section>
        </div>
    );
};

export default Uncle;