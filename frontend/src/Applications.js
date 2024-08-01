import axios from 'axios';
import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profile from './components/profile.png';
import './home.css';
import './Applications.css';


function Applications() {

    const navigate = useNavigate();

    const [name, setName] = useState('');


    const applications = [
        { name: 'Bail Application', description: 'Submit an application for bail, detailing the legal grounds for the request.', path: '/bailApplication' },
        { name: 'Legal Documents', description: 'Access and manage important legal documents relevant to your case.', path: '/legalDocuments' },
        { name: 'Case Filing', description: 'File your case with the necessary details and documents.', path: '/caseFiling' },
        { name: 'Divorce Petition', description: 'Apply for a divorce with all required legal formalities and documentation.', path: '/divorcePetition' },
        { name: 'Trademark Registration', description: 'Register a trademark to protect your brand identity.', path: '/trademarkRegistration' },
        { name: 'Wills and Testaments', description: 'Prepare and submit a legal will or testament to outline your estate wishes.', path: '/willsTestaments' },
        { name: 'Employment Contract Review', description: 'Review and modify your employment contract to ensure fair terms and conditions.', path: '/employmentContractReview' },
        { name: 'Immigration Application', description: 'Apply for visas, work permits, or other immigration-related documents.', path: '/immigrationApplication' },
        { name: 'Power of Attorney', description: 'Draft and submit a Power of Attorney to authorize someone to act on your behalf.', path: '/powerOfAttorney' },
        { name: 'Medical Malpractice Claim', description: 'File a claim for medical malpractice or negligence by healthcare providers.', path: '/medicalMalpracticeClaim' },
        { name: 'Consumer Protection Claim', description: 'Submit a claim for consumer rights violations and seek compensation.', path: '/consumerProtectionClaim' },
        { name: 'Small Claims Court Filing', description: 'File a case in small claims court for disputes involving smaller amounts.', path: '/smallClaimsCourtFiling' }
    ];

    const handleNavigate = (path) => {
        navigate(path);
    };



    useEffect(() => {

        axios.get('http://localhost:8081/home')
            .then(res => {
                if (res.data.valid) {
                    setName(res.data.username);
                }
                else {
                    navigate('/');
                }
            })
            .catch(err => console.error(err))
    }, []);

    axios.defaults.withCredentials = true;

    return (
        <div>
            <header id="king" className=" text-white py-3">
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
                                        onClick={() => navigate('/profile')}
                                    >
                                        <img src={profile} className='profile-icon' alt="Profile" />
                                        {name}
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header >
            <div className='container'>
                <h2>Application Formats</h2>
                <div className="application-grid">
                    {applications.map((app) => (
                        <div key={app.name} className="application-box">
                            <div className="application-header">
                                <h3>{app.name}</h3>
                            </div>
                            <div className="application-body">
                                <p>{app.description}</p>
                            </div>
                            <div className="application-footer">
                                <button
                                    id="bottun"
                                    className="apply-button"
                                    onClick={() => handleNavigate(app.path)}
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>        </div>
    )
}

export default Applications