type Result = {
  category: string;
  reason: string;
  disposalTip: string;
};

const CATEGORY_COLORS: Record<string, string> = {
  "Wet Waste": "bg-yellow-100 text-yellow-800",
  "Dry Waste": "bg-pink-100 text-pink-800",
  "Hazardous Waste": "bg-red-100 text-red-800",
  "E-Waste": "bg-purple-100 text-purple-800",
  "Unclear": "bg-gray-100 text-gray-800",
};

export default function ResultCard({ result }: { result: Result }) {
  const colorClass = CATEGORY_COLORS[result.category] || CATEGORY_COLORS["Unclear"];

  return (
    <div className="mt-4 border border-purple-100 rounded-lg p-4 bg-white/80 shadow-sm">
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
        {result.category}
      </span>
      <p className="mt-2 text-sm text-gray-700">{result.reason}</p>
      <p className="mt-1 text-sm text-yellow-700 italic">💡 {result.disposalTip}</p>
    </div>
  );
}