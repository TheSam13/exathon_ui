import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    // TODO: connect Firebase here

    localStorage.setItem("token", "dummy_token");
    navigate("/home");
  };

  return (
    <div className="login-body">
      <div className="login-container">
        
        <div className="login-header">
          CollegeStudyBuddy
        </div>

        <div className="login-form">
          
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <div className="extra">
            Don't have an account?{" "}
            <span className="link">Sign up</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;