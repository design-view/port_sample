import React from 'react';


const Right = ({rightref,selectPort}) => {
    return (
        <div className='right' ref={rightref}>
            <div className='sec'>{selectPort}_영역1</div>
            <div className='sec'>{selectPort}_영역2</div>
            <div className='sec'>{selectPort}_영역3</div>
            <div className='sec'>{selectPort}_영역4</div>
        </div>
    );
};

export default Right;