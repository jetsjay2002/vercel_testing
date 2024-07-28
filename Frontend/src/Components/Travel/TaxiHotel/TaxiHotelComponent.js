import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function TaxiHotelComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [taxiSelection, setTaxiSelection] = useState(null);
    const [hotelSelection, setHotelSelection] = useState(null);

    const handleTaxiChange = (event) => {
        setTaxiSelection(event.target.value);
    };

    const handleHotelChange = (event) => {
        setHotelSelection(event.target.value);
    };

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate("/processtravel");
    }

    return (
      <>
        <Button className='form-control' variant="primary" onClick={handleShow}>
          Submit
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Do you want to book a taxi?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="form-check mb-3" style={{ marginRight: '10px' }}>
                    <input
                        type="radio"
                        className="form-check-input"
                        id="taxiYesRadio"
                        name="taxiRadio"
                        value="yes"
                        onChange={handleTaxiChange}
                        checked={taxiSelection === "yes"}
                    />
                    <label className="form-check-label" htmlFor="taxiYesRadio">
                        Yes
                    </label>
                </div>
                <div className="form-check mb-3">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="taxiNoRadio"
                        name="taxiRadio"
                        value="no"
                        onChange={handleTaxiChange}
                        checked={taxiSelection === "no"}
                    />
                    <label className="form-check-label" htmlFor="taxiNoRadio">
                        No
                    </label>
                </div>
            </div>
        </Modal.Body>

        <Modal.Header closeButton>
            <Modal.Title>Do you want to book a hotel?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="form-check mb-3" style={{ marginRight: '10px' }}>
                    <input
                        type="radio"
                        className="form-check-input"
                        id="hotelYesRadio"
                        name="hotelRadio"
                        value="yes"
                        onChange={handleHotelChange}
                        checked={hotelSelection === "yes"}
                    />
                    <label className="form-check-label" htmlFor="hotelYesRadio">
                        Yes
                    </label>
                </div>
                <div className="form-check mb-3">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="hotelNoRadio"
                        name="hotelRadio"
                        value="no"
                        onChange={handleHotelChange}
                        checked={hotelSelection === "no"}
                    />
                    <label className="form-check-label" htmlFor="hotelNoRadio">
                        No
                    </label>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default TaxiHotelComponent;