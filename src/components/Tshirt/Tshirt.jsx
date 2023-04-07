import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt,handleAddToCart}) => {
    const {picture,name,price}=tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>Name Of Shirt: {name}</h4>
            <h4>Price Of Shirt: {price}</h4>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Me Now</button>
        </div>
    );
};

export default Tshirt;