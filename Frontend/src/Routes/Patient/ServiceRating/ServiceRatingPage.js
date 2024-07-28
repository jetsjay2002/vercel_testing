import React from 'react';
import NavbarHome from '../../../Components/NavBarItem/NavBarHome';
import ServiceRating from '../../../Components/Feedback/ServiceRating/ServiceRating';
import "../../../App.css";

function ServiceRatingPage(){
    return(
        <div className="testpicture">
        
            <NavbarHome />
            <ServiceRating />
        </div>
    )
}

export default ServiceRatingPage;