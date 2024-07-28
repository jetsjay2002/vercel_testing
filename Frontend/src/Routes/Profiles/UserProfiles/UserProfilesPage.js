import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientListHeader from '../../../Components/Co-Ordinator/PatientList/PatientListHeader/PatientListHeader'
import NavbarBody from '../../../Components/Co-Ordinator/NavBarBody'
import UserProfiles from '../../../Components/Profiles/UserProfiles'


function UserProfilesPage() {
  return (
        <>
          <div className="header" >
            <PatientListHeader />
          </div>
          <div className="home">
            <NavbarBody />
            <UserProfiles />
            {/* <PatientList /> */}
          </div>
        </>
  )
}

export default UserProfilesPage
