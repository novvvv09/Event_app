import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Search, Filter } from 'lucide-react';
import { EventRegistrationModal } from './EventRegistrationModal';

interface Event {
  id: string;
  title: string;
  type: 'workshop' | 'hackathon' | 'seminar' | 'networking';
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  description: string;
  organizer: string;
  imageUrl: string;
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'AI & Machine Learning Workshop',
    type: 'workshop',
    date: '2025-01-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Computer Lab A',
    capacity: 50,
    registered: 32,
    description: 'Learn the fundamentals of AI and ML with hands-on projects',
    organizer: 'CS Department',
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80',
  },
  {
    id: '2',
    title: 'Annual Hackathon 2025',
    type: 'hackathon',
    date: '2025-01-20',
    time: '9:00 AM - 9:00 PM',
    location: 'Main Auditorium',
    capacity: 100,
    registered: 78,
    description: '24-hour coding challenge with prizes worth $10,000',
    organizer: 'Tech Club',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    type: 'workshop',
    date: '2025-01-18',
    time: '2:00 PM - 6:00 PM',
    location: 'Online',
    capacity: 80,
    registered: 45,
    description: 'Master React, Node.js, and modern web technologies',
    organizer: 'Code Academy',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
  },
  {
    id: '4',
    title: 'Tech Career Fair',
    type: 'networking',
    date: '2025-01-25',
    time: '11:00 AM - 5:00 PM',
    location: 'Student Center',
    capacity: 200,
    registered: 156,
    description: 'Meet recruiters from top tech companies',
    organizer: 'Career Services',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: '5',
    title: 'Cybersecurity Seminar',
    type: 'seminar',
    date: '2025-01-22',
    time: '3:00 PM - 5:00 PM',
    location: 'Lecture Hall B',
    capacity: 60,
    registered: 28,
    description: 'Learn about the latest security threats and defense strategies',
    organizer: 'InfoSec Society',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },
  {
    id: '6',
    title: 'Cloud Computing Summit',
    type: 'seminar',
    date: '2025-01-28',
    time: '1:00 PM - 4:00 PM',
    location: 'Conference Room',
    capacity: 40,
    registered: 35,
    description: 'Explore AWS, Azure, and Google Cloud Platform',
    organizer: 'Cloud Computing Club',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
];

export function EventsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'bg-blue-100 text-blue-700';
      case 'hackathon': return 'bg-purple-100 text-purple-700';
      case 'seminar': return 'bg-green-100 text-green-700';
      case 'networking': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="px-5 pt-12 pb-6">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Tech Events</h1>
        <p className="text-gray-600">Discover and register for upcoming tech events</p>
      </div>

      <div className="mb-6 flex flex-col gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="all">All Types</option>
            <option value="workshop">Workshop</option>
            <option value="hackathon">Hackathon</option>
            <option value="seminar">Seminar</option>
            <option value="networking">Networking</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <img 
              src={event.imageUrl} 
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-sm ${getTypeColor(event.type)}`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <Users className="w-4 h-4" />
                  <span>{event.registered}/{event.capacity}</span>
                </div>
              </div>

              <h3 className="text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedEvent(event)}
                disabled={event.registered >= event.capacity}
                className={`w-full py-2 rounded-lg transition-colors ${
                  event.registered >= event.capacity
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {event.registered >= event.capacity ? 'Event Full' : 'Register Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No events found matching your criteria</p>
        </div>
      )}

      {selectedEvent && (
        <EventRegistrationModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
