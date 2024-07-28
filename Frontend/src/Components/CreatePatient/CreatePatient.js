import React, { useState } from 'react';
import './CreatePatient.css';
import ModalComponent from './ModalComponent';


const agents = [
  { id: 1, userid: 1, name: 'Jetsadaporn Noijanghan' },
  { id: 2, userid: 2, name: 'Wachiravit Chumchuy' },
  { id: 3, userid: 3, name: 'Wachiravit Chumchuy' },
  { id: 4, userid: 4, name: 'Wachiravit Chumchuy' },
  { id: 5, userid: 5, name: 'Wachiravit Chumchuy' },
  // ... more agents
];


const AgentCard = ({ userid,name }) => (


      <div className="card-create-patient">
      <div className="userid-create-patient">UserID : {userid}</div>
        <hr className="divider-create-patient mt-4" />
          <div className="name-create-patient">{name}</div>
          <hr className="divider-create-patient" />
          <div className="actions-create-patient">
            <div className="actions-row-create-patient">
              <a href="/chat">Chat →</a>
              <a href="/package">Package →</a>
            </div>
            <div className="actions-row-create-patient">
              <a href="/edit-profile">Edit Profile →</a>
              <a href="/help">Help →</a>
            </div>
          </div>
        </div>
);

function CreatePatient (){

    // const [showModal, setShowModal] = useState(false);

    // const handleOpenModal = () => {
    //   setShowModal(true);
    // };

    // const handleCloseModal = () => {
    //   setShowModal(false);
    // };

    // const handleConfirm = () => {
    //   console.log('Confirmed');
    //   // Place code here to handle the confirmation action
    //   setShowModal(false);
    // };

  return(

        <div className="app-create-patient">
        <div className="header-create-patient mb-4">Agent</div>
        
        <ModalComponent />

        {agents.map(agent => (
          <AgentCard key={agent.id} userid={agent.userid} name={agent.name} />
        ))}

      {/* <div className="addButton-create-patient">
            <ModalComponent />
      </div> */}

      {/* <button className="addButton-create-patient" onClick={handleOpenModal}>+</button>
          <ModalComponent
            isOpen={showModal}
            onClose={handleCloseModal}
            onConfirm={handleConfirm}
          />*/}

        </div>  
  )
}

export default CreatePatient;


