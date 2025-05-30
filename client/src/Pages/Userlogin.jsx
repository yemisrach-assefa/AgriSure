import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return setError("You must register first!");
    if (user.phone === phone && user.password === password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Login with Mobile</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Mobile Number"
          className="form-control mb-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
};

export default Login;
