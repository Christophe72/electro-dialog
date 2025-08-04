import React from "react";
import Link from "next/link";
import RGIEViewer from "../components/RGIEViewer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              ⚡ ELECTRO-DIAG
            </h1>
            <div className="flex space-x-6">
              <Link
                href="/"
                className="px-4 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium hover:bg-blue-100 transition-colors"
              >
                📋 Documentation RGIE
              </Link>
              <Link
                href="/pannes"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                🔧 Diagnostic Pannes
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Documentation RGIE - Règlement Général des Installations Électriques
          </h2>
          <p className="text-gray-600 text-lg">
            Consultez la documentation officielle du RGIE belge et accédez aux
            outils de diagnostic.
          </p>
        </div>

        {/* Cards de navigation */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link href="/" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">📋</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                  Documentation RGIE
                </h3>
              </div>
              <p className="text-gray-600">
                Explorez les différentes sections du RGIE, des prescriptions
                générales aux nouveautés 2025.
              </p>
              <div className="mt-4 text-blue-600 font-medium">
                Consulter la documentation →
              </div>
            </div>
          </Link>

          <Link href="/pannes" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🔧</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                  Diagnostic des Pannes
                </h3>
              </div>
              <p className="text-gray-600">
                Guides détaillés pour diagnostiquer et résoudre les pannes
                électriques courantes.
              </p>
              <div className="mt-4 text-blue-600 font-medium">
                Accéder aux diagnostics →
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Section RGIE réduite */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Aperçu de la Documentation RGIE
          </h3>
          <div className="max-h-96 overflow-hidden">
            <RGIEViewer />
          </div>
          <div className="text-center mt-4">
            <div className="bg-gradient-to-t from-white to-transparent h-20 -mt-20 relative z-10"></div>
            <Link
              href="#rgie"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Voir toute la documentation
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Section complète RGIE */}
      <div id="rgie" className="bg-gray-50">
        <RGIEViewer />
      </div>
    </div>
  );
};

export default HomePage;
