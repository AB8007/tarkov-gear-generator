import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/app.css'
import { MainComponent } from './comps/MainComponent.jsx';
import { Titlebar } from './comps/Titlebar.jsx';
import { Info } from './pages/Info.jsx';
import { FAQ } from './pages/FAQ.jsx';
import '/fonts/bender.otf'

function App() {
  return (
    <div className='body'>
    <BrowserRouter>
<<<<<<< HEAD
    <Titlebar/>
=======
>>>>>>> 74e9dcf83178707c3c0158ecd8868dab7100b678
    <div className='page'>
      <div className='main'>
        <Routes>
        <Route path="/" element={<MainComponent/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App