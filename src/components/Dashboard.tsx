import React, { useState } from 'react';
import { LogOut, Plus, ArrowLeft } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
  onBackToHome: () => void;
}

function Dashboard({ onLogout, onBackToHome }: DashboardProps) {
  const [tasks, setTasks] = useState([
    'Finish homework',
    'Call John',
    'Buy groceries'
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-blue font-open-sans flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="mb-8 flex items-center text-white/80 hover:text-white transition-colors duration-200 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back to Home</span>
        </button>

        {/* Dashboard Container */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Your Tasks
            </h1>
            <p className="text-gray-600 font-light">
              Stay organized and productive with your task list
            </p>
          </div>

          {/* Task List */}
          <div className="mb-10">
            <div className="bg-gray-50 rounded-2xl p-6">
              <ul className="space-y-4">
                {tasks.map((task, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-lg font-medium">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Add New Task Section */}
          <div className="mb-8">
            <form onSubmit={handleAddTask} className="space-y-4">
              {/* New Task Input */}
              <div>
                <label 
                  htmlFor="newTask" 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  New Task
                </label>
                <input
                  type="text"
                  id="newTask"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 text-gray-800 placeholder-gray-400"
                  placeholder="Enter a new task..."
                />
              </div>

              {/* Add Task Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Task
              </button>
            </form>
          </div>

          {/* Logout Button */}
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={onLogout}
              className="w-full bg-gray-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 flex items-center justify-center"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;