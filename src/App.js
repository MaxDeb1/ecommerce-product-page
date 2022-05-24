import React from 'react';
import { Hashrouter, Routes, Route } from "react-router-dom";
/** Layouts **/
import MainLayout from './layouts/MainLayout';
/** Components **/
import Men from './pages/Men';
import Women from "./pages/Women";
import About from './pages/About';
import Contact from './pages/Contact';
import Collections from './pages/Collections';


function App() {
  return (
    <div className='App'>
      <Hashrouter basename="{.}">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Collections />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/men" element={<Men />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/women" element={<Women />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/about" element={<About />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Hashrouter>
    </div>
  );
}

export default App;
