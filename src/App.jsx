import React from 'react';
import Navbar from './components/Navbar';
import ChatBot from './components/Chatbot';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ChatBot />
    </div>
  );
};

export default App;
