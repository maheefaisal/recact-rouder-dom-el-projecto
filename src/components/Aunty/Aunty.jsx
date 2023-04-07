import React from 'react';
import Couin from '../Cousin/Couin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h4> aunty </h4>
            <section className="flex"> 
                <Couin>Joob</Couin>
                <Couin hasFriend={true} ring={ring}>Moob</Couin>
            </section>
        </div>
    );
};

export default Aunty;