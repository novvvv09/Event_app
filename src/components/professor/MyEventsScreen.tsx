import { Calendar, Users, MapPin, Clock, Edit2, Trash2, Search } from 'lucide-react';
import { useState } from 'react';

interface MyEventsScreenProps {
  onViewEvent: (eventId: number) => void;
  onNavigate: (screen: 'dashboard' | 'events' | 'create-event' | 'profile') => void;
}

export function MyEventsScreen({ onViewEvent, onNavigate }: MyEventsScreenProps) {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const events = [
    {
      id: 1,
      title: 'Flutter Workshop',
      description: 'Master Flutter development with hands-on projects',
      date: 'Dec 28, 2025',
      time: '2:00 PM',
      location: 'Room 301',
      registered: 45,
      capacity: 50,
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1736066330610-c102cab4e942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjB0ZWFjaGluZyUyMGNsYXNzfGVufDF8fHx8MTc2NjYzMDI4NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: 'Web Dev Bootcamp',
      description: 'Build modern web apps with React & Node.js',
      date: 'Dec 30, 2025',
      time: '10:00 AM',
      location: 'Lab A',
      registered: 30,
      capacity: 35,
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzY2NTQzODgwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      title: 'AI Workshop Series',
      description: 'Introduction to Machine Learning and AI',
      date: 'Dec 20, 2025',
      time: '3:00 PM',
      location: 'Main Hall',
      registered: 50,
      capacity: 50,
      status: 'past',
      image: 'https://images.unsplash.com/photo-1716703435453-a7733d600d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXIlMjByb29tfGVufDF8fHx8MTc2NjYzMDI4NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
  ];

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.status === filter);

  return (
    <div className="px-5 pt-12 pb-6">
      {/* Header */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl px-6 py-4 shadow-lg">
          <h1 className="text-white">My Events</h1>
          <p className="text-purple-100 text-sm mt-1">Manage all your created events</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-sm transition-all ${
            filter === 'all'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200'
          }`}
        >
          All Events ({events.length})
        </button>
        <button
          onClick={() => setFilter('upcoming')}
          className={`px-4 py-2 rounded-xl text-sm transition-all ${
            filter === 'upcoming'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200'
          }`}
        >
          Upcoming ({events.filter(e => e.status === 'upcoming').length})
        </button>
        <button
          onClick={() => setFilter('past')}
          className={`px-4 py-2 rounded-xl text-sm transition-all ${
            filter === 'past'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200'
          }`}
        >
          Past ({events.filter(e => e.status === 'past').length})
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-4 mb-6">
        {filteredEvents.map((event) => (
          <div 
            key={event.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Event Image */}
            <div 
              className="relative h-32 overflow-hidden cursor-pointer"
              onClick={() => onViewEvent(event.id)}
            >
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-3 right-3">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  event.status === 'upcoming' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {event.status === 'upcoming' ? 'Active' : 'Completed'}
                </span>
              </div>
            </div>

            {/* Event Content */}
            <div className="p-4">
              <h3 
                className="text-gray-900 mb-2 cursor-pointer hover:text-purple-600 transition-colors"
                onClick={() => onViewEvent(event.id)}
              >
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{event.description}</p>

              <div className="flex flex-wrap gap-3 text-xs text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Registration Progress */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {event.registered}/{event.capacity} registered
                  </span>
                  <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full"
                    style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors text-sm">
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors text-sm">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create New Event Button */}
      <button
        onClick={() => onNavigate('create-event')}
        className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Create New Event
      </button>
    </div>
  );
}
