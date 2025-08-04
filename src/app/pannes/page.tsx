import ListePannes from "../../components/ListePannes";

export default function PannesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🔧 Diagnostic des Pannes Électriques
          </h1>
          <p className="text-gray-600 text-lg">
            Sélectionnez une panne pour voir les étapes de diagnostic et de
            réparation détaillées.
          </p>
        </div>

        <ListePannes />
      </div>
    </div>
  );
}
