import React from 'react';

const Left = ({handleTop,portfolio }) => {
   const winh = window.innerHeight;
   console.log(winh)
    return (
        <div className='left'>
            <ul>
                {portfolio.map((port,index)=><li key={index} onClick={()=>handleTop(index*winh)}>{port}</li>)}
            </ul>
        </div>
    );
};

export default Left;