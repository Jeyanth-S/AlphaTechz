import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import profile from './components/profile.png';
import './home.css';


function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/home')
            .then(res => {
                if (res.data.valid) {
                    setName(res.data.username);
                    setEmail(res.data.email);

                }
                else {
                    navigate('/');
                }
            })
            .catch(err => console.error(err));

    }, []);

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:8081/logout');
            if (response.data.success) {
                navigate('/'); // Redirect to login page
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };


    axios.defaults.withCredentials = true;

    return (
        <div className="d-flex flex-column">
            <header id="king" className="text-white py-3">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="mb-0">KNOW YOUR RIGHTS!</h1>
                        <nav className='d-flex align-items-center'>
                            <ul className="nav d-flex justify-content-between align-items-center">
                                <li className="nav-item d-flex align-items-center">
                                    <span
                                        className="nav-link btn"
                                        style={{ color: 'white', cursor: 'pointer' }}
                                        onMouseOver={(e) => e.currentTarget.style.color = 'black'}
                                        onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                                        onClick={() => navigate('/home')}
                                    >
                                        Chat
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span
                                        className="nav-link btn"
                                        style={{ color: 'white', cursor: 'pointer' }}
                                        onMouseOver={(e) => e.currentTarget.style.color = 'black'}
                                        onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                                        onClick={() => navigate('/constitution')}
                                    >
                                        Constitution
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span
                                        className="nav-link btn"
                                        style={{ color: 'white', cursor: 'pointer' }}
                                        onMouseOver={(e) => e.currentTarget.style.color = 'black'}
                                        onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                                        onClick={() => navigate('/caseStudies')}
                                    >
                                        Case Studies
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span
                                        className="nav-link btn"
                                        style={{ color: 'white', cursor: 'pointer' }}
                                        onMouseOver={(e) => e.currentTarget.style.color = 'black'}
                                        onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                                        onClick={() => navigate('/applications')}
                                    >
                                        Application Formats
                                    </span>
                                </li>
                                <li className="nav-item" id="prof">
                                    <span
                                        className="nav-link btn d-flex align-items-center"
                                        style={{ color: 'white', cursor: 'pointer' }}
                                        onMouseOver={(e) => e.currentTarget.style.color = 'black'}
                                        onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                                        onClick={() => navigate('/')}
                                    >
                                        <img src={profile} className='profile-icon' alt="Profile" />
                                        {name}
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="text-center d-flex flex-column align-items-center">
                <h2 id="goku" className='mb-4'>PROFILE</h2>
                <img src={profile} className='img-fluid rounded-circle mb-3' alt="Profile" style={{ width: '150px', height: '150px' }} />
                <div className="mb-4">
                    <p className="lead">Name: <span className="fw-bold">{name}</span></p>
                    <p className="lead">Email: <span className="fw-bold">{email}</span></p>
                </div>
                <button onClick={handleLogout} className="btn btn-danger">Log Out</button>
            </div>
        </div >
    )
}

export default Profile