import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CaseStudies.css';
import axios from 'axios';
import profile from './components/profile.png';


function CaseStudies() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
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
            .catch(err => console.error(err));

        axios.defaults.withCredentials = true;

    }, []);
    const handleReadMore = (caseType) => {
        switch (caseType) {
            case 'Employment Dispute':
                window.location.href = 'https://nishithdesai.com/fileadmin/user_upload/pdfs/Research_Papers/Employment-Litigation-and-Timelines-(India).pdf';
                break;
            case 'Personal Injury Claim':
                window.location.href = 'https://docs.manupatra.in/newsline/articles/upload/6807ba7a-13f4-4cb6-9345-bf4d1086dc6b.pdf';
                break;
            case 'Intellectual Property Dispute':
                window.location.href = 'https://www.bananaip.com/wp-content/uploads/2022/08/Indian-Intellectual-Property-Cases-Report-2021.pdf';
                break;
            default:
                window.location.href = 'https://en.wikipedia.org/wiki/Law';
                break;
        }
    };

    return (
        <div>
            <header id="king" className=" text-white py-3">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="mb-0">KNOW YOUR RIGHTS!</h1>
                        <nav>
                            <ul className="nav d-flex align-items-center">
                                <li className="nav-item">
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
            </header>
            <div className="container mt-4">
                <h2>Case Studies</h2>
                <div className="row">
                    {/* Case Study 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="case-study-box">
                            <img src="https://media.istockphoto.com/id/1394150018/vector/angry-boss-with-employee-vector-illustration.jpg?s=612x612&w=0&k=20&c=5GHCEB479SPbhLQIKXi5Go6GAvJ5Xx1YZ-EK9jQKeAU=" alt="Employment Dispute" className="case-study-image" />
                            <div className="case-study-title">
                                <h4>Employment Dispute</h4>
                            </div>
                            <div className="case-study-summary">
                                <p>
                                    An employee disputes their termination after being accused of misconduct. This case study examines the legal arguments used to challenge the termination and the outcome of the case.
                                </p>
                                <button id="bottun" onClick={() => handleReadMore('Employment Dispute')}>Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* Case Study 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="case-study-box">
                            <img src="https://diazlawfirm.com/wp-content/uploads/2018/08/Work-Injury-1.jpg" alt="Personal Injury Claim" className="case-study-image" />
                            <div className="case-study-title">
                                <h4>Personal Injury Claim</h4>
                            </div>
                            <div className="case-study-summary">
                                <p>
                                    A client files a personal injury claim after an accident. This case study explores the evidence presented, the legal strategy used, and the final judgment.
                                </p>
                                <button id="bottun" onClick={() => handleReadMore('Personal Injury Claim')}>Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* Case Study 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="case-study-box">
                            <img src="https://www.nrilegalservices.com/wp-content/uploads/2017/03/Property-management-lawyer.jpg" alt="Intellectual Property Dispute" className="case-study-image" />
                            <div className="case-study-title">
                                <h4>Intellectual Property Dispute</h4>
                            </div>
                            <div className="case-study-summary">
                                <p>
                                    A dispute over intellectual property rights between two companies. The case study discusses the legal framework for IP disputes and the resolution of the case.
                                </p>
                                <button id="bottun" onClick={() => handleReadMore('Intellectual Property Dispute')}>Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* Case Study 4 */}
                    <div className="col-md-4 mb-4">
                        <div className="case-study-box">
                            <img src="https://th.bing.com/th/id/OIP.6mtSPOapl1_8FDvRBvTjhQHaHa?rs=1&pid=ImgDetMain" alt="Family Law Dispute" className="case-study-image" />
                            <div className="case-study-title">
                                <h4>Family Law Dispute</h4>
                            </div>
                            <div className="case-study-summary">
                                <p>
                                    A family law dispute involving custody arrangements. This case study covers the legal arguments for custody, the role of mediation, and the court's decision.
                                </p>
                                <button id="bottun" onClick={() => handleReadMore('Family Law Dispute')}>Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* Case Study 5 */}
                    <div className="col-md-4 mb-4">
                        <div className="case-study-box">
                            <img src="https://skvarnalaw.com/wp-content/uploads/2021/02/Family-Fighting-Over-Estate-1536x1028.jpeg" alt="Real Estate Dispute" className="case-study-image" />
                            <div className="case-study-title">
                                <h4>Real Estate Dispute</h4>
                            </div>
                            <div className="case-study-summary">
                                <p>
                                    A dispute between a landlord and tenant over lease terms. This case study explores the legal issues related to lease agreements and the final resolution.
                                </p>
                                <button id="bottun" onClick={() => handleReadMore('Real Estate Dispute')}>Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* Case Study 6 */}
                    <div className="col-md-4 mb-4">
                        <div className="case-study-box">
                            <img src="https://th.bing.com/th/id/R.67eb77940d3edaefc613b833ee055069?rik=jPD5%2b%2fMD6%2biRgA&riu=http%3a%2f%2fwww.foveaaero.com%2fblog%2fwp-content%2fuploads%2f2017%2f05%2fMeeting-Argument-1024x803.jpg&ehk=q8r2lSyV5MJbdYr9BrZ3ssSCKAs8KNIMzUd%2b0rA044A%3d&risl=&pid=ImgRaw&r=0" alt="Contract Dispute" className="case-study-image" />
                            <div className="case-study-title">
                                <h4>Contract Dispute</h4>
                            </div>
                            <div className="case-study-summary">
                                <p>
                                    A contract dispute between two businesses. This case study examines breach of contract claims, evidence presented, and the case outcome.
                                </p>
                                <button id="bottun" onClick={() => handleReadMore('Contract Dispute')}>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseStudies;