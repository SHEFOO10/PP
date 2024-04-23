import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Signup({setLoggedIn}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    userTypeError: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setFormErrors({
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
      userTypeError: '',
    });

    let isValid = true;

    // First Name Validation
    if (formData.firstName.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        firstNameError: 'Please enter your first name',
      }));
      isValid = false;
    }

    // Last Name Validation
    if (formData.lastName.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        lastNameError: 'Please enter your last name',
      }));
      isValid = false;
    }

    // Email Validation
    if (formData.email.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        emailError: 'Please enter your email',
      }));
      isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        emailError: 'Please enter a valid email',
      }));
      isValid = false;
    }

    // Password Validation
    if (formData.password.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: 'Please enter a password',
      }));
      isValid = false;
    } else if (formData.password.length < 8) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: 'The password must be 8 characters or longer',
      }));
      isValid = false;
    }

    // Confirm Password Validation
    if (formData.confirmPassword.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirmPasswordError: 'Please confirm your password',
      }));
      isValid = false;
    } else if (formData.confirmPassword !== formData.password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirmPasswordError: 'Passwords do not match',
      }));
      isValid = false;
    }

    // User Type Validation
    if (formData.userType === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        userTypeError: 'Please select a user type',
      }));
      isValid = false;
    }

    if (isValid) {
      alert('sending to backend')
      setLoggedIn(true)
    }
  };

  return (
    <div className="SignupContainer">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
          <span className="errorLabel">{formErrors.firstNameError}</span>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
          <span className="errorLabel">{formErrors.lastNameError}</span>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}  />
          <span className="errorLabel">{formErrors.emailError}</span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}  />
          <span className="errorLabel">{formErrors.passwordError}</span>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          <span className="errorLabel">{formErrors.confirmPasswordError}</span>
        </div>
        <div>
          <label htmlFor="userType">User Type:</label>
          <select id="userType" name="userType" value={formData.userType} onChange={handleChange}>
            <option value="">Select User Type</option>
            <option value="instructor">Instructor</option>
            <option value="universityAdmin">University Admin</option>
            <option value="learner">Learner</option>
            <option value="student">Student</option>
          </select>
          <span className="errorLabel">{formErrors.userTypeError}</span>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
  );
}

export default Signup;