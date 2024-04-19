import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import LeadGeneration from "./components/LeadGeneration";
import Testimonial from "./components/Testimonial";
import FeaturesSection from "./components/FeaturesSection";
import StepsSection from "./components/StepsSection";
import CtaBanner from "./components/CtaBanner";
import FAQsSection from "./components/FAQsSection";
import Footer from "./components/Footer";

function App() {


  return (
    <Router>

      {/* main-area */}
      <div className="w-full overflow-x-hidden overflow-y-auto sm:overflow-y-hidden">

        <div className="relative h-full flex items-center justify-center p-2">
          <Routes>
            {/* <Route path="/" element={<Header />} exact /> */}
            {/* <Route path="/" element={<Header />} exact /> */}
            {/* <Route path="/" element={<LeadGeneration />} exact /> */}
            {/* <Route path="/" element={<Testimonial />} exact /> */}
            {/* <Route path="/" element={<FeaturesSection />} exact /> */}
            {/* <Route path="/" element={<StepsSection />} exact /> */}
            {/* <Route path="/" element={<CtaBanner />} exact /> */}
            {/* <Route path="/" element={<FAQsSection />} exact /> */}
            <Route path="/" element={<Footer />} exact />
          </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;
