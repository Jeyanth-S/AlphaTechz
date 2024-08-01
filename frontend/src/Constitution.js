import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Constitution/const.css";
import profile from './components/profile.png';
import axios from 'axios';

function Constitution() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

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

    }, []);


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
            <div className='container'></div>
            <div>
                <h2 className='flexx'>Constitutions Made Simple</h2>
            </div>
            <div className='flexx'>
                <span><img src="https://ldo.gov.in/WriteReadData/Gallery/PhotoGallery/Images/PreambleFinal%20English.JPG" height="400" width="338" class="hola" /></span>
                <span class="texy"><span className='sshady'>A constitution is a set of fundamental</span> principles or established precedents according to which a state or other organization is governed. In simple words, it is a rulebook that outlines how a government operates, how laws are made, and the rights and duties of citizens. It serves as the supreme law of the land, guiding the functioning of the government and ensuring that the rights of the people are protected. Popular uprisings against autocratic, corrupt or under-performing governments often highlight the role of ordinary citizens, through the internet and social media, in orchestrating the downfall of regimes, while also showing the difficulties faced by ordinary citizens (owing partly to a lack of information and constitutional understanding) in seeking to engage in the subsequent constitution-building processes. These whiteboard animation videos are part of International IDEA’s contribution to civic education in support of such constitution-building processes. They explain the basic concepts of constitutionalism and constitution building to non-specialist audiences, with an emphasis on helping citizens to understand what a constitution is and does, how constitutions are made, and why the constitution is relevant to their lives. The videos are designed to be viewed online and shared through social media, but could also be used in more structured settings, such as a workshop or seminar, to provide a good general introduction to the subject on which to base further discussions or activities.</span>
            </div>
            <div className='gomtha'><h4> Key messages:</h4></div>
            <div className='flexx'>
                <p className='texy'><span className='sshady'>We need government</span>, but government must be controlled if it is to serve the people.
                    Constitution is a supreme law that is binding even on the government.
                    A constitution organises and constrains power.
                    A constitution defines a state and the rights of its citizen.
                    In a democratic order, the Constitution ensures that the people ultimately control the Government.
                    Constitution-building is a Process.
                    The process starts before and ends after agreeing the text.
                    Broad agreement and public support key to success of the process.
                    Building agreement takes time and will involve compromises.
                    ‘We the people’ means everyone.
                    Constitutions are of indirect benefit: they can influence the quality of democracy, which improves the ability and willingness of those exercising power to use their power for the benefit of society.
                    Federalism provides a way for different groups of people in different parts of the country to live together
                </p>
                <span className='seppukku'><iframe width="560" height="315" src="https://www.youtube.com/embed/0UzKD8rZCc0?si=dSsdDPtaXYsKhEUz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </span>
            </div>
            <h4 className='flexx'>Acknowledgements:</h4>
            <p className='flexx'><span className='sshady' >"Dr. B. R. Ambedkar   </span> was a wise constitutional expert, he had studied the constitutions of about 60 countries. Ambedkar is recognized as the "Father of the Constitution of India"</p>
            <span className='flexx' >for more about articles <span> -<a href="http://localhost:3000/article" target="_blank">click this page</a> </span></span>
        </div>
    )
}

export default Constitution