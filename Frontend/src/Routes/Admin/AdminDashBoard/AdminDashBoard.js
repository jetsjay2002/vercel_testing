import AdminHeader from '../../../Components/AdminManagement/AdminHeader/AdminHeader';
import AdminPanel from '../../../Components/AdminManagement/AdminMange/AdminPanel';
import './AdminDashBoard.css'

function AdminDashBoard(){
    return (
        <div className="App">
            {/* <AdminPanel /> */}
          
            <AdminHeader />
            <AdminPanel />
            
        </div>
    )
}


export default AdminDashBoard;