import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientListHeader from '../../../Components/Co-Ordinator/PatientList/PatientListHeader/PatientListHeader'
import ReschedulingWaitingBody from '../../../Components/Co-Ordinator/ReschedulingWaitingForApproval/ReschedulingWating/ReschedulingWaitingBody'
import NavbarBody from '../../../Components/Co-Ordinator/NavBarBody'

function RescheduleWaitingPage() {
  return (
        <>
          <div className="header" >
            <PatientListHeader />
          </div>
          <div className="home">
            <NavbarBody />
            <ReschedulingWaitingBody />
            {/* <PatientList /> */}
          </div>
            
        </>
  )
}

export default RescheduleWaitingPage
