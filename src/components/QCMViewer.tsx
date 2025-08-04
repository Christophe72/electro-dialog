"use client";

import { useState, useEffect } from "react";
import QCMCard from "./QCMCard";
import QCMQuiz from "./QCMQuiz";

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

const QCMViewer = () => {
  const [qcmData, setQcmData] = useState<QCMData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedQCM, setSelectedQCM] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/qcm_data.json");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des QCM");
        }
        const jsonData = await response.json();
        setQcmData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleQCMSelect = (qcmId: string) => {
    setSelectedQCM(qcmId);
  };

  const handleBackToList = () => {
    setSelectedQCM(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="w-12 h-12 border-b-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 border border-red-200 rounded-lg bg-red-50">
        <h3 className="mb-2 font-bold text-red-800">Erreur</h3>
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  // Affichage d'un QCM spécifique
  if (selectedQCM) {
    const qcm = qcmData.find((q) => q.id === selectedQCM);
    if (qcm) {
      return <QCMQuiz qcm={qcm} onBack={handleBackToList} />;
    }
  }

  // Affichage de la liste des QCM disponibles
  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-900">
        QCM - Vérification des connaissances RGIE
      </h1>

      <p className="max-w-2xl mx-auto mb-8 text-center text-gray-600">
        Testez vos connaissances sur le Règlement Général des Installations
        Électriques avec nos questionnaires à choix multiples. Chaque QCM couvre
        un aspect spécifique du RGIE.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {qcmData.map((qcm) => (
          <QCMCard
            key={qcm.id}
            title={qcm.titre}
            description={qcm.description}
            questionCount={qcm.questions.length}
            onStart={() => handleQCMSelect(qcm.id)}
          />
        ))}
      </div>

      <div className="p-6 mt-12 border border-blue-200 rounded-lg bg-blue-50">
        <h2 className="mb-3 text-lg font-semibold text-blue-800">
          💡 Conseils pour réussir
        </h2>
        <ul className="space-y-2 text-blue-700 list-disc list-inside">
          <li>Lisez attentivement chaque question avant de répondre</li>
          <li>
            Prenez le temps de réfléchir aux implications de chaque réponse
          </li>
          <li>Les explications vous aideront à comprendre les concepts</li>
          <li>N'hésitez pas à refaire les QCM pour améliorer vos résultats</li>
        </ul>
      </div>
    </div>
  );
};

export default QCMViewer;
