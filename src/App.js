import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const App = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_CHATGPT_BACKEND_URL}/api/chat`, { message });
            setResponse(res.data.reply);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    return (
        <div className="app container mx-auto p-4">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
                className="input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            <button onClick={sendMessage} className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Send
            </button>
            <div className="response">
                {response}
            </div>
        </div>
    );
};

export default App;