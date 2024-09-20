import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/app.css';
import { Titlebar } from './Components/RenderUIElements/Titlebar.jsx';
import '/fonts/bender.otf';
import { MainComponent } from './Components/RenderUIElements/MainComponent.jsx';
import { Info } from './Components/Pages/Info.jsx';
import { FAQ } from './Components/Pages/FAQ.jsx';

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Titlebar />
        <div className='page'>
          <div className='main'>
            <Routes>
              <Route path='/' element={<MainComponent />} />
              <Route path='/info' element={<Info />} />
              <Route path='/faq' element={<FAQ />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
