import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function ForgotPassword() {
    const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-container">
        <div className="form">
          <h2>Forgot Password</h2>
          <div className="input-container">
            <input type="email" placeholder=" "  required />
            <label>Email</label>
          </div>
          <div className="input-container">
            <input type="password" placeholder=" "  required />
            <label>New Password</label>
          </div>
          <div className="input-container">
            <input type="password" placeholder=" "  required />
            <label>Confirm New Password</label>
          </div>
          <button onClick={() => navigate("/login")}>Verfiy</button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
