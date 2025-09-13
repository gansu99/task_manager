import React from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'login' | 'signup'>('home');

  const handleLogin = () => {
    setCurrentPage('login');
  };

  const handleSignup = () => {
    setCurrentPage('signup');
  };

  const handleDashboard = () => {
    console.log('Go to Dashboard clicked');
    // Add dashboard navigation logic here
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'login') {
    return <LoginPage onBack={handleBackToHome} />;
  }

  if (currentPage === 'signup') {
    return <SignupPage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-blue font-open-sans flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4 leading-tight">
            Welcome to My Task Manager
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Organize your life, boost productivity, and achieve your goals with our intuitive task management solution.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center max-w-3xl mx-auto">
          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full md:w-auto min-w-[200px] bg-white text-blue-600 font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            Login
          </button>

          {/* Signup Button */}
          <button
            onClick={handleSignup}
            className="w-full md:w-auto min-w-[200px] bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            Signup
          </button>

          {/* Dashboard Button */}
          <button
            onClick={handleDashboard}
            className="w-full md:w-auto min-w-[200px] bg-white/10 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-2xl border-2 border-white/30 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            Go to Dashboard
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 md:mt-20 text-white/60">
          <div className="flex justify-center items-center space-x-8">
            <div className="w-12 h-0.5 bg-white/30"></div>
            <span className="text-sm font-light">Start your productivity journey</span>
            <div className="w-12 h-0.5 bg-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;