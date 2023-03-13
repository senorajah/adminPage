import React from 'react'
import './Home.css'
//components
import Sidebar from '../sidebar/sidebar'
import Calendar from '../components/calendar/calendar';
import Balance from '../components/balance/balance';
import Employees from '../components/employees/employees';
import RecentEmails from '../components/recentEmails/recentEmails';

export default function Home() {
  return (
    <div className='home'>
       
            <h1>HELLO, ADMIN!</h1>
            <Sidebar />
            <Balance />
            <Calendar />
            <Employees />
            <RecentEmails />  
    </div>
  )
}


