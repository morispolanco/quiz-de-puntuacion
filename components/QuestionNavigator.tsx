
import React from 'react';

interface QuestionNavigatorProps {
    total: number;
    current: number; // current question index
    onSelect: (index: number) => void;
    answers: (number | null)[];
}

const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({ total, current, onSelect, answers }) => {
    return (
        <nav className="my-6" aria-label="Navegación de preguntas">
            <p className="text-sm font-medium text-slate-600 mb-2 text-center">Ir a la pregunta:</p>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                {Array.from({ length: total }, (_, i) => {
                    const isAnswered = answers[i] !== null;
                    const isCurrent = current === i;
                    
                    let buttonClass = 'p-1 text-sm font-medium transition-colors duration-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400';

                    if (isCurrent) {
                        buttonClass += ' text-indigo-600 font-bold cursor-default';
                    } else if (isAnswered) {
                        buttonClass += ' text-slate-500 hover:text-indigo-600 hover:underline';
                    } else {
                        buttonClass += ' text-slate-700 hover:text-indigo-600 hover:underline';
                    }

                    return (
                        <button
                            key={i}
                            onClick={() => onSelect(i)}
                            disabled={isCurrent}
                            className={buttonClass}
                            aria-current={isCurrent ? 'page' : undefined}
                            aria-label={`Ir a la pregunta ${i + 1}${isAnswered ? ' (respondida)' : ''}`}
                        >
                            {i + 1}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default QuestionNavigator;
