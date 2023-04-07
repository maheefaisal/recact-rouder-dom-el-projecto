import React from 'react';
import Couin from '../Cousin/Couin';

const Uncle = () => {
    return (
        <div>
            <h5>This is uncle</h5>
            <section className='flex'>
                <Couin>Noob</Couin>
                <Couin>Koob</Couin>
            </section>
        </div>
    );
};

export default Uncle;