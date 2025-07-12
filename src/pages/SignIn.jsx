import React from 'react';

function SignInPage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-zinc-300 p-4 box-border">
      <div className="bg-black p-10 rounded-lg shadow-xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-2 text-white">Sign In</h2>
        <p className="text-gray-500 text-base mb-8">Enter your credentials to access your account</p>

        <form className="text-left">
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-dark-input border border-dark-border rounded-md text-white text-base placeholder-placeholder-text focus:outline-none focus:ring-2 focus:ring-purple-cta"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-sm text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-dark-input border border-dark-border rounded-md text-white text-base placeholder-placeholder-text focus:outline-none focus:ring-2 focus:ring-purple-cta"
            />
          </div>

          <div className="flex justify-between items-center text-sm mb-8">
            <label className="flex items-center text-white cursor-pointer">
              <input type="checkbox" className="mr-2 accent-purple-cta w-4 h-4" /> Remember me
            </label>
            <a href="#" className="text-indigo-600 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-indigo-600 text-white font-bold rounded-md text-lg cursor-pointer hover:bg-purple-cta/90 focus:outline-none focus:ring-2 focus:ring-purple-cta focus:ring-opacity-75 mb-8"
          >
            Sign In
          </button>
        </form>

        <div className="relative text-divider-text text-sm mb-8">
          <span className="bg-dark-card px-2 relative z-10 text-gray-500">OR CONTINUE WITH</span>
          <div className="absolute inset-x-0 top-1/2 h-px bg-dark-border -translate-y-1/2"></div>
        </div>

        <div className="flex justify-between gap-4 mb-8">
          <button className="flex-1 p-3 bg-dark-input text-white font-bold rounded-md border border-dark-border text-base cursor-pointer hover:bg-dark-border focus:outline-none focus:ring-2 focus:ring-dark-border focus:ring-opacity-75">
            Google
          </button>
          <button className="flex-1 p-3 bg-dark-input text-white font-bold rounded-md border border-dark-border text-base cursor-pointer hover:bg-dark-border focus:outline-none focus:ring-2 focus:ring-dark-border focus:ring-opacity-75">
            GitHub
          </button>
        </div>

        <p className="text-white text-base mb-10">
          Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
        </p>

        <p className="text-gray-400 text-xs leading-relaxed">
          By continuing, you agree to our <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
    
  );
}

export default SignInPage;