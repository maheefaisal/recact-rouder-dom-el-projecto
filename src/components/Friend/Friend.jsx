import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <p>Firend</p>
            {ring&& <p><small>ring:diamond</small></p>}
        </div>
    );
};

export default Friend;