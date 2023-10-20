import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from './Starting.js';
import Game from './Game.js';
import NoPage from './NoPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path="/Game" element={<Game />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;