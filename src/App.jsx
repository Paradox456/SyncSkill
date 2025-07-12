import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";

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
              <button onClick={() => navigate("/signin")} className="px-6 py-3 text-indigo-600 border-2 border-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-28 px-3 pb-20">
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
        <div className="bg-cyan-100 hover:bg-green-300 transition-color duration-100 shadow-lg rounded-2xl p-6 w-72 text-center">
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

        <div className="bg-stone-100 hover:bg-sky-500 transition-color duration-100 shadow-lg rounded-2xl p-6 w-72 text-center">
          <h2 className="text-xl font-bold mb-2 text-gray-600">Portfolio Builder</h2>
          <p className="text-gray-600">
            Showcase your skills with auto-generated portfolios and GitHub integration
          </p>
        </div>
      </div>

     <div>
      <h1 className="font-bold text-amber-500 text-center mt-15 text-4xl ">
        Choose Your Learning Journey
      </h1>
      <p className="text-gray-500 text-center text-xl mt-3">
        Start free and upgrade as you grow. All plans include core features and AI-powered personalization.
      </p>
     </div>

     <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
      <div className="bg-zinc-300 shadow-lg rounded-2xl p-6 w-170 text-center">
      <h1 className="text-center mt-1 text-2xl text-bold text-black">
        Free
      </h1>
      <h2 className="text-center mt-3 text-2xl text-black"> 
        <span className="font-bold text-black">$0</span>
        /month
      </h2>
      <h3 className="text-center mt-2 text-md text-gray-500">
        Perfect for getting started
      </h3>

      <div className="flex justify-center items-center">
        <div className="bg-indigo-600 rounded-lg w-170 mt-6">
        <button className="mt-1">
          Get Started For Free
        </button>
      </div>    

      </div>

      <h1 className="text-left mt-10 mx-1 text-black">
        3 AI-generated paths
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Basic progress tracking
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Community challenges
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Portfolio showcase
      </h1>

     </div>
      
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
      <div className="bg-stone-300 shadow-lg rounded-2xl p-6 w-170 text-center">
      <h1 className="text-center mt-1 text-2xl font-bold text-black">
        Pro
      </h1>
      <h2 className="text-center mt-3 text-2xl text-black"> 
        <span className="font-bold text-black">$20</span>
        /month
      </h2>
      <h3 className="text-center mt-2 text-md text-gray-500">
        For Serious Skill Builders
      </h3>

      <div className="flex justify-center items-center">
        <div className="bg-indigo-600 rounded-xl w-170 mt-6 p-2">
        <button className="mt-1">
          Start Pro Now
        </button>
      </div>    

      </div>

      <h1 className="text-left mt-10 mx-1 text-black">
      Unlimited AI learning paths
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Advanced analytics And insights
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Priority challenge access
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      1-on-1 mentorship sessions
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Portfolio export to GitHub/PDF
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Custom skill assessments
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Priority support
      </h1>

     </div>
      
    </div>


    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
      <div className="bg-stone-300 shadow-lg rounded-2xl p-6 w-170 text-center">
      <h1 className="text-center mt-1 text-2xl font-bold text-black">
        Elite
      </h1>
      <h2 className="text-center mt-3 text-2xl text-black"> 
        <span className="font-bold text-black">$50</span>
        /month
      </h2>
      <h3 className="text-center mt-2 text-md text-gray-500">
        For teams and professionals
      </h3>

      <div className="flex justify-center items-center">
        <div className="bg-indigo-600 rounded-xl w-170 mt-6 p-2">
        <button className="mt-1">
          Contact Sales
        </button>
      </div>    

      </div>

      <h1 className="text-left mt-10 mx-1 text-black">
      Everything in Pro
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Team collaboration tools
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Custom learning paths
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Weekly live workshops
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Career coaching sessions
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Industry certification prep
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      API access for integrations
      </h1>

      <h1 className="text-left mt-10 mx-1 text-black">
      Dedicated account manager 
      </h1>



     </div>

     </div>

     <h1 className="text-center mt-10">
      All plans include a 14-day free trial. No credit card required.
     </h1>


     <div className="flex justify-center gap-10 text-gray-400 text-lg mt-5">
      <span>Cancel anytime</span>
      <span>Money-back guarantee</span>
     </div>

     
      </main>
    </div>
  );
}

export default App;
