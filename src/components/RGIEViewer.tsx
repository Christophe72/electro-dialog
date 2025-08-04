"use client";

import { useState, useEffect } from "react";
import SectionCard from "./SectionCard";
import SectionDetail from "./SectionDetail";

interface RGIESection {
  section_id: string;
  titre: string;
  description: string;
  contenu: any;
  date_mise_a_jour: string;
}

const RGIEViewer = () => {
  const [data, setData] = useState<RGIESection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/rgie_data.json");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données RGIE");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="font-bold text-red-800 mb-2">Erreur</h3>
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Documentation RGIE - Règlement Général des Installations Électriques
      </h1>

      {/* Navigation par sections */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Sections disponibles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((section) => (
            <SectionCard
              key={section.section_id}
              title={section.titre}
              description={section.description}
              dateUpdate={section.date_mise_a_jour}
              isSelected={selectedSection === section.section_id}
              onClick={() =>
                setSelectedSection(
                  selectedSection === section.section_id
                    ? null
                    : section.section_id
                )
              }
            />
          ))}
        </div>
      </div>

      {/* Affichage du contenu */}
      {selectedSection ? (
        // Affichage d'une section sélectionnée
        data
          .filter((section) => section.section_id === selectedSection)
          .map((section) => (
            <SectionDetail
              key={section.section_id}
              section={section}
              onClose={() => setSelectedSection(null)}
            />
          ))
      ) : (
        // Vue d'ensemble de toutes les sections
        <div className="space-y-6">
          {data.map((section) => (
            <div
              key={section.section_id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {section.titre}
                  </h2>
                  <p className="text-gray-600">{section.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    MAJ: {section.date_mise_a_jour}
                  </span>
                  <button
                    onClick={() => setSelectedSection(section.section_id)}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
                  >
                    Voir détails
                  </button>
                </div>
              </div>

              {/* Aperçu du contenu */}
              <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                {section.section_id === "nouveautes_2022_2025" &&
                Array.isArray(section.contenu) ? (
                  <p>
                    Nouveautés réglementaires de 2022 à 2025 (
                    {section.contenu.length} années couvertes)
                  </p>
                ) : section.section_id === "partie_2" &&
                  section.contenu.termes ? (
                  <p>{section.contenu.termes.length} termes et définitions</p>
                ) : (
                  <p>
                    Cliquez sur "Voir détails" pour afficher le contenu complet
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RGIEViewer;
