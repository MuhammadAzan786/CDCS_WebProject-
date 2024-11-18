import "./App.css";
import 'aos/dist/aos.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AOS from 'aos';
import AboutPage from "./Pages/About/AboutPage";
import BreadCrumbs from "./Components/BreadCrumbs";
import ContactPage from "./Pages/Contact/ContactPage";
import FAQsPage from "./Pages/FAQS/FAQsPage";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Home/HomePage";
import MissionPage from "./Pages/Mission/MissionPage";
import Navbar from "./Components/Navbar";
import OutsourcingPage from "./Pages/OutSourcing/OutsourcingPage";
import ServicePage from "./Pages/Services/ServicePage";
import SideBarNav from "./Components/SideBarNav";
import StrategyPage from "./Pages/Strategy/StrategyPage";
import TermConditions from './Pages/TermsConditions/TermConditionPgae'
import reactLogo from "./assets/react.svg";
import { useEffect } from 'react';
import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        
        <Route path="/" element={<HomePage />} />
   
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/our-strategy" element={<StrategyPage />} />
        <Route path="/outsourcing" element={<OutsourcingPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/term-conditions" element={<TermConditions/>}/>
        <Route path="/faqs" element={<FAQsPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
