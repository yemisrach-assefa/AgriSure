import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("form"); // form → otp
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    if (pwd.length < 6) return "Weak: At least 6 characters.";
    if (!/[A-Z]/.test(pwd) || !/[0-9]/.test(pwd))
      return "Medium: Use a mix of uppercase and numbers.";
    return ""; // Strong
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const pwdError = validatePassword(password);
    if (pwdError) return setError(pwdError);

    // Simulate sending OTP
    localStorage.setItem("tempUser", JSON.stringify({ phone, password }));
    setStep("otp");
    setError("");
  };

  const handleVerifyOtp = () => {
    if (otp === "1234") {
      const user = { phone, password };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.removeItem("tempUser");
      alert("Registration successful!");
      navigate("/login");
    } else {
      setError("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Register with Mobile</h3>
      {step === "form" ? (
        <form onSubmit={handleRegister}>
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
          <button type="submit" className="btn btn-primary">Send OTP</button>
        </form>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP (1234)"
            className="form-control mb-2"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp} className="btn btn-success">Verify & Register</button>
        </>
      )}
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
};

export default Register;
