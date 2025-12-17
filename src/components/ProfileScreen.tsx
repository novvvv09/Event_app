import { User, Mail, Phone, MapPin, Calendar, Award, Code2, Edit2, LogOut } from 'lucide-react';
import logo from 'figma:asset/52127bb3adc8c45b1db277c71e7d087b956c8577.png';

export function ProfileScreen() {
  const handleLogout = () => {
    // Add logout logic here
    alert('Logging out...');
  };

  return (
    <div className="px-5 pt-12 pb-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-900 mb-2">Profile</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      {/* Profile Header Card */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 mb-6 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <User className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h2 className="text-white mb-1">John Doe</h2>
              <p className="text-blue-100 text-sm">Computer Science Student</p>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Edit2 className="w-5 h-5 text-white" />
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-white text-xl mb-1">12</p>
            <p className="text-blue-100 text-xs">Events</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-white text-xl mb-1">8</p>
            <p className="text-blue-100 text-xs">Projects</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-white text-xl mb-1">5</p>
            <p className="text-blue-100 text-xs">Certificates</p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-6">
        <h3 className="text-gray-900 mb-4">Personal Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Email</p>
              <p className="text-gray-900">john.doe@university.edu</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Phone</p>
              <p className="text-gray-900">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Location</p>
              <p className="text-gray-900">San Francisco, CA</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Member Since</p>
              <p className="text-gray-900">January 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Interests */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-6">
        <h3 className="text-gray-900 mb-4">Skills & Interests</h3>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
            React
          </span>
          <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">
            Node.js
          </span>
          <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm">
            Python
          </span>
          <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm">
            Machine Learning
          </span>
          <span className="px-3 py-1.5 bg-pink-50 text-pink-700 rounded-full text-sm">
            UI/UX Design
          </span>
          <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm">
            Cloud Computing
          </span>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
        <h3 className="text-gray-900 mb-4">Recent Achievements</h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
            <Award className="w-8 h-8 text-yellow-600" />
            <div>
              <p className="text-gray-900">Hackathon Winner</p>
              <p className="text-gray-600 text-xs">Annual Hackathon 2025</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
            <Code2 className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-gray-900">Project Showcase</p>
              <p className="text-gray-600 text-xs">Featured Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
            <Award className="w-8 h-8 text-purple-600" />
            <div>
              <p className="text-gray-900">Course Completion</p>
              <p className="text-gray-600 text-xs">AI & ML Workshop</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-6">
        <button 
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition-colors flex items-center justify-center gap-2 shadow-lg"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}