import ClassifierForm from "@/components/ClassifierForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex flex-col items-center justify-center px-4">
  <div className="text-center mb-8">
    <h1 className="text-3xl font-bold text-pink-600">EcoSort AI</h1>
        <p className="text-gray-600 mt-2 max-w-md">
          Not sure which bin something goes in? Type it below and let AI guide
          responsible waste segregation — one item at a time.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Built for SDG 12: Responsible Consumption & Production
        </p>
      </div>
      <ClassifierForm />
    </main>
  );
}