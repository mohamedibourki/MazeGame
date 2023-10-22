import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from './Starting.js';
import Game from './Game.js';
import NoPage from './NoPage.js';
import Game2 from './Game2.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path="/GameLevel1" element={<Game />} />
          <Route path="/GameLevel2" element={<Game2 />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;