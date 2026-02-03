import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login, authLoading, error } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault()
    login(FormData)

  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h2>Login</h2>

        <input
          type="email"
          placeholder="email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          className="border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
         disabled={authLoading}
         type="submit"
         className="w-full bg-black text-white py-2 rounded "
        >
            {authLoading ? "logging in" : "login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
