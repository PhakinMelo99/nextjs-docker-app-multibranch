export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Hello Next.js with Docker!</h1>
      
      <main className="flex flex-col gap-8 items-center">
        <p className="text-center max-w-lg text-lg">
          This is a Next.js app deployed with Docker and Jenkins CI/CD pipeline.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">⚡ Fast Refresh</h2>
            <p className="text-sm text-gray-600">
              Edit <code className="bg-gray-100 px-2 py-1 rounded">src/app/page.tsx</code> and see changes instantly.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">🐳 Docker Ready</h2>
            <p className="text-sm text-gray-600">
              Optimized multi-stage Dockerfile for development and production.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">🚀 CI/CD Pipeline</h2>
            <p className="text-sm text-gray-600">
              Automated deployment with Jenkins multibranch pipeline.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">📦 Production Ready</h2>
            <p className="text-sm text-gray-600">
              Separate DEV and PROD environments with rollback support.
            </p>
          </div>
        </div>
      </main>

      <footer className="text-xs text-center text-gray-500">
        Deployed with ❤️ using Docker & Jenkins
      </footer>
    </div>
  )
}