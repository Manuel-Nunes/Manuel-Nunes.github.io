import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import "./index.css";
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import CatShowCase from './Screens/CatShowCase';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/CatShowCase' element={<CatShowCase/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
