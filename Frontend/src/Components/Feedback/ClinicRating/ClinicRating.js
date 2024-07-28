import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import './ClinicRating.css'; // make sure to create a corresponding CSS file
import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function ClinicRating(){
    const [comment, setComment] = useState('');

    const [value, setValue] = React.useState(2);
    const handleCommentChange = (event) => {
        setComment(event.target.value);
      };

    const navigate = useNavigate(); // Use useNavigate hook for navigation

        // Handle the submit action
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        navigate("/home");
        // Here you would typically send the data to a server
        console.log(`Comment: ${comment}`);
        alert('Thank you for your feedback!');
    };

    // const navigate = useNavigate(); // Use useNavigate hook for navigation

    // const handleClick = (event) => {
    //     event.preventDefault(); // Prevent the default form submission behavior
    //     navigate("/statusonboard"); // Use navigate to go to /home page
    // }
    const Star = ({ selected, onClick }) => (
        <span onClick={onClick} 
        style={{ 
            cursor: 'pointer', 
            fontSize: '24px', 
            color: selected ? '#ffc107' : '#e4e5e9', // Gold for selected, light gray for unselected
          }}
        >
          {selected ? '★' : '☆'}
        </span>
        
      );
      const [rating, setRating] = useState(0);
    return(
        <div className='text-clinic-rating mb-4'>
                <div className="travel-card-clinic">
                <div className="travel-card-header-clinic">
                    <h1>Rating of ARTEMES</h1>
                </div>
                <div className="travel-card-body-clinic">
                    <h4>Rate your experience</h4>
                    {/* <h5>Packages: CosmeticSurgery</h5> */}
                </div>
                <div className="travel-card-body-clinic">
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                        fontSize: '1.25rem', // Adjust the font size for the content within the Box
                        // Additional styling can be added here if needed to increase the overall size
                    }}
                >
                    <Typography component="legend" style={{ fontSize: '1.25rem' }}>Packages: CosmeticSurgery</Typography>
                    {/* <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        size="large" // Makes the stars larger
                    /> */}
                    <Star selected={rating >= 1} onClick={() => setRating(1)} />
                    <Star selected={rating >= 2} onClick={() => setRating(2)} />
                    <Star selected={rating >= 3} onClick={() => setRating(3)} />
                    <Star selected={rating >= 4} onClick={() => setRating(4)} />
                    <Star selected={rating >= 5} onClick={() => setRating(5)} />
                    <p>Rating: {rating} of 5</p>
                </Box>

                </div>

                <div className="travel-card-status-clinic mt-4">
                <textarea
                    // className='form-control'
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Leave us your comment"
                    className="comment-input"
                />
                </div>
                {/* <button className="onboard-button">On Board</button> */}
                <div className="travel-card-status-clinic mt-3">

                    <div className="travel-card-buttons-clinic">
                        <button className="btn btn-green-clinic" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
                </div>
        
        </div>
    )
}

export default ClinicRating



