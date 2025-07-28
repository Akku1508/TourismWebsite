import React, { useState } from "react";
import "../styles/login.css";
import Google from "../assets/google.png";
import logo from "../assets/bg-register.jpg";
import show from "../assets/hide-password.png";
import eye from "../assets/show-password.png";
import Lock from "../assets/forgot-password.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(formData);
  };

  return (
    <div className="login-container ">
      <div className="register">
        <div className="register-box my-[100px]">
          {/* Left side with background image */}
          <div className="login-bg" style={{ 
            backgroundImage: `linear-gradient(rgba(79, 70, 229, 0.8), rgba(99, 102, 241, 0.8)), url(${logo})`
          }}>
            <div className="bg-overlay-text">
              <h2>Welcome Back</h2>
              <p>Sign in to access your account and continue your journey with us.</p>
            </div>
          </div>
          
          {/* Right side with form */}
          <div className="login-input">
            <div className="auth-google">
              <h1>Login Form</h1>
              <p className="subtitle">Enter your details to continue</p>
            </div>
            
            <div className="form-auth">
              <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <div className="input-wrapper">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                    <svg className="input-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
                
                {/* Password Field */}
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="input-wrapper">
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your password"
                      type={passwordVisible ? "text" : "password"}
                      required
                    />
                    <svg className="input-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <button 
                      type="button"
                      className="password-toggle"
                      onClick={togglePasswordVisibility}
                    >
                      <img 
                        src={passwordVisible ? show : eye} 
                        alt={passwordVisible ? "Hide password" : "Show password"} 
                        className="eye-icon"
                      />
                    </button>
                  </div>
                </div>
                
                {/* Remember Me & Forgot Password */}
                <div className="form-options">
                  <div className="remember-me">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                    />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <Link to="/forgot-password" className="forgot-password">
                    <img src={Lock} alt="Lock icon" className="lock-icon" />
                    Forgot password?
                  </Link>
                </div>
                
                {/* Sign In Button */}
                <button type="submit" className="signin-btn">
                  Sign in
                </button>
                
                {/* Google Sign In */}
                <button type="button" className="google-signin">
                  <img src={Google} alt="Google logo" className="google-icon" />
                  Sign In with Google
                </button>
                
                {/* Registration Link */}
                <div className="registered">
                  Not yet registered?{" "}
                  <Link to="/register" className="register-link">
                    Register Here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;