import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import { Link, useNavigate } from 'react-router-dom'



function Navbar() {
    const auth = getAuth();
    const navigate = useNavigate()
    const [authuser, setAuthUser] = useState(null)
    const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };
  const closeNavbar = () => {
    setIsMobile(false);
  };
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              setAuthUser(user);
              // ...
            } else {
              setAuthUser(null);
            }
          });
    },[])

    const userSignOut = () =>{
        signOut(auth).then(() => console.log("Signed out successfully")).catch((error) => console.log(error))
        navigate("/")
    }

  return (
    <>
        <div className='w-full relative h-[15vh]  bg-gray-900 text-white flex py-4 px-16 items-center justify-between gap-4
        '>
            <div>
                <Link to='/'>
                    <h1 className='text-3xl font-bold'>
                        CineQuest
                    </h1>
                </Link>
            </div>
            <div className={`flex items-center gap-12 font-normal text-sm transition-all md:flex ${
    isMobile
      ? 'flex flex-col fixed top-0 left-0 right-0 bottom-0 text-white items-center justify-center gap-4 w-screen h-[50vh] bg-gray-900 text-lg'
      : 'hidden'
  }`}>
                <Link className="hover:text-[#00c40a] transition-all"  onClick={closeNavbar} to="/">Home</Link>
                <Link className="hover:text-[#00c40a] transition-all"  onClick={closeNavbar} to="/movies/1">Movies</Link>
                <Link className="hover:text-[#00c40a] transition-all"  onClick={closeNavbar} to="/toprated/1">Top Rated</Link>
                
                {authuser ? <><Link to="/search "  onClick={closeNavbar} className="hover:text-[#00c40a] transition-all">Search</Link></>: <></>}
                <Link className="hover:text-[#00c40a] transition-all"  onClick={closeNavbar} to="/about">About</Link>
            </div>
            <div className='flex gap-8 font-normal text-sm '>
                
            {authuser ? (<button onClick={userSignOut} className = 'bg-[#00c40a] px-4 py-2 rounded-md'>Log Out</button>):
            (<><Link to="/login" className='bg-[#00c40a] px-4 py-2 rounded-md'>Login</Link>
                <Link to="/register" className='bg-[#00c40a] px-4 py-2 rounded-md'>Register</Link></>)}
                
                
                
            </div>
            <div
          className="md:hidden cursor-pointer text-white absolute right-0 p-4"
          onClick={handleToggle}
        >
          ☰
        </div>
        </div>
    </>
  )
}

export default Navbar