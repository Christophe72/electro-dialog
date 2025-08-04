interface QCMCardProps {
  title: string;
  description: string;
  questionCount: number;
  onStart: () => void;
}

const QCMCard = ({
  title,
  description,
  questionCount,
  onStart,
}: QCMCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">{description}</p>

          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {questionCount} question{questionCount > 1 ? "s" : ""}
            </span>
            <span className="ml-3">
              ⏱️ ~{Math.ceil(questionCount * 1.5)} min
            </span>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <button
          onClick={onStart}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          <span className="mr-2">🚀</span>
          Commencer le QCM
        </button>
      </div>
    </div>
  );
};

export default QCMCard;
