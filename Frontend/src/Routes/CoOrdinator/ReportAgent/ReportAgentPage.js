import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientListHeader from '../../../Components/Co-Ordinator/PatientList/PatientListHeader/PatientListHeader'
// import ReschedulingWaitingBody from '../../../Components/Co-Ordinator/ReschedulingWaitingForApproval/ReschedulingWating/ReschedulingWaitingBody'
import NavbarBody from '../../../Components/Co-Ordinator/NavBarBody'
import ReportAgent from '../../../Components/Co-Ordinator/ReportAgent/ReportAgent'

function ReportAgentPage() {
  return (
        <>
          <div className="header" >
            <PatientListHeader />
          </div>
          <div className="home">
            <NavbarBody />
            <ReportAgent />
            {/* <PatientList /> */}
          </div>
        </>
  )
}

export default ReportAgentPage
