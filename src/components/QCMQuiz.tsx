"use client";

import { useState } from "react";

interface QCMQuestion {
  id: string;
  question: string;
  options: string[];
  reponse_correcte: number;
  explication: string;
}

interface QCMData {
  id: string;
  titre: string;
  description: string;
  questions: QCMQuestion[];
}

interface QCMQuizProps {
  qcm: QCMData;
  onBack: () => void;
}

interface UserAnswer {
  questionId: string;
  selectedOption: number;
  isCorrect: boolean;
}

const QCMQuiz = ({ qcm, onBack }: QCMQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQuestion = qcm.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === qcm.questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / qcm.questions.length) * 100;

  const handleOptionSelect = (optionIndex: number) => {
    if (showExplanation) return; // Empêcher de changer la réponse après validation
    setSelectedOption(optionIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === currentQuestion.reponse_correcte;
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption,
      isCorrect,
    };

    setUserAnswers((prev) => [...prev, newAnswer]);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setIsQuizCompleted(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  const calculateScore = () => {
    const correctAnswers = userAnswers.filter(
      (answer) => answer.isCorrect
    ).length;
    return {
      correct: correctAnswers,
      total: userAnswers.length,
      percentage: Math.round((correctAnswers / userAnswers.length) * 100),
    };
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setShowExplanation(false);
    setIsQuizCompleted(false);
  };

  // Affichage des résultats finaux
  if (isQuizCompleted) {
    const score = calculateScore();
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎉 QCM Terminé !
            </h2>
            <h3 className="text-xl text-gray-700 mb-6">{qcm.titre}</h3>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div
                className={`text-4xl font-bold mb-2 ${getScoreColor(
                  score.percentage
                )}`}
              >
                {score.percentage}%
              </div>
              <div className="text-gray-600">
                {score.correct} bonnes réponses sur {score.total}
              </div>
            </div>

            {score.percentage >= 80 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-medium">
                  🌟 Excellent ! Vous maîtrisez bien ce sujet.
                </p>
              </div>
            )}

            {score.percentage >= 60 && score.percentage < 80 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-medium">
                  👍 Bien ! Quelques révisions pourraient être utiles.
                </p>
              </div>
            )}

            {score.percentage < 60 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-medium">
                  📚 Il serait bon de revoir les concepts de base.
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              🔄 Refaire le QCM
            </button>
            <button
              onClick={onBack}
              className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              ← Retour aux QCM
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* En-tête avec progression */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            ← Retour aux QCM
          </button>
          <span className="text-gray-500">
            Question {currentQuestionIndex + 1} sur {qcm.questions.length}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">{qcm.titre}</h1>

        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {currentQuestion.question}
        </h2>

        {/* Options de réponse */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            let buttonClass =
              "w-full text-left p-4 border rounded-lg transition-all duration-200 ";

            if (showExplanation) {
              if (index === currentQuestion.reponse_correcte) {
                buttonClass += "bg-green-50 border-green-300 text-green-800";
              } else if (
                index === selectedOption &&
                index !== currentQuestion.reponse_correcte
              ) {
                buttonClass += "bg-red-50 border-red-300 text-red-800";
              } else {
                buttonClass += "bg-gray-50 border-gray-300 text-gray-600";
              }
            } else {
              if (selectedOption === index) {
                buttonClass += "bg-blue-50 border-blue-300 text-blue-800";
              } else {
                buttonClass +=
                  "bg-white border-gray-300 text-gray-700 hover:bg-gray-50";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={buttonClass}
                disabled={showExplanation}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            );
          })}
        </div>

        {/* Explication */}
        {showExplanation && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">
              💡 Explication :
            </h3>
            <p className="text-blue-700">{currentQuestion.explication}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between">
          <div>
            {!showExplanation && selectedOption !== null && (
              <button
                onClick={handleSubmitAnswer}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Valider la réponse
              </button>
            )}
          </div>

          <div>
            {showExplanation && (
              <button
                onClick={handleNextQuestion}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                {isLastQuestion ? "Voir les résultats" : "Question suivante →"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QCMQuiz;
