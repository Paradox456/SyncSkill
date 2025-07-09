import { BrowserRouter} from "react-router-dom";


function App() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="text-2xl font-bold text-indigo-600">SkillSync</span>
          </a>
          <div className="flex items-center space-x-4">
            <a href="#" className="px-6 py-3 text-indigo-600 border-2 border-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
              Sign In
            </a>
            <a href="#" className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
