import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

// import PatientDetails from '../../Components/Registration/SignUp/PatientDetails'
// import PatientList from '../../../Components/Co-Ordinator/PatientList'
import PatientListHeader from '../../../Components/Co-Ordinator/PatientList/PatientListHeader/PatientListHeader'
import PatientListBody from '../../../Components/Co-Ordinator/PatientList/PatientListBody/PatientListBody'
import NavbarBody from '../../../Components/Co-Ordinator/NavBarBody'

function PatientListPage() {
  return (
        <>
          <div className="header" >
            <PatientListHeader />
          </div>
          <div className="home">
            <NavbarBody />
            <PatientListBody />
            {/* <PatientList /> */}
          </div>
            
        </>
  )
}

export default PatientListPage
