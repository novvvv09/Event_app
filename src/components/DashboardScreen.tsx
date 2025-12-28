import { Clock, MapPin, Users, ChevronRight, Code2, Bell, ChevronLeft } from 'lucide-react';
import logo from 'figma:asset/51103e823abea49baaaa6b5e0a0f4a3f191864e3.png';
import { useState, useEffect } from 'react';

interface DashboardScreenProps {
  onNavigate: (screen: 'dashboard' | 'events' | 'profile' | 'projects' | 'certificates') => void;
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const eventSlides = [
    {
      id: 1,
      title: 'Flutter Workshop',
      date: 'Dec 20, 2025',
      time: '2:00 PM',
      location: 'Room 301',
      attendees: '45',
      description: 'Master Flutter development with hands-on projects',
      image: 'https://images.unsplash.com/photo-1761250246894-ee2314939662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGNvZGluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NTkxODc2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Web Dev Bootcamp',
      date: 'Dec 22, 2025',
      time: '10:00 AM',
      location: 'Lab A',
      attendees: '30',
      description: 'Build modern web apps with React & Node.js',
      image: 'https://images.unsplash.com/photo-1763568258320-c954a19683e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGJvb3RjYW1wfGVufDF8fHx8MTc2NTkxODc2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Hackathon 2025',
      date: 'Dec 25, 2025',
      time: '9:00 AM',
      location: 'Main Hall',
      attendees: '100+',
      description: 'Code, compete, and win amazing prizes!',
      image: 'https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBwcm9ncmFtbWluZyUyMGV2ZW50fGVufDF8fHx8MTc2NTkxODc2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-orange-500 to-red-600'
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventSlides.length) % eventSlides.length);
  };

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
            <h1 className="text-gray-900">CS Student Hub</h1>
          </div>
        </div>
        <button 
          onClick={() => setShowNotification(!showNotification)}
          className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors relative"
        >
          <Bell className="w-5 h-5 text-blue-600" />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
        </button>
      </div>

      {/* Notification Popup */}
      {showNotification && (
        <div className="mb-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-gray-900 mb-1">Welcome back, Student! 👋</h3>
              <p className="text-gray-600 text-sm">You have 2 upcoming events</p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span>Flutter Workshop - Dec 20, 2:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Web Dev Bootcamp - Dec 22, 10:00 AM</span>
            </div>
          </div>
        </div>
      )}

      {/* Event Slideshow */}
      <div className="mb-6 relative rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-64 overflow-hidden">
          {eventSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-85`}></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                    Featured Event
                  </span>
                </div>
                <h2 className="text-white mb-2">{slide.title}</h2>
                <p className="text-white/90 text-sm mb-4">{slide.description}</p>
                <div className="flex items-center gap-4 text-xs text-white/90">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slide.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{slide.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{slide.attendees}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {eventSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 w-1.5 hover:bg-white/60'
              }`}
            />
          ))}
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