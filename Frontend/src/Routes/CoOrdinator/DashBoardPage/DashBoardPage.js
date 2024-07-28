import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientListHeader from '../../../Components/Co-Ordinator/PatientList/PatientListHeader/PatientListHeader'
// import ReschedulingWaitingBody from '../../../Components/Co-Ordinator/ReschedulingWaitingForApproval/ReschedulingWating/ReschedulingWaitingBody'
import NavbarBody from '../../../Components/Co-Ordinator/NavBarBody'
// import ReportAgent from '../../../Components/Co-Ordinator/ReportAgent/ReportAgent'
import DashBoard from '../../../Components/Co-Ordinator/DashBoard/DashBoard'
import SideBar from '../../../Components/Co-Ordinator/SideBar'


function DashBoardPage() {
  return (
        <>
          <div className="header" >
            <PatientListHeader />
          </div>
          <div className="home">
            {/* <SideBar /> */}
            <NavbarBody />
            <DashBoard />
            {/* <PatientList /> */}
          </div>
        </>
  )
}

export default DashBoardPage
