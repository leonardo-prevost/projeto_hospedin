import React from "react";
import { 
    BrowserRouter as Router,
    Routes,
    Route 
} from 'react-router-dom';

import { Home } from "./pages/Home";
import { PayPages } from "./pages/PayPages";
import { FinishPage } from "./pages/FinishPage";

export default function Aways(){
    return (
       <Router>
           <Routes>
            <Route exact path="/" element={<Home />}/>
           
             <Route exact path='/PayPages' element={<PayPages />}/>

             <Route path="/FinishPage" element={<FinishPage />}/>
                  
            </Routes>
        </Router>
    );
}