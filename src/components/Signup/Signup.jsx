import { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (!fullName || !email || !password ) {
      setError("All fields are required");
    } else if (!/^[a-zA-Z ]+$/.test(fullName)) {
      setError("Full name can only contain letters and spaces");
    } else if (!/^[0-9]{10}$/.test()) {
      setError("Phone number must be 10 digits");
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters long");

    } else {
      setError("");
      alert(`Account created successfully for ${fullName}!`);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Full Name"
          className="signup-input"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (min 8 characters)"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-btn primary" onClick={handleSignUp}>Sign Up</button>

        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <p className="help-text"><a href="#">Need help?</a></p>
        <p className="already-account">Already have an account? <a href="Login">Login</a></p>
      </div>
    </div>
  );
}
