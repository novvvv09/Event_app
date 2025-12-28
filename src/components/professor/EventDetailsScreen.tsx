import { ArrowLeft, Calendar, Clock, MapPin, Users, Edit2, Trash2, Download, Mail } from 'lucide-react';
import { useState } from 'react';

interface EventDetailsScreenProps {
  eventId: number;
  onNavigate: (screen: 'dashboard' | 'events' | 'create-event' | 'profile') => void;
}

export function EventDetailsScreen({ eventId, onNavigate }: EventDetailsScreenProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'attendees'>('details');

  // Mock event data
  const event = {
    id: eventId,
    title: 'Flutter Workshop',
    description: 'Master Flutter development with hands-on projects. This comprehensive workshop will cover everything from basics to advanced concepts including state management, animations, and API integration. Participants will build a complete mobile application.',
    date: 'Dec 28, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Room 301, CS Building',
    registered: 45,
    capacity: 50,
    status: 'upcoming',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1736066330610-c102cab4e942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjB0ZWFjaGluZyUyMGNsYXNzfGVufDF8fHx8MTc2NjYzMDI4NHww&ixlib=rb-4.1.0&q=80&w=1080'
  };

  const attendees = [
    { id: 1, name: 'John Smith', email: 'john.smith@university.edu', registeredDate: 'Dec 20, 2025', year: '3rd Year' },
    { id: 2, name: 'Emma Wilson', email: 'emma.wilson@university.edu', registeredDate: 'Dec 21, 2025', year: '2nd Year' },
    { id: 3, name: 'Michael Brown', email: 'michael.brown@university.edu', registeredDate: 'Dec 21, 2025', year: '4th Year' },
    { id: 4, name: 'Sophia Davis', email: 'sophia.davis@university.edu', registeredDate: 'Dec 22, 2025', year: '3rd Year' },
    { id: 5, name: 'James Miller', email: 'james.miller@university.edu', registeredDate: 'Dec 22, 2025', year: '2nd Year' },
    { id: 6, name: 'Olivia Garcia', email: 'olivia.garcia@university.edu', registeredDate: 'Dec 23, 2025', year: '1st Year' },
  ];

  return (
    <div className="px-5 pt-12 pb-6">
      {/* Header */}
      <div className="mb-6">
        <button 
          onClick={() => onNavigate('events')}
          className="flex items-center gap-2 text-purple-600 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">Back to My Events</span>
        </button>
      </div>

      {/* Event Image */}
      <div className="relative h-48 rounded-3xl overflow-hidden mb-6 shadow-lg">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs inline-block mb-2">
            {event.status === 'upcoming' ? 'Active' : 'Completed'}
          </span>
          <h1 className="text-white mb-1">{event.title}</h1>
          <p className="text-white/90 text-sm">{event.category}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 mb-6">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors">
          <Edit2 className="w-4 h-4" />
          <span className="text-sm">Edit Event</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('details')}
          className={`flex-1 py-3 rounded-xl text-sm transition-all ${
            activeTab === 'details'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200'
          }`}
        >
          Event Details
        </button>
        <button
          onClick={() => setActiveTab('attendees')}
          className={`flex-1 py-3 rounded-xl text-sm transition-all ${
            activeTab === 'attendees'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200'
          }`}
        >
          Attendees ({event.registered})
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'details' ? (
        <div className="space-y-4">
          {/* Description */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
          </div>

          {/* Event Information */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-gray-900 mb-4">Event Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Date</p>
                  <p className="text-gray-900 text-sm">{event.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Time</p>
                  <p className="text-gray-900 text-sm">{event.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Location</p>
                  <p className="text-gray-900 text-sm">{event.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Stats */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-gray-900 mb-4">Registration Status</h3>
            <div className="mb-3">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Registered Students</span>
                <span className="text-gray-900">{event.registered}/{event.capacity}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 h-3 rounded-full"
                  style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="text-center">
                <p className="text-2xl text-purple-600">{event.registered}</p>
                <p className="text-gray-500 text-xs mt-1">Registered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-900">{event.capacity - event.registered}</p>
                <p className="text-gray-500 text-xs mt-1">Available</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-indigo-600">{Math.round((event.registered / event.capacity) * 100)}%</p>
                <p className="text-gray-500 text-xs mt-1">Full</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Export Actions */}
          <div className="flex gap-2 mb-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm text-gray-700">
              <Download className="w-4 h-4" />
              Export List
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors text-sm">
              <Mail className="w-4 h-4" />
              Email All
            </button>
          </div>

          {/* Attendees List */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
            {attendees.map((attendee) => (
              <div key={attendee.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {attendee.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 text-sm truncate">{attendee.name}</p>
                    <p className="text-gray-500 text-xs truncate">{attendee.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-600 text-xs">{attendee.year}</p>
                    <p className="text-gray-400 text-xs">{attendee.registeredDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More */}
          {event.registered > 6 && (
            <button className="w-full py-3 text-purple-600 text-sm hover:bg-purple-50 rounded-xl transition-colors">
              Show all {event.registered} attendees
            </button>
          )}
        </div>
      )}
    </div>
  );
}
