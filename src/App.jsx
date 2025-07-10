import { BrowserRouter} from "react-router-dom";


function App() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-indigo-600">SkillSync</span>
          </a>
          <div className="flex items-center space-x-4">
            <button href="#" className="px-6 py-3 text-indigo-600 border-2 border-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div class="flex items-end justify-center">
        <h1 className="text-center text-sm bg-gradient-to-r from-lime-500 to-emerald-500 text-black rounded-full text-indigo-600 mt-5"> AI-Powered Learning Platform</h1>
        </div>
      <div>
        <h1 className="text-center text-7xl mt-5 animate-pulse">
          Build <span className="font-bold text-indigo-600">Job-Ready</span> Skills
        </h1>
      </div>
      <p className="text-xl mt-5 text-center text-neutral-600 "> 
      Master in-demand skills with AI-generated learning paths, interactive challenges, and personalized feedback. Build your portfolio and advance your career.
      </p>
      <div className="flex justify-center items-center">
      <button onClick="handleClick()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 content-center">
      Start Learning For Free
      </button>
     </div>
     <div className="mt-20 mx-auto max-w-md rounded-3xl bg-white p-6 shadow-md text-center">
     <h1 className="text-2xl font-bold text-black">AI-Generated Paths</h1>
     <p className="mt-3 text-neutral-500">
        Personalized learning journeys tailored to your goals and current skill level
    </p>
</div>
    </nav>
  );
}

export default App;
