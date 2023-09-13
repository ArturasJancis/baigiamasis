import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // State to manage form input values and error message
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle registration form submission
  const handleRegister = () => {
    const { username, password, repeatPassword } = formData;

    // Validation checks
    if (!username || !password || !repeatPassword) {
      setErrorMessage("All fields must be filled.");
    } else if (password !== repeatPassword) {
      setErrorMessage("Passwords do not match.");
    } else {
      // Registration logic (placeholder for actual registration)
      setRegistrationSuccess(true);
      setSuccessMessage("Registration is successful!");
      setErrorMessage(""); // Clear the error message
      // You can redirect the user to another page here if needed
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">
              <form>
                {/* Input fields for username, password, and repeatPassword */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
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
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="repeatPassword" className="form-label">
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                  />
                </div>
                {/* Display error message if there's an error */}
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                {registrationSuccess && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                {/* Button to submit the registration form */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleRegister}
                  style={{ marginRight: "5px" }}
                >
                  Register
                  {/* Button to go back to Login page */}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleLogin}
                >
                  Back to Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
