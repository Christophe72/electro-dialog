"use client";

import { useState } from "react";
import pannes from "../data/pannes.json";
import Modal from "./Modal";

interface Panne {
  id: string;
  titre: string;
  categorie: string;
  niveau: string;
  symptomes: string[];
  outils_requis: string[];
  etapes: Array<{
    numero: number;
    description: string;
    details: string;
  }>;
  [key: string]: any;
}

export default function ListePannes() {
  const [selectedPanne, setSelectedPanne] = useState<Panne | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePanneClick = (panne: Panne) => {
    setSelectedPanne(panne);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPanne(null);
  };

  return (
    <div className="space-y-6">
      {pannes.map((panne) => (
        <div
          key={panne.id}
          className="p-4 transition-shadow duration-200 bg-white border shadow cursor-pointer rounded-xl hover:shadow-lg"
          onClick={() => handlePanneClick(panne as Panne)}
        >
          <h2 className="text-xl font-bold text-gray-900">{panne.titre}</h2>
          <div className="flex gap-4 mt-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Niveau :</span>
              <span
                className={`ml-1 px-2 py-1 rounded-full text-xs ${
                  panne.niveau === "débutant"
                    ? "bg-green-100 text-green-800"
                    : panne.niveau === "intermédiaire"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {panne.niveau}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Catégorie :</span>
              <span className="px-2 py-1 ml-1 text-xs text-blue-800 bg-blue-100 rounded-full">
                {panne.categorie}
              </span>
            </p>
          </div>

          <div className="mt-3">
            <h3 className="mb-2 text-sm font-semibold text-gray-700">
              Symptômes principaux :
            </h3>
            <ul className="ml-4 text-sm text-gray-600 list-disc">
              {panne.symptomes.slice(0, 3).map((symptome, i) => (
                <li key={i}>{symptome}</li>
              ))}
              {panne.symptomes.length > 3 && (
                <li className="font-medium text-blue-600">
                  ... et {panne.symptomes.length - 3} autres symptômes
                </li>
              )}
            </ul>
          </div>

          <div className="mt-3 text-right">
            <span className="inline-flex items-center text-sm font-medium text-blue-600">
              Cliquer pour voir les détails
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      ))}

      {/* Modal pour afficher les détails de la panne */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedPanne?.titre || ""}
      >
        {selectedPanne && (
          <div className="space-y-6">
            {/* Informations générales */}
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="flex gap-6 mb-4">
                <div>
                  <span className="font-medium text-gray-700">Niveau :</span>
                  <span
                    className={`ml-2 px-3 py-1 rounded-full text-sm ${
                      selectedPanne.niveau === "débutant"
                        ? "bg-green-100 text-green-800"
                        : selectedPanne.niveau === "intermédiaire"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {selectedPanne.niveau}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Catégorie :</span>
                  <span className="px-3 py-1 ml-2 text-sm text-blue-800 bg-blue-100 rounded-full">
                    {selectedPanne.categorie}
                  </span>
                </div>
              </div>
            </div>

            {/* Symptômes */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                🔍 Symptômes
              </h3>
              <ul className="space-y-2">
                {selectedPanne.symptomes.map((symptome, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-red-400 rounded-full"></span>
                    <span className="text-gray-700">{symptome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outils requis */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                🛠️ Outils requis
              </h3>
              <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {selectedPanne.outils_requis.map((outil, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-2 h-2 mr-3 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-700">{outil}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Étapes */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                📋 Étapes d'intervention
              </h3>
              <div className="space-y-4">
                {selectedPanne.etapes.map((etape, i) => (
                  <div key={i} className="py-2 pl-4 border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-sm font-bold text-blue-800 bg-blue-100 rounded-full">
                        {etape.numero}
                      </span>
                      <div className="flex-1">
                        <h4 className="mb-1 font-semibold text-gray-900">
                          {etape.description}
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {etape.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Avertissement de sécurité */}
            <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 w-6 h-6 mr-2 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <div>
                  <h4 className="mb-1 font-semibold text-yellow-800">
                    ⚠️ Avertissement de sécurité
                  </h4>
                  <p className="text-sm text-yellow-700">
                    Toujours couper l'alimentation électrique avant toute
                    intervention. En cas de doute, faire appel à un électricien
                    qualifié.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
