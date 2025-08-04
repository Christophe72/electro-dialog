import * as React from "react";

interface SectionDetailProps {
  section: {
    section_id: string;
    titre: string;
    description: string;
    contenu: any;
    date_mise_a_jour: string;
  };
  onClose: () => void;
}

const SectionDetail: React.FC<SectionDetailProps> = ({ section, onClose }) => {
  const renderContent = (
    content: any,
    level = 0
  ): React.JSX.Element | React.JSX.Element[] => {
    if (typeof content === "string") {
      return <p className="mb-2 leading-relaxed text-gray-700">{content}</p>;
    }

    if (Array.isArray(content)) {
      return (
        <ul className="ml-4 space-y-2 list-disc list-inside">
          {content.map((item, index) => (
            <li key={index} className="text-gray-700">
              {typeof item === "object" ? renderContent(item, level + 1) : item}
            </li>
          ))}
        </ul>
      );
    }

    if (typeof content === "object" && content !== null) {
      return (
        <div className={`space-y-4 ${level > 0 ? "ml-4" : ""}`}>
          {Object.entries(content).map(([key, value]) => (
            <div key={key} className="py-2 pl-4 border-l-4 border-blue-200">
              <h4 className="mb-3 text-lg font-semibold text-blue-800 capitalize">
                {key.replace(/_/g, " ")}
              </h4>
              <div className="ml-2">{renderContent(value, level + 1)}</div>
            </div>
          ))}
        </div>
      );
    }

    return <span className="text-gray-700">{String(content)}</span>;
  };

  const renderSpecialContent = () => {
    // Gestion spéciale pour la section nouveautés
    if (
      section.section_id === "nouveautes_2022_2025" &&
      Array.isArray(section.contenu)
    ) {
      return (
        <div className="space-y-6">
          {section.contenu.map((item: any, index: number) => (
            <div
              key={index}
              className="p-6 border border-yellow-200 shadow-sm bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl"
            >
              <h4 className="flex items-center mb-4 text-xl font-bold text-yellow-800">
                <span className="flex items-center justify-center w-8 h-8 mr-3 text-sm bg-yellow-200 rounded-full">
                  {item.annee}
                </span>
                Année {item.annee}
              </h4>
              <ul className="space-y-3">
                {item.changements.map((changement: string, idx: number) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-yellow-300 rounded-full"></span>
                    {changement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    // Gestion spéciale pour la section termes et définitions
    if (section.section_id === "partie_2" && section.contenu.termes) {
      return (
        <div className="space-y-4">
          {section.contenu.termes.map((terme: any, index: number) => (
            <div
              key={index}
              className="p-6 border border-blue-200 shadow-sm bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
            >
              <h4 className="flex items-center mb-3 text-lg font-bold text-blue-800">
                <span className="flex items-center justify-center w-6 h-6 mr-3 text-sm bg-blue-200 rounded-full">
                  {index + 1}
                </span>
                {terme.mot}
              </h4>
              <p className="leading-relaxed text-gray-700 ml-9">
                {terme.definition}
              </p>
            </div>
          ))}
        </div>
      );
    }

    return renderContent(section.contenu);
  };

  return (
    <div className="p-8 mb-6 bg-white border border-gray-100 shadow-lg rounded-xl">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            {section.titre}
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-600">
            {section.description}
          </p>
        </div>
        <div className="flex items-center ml-6 space-x-3">
          <span className="px-3 py-2 text-sm text-gray-500 bg-gray-100 rounded-full">
            MAJ: {section.date_mise_a_jour}
          </span>
          <button
            onClick={onClose}
            className="flex items-center px-4 py-2 text-white transition-colors bg-gray-500 rounded-lg hover:bg-gray-600"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Fermer
          </button>
        </div>
      </div>

      <div className="prose max-w-none">{renderSpecialContent()}</div>
    </div>
  );
};

export default SectionDetail;
