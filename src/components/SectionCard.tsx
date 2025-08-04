interface SectionCardProps {
  title: string;
  description: string;
  dateUpdate: string;
  isSelected: boolean;
  onClick: () => void;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  dateUpdate,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
        isSelected
          ? "bg-blue-100 border-blue-300 shadow-md"
          : "bg-white border-gray-200 hover:bg-gray-50 hover:shadow-sm"
      }`}
      onClick={onClick}
    >
      <h3
        className={`font-semibold mb-2 ${
          isSelected ? "text-blue-800" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p className="mb-3 text-sm text-gray-600">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">Mis à jour: {dateUpdate}</span>
        <span
          className={`text-xs px-2 py-1 rounded ${
            isSelected
              ? "bg-blue-200 text-blue-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {isSelected ? "Sélectionné" : "Cliquer pour voir"}
        </span>
      </div>
    </div>
  );
};

export default SectionCard;
