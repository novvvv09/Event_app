import { Mail, Phone, Building, Calendar, Award, LogOut, ChevronRight, User, Bell, Lock } from 'lucide-react';
import logo from 'figma:asset/51103e823abea49baaaa6b5e0a0f4a3f191864e3.png';

interface ProfessorProfileProps {
  onLogout: () => void;
}

export function ProfessorProfile({ onLogout }: ProfessorProfileProps) {
  const professor = {
    name: 'Dr. Sarah Johnson',
    title: 'Associate Professor',
    department: 'Computer Science',
    email: 'sarah.johnson@university.edu',
    phone: '+1 (555) 123-4567',
    office: 'CS Building, Room 405',
    joinDate: 'September 2018',
    totalEvents: 24,
    activeEvents: 2,
    totalStudents: 342,
  };

  return (
    <div className="px-5 pt-12 pb-6">
      {/* Header */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl px-6 py-4 shadow-lg">
          <h1 className="text-white">Profile</h1>
          <p className="text-purple-100 text-sm mt-1">Manage your account settings</p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <img 
              src={logo} 
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          <div className="flex-1">
            <h2 className="text-gray-900 mb-1">{professor.name}</h2>
            <p className="text-purple-600 text-sm mb-1">{professor.title}</p>
            <p className="text-gray-500 text-xs">{professor.department}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-purple-50 rounded-2xl p-3 text-center">
            <p className="text-2xl text-purple-600 mb-1">{professor.totalEvents}</p>
            <p className="text-gray-600 text-xs">Events Created</p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-3 text-center">
            <p className="text-2xl text-indigo-600 mb-1">{professor.activeEvents}</p>
            <p className="text-gray-600 text-xs">Active Events</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-3 text-center">
            <p className="text-2xl text-blue-600 mb-1">{professor.totalStudents}</p>
            <p className="text-gray-600 text-xs">Total Students</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <Mail className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-gray-500 text-xs">Email</p>
              <p className="text-gray-900 text-sm truncate">{professor.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-gray-500 text-xs">Phone</p>
              <p className="text-gray-900 text-sm">{professor.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <Building className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-gray-500 text-xs">Office</p>
              <p className="text-gray-900 text-sm">{professor.office}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <Calendar className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-gray-500 text-xs">Member Since</p>
              <p className="text-gray-900 text-sm">{professor.joinDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-gray-900 text-sm">Edit Profile</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
        <div className="h-px bg-gray-100"></div>
        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Bell className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="text-gray-900 text-sm">Notifications</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
        <div className="h-px bg-gray-100"></div>
        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Lock className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-gray-900 text-sm">Privacy & Security</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
        <div className="h-px bg-gray-100"></div>
        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-gray-900 text-sm">Achievements</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="w-full flex items-center justify-center gap-2 py-4 bg-red-50 text-red-600 rounded-2xl hover:bg-red-100 transition-colors"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>

      {/* App Info */}
      <div className="text-center mt-6">
        <p className="text-gray-400 text-xs">SkillLink v1.0.0</p>
        <p className="text-gray-400 text-xs mt-1">© 2025 CS Student Hub. All rights reserved.</p>
      </div>
    </div>
  );
}
