import { useState, useContext, useEffect,  } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register, error, authLoading , isAuthenticated  } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await register({
        name,
        email,
        password
    });
    if (res?.success) navigate("/login");
  };

  useEffect(() => {
    if(isAuthenticated) {
      navigate("/notes")
    }
  }, [isAuthenticated  , navigate ])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Create Account
        </h2>
  
        <div className="space-y-2">
          
          <label className="text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
  
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
  
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
  
        <button
          type="submit"
          disabled={authLoading}
          className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50"
        >
          {authLoading ? "Creating account..." : "Register"}
        </button>
  
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-black font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
  
}

export default Register;










