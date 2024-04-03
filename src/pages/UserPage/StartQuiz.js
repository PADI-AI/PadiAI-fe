import React, { useState } from "react";
import SideNav from '../../components/SideNav/SideNav';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import './StartQuiz.css';

function UserDashboard() {
    const [isCompleted, setIsCompleted] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const questions = [
        {
            "topic": "Variables and Data Types",
            "question": "What are the different data types available in Python?"
        },
        {
            "topic": "Working with String, Numbers and Input",
            "question": "How can you convert a string to an integer in Python?"
        },
        {
            "topic": "Conditional Statements (If/Elif/Else)",
            "question": "Explain the difference between '==' and '!=' in Python."
        },
        {
            "topic": "Loops, Lists and Tuples",
            "question": "How can you iterate over a list in Python?"
        },
        {
            "topic": "Functions",
            "question": "What is the difference between 'return' and 'print' in Python functions?"
        },
        {
            "topic": "Classes and Objects",
            "question": "How do you create an object of a class in Python?"
        },
        {
            "topic": "Magic Methods in Python",
            "question": "Explain the purpose of '__init__' method in Python classes."
        },
        {
            "topic": "Inheritance and Polymorphism in Python",
            "question": "Provide an example of inheritance in Python."
        }
    ]

    const handleStartQuiz = () => {
        setIsCompleted(false);
    };

    const handleFormSubmission = async () => {
        setIsSubmitted(true);

        try {
            const response = await handleSubmit();
            if (response.success) {
                navigate('/');
            } else {
                navigate('/start-quiz');
            }
        } catch (error) {

        } finally {

        }
        // setIsLoading(true);
    };

    const handleInputChange = (e, index) => {
        const newAnswers = [...inputValue];
        newAnswers[index] = e.target.value;
        setInputValue(newAnswers);
    };

    const handleSubmit = () => {
        // format the template
        const formattedData = questions.map((question, index) => ({
            topic: question.topic, // Assuming difficulty is used as the topic
            question: question.question,
            answer: inputValue[index] || 'null' // Retrieve answer from inputValues
        }));

        fetch('http://localhost:1234/test', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formattedData)
        })
        .then(response => {
        //   setIsLoading(false);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text(); // Read response as plain text
        })
        .then(data => {
        // Handle successful response here
            console.log('Success:', data);
            // return true;
        })
        .catch(error => {
        //   setIsLoading(false);
          console.error('ERROR:', error);
          // Handle error here
        //   return false;
        });

        console.log(formattedData);
    };

    return (
        <div>
            <SideNav className="sideBar"/>
            {isCompleted ? (
                <div className="testpad">
                    <div className="flex justify-center items-center h-screen">
                        <button 
                            type="button" 
                            className="quiz-button"
                            onClick={handleStartQuiz}
                        >
                            Start Quiz
                        </button>
                    </div>
                </div>
            ) : (
                <div className="customForm">
                    <div className="quiz-title">
                        <p className="quiz-heading">
                            React Pre-Test
                        </p>
                        <hr></hr>
                    </div>
                    <form className="w-full" onSubmit={handleSubmit}>
                        {questions.map((question, index) => (
                            <div key={index} className="question m-5">
                                <label htmlFor={`input-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                                    {question.question}
                                </label>
                                <input 
                                    type="text" 
                                    id={`input-${index}`} 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={inputValue[index] || ''}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            </div>
                        ))}
                        <div className="button-area">
                            <button 
                                type="submit" 
                                className="quiz-button"
                                onClick={handleFormSubmission}
                            >
                                {isLoading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default UserDashboard;
