import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";

function App() {


  return (
    <Router>

      {/* main-area */}
      <div className="w-full overflow-x-hidden overflow-y-auto sm:overflow-y-hidden">

        <div className="relative h-full flex items-center justify-center p-2">
          <Routes>
            <Route path="/" element={<Header />} exact />
          </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;
