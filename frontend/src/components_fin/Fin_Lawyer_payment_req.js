import React, { useState, useEffect } from 'react';
import Fin_NavBar from './Fin_NavBar';
import Footer from '../components_home/Home_Footer';
import HomeNavbar from '../components_home/Home_NavBar';
import axios from "axios";
import Fin_lawyer_payment_add from './Fin_lawyer_payment_add';  // Ensure this import is correct

const URL = "http://localhost:8070/PaymentReq/PaymentReqs";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);  // Directly returns the array
}

function Fin_Lawyer_payment_req() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data));  // Directly set the array to state
  }, []);

  return (
    <div>
      
      <HomeNavbar/>
      <Fin_NavBar />
      <h1>Payment Requests Display</h1>
      <div>
        {users && users.map((user, i) => (
          <Fin_lawyer_payment_add key={i} user={user} />  // Pass user data as prop
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Fin_Lawyer_payment_req;
