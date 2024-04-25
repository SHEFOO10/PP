import React, { useState } from 'react';
import { signup } from '../API.js';
import { Link, useNavigate } from 'react-router-dom';

function Signup({ setLoggedIn }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '', // Added phone field
    password: '',
    confirmPassword: '',
    account_type: '',
    gender: '', // New gender field
  });

  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    phoneError: '', // Added phoneError
    passwordError: '',
    confirmPasswordError: '',
    roleError: '',
    genderError: '', // New genderError
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
      phoneError: '', // Reset phoneError
      passwordError: '',
      confirmPasswordError: '',
      roleError: '',
      genderError: '', // Reset genderError
    });

    let isValid = true;

    // First Name Validation
    if (formData.first_name.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        firstNameError: 'Please enter your first name',
      }));
      isValid = false;
    }

    // Last Name Validation
    if (formData.last_name.trim() === '') {
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

    // Phone Validation
    if (formData.phone.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phoneError: 'Please enter your phone number',
      }));
      isValid = false;
    } else if (!/^\+?\d{10,}$/i.test(formData.phone)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phoneError: 'Please enter a valid phone number',
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

    // Role Validation
    if (formData.account_type === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        roleError: 'Please select a user role',
      }));
      isValid = false;
    }

    // Gender Validation
    if (formData.gender === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        genderError: 'Please select a gender',
      }));
      isValid = false;
    }

    if (isValid) {
      const response = await signup(formData);
      if (response.success) {
        alert('Confirm your email then login to your account');
        console.log(formData)
        navigate('/');
      } else {
        alert(response.msg);
      }
    }
  };

  return (
    <div className="SignupContainer">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="first_name" value={formData.first_name} onChange={handleChange} />
          <span className="errorLabel">{formErrors.firstNameError}</span>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="last_name" value={formData.last_name} onChange={handleChange} />
          <span className="errorLabel">{formErrors.lastNameError}</span>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          <span className="errorLabel">{formErrors.emailError}</span>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          <span className="errorLabel">{formErrors.phoneError}</span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          <span className="errorLabel">{formErrors.passwordError}</span>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <span className="errorLabel">{formErrors.confirmPasswordError}</span>
        </div>
        <div>
          <label htmlFor="role">User Role:</label>
          <select id="role" name="account_type" value={formData.account_type} onChange={handleChange}>
            <option value="">Select User Role</option>
            <option value="instructor">Instructor</option>
            <option value="universityAdmin">University Admin</option>
            <option value="learner">Learner</option>
            <option value="student">Student</option>
          </select>
          <span className="errorLabel">{formErrors.roleError}</span>
        </div>
        <div className='gender-container'>
          <label htmlFor="gender">Gender:</label>
            <div className='flex-row'>
              <label className='flex-row'>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
            <div className='flex-row'>
              <label className='flex-row'>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
            </div>
          <span className="errorLabel">{formErrors.genderError}</span>
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