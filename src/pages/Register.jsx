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
  }, [isAuthenticated])

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          disabled={authLoading}
          className="w-full bg-black text-white py-2 rounded"
        >
          {authLoading ? "Creating..." : "Register"}
        </button>

      </form>
    </div>
  );
}

export default Register;
