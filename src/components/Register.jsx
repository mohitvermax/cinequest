import { useState } from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";
import {storage} from "../firebase.js"
import {ref, uploadBytes} from "firebase/storage"
import {v4} from "uuid"


function Register() {
  const navigate = useNavigate()
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  const imageUploadfn = () => {
    if (imageUpload ==null) {
      return
    }
    const imageRef = ref(storage , `profilepic/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => console.log("image uploaded"))
  }

  
  
  const signUp = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    // const user = userCredential.user;
    imageUploadfn()
    setSuccessMessage('User registered successfully.');
    setErrorMessage(null);

    navigate("/search")

    // ...
  })
  .catch((error) => {
    setSuccessMessage(null);
    setErrorMessage("Password should be minimum 6 characters long");

    // ..
  });

  }

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  return (
    <div className='bg-gray-900 w-full h-[calc(100vh-64px)] flex items-center justify-center'>
    <form onSubmit={signUp}>
        <div className='bg-slate-950 rounded-md relative p-2 w-96 h-80 flex items-center justify-center flex-col text-white'>
        <h1 className='absolute text-xl  top-6'>Register</h1>
        <div className="mt-6 justify-between items-center flex gap-4">
            <p className="text-lg">Profile pic: </p>
            <input type="file" 
            className=' bg-transparent h-5  w-36 text-sm font-normal'
            onChange={(e)=> setImageUpload(e.target.files[0])}
             />
        </div>
        <div className="mt-6 justify-between items-center flex gap-4">
            <p className="text-lg">Email: </p>
            <input type="email" placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-b bg-transparent h-5  w-36 text-sm font-normal outline-none' />
        </div>
        <div className="mt-6 flex justify-between items-center gap-4 mb-6">
            <p className="text-lg">Password: </p>
            <input type="password" placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-b bg-transparent h-5 w-36 text-sm font-normal outline-none' />
        </div>
        <button  className='bg-[#00c40a] text-white px-8 py-1 rounded-md absolute bottom-6 hover:bg-white hover:text-black transition-all'>Register</button>
        {successMessage && (
          <p className="text-green-500 text-xs font-normal ">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-xs font-normal ">{errorMessage}</p>
        )}
        </div>
        </form>
    </div>
  )
}

export default Register