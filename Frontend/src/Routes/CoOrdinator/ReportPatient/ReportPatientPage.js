import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientListHeader from '../../../Components/Co-Ordinator/PatientList/PatientListHeader/PatientListHeader'
import NavbarBody from '../../../Components/Co-Ordinator/NavBarBody'
import ReportPatient from '../../../Components/Co-Ordinator/ReportPatient/ReportPatient'

function ReportPatientPage() {
  return (
        <>
          <div className="header" >
            <PatientListHeader />
          </div>
          <div className="home">
            <NavbarBody />
            <ReportPatient />
            {/* <PatientList /> */}
          </div>
            
        </>
  )
}

export default ReportPatientPage
