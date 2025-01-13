/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./utils/utils";
import ContactUs from "./components/Contact Us/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<ContactUs />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;