
import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
    question: Question;
    onAnswer: (selectedOptionIndex: number) => void;
    onNext: () => void;
    questionNumber: number;
    totalQuestions: number;
    userAnswer: number | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, onNext, questionNumber, totalQuestions, userAnswer }) => {
    const selectedAnswerIndex = userAnswer;
    const showFeedback = userAnswer !== null;

    const handleOptionClick = (index: number) => {
        onAnswer(index);
    };

    const getOptionClass = (index: number) => {
        if (selectedAnswerIndex === null) {
            return "bg-slate-100 hover:bg-indigo-100 text-slate-700";
        }

        const isCorrectAnswer = index === question.correctAnswerIndex;
        const isSelectedAnswer = index === selectedAnswerIndex;

        if (isCorrectAnswer) {
            return "bg-green-100 text-green-800 border-green-500";
        }
        if (isSelectedAnswer) {
            return "bg-red-100 text-red-800 border-red-500";
        }
        
        return "bg-slate-100 text-slate-500 cursor-not-allowed";
    };

    return (
        <div className="flex flex-col animate-fade-in">
            <h2 className="text-xl font-semibold mb-1 text-slate-800">Pregunta {questionNumber}</h2>
            <p className="text-lg leading-relaxed mb-6">{question.question}</p>
            
            <div className="space-y-3">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        disabled={selectedAnswerIndex !== null}
                        className={`w-full text-left p-4 rounded-lg border-2 border-transparent transition-all duration-300 ${getOptionClass(index)}`}
                        aria-pressed={selectedAnswerIndex === index}
                    >
                        <span className="font-semibold mr-2">{String.fromCharCode(97 + index)})</span> {option}
                    </button>
                ))}
            </div>

            {showFeedback && (
                <div className={`mt-6 p-4 rounded-lg animate-fade-in ${selectedAnswerIndex === question.correctAnswerIndex ? 'bg-green-50' : 'bg-red-50'}`}>
                    <h3 className={`font-bold ${selectedAnswerIndex === question.correctAnswerIndex ? 'text-green-700' : 'text-red-700'}`}>
                        {selectedAnswerIndex === question.correctAnswerIndex ? '¡Correcto!' : 'Incorrecto'}
                    </h3>
                    <p className="text-slate-600 mt-1">{question.feedback}</p>
                    <button
                        onClick={onNext}
                        className="mt-4 w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
                    >
                        {questionNumber === totalQuestions ? 'Ver Resultados' : 'Siguiente Pregunta'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;
