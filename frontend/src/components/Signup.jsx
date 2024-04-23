import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        const errors = {};
        if (!name.trim()) {
            errors.name = 'Name is required';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        if (!password.trim()) {
            errors.password = 'Password is required';
        }

        if (Object.keys(errors).length === 0) {
            axios.post('http://localhost:3001/register', { name, email, password })
                .then(result => {
                    console.log(result);
                    navigate('/login');
                })
                .catch(err => console.log(err));
        } else {
            setErrors(errors);
        }
    };

    return (
    
        <div className='register template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary'>
            <div className='w-40 p-5 rounded bg-white'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center mb-3'>Sign Up</h3>
                    <div className='mb-2'>
                        <label htmlFor="name"> Name</label>
                        <input type="text" placeholder='Enter your Name' className='form-control' onChange={(e) => setName(e.target.value)} />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter your Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter your Password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                    </div>
                    <div className="d-grid">
                        <button className='btn btn-primary'>Sign Up</button>
                    </div>
                    <p className='text-right mt-2'>Already Registered <Link className='ms-2' to={'/login'}>Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
