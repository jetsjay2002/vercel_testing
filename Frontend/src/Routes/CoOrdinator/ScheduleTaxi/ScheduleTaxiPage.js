import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientListHeader from '../../../Components/Co-Ordinator/PatientList/PatientListHeader/PatientListHeader'
import NavbarBody from '../../../Components/Co-Ordinator/NavBarBody'
import ScheduleTaxi from '../../../Components/Rescheduling/TaxiBookingReschedule/ScheduleTaxi'

function ScheduleTaxiPage() {
  return (
        <>
          <div className="header" >
            <PatientListHeader />
          </div>
          <div className="home">
            <NavbarBody />
            <ScheduleTaxi />
          </div>
            
        </>
  )
}

export default ScheduleTaxiPage
