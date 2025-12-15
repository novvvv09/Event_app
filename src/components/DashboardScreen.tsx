import { Clock, MapPin, Users, ChevronRight, Code2 } from 'lucide-react';

interface DashboardScreenProps {
  onNavigate: (screen: 'dashboard' | 'events' | 'projects' | 'certificates') => void;
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  return (
    <div className="px-5 pt-12 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <span className="text-lg">CS</span>
          </div>
          <div>
            <h1 className="text-gray-900">CS Student Hub</h1>
          </div>
        </div>
        <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        </button>
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 mb-6 shadow-lg">
        <h2 className="text-white mb-2">Welcome back, Student! 👋</h2>
        <p className="text-blue-100 text-sm">You have 2 upcoming events</p>
      </div>

      {/* Upcoming Events Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-gray-900">Upcoming Events</h3>
          </div>
          <button 
            onClick={() => onNavigate('events')}
            className="text-blue-600 text-sm flex items-center gap-1"
          >
            See all
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {/* Event Card 1 */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">Flutter Workshop</h4>
                <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>2:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Room 301</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>45 attendees</span>
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                Registered
              </span>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">Web Dev Bootcamp</h4>
                <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>10:00 AM</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Lab A</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>30 attendees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Projects Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-gray-900">Latest Projects</h3>
          </div>
          <button 
            onClick={() => onNavigate('projects')}
            className="text-blue-600 text-sm flex items-center gap-1"
          >
            See all
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {/* Project Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <h4 className="text-gray-900 mb-2">E-Commerce App</h4>
            <p className="text-gray-600 text-sm mb-3">Full-stack online store with payment integration</p>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                React
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                Node.js
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
              <p className="text-2xl mb-1">12</p>
              <p className="text-blue-100 text-sm">Events Joined</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
              <p className="text-2xl mb-1">5</p>
              <p className="text-purple-100 text-sm">Certificates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
