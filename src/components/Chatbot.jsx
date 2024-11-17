import React, { useState } from 'react';
import { generateFlashcards } from '../utils/api';
import Flashcard from './Flashcard';
import Loader from './Loader';

const ChatBot = () => {
    const [input, setInput] = useState('');
    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        try {
            const data = await generateFlashcards(input);
            setFlashcards(data);
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="chatbot">
                <h2 className="">What do you want to learn today?</h2>
                <div className="grid"></div>
                <div id="poda">
                    <div className="glow"></div>
                    <div className="darkBorderBg"></div>
                    <div className="darkBorderBg"></div>
                    <div className="darkBorderBg"></div>

                    <div className="white"></div>

                    <div className="border"></div>

                    <div id="main">
                        <input placeholder="Enter a topic (e.g., Python)" type="text" name="text" className="input" 
                        value={input} onChange={(e) => setInput(e.target.value)}/>

                        <div id="input-mask"></div>
                        <div id="pink-mask"></div>
                        <div className="filterBorder"></div>
                    </div>
                </div>

                <button class="btn" onClick={handleGenerate}>
                    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
                        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                    </svg>

                    <span class="text">Generate Flashcards</span>
                </button>

                <a href="https://www.google.com/search?q=what+are+flashcards+and+why+are+they+used" target="_blank" className='flash-info' rel="noopener noreferrer">&#9432; What is a Flashcard ?</a>

            </div>
            {loading && <Loader />}
            <div className="flashcard-grid">
                {flashcards.map((card, index) => (
                    <Flashcard key={index} question={card.question} answer={card.answer} />
                ))}
            </div>
        </div>
        
    );
};

export default ChatBot;
