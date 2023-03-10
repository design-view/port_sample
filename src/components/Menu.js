import React from 'react';

const Menu = ({appportfolio,setportfolio}) => {
    const {selectPort,portfolio} = appportfolio
    const onClick = (num) => {
        setportfolio({
            ...appportfolio,
            selectPort:num
        })
    }
    return (
        <div className='menu'>
            <ul className='listmenu'>
                {portfolio.map(port=>
                <li key={port.id} onClick={()=>onClick(port.id)}
                style={selectPort===port.id ? {background:"blue"} : null }>{port.title}</li>
                )}
            </ul>
            <ul className='pagemenu'>
                <li>다른페이지1</li>
                <li>다른페이지2</li>
                <li>다른페이지3</li>
            </ul>
        </div>
    );
};

export default Menu;