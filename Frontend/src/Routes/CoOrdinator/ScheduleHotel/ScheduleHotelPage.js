import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientListHeader from '../../../Components/Co-Ordinator/PatientList/PatientListHeader/PatientListHeader'
import NavbarBody from '../../../Components/Co-Ordinator/NavBarBody'
import ScheduleHotel from '../../../Components/Rescheduling/HotelBookingReschedule/ScheduleHotel'

function ScheduleHotelPage() {
  return (
        <>
          <div className="header" >
            <PatientListHeader />
          </div>
          <div className="home">
            <NavbarBody />
            <ScheduleHotel />
          </div>
            
        </>
  )
}

export default ScheduleHotelPage
