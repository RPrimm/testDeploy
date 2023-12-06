
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import ClinicianDashboard from "./pages/Clinician";
import DesignerDashboard from "./pages/Designer";

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/clinician" exact Component={ClinicianDashboard} />
          <Route path="/designer" exact Component={DesignerDashboard} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
