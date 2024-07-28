import './App.css';
// import LoginSignup from './Components/LoginSignup/LoginSignup';
// import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Patient/Home/Home';
import Login from './Components/Registration/Login/Login';
import SignUp from './Routes/Patient/Register/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactInformation from './Components/Registration/SignUp/ContactInformation';
import PatientDetails from './Components/Registration/SignUp/PatientDetails';
import PackagePage from './Routes/Patient/PackageSelection/PackagePage';
import DoctorRecommededPage from './Routes/Patient/DoctorSelection/DoctorRecommededPage';
import PackageDetailsPage from './Routes/Patient/PackageSelection/PackageDetailsPage';
import MedicalTreatmentPage from './Routes/Patient/Request/MedicalTreatmentPage';
import DoctorSelectPage from './Routes/Patient/DoctorSelection/DoctorSelectPage';
import DoctorDetailsPage from './Routes/Patient/DoctorSelection/DoctorDetailsPage';
import ProcedureRequest from './Components/PackageDoctor/Request/ProcedureRequest';
import ProcessTreatmentPlanPage from './Routes/Patient/ProcessWaiting/ProcessTreatmentPlanPage';
import ChatPage from './Routes/Patient/ChatPage';
import PatientMedicalConditions from './Components/Registration/SignUp/PatientMedicalConditions';
import TravelDetailsPage from './Routes/Patient/Request/TravelDetailsPage';
// import HotelComponent from './Components/Travel/Hotel/HotelComponent';
import ProcessTravelPage from './Routes/Patient/ProcessWaiting/ProcessTravelPage';
import OnBoardPage from './Routes/Patient/ConfirmTravel/OnBoardPage';
import StatusOnBoardPage from './Routes/Patient/ConfirmTravel/StatusOnBoardPage';
import NotifyPlanPage from './Routes/Patient/NotifyPlan/NotifyPlanPage';
import DecisionNewPlanPage from './Routes/Patient/DecisionNewPlan/DecisionNewPlanPage';
import DuringTreatmentPlanPage from './Routes/Patient/DuringTreatmentPlan/DuringTreatmentPlanPage';
import ServiceRatingPage from './Routes/Patient/ServiceRating/ServiceRatingPage';
import DeparturePage from './Routes/Patient/DepartureAirport/DeparturePage';
import ClinicRatingPage from './Routes/Patient/ClinicRating/ClinicRatingPage';
import CreatePatientPage from './Routes/Agent/CreatePatientPage.js/CreatePatientPage';
import PatientListPage from './Routes/CoOrdinator/PatientList/PatientListPage';
import AdminDashBoard from './Routes/Admin/AdminDashBoard/AdminDashBoard';
import AppointmentWaitingPage from './Routes/CoOrdinator/AppointmentWaiting/AppointmentWaitingPage';
import RescheduleWaitingPage from './Routes/CoOrdinator/RescheduleWaiting/RescheduleWaitingPage';
import ScheduleTaxiPage from './Routes/CoOrdinator/ScheduleTaxi/ScheduleTaxiPage';
import ScheduleHotelPage from './Routes/CoOrdinator/ScheduleHotel/ScheduleHotelPage';
import ReportPatientPage from './Routes/CoOrdinator/ReportPatient/ReportPatientPage';
import ReportAgentPage from './Routes/CoOrdinator/ReportAgent/ReportAgentPage';
import SingupAgentPage from './Routes/Agent/SignupAgent/SignupAgentPage';
import EmergencyContact from './Components/Registration/SignUp/EmergencyContact';
import TravelCancelPage from './Routes/Patient/TravelCancel/TravelCancelPage';
import TravelDelayPage from './Routes/Patient/TravelDelay/TravelDelayPage';
import { ReplyProvider } from './Components/TreatmentPlan/Chat/ReplyContext';
import DashBoardPage from './Routes/CoOrdinator/DashBoardPage/DashBoardPage';
import UserProfilesPage from './Routes/Profiles/UserProfiles/UserProfilesPage';
import ActiveUsers from 'Routes/Patient/Home/ActiveUsers';
const App = () => {
  return (
    <div className='App'>
      <div>
      <Routes>

      <Route path="/agent"  element={<CreatePatientPage />}/>

        <Route path="/active"  element={<ActiveUsers />}/>

        {/* page 1 */}
        <Route path="/login"  element={<Login/>}/>
        {/* signup */}
        <Route path="/signup"  element={<SignUp />}/>
        <Route path="/signup2"  element={<PatientDetails />}/>
        <Route path="/signup3"  element={<ContactInformation />}/>
        <Route path="/signup4"  element={<EmergencyContact />}/>
        <Route path="/signup5"  element={<PatientMedicalConditions />}/>


        {/* Home */}
        <Route path="/home"  element={<Home/>}/>

        {/* Package Selection */}
        <Route path="/package"  element={<PackagePage/>}/>
        <Route path="/packagedetails"  element={<PackageDetailsPage/>}/>

        {/* Medical Treatment Request */}
        <Route path="/medicaltreatment"  element={<MedicalTreatmentPage />}/>

        {/* Doctor Selection */}
        <Route path="/doctorrecommended"  element={<DoctorRecommededPage />}/>
        <Route path="/doctorselect"  element={<DoctorSelectPage />}/>

        {/* Doctor Detail */}
        <Route path="/doctordetails"  element={<DoctorDetailsPage />}/>

        {/* Procedure Request (Appointment Request) */}
        <Route path="/procedurerequest"  element={<ProcedureRequest />}/>

        {/* Process of treatment plan waiting */}
        <Route path="/processtreatment"  element={<ProcessTreatmentPlanPage />}/>
        {/* Process of travel waiting */}
        <Route path="/processtravel"  element={<ProcessTravelPage />}/>

        {/* Chat to discuss between co-ordinator and patient/agent */}
        <Route path="/chat"  element={<ChatPage />}/>

        {/* This Page is fill in the form about Travel Detail */}
        <Route path="/traveldetails"  element={<TravelDetailsPage />}/>


        {/* <Route path="/hotel"  element={<HotelComponent />}/> */}


        <Route path="/onboard"  element={<OnBoardPage />}/>

        <Route path="/statusonboard"  element={<StatusOnBoardPage />}/>

        {/* <Route path="/ttt"  element={<ArrivalFlight />}/> */}
        <Route path="/notify"  element={<NotifyPlanPage />}/>

        <Route path="/decision"  element={<DecisionNewPlanPage />}/>

        <Route path="/during"  element={<DuringTreatmentPlanPage />}/>

        <Route path="/servicerating"  element={<ServiceRatingPage />}/>
        <Route path="/clinicrating"  element={<ClinicRatingPage />}/>
        <Route path="/departure"  element={<DeparturePage />}/>

        <Route path="/travelcancel"  element={<TravelCancelPage />}/>
        <Route path="/traveldelay"  element={<TravelDelayPage />}/>



        {/* ------------------------------------ */}
        <Route path="/patientlist"  element={<PatientListPage />}/>
        <Route path="/appointmentwaiting"  element={<AppointmentWaitingPage />}/>
        <Route path="/reschedulewaiting"  element={<RescheduleWaitingPage />}/>
        <Route path="/scheduletaxi"  element={<ScheduleTaxiPage />}/>
        <Route path="/schedulehotel"  element={<ScheduleHotelPage />}/>

        <Route path="/reportagent"  element={<ReportAgentPage />}/>
        <Route path="/reportpatient"  element={<ReportPatientPage />}/>
        <Route path="/dashboard"  element={<DashBoardPage />}/>

        {/* ------------------------------------ */}
        <Route path="/admin"  element={<AdminDashBoard />}/>

        <Route path="/signupagent"  element={<SingupAgentPage />}/>

        {/* ------------------------------------ */}

        <Route path="/profiles"  element={<UserProfilesPage />}/>



      </Routes>
      </div>
      

    </div>
  );
  // <div className='App'>
  //   <Navbar/>

  // </div>
};

export default App;
