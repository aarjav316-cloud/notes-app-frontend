import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

    const {isAuthenticated , logout} = useContext(AuthContext);

    const navigate = useNavigate()

    const handleLogout = () => {
        logout();
        navigate("/login")
    }

  return (
    <div>

        <nav>
            <h1>notes App</h1>

            <div>
                {!isAuthenticated ? (
                    <>
                    <Link to="/login" >Login</Link>
                    <Link to="/register" >Register</Link>
                    </>
                ) : 
                    <>
                    <Link to="/notes" >Notes</Link>
                   <button onClick={handleLogout} >Logout</button>
                    </>
                }
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
