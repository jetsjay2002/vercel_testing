// import React,{useState} from "react";
// import axios from "axios" 
// function ImageUpload(){
//     const [image,setImage] = useState('')
//     function handleImage(e){
//         console.log(e.target.file)
//         setImage(e.target.file[0])
//     }

//     function handleAPI(){
//         const formData = new FormData()
//         formData.append('image', image)
//         axios.post('url', formData).then((res) => {
//             console.log(res)
//         })
//     }

//     return(
//         <div>
//             <input type="file" name='file' onClick={handleImage} />
//             <button onClick={handleAPI}>Submit</button>
//         </div>
//     )

// }

// export default ImageUpload