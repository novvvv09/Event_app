import { Calendar, Users, Plus, Bell, ChevronRight, Clock, MapPin } from 'lucide-react';
import logo from 'figma:asset/51103e823abea49baaaa6b5e0a0f4a3f191864e3.png';

interface ProfessorDashboardProps {
  onNavigate: (screen: 'dashboard' | 'events' | 'create-event' | 'profile' | 'notifications') => void;
  onViewEvent: (eventId: number) => void;
}

export function ProfessorDashboard({ onNavigate, onViewEvent }: ProfessorDashboardProps) {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Flutter Workshop',
      date: 'Dec 28, 2025',
      time: '2:00 PM',
      location: 'Room 301',
      registered: 45,
      capacity: 50,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Web Dev Bootcamp',
      date: 'Dec 30, 2025',
      time: '10:00 AM',
      location: 'Lab A',
      registered: 30,
      capacity: 35,
      status: 'upcoming'
    },
  ];

  return (
    <div className="px-5 pt-12 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="SkillLink Logo" 
            className="w-12 h-12 rounded-full object-cover shadow-lg"
          />
          <div>
            <h1 className="text-gray-900">Professor Portal</h1>
          </div>
        </div>
        <button 
          onClick={() => onNavigate('notifications')}
          className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors relative"
        >
          <Bell className="w-5 h-5 text-purple-600" />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
        </button>
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-6 mb-6 shadow-lg">
        <h2 className="text-white mb-2">Welcome back, Professor! 👨‍🏫</h2>
        <p className="text-purple-100 text-sm mb-4">Manage your events and engage with students</p>
        <button 
          onClick={() => onNavigate('create-event')}
          className="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-xl hover:shadow-md transition-all"
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm">Create New Event</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-xl mb-2 mx-auto">
            <Calendar className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-center text-2xl text-gray-900 mb-1">8</p>
          <p className="text-center text-gray-600 text-xs">Total Events</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-xl mb-2 mx-auto">
            <Users className="w-5 h-5 text-indigo-600" />
          </div>
          <p className="text-center text-2xl text-gray-900 mb-1">156</p>
          <p className="text-center text-gray-600 text-xs">Students</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-xl mb-2 mx-auto">
            <Calendar className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-center text-2xl text-gray-900 mb-1">2</p>
          <p className="text-center text-gray-600 text-xs">Upcoming</p>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Upcoming Events</h3>
          <button 
            onClick={() => onNavigate('events')}
            className="text-purple-600 text-sm flex items-center gap-1"
          >
            See all
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id}
              onClick={() => onViewEvent(event.id)}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-gray-900 mb-1">{event.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <Users className="w-3.5 h-3.5" />
                      <span>{event.registered}/{event.capacity} registered</span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  Active
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full"
                  style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-gray-900 mb-4">Recent Activity</h3>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 text-sm">5 new registrations for Flutter Workshop</p>
              <p className="text-gray-500 text-xs mt-1">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 text-sm">Web Dev Bootcamp starting tomorrow</p>
              <p className="text-gray-500 text-xs mt-1">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}