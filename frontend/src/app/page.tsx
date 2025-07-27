export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left text-gray-800 dark:text-gray-200">
          EPIR Art Jewellery
        </h1>
        <h2 className="text-xl text-center sm:text-left text-gray-600 dark:text-gray-400">
          Multi-Agent E-commerce Analytics Application
        </h2>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            System Status
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Frontend: Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Firebase: Connected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">AI Agents: Initializing</span>
            </div>
          </div>
        </div>

        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left max-w-md">
          <li className="mb-2 tracking-[-.01em]">
            Analytics Agent: Processing Google Analytics data
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Campaign Agent: Managing Google Ads optimization
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Customer Agent: Handling customer service queries
          </li>
          <li className="tracking-[-.01em]">
            Inventory Agent: Syncing with Shopify
          </li>
        </ol>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <span>Powered by Firebase & Genkit</span>
        <span>•</span>
        <span>Next.js 15</span>
        <span>•</span>
        <span>Vertex AI</span>
      </footer>
    </div>
  );
}
