import React,{useRef} from 'react';
import Left from '../components/Left';
import Right from '../components/Right';

const PortFolio = ({setportfolio, portfolio, selectPort} ) => {
    const rightref = useRef()
    const handleTop = (num) => {
      rightref.current.scrollTo({
        top: num,
        behavior: "smooth"
      });
    }
    return (
        <div className='portFolio'>
           <Left handleTop={handleTop} setportfolio={setportfolio} portfolio={portfolio} />
           <Right rightref={rightref} selectPort={selectPort}/> 
        </div>
    );
};

export default PortFolio;