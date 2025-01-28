import React from "react";
import Category from "./Category";
import Category2 from "./Category2";
import Navbar from "./Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index="true" element={<category/>}/>
      <Route path='/:id' element={<category2/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
    
    
    
  );
}

export default App;
