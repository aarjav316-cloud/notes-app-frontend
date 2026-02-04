import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <nav
        className="w-full bg-white border-b border-gray-200
        shadow-sm "
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between ">
          <h1 className="text-lg font-semibold text-gray-800 tracking-tight" >Notes App</h1>

          <div className="flex items-center gap-6 text-sm font-medium" >
            {!isAuthenticated ? (
              <>
                <Link 
                to="/login"
                className="text-gray-600 hover:text-black transition "
                >Login</Link>

                <Link 
                className="bg-black text-white px-4 py-1.5 rounded-lg hover:opacity-90 transition"
                to="/register">Register</Link>
              </>
            ) : (
              <>
                <Link
                className="text-gray-600 hover:text-black transition"
                to="/notes">Notes</Link>


                <button
                className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg hover:bg-gray-200 transition"
                onClick={handleLogout}>Logout</button>

              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
