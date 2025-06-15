import React from 'react';
import  './FinNavBar.css'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SummarizeIcon from '@mui/icons-material/Summarize';
import HistoryIcon from '@mui/icons-material/History';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';

function Fin_NavBar() {
  return (
    <div>
        <nav className="top-navbar">
        <ul className="nav-list">
            <li className="nav-item">
                <Link to ="mainHome " className="nav-link">
                    <HomeIcon />
                    <span>Home</span>
                </Link>
            </li>
            <li className="nav-item">
            <Link to ="/Fin_nav_Login" className="nav-link">
                    <MenuIcon/>
                    <span>Menu</span>
            </Link>
            </li>
            <li className="nav-item active">
            <Link to ="/Fin_nav_Rq_form" className="nav-link">  
                    <SummarizeIcon/>
                    <span>Payment Requests </span>
            </Link >   
            </li>
            <li className="nav-item">
            <Link to ="/Fin_nav_History" className="nav-link">  
                <HistoryIcon/>
                    <span>History</span>
                </Link>
            </li>
            <li className="nav-item">
            <Link to ="/user_details" className="nav-link">  
                <ManageAccountsIcon/>
                    <span>User Details</span>
                </Link>
            </li>
            
        </ul>
    </nav>

      
    </div>
  )
}

export default Fin_NavBar
