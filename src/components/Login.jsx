import { useState } from "react"
import {auth} from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



function Login() {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate()


  const signIn = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential);
    setErrorMessage(null);
    navigate("/search")
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    setErrorMessage('Invalid credentials. Please check your email and password.');
  });
  }

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (
    <div className='bg-gray-900 w-full h-[calc(100vh-64px)] flex items-center justify-center'>
    <form onSubmit={signIn}>
        <div className='bg-slate-950 rounded-md relative p-2 w-80 h-72 flex items-center justify-center flex-col text-white'>
        <h1 className='absolute text-xl  top-6'>Login</h1>
        <div className="mt-6 justify-between items-center flex gap-4">
            <p className="text-lg">Email: </p>
            <input type="email" placeholder='Enter the email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-b bg-transparent h-5  w-36 text-sm font-normal outline-none' />
        </div>
        <div className="mt-6 flex justify-between items-center gap-4 mb-6">
            <p className="text-lg">Password: </p>
            <input type="password" placeholder='Enter the Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-b bg-transparent h-5 w-36 text-sm font-normal outline-none' />
        </div>
        <button  className='bg-[#00c40a] text-white px-8 py-1 rounded-md absolute bottom-6 hover:bg-white hover:text-black transition-all'>Login</button>
        {errorMessage && (
          <p className="text-red-500 text-xs font-normal ">{errorMessage}</p>
        )}
        </div>
        </form>
    </div>
  )
}

export default Login