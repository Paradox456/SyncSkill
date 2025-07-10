import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-indigo-600">SkillSync</span>
            </a>
            <div className="flex items-center space-x-4">
              <button className="px-6 py-3 text-indigo-600 border-2 border-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-28 px-4 pb-20">
        <div className="flex items-end justify-center">
          <h1 className="text-center text-sm bg-gradient-to-r from-lime-500 to-emerald-500 text-black rounded-l-5xl text-indigo-600 mt-5">
            AI-Powered Learning Platform
          </h1>
        </div>

        <h1 className="text-center text-7xl mt-5 animate-pulse">
          Build <span className="font-bold text-indigo-600">Job-Ready</span> Skills
        </h1>

        <p className="text-xl mt-5 text-center text-neutral-600">
          Master in-demand skills with AI-generated learning paths, interactive challenges, and personalized feedback. Build your portfolio and advance your career.
        </p>

        <div className="flex justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10">
            Start Learning For Free
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
        <div className="bg-cyan-100 hover:bg-green-500 transition-color duration-100 shadow-lg rounded-2xl p-6 w-72 text-center">
           <h2 className="text-xl font-bold mb-2 text-gray-600">AI-Generated Paths</h2>
            <p className="text-gray-600">
            Personalized learning journeys tailored to your goals and current skill level
              </p>
        </div>

        <div className="bg-amber-100 hover:bg-indigo-500 transition-color duration-100 shadow-lg rounded-2xl p-6 w-72 text-center">
          <h2 className="text-xl font-bold mb-2 text-gray-600">Weekly Challenges</h2>
          <p className="text-gray-600">
            Compete with peers, solve real-world problems, and climb the leaderboards
          </p>
        </div>

        <div className="bg-sky-100 hover:bg-stone-500 transition-color duration-100 shadow-lg rounded-2xl p-6 w-72 text-center">
          <h2 className="text-xl font-bold mb-2 text-gray-600">Portfolio Builder</h2>
          <p className="text-gray-600">
            Showcase your skills with auto-generated portfolios and GitHub integration
          </p>
        </div>
      </div>

      </main>
    </div>
  );
}

export default App;
