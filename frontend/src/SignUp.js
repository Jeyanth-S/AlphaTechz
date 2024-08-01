import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';


function SignUp() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.name === "" && errors.email === "") {
            axios.post('http://localhost:8081/signup', values).then(res => {
                navigate('/');
            }).catch(err => console.log("error", err));
        }
    }

    return (
        <div id="zumakazu" className='d-flex justify-content-center align-items-center vh-100'>
            <div id="bavana" className='bg-white p-3 rounded w-25'>
                <form action="" onSubmit={handleSubmission}>

                    <h2 className='d-flex justfy-content-center'>Sign Up</h2>

                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input onChange={handleInput} type="text" name='name' placeholder="Enter Name" className='form-control rounded-0' />
                    </div>

                    {errors.name && <span className='text-danger'>{errors.name}</span>}

                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input onChange={handleInput} type="email" name='email' placeholder="Enter Email" className='form-control rounded-0' />
                    </div>

                    {errors.email && <span className='text-danger'>{errors.email}</span>}

                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input onChange={handleInput} type="password" name='password' placeholder="Enter Password" className='form-control rounded-0' />
                    </div>

                    {errors.password && <span className='text-danger'>{errors.password}</span>}

                    <button type='submit' id='bottun' className=" w-100 rounded-0">Sign Up</button>

                    <p>Already having an Account?</p>

                    <Link to={'/'} className="btn btn-default border w-100 bg-light rounded-0">Login</Link>

                </form>
            </div>
        </div>
    )
}

export default SignUp