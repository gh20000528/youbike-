import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './page/home/Home'
import News from './page/News'
import Navbar from './components/navbar/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/news' element={<News/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
