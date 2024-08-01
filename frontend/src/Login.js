import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    useEffect(() => {

        axios.get('http://localhost:8081/home')
            .then(res => {
                if (res.data.valid) {
                    navigate('/home');
                }
                else {
                    navigate('/');
                }
            })
            .catch(err => console.error(err))
    }, []);


    axios.defaults.withCredentials = true;

    const handleSubmission = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        console.log(errors);
        if (errors.password === "" && errors.email === "") {
            axios.post('http://localhost:8081/login', values).then(res => {
                if (res.data.Login) {
                    navigate('/home');
                }
                else {
                    alert("No Account Exists");
                }

            }).catch(err => console.log("error", err));
        }
    }

    return (
        <div id="mbiriyani" className='d-flex justify-content-center align-items-center vh-100'>
            <div id="bavana" className='bg-white p-3 rounded w-25'>
                <form action="" onSubmit={handleSubmission}>
                    <h2 className='text-align-center'>Login</h2>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input onChange={handleInput} type="email" placeholder="Enter Email" name='email' className='form-control rounded-0' />
                    </div>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input onChange={handleInput} type="password" placeholder="Enter Password" name='password' className='form-control rounded-0' />
                    </div>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}

                    <button id="bottun" type='submit' className="w-100 rounded-0">Log in</button>

                    <p>Not having an Account?</p>
                    <Link to={'/signup'} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login