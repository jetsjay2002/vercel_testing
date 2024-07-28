// import ImageUpload from "../ImageUpload/ImageUpload";
import DoctorComponent from "../DoctorSelection/DoctorComponent";
import "./ALLRequest.css"
import React,{useState} from "react";
function MedicalTreatment(){
    const [image,setImage] = useState('')
    function handleImage(e){
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    return(
        <div className="from-container">
            <h1 className="text">Medical Treatment Request</h1>
            <form>
                <div style={{ textAlign: 'left' }}>
                        <label htmlFor='fname'>Package Name</label>
                        {/* <label htmlFor='email'>Email</label> */}
                        <input type='text' placeholder='Cosmetic Surgey' className='form-control' />
                </div>

                <div style={{ textAlign: 'left' }}>
                        <label htmlFor='fname'>Medical Problem</label>
                        {/* <label htmlFor='email'>Email</label> */}
                        <input type='text' placeholder='Enter your reason' className='form-control' />
                </div>


                {/* <input placeholder="Package Name" />
                <input placeholder="Email" />
                <input placeholder="Test" /> */}
                {/* <textarea placeholder="Message" row=""></textarea> */}
                {/* <ImageUpload /> */}
                <div style={{ textAlign: 'left' }}>
                        <label htmlFor='fname'>Uploading Images</label>
                        {/* <label htmlFor='email'>Email</label> */}
                        <input className='form-control' type="file"  placeholder='Enter your reason' onClick={handleImage} />
                </div>

                <DoctorComponent />
                {/* <input className='form-control' type="file"  placeholder='Enter your reason' onClick={handleImage} /> */}
                {/* <button>Send</button> */}
            </form>
        </div>
    )
}

export default MedicalTreatment