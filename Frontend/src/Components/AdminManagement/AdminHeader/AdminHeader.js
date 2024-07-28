import React from 'react'
import aitasi from '../AssetsAdmin/aitasi.png'
import './AdminHeader.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin'

function AdminHeader() {
  return (
    <div className='admin-header'>
        <div className='d-flex justify-content-around '>
            <div>
                <img src={aitasi} alt="" />
            </div>
            <div className='d-flex align-items-center'>
                <h2>(Admin) Andaman Medical Tourism</h2>
            </div>
            <div>
                <img src={aitasi} alt="" />
            </div>
        </div>
        <NavBarAdmin />
    </div>
  )
}

export default AdminHeader