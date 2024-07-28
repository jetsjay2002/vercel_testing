import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import AppointmentHeader from '../../../Components/Co-Ordinator/AppointmentWaitingForApproval/AppointmentHeader/AppointmentHeader'
import AppointmentBody from '../../../Components/Co-Ordinator/AppointmentWaitingForApproval/AppointmentBody/AppointmentBody'
import NavbarBody from '../../../Components/Co-Ordinator/NavBarBody'
import PatientListHeader from '../../../Components/Co-Ordinator/PatientList/PatientListHeader/PatientListHeader'
import { ReplyProvider } from '../../../Components/TreatmentPlan/Chat/ReplyContext'
function AppointmentWaitingPage() {
  return (
        <ReplyProvider>
          <div className="header" >
            <PatientListHeader />
          </div>
          <div className="home">
            <NavbarBody />
            <AppointmentBody />
            {/* <PatientList /> */}
          </div>
            
        </ReplyProvider>
  )
}

export default AppointmentWaitingPage
