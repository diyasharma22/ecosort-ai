"use client";

import { useState } from "react";
import ResultCard from "./ResultCard";

type Result = {
  category: string;
  reason: string;
  disposalTip: string;
};

export default function ClassifierForm() {
  const [item, setItem] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!item.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/classify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item }),
      });

      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError("Couldn't classify that item. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
  value={item}
  onChange={(e) => setItem(e.target.value)}
  placeholder="e.g. banana peel, old phone charger..."
  className="flex-1 border border-purple-200 rounded-lg px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
/>
<button
  type="submit"
  disabled={loading}
  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg disabled:opacity-50 transition-colors"
>
          {loading ? "Checking..." : "Sort it"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      {result && <ResultCard result={result} />}
    </div>
  );
}