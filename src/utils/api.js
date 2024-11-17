import axios from 'axios';

const API_KEY = 'AIzaSyBi1Qu_afJ6wx1wxSQTyS8DhGrGXgaxjl4';
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

export const generateFlashcards = async (topic) => {
    const prompt = `Generate a response for 10 different flashcards with the following structure:
    A question on the topic '${topic}'.
    A concise and correct answer to the question.
    Ensure the content is clear, beginner-friendly, and accurate. Use varied topics within '${topic}' to aid learning.`;
  
    const data = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };
  
    try {
      const response = await axios.post(`${BASE_URL}?key=${API_KEY}`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      const text = response.data?.candidates[0]?.content?.parts[0]?.text || '';
      
      // Parsing the response text into an array of flashcards
      const flashcards = text
        .split('\n\n\n') // Splitting by double newlines to separate flashcards
        .filter((fc) => fc.trim() !== '') // Removing empty entries
        .map((fc) => {
          const questionMatch = fc.match(/\* \*\*Question:\*\* (.+)/);
          const answerMatch = fc.match(/\* \*\*Answer:\*\* (.+)/);
  
          return {
            question: questionMatch ? questionMatch[1].trim() : '',
            answer: answerMatch ? answerMatch[1].trim() : '',
          };
        });
  
        console.log("---FLASHCARDS---",flashcards)
      return flashcards;
    } catch (error) {
      console.error('Error generating flashcards:', error);
      throw new Error('Failed to generate flashcards.');
    }
  };
  
