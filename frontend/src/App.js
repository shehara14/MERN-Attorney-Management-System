import './components_home/common.css';
import './components_home/home.css';
import './components_login/login.css';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './components_home/Home';
import Login from './components_login/login';
import ApmDashboard from './components_apm/Apm_Dashboard';

import Atm_Dashboard from './components_atm/Atm_Dashboard';
import Atm_LawFrim_Add from './components_atm/Atm_LawFrim/Atm_LawFrim_Add';
import Atm_LawFirm_Details from './components_atm/Atm_LawFrim/Atm_LawFirm_Details';
import Atm_Lawyer_Display from'./components_atm/Atm_Lawyer_Details/Atm_Lawyer_Display';
import Atm_Lawyer_Update from './components_atm/Atm_Lawyer_Update';
import Atm_Lawyer_Delete from'./components_atm/Atm_Lawyer_Details/Atm_Lawyer_Delete';
import Atm_LawFirm_Update from'./components_atm/Atm_LawFrim/Atm_LawFirm_Update';
import ViewUserDetails from './components_atm/ViewUserDetails';
import Atm_LawyerRegForm from './components_atm/Atm_LawyerRegistration/Atm_LawyerRegForm';


function App() {
  return (
    <Router>
      <div>
        <Routes>

        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="apm_dashboard" exact element={<ApmDashboard/>}/>

        <Route path="/attorney-manager-dashboard" exact element={<Atm_Dashboard/>}/>
    
        <Route path="/add-lawfrim" exact element={<Atm_LawFrim_Add/>}/>
        
        <Route path="Atm_LawFirm_Details_Dipsply" exact element={<Atm_LawFirm_Details/>}/>
        <Route path="/lawfirm/details" element={<Atm_LawFirm_Details />} />
        <Route path="/lawfirm/update/:id" element={<Atm_LawFirm_Update />} />
        <Route path="/lawyer-details" exact element={<Atm_Lawyer_Display/>}/>
        <Route path="/update-lawyer/:id" element={<Atm_Lawyer_Update />} />
        <Route path="/delete-lawyer/:id" element={<Atm_Lawyer_Delete />} />
        <Route path="/user_details/:id"  element={<ViewUserDetails />} />
        <Route path="/add_lawyer" element={<Atm_LawyerRegForm />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
