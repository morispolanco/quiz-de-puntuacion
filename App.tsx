
import React, { useState, useCallback } from 'react';
import { quizData } from './constants/quizData';
import QuestionCard from './components/QuestionCard';
import QuizResult from './components/QuizResult';
import ProgressBar from './components/ProgressBar';
import { Question } from './types';

const App: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswer = useCallback((isCorrect: boolean) => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
    }, []);

    const handleNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < quizData.length) {
            setCurrentQuestionIndex(nextIndex);
        } else {
            setQuizFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizFinished(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans text-slate-800">
            <div className="w-full max-w-2xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-slate-700">Quiz de Puntuación</h1>
                    <p className="text-slate-500 mt-2">Pon a prueba tus conocimientos de gramática española.</p>
                </header>

                <main className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-500">
                    {quizFinished ? (
                        <QuizResult score={score} totalQuestions={quizData.length} onRestart={restartQuiz} />
                    ) : (
                        <>
                            <ProgressBar current={currentQuestionIndex + 1} total={quizData.length} />
                            <QuestionCard
                                question={quizData[currentQuestionIndex] as Question}
                                onAnswer={handleAnswer}
                                onNext={handleNextQuestion}
                                questionNumber={currentQuestionIndex + 1}
                                totalQuestions={quizData.length}
                            />
                        </>
                    )}
                </main>
                 <footer className="text-center mt-8 text-sm text-slate-400">
                    <p>Diseñado para mejorar tus habilidades de escritura.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
