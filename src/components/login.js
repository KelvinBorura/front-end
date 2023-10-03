import './login.css';
import React, { useState } from 'react';
import { FaUserTag, FaLock, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      const response = await axios.post('http://127.0.0.1:4000/api/v1/signup', formData);
      console.log('Registration successful:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Registration failed:', error.response.data);
      } else if (error.request) {
        console.error('Registration failed: No response received');
      } else {
        console.error('Registration failed:', error.message);
      }
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      const response = await axios.post('http://127.0.0.1:4000/api/v1/login', formData);
      console.log('Login successful:', response.data);

      navigate('/dashboard');
    } 
    catch (error) {
      if (error.response) {
        console.error('Login failed:', error.response.data);
      } else if (error.request) {
        console.error('Login failed: ', error.message);
      } else {
        console.error('Login failed:', error.message);
      }
    }
  };

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className={`body ${isActive ? 'active' : ''}`}>
      <div className={`wrapper ${isActive ? 'active' : ''}`}>
        <span className='bg-animation'></span>
        <span className='bg-animation2'></span>

        <div className='form-box login'>
          <h2 className='animation' style={{ '--i': 0, '--j': 20 }}>
            login
          </h2>
          <form onSubmit={handleLoginSubmit}>
            <div className='input-box animation' style={{ '--i': 1, '--j': 21 }}>
              <input
                type='text'
                required
                value={formData.username}
                onChange={(e) => handleInputChange(e, 'username')}
              />
              <label>
                <div className='icon'>
                  {' '}
                  <FaUserTag />
                </div>
                username
              </label>
            </div>

            <div className='input-box animation' style={{ '--i': 2, '--j': 22 }}>
              <input
                type='password'
                required
                value={formData.password}
                onChange={(e) => handleInputChange(e, 'password')}
              />
              <label>
                <div className='icon'>
                  {' '}
                  <FaLock />
                </div>
                password
              </label>
            </div>

            <button type='submit' className='btn animation' style={{ '--i': 3, '--j': 23 }}>
              login
            </button>

            <div className='logreg-link animation' style={{ '--i': 4, '--j': 24 }}>
              <p>
                Don't have an account?{' '}
                <a href='#' className='register-link' onClick={handleRegisterClick}>
                  sign up{' '}
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className='info-text login'>
          <h2 className='animation' style={{ '--i': 0, '--j': 25 }}>
            welcome back
          </h2>
          <p className='animation' style={{ '--i': 2, '--j': 26 }}>
            we are proud you are back
          </p>
        </div>

        <div className='form-box register'>
          <h2 className='animation' style={{ '--i': 17, '--j': 0 }}>
            signup
          </h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className='input-box animation' style={{ '--i': 18, '--j': 1 }}>
              <input
                type='text'
                required
                value={formData.username}
                onChange={(e) => handleInputChange(e, 'username')}
              />
              <label>
                <div className='icon'>
                  <FaUserTag />
                </div>
                username
              </label>
            </div>

            <div className='input-box animation' style={{ '--i': 19, '--j': 2 }}>
              <input
                type='email'
                required
                value={formData.email}
                onChange={(e) => handleInputChange(e, 'email')}
              />
              <label>
                <div className='icon'>
                  <FaEnvelope />
                </div>
                Email
              </label>
            </div>

            <div className='input-box animation' style={{ '--i': 20, '--j': 3 }}>
              <input
                type='password'
                required
                value={formData.password}
                onChange={(e) => handleInputChange(e, 'password')}
              />
              <label>
                <div className='icon'>
                  <FaLock />
                </div>
                password
              </label>
            </div>

            <button type='submit' className='btn animation' style={{ '--i': 21, '--j': 4 }}>
              signup
            </button>

            <div className='logreg-link animation'>
              <p className='animation' style={{ '--i': 22, '--j': 5 }}>
                Already have an account?{' '}
                <a href='#' className='login-link' onClick={handleLoginClick}>
                  login{' '}
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className='info-text register'>
          <h2 className='animation' style={{ '--i': 17, '--j': 0 }}>
            welcome
          </h2>
          <p className='animation' style={{ '--i': 18, '--j': 1 }}>
            Join our services
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
