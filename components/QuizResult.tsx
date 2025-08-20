
import React from 'react';

interface QuizResultProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, totalQuestions, onRestart }) => {
    const percentage = Math.round((score / totalQuestions) * 100);

    const getResultMessage = () => {
        if (percentage >= 90) return "¡Excelente! Eres un experto en puntuación.";
        if (percentage >= 70) return "¡Muy bien! Tienes un gran conocimiento de las reglas.";
        if (percentage >= 50) return "¡Buen trabajo! Sigue practicando para mejorar.";
        return "No te preocupes. ¡La práctica hace al maestro!";
    };

    return (
        <div className="text-center p-4 animate-fade-in">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Quiz Completado</h2>
            <p className="text-xl text-slate-600 mb-2">Tu puntuación final es:</p>
            <p className="text-6xl font-bold text-indigo-600 mb-4">
                {score} / {totalQuestions}
            </p>
            <p className="text-lg text-slate-500 mb-8">{getResultMessage()}</p>
            <button
                onClick={onRestart}
                className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
            >
                Intentar de Nuevo
            </button>
        </div>
    );
};

export default QuizResult;
