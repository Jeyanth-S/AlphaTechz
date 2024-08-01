import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from './components/profile.png';
import './home.css';

function Home() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
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

    }, []);

    axios.defaults.withCredentials = true;

    const handleSend = async () => {

        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const botMessage = { sender: 'bot', text: data.response };

            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error fetching response:', error);
            const errorMessage = { sender: 'bot', text: 'Error: Could not get response from server.' };
            setMessages([...messages, userMessage, errorMessage]);
        }

        setInput('');
    };

    return (
        <div className="d-flex flex-column">
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
            </header>

            <div className="container mt-5">
                <div className="row">
                    <aside className="col-2 sidebar bg-light border-end">
                        <h2 className="text-center">Chat History</h2>
                        <ul className="list-group">
                        </ul>
                    </aside>
                    <div className="col-10">
                        <h1 className="text-center">CHAT ASSISTANT</h1>
                        <div className="chat-box border rounded p-3 my-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender === 'user' ? 'text-end' : 'text-start'}`}>
                                    <div id="piccolo" className={`p-2 my-2 rounded ${msg.sender === 'user' ? ' text-black' : 'bg-light text-dark'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type a message"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' ? handleSend() : null}
                            />
                            <button id="bottun" className="btn btn-primary" onClick={handleSend}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
