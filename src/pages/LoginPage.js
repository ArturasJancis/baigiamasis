import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  // State to manage user credentials and error messages
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Access the navigate function from React Router
  const navigate = useNavigate();

  // Handle input changes and update the corresponding state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    
    // Clear error message when input changes
    setErrorMessage(""); 
  };

  // Handle the login process
  const handleLogin = () => {
    const { username, password } = credentials;

    // Check if username or password fields are empty
    if (!username || !password) {
      setErrorMessage("All fields must be filled.");
    } else if (username === "admin" && password === "password") {
      // Successful login, navigate to the "/animals" page
      navigate("/animals");
    } else {
      // Incorrect password, display an error message
      setErrorMessage("Password is wrong. Please try again.");
    }
  };

  // Handle the navigation to the registration page
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                  />
                </div>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                  style={{ marginRight: '5px' }}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
