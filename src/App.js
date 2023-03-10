import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import PortFolio from './pages/PortFolio';

const initialState = {
  selectPort: 1,
  portfolio:
  [
  {
    id:1,
    title: "첫번째포폴",
    content: ["1_포폴내용1","1_포폴내용2","1_포폴내용3","1_포폴내용4"]
  },
  {
    id:2,
    title: "두번째포폴",
    content: ["2_포폴내용1","2_포폴내용2","2_포폴내용3"]
  },
  {
    id:3,
    title: "세번째포폴",
    content: ["3_포폴내용1","3_포폴내용2","3_포폴내용3","3_포폴내용4"]
  },
  {
    id:4,
    title: "네번째포폴",
    content: ["4_포폴내용1","4_포폴내용2","4_포폴내용3","4_포폴내용4"]
  }

]}
function App() {
  const [appportfolio, setportfolio] = useState(initialState)
  const { selectPort } = appportfolio
  const { content } = appportfolio.portfolio.find(port=> port.id === appportfolio.selectPort)
  return (
    <BrowserRouter>
    <div className="App">
      {/* 왼쪽고정메뉴 */}
      <Menu appportfolio={appportfolio} setportfolio={setportfolio}/>
      {/* 내용페이지 */}
      <div className='container'>
        <Routes>
          <Route path="/" element={<PortFolio portfolio={content} selectPort={selectPort} setportfolio={setportfolio}/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
