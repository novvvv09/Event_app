import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, FileText, Image as ImageIcon, ArrowLeft } from 'lucide-react';

interface CreateEventScreenProps {
  onNavigate: (screen: 'dashboard' | 'events' | 'create-event' | 'profile') => void;
}

export function CreateEventScreen({ onNavigate }: CreateEventScreenProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    capacity: '',
    category: 'workshop',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle event creation
    console.log('Creating event:', formData);
    onNavigate('events');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="px-5 pt-12 pb-6">
      {/* Header */}
      <div className="mb-6">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 text-purple-600 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">Back to Dashboard</span>
        </button>
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl px-6 py-4 shadow-lg">
          <h1 className="text-white">Create New Event</h1>
          <p className="text-purple-100 text-sm mt-1">Fill in the details to create an event</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Event Title */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <label className="block text-gray-700 text-sm mb-2">Event Title *</label>
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Flutter Development Workshop"
              required
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
            />
          </div>
        </div>

        {/* Event Description */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <label className="block text-gray-700 text-sm mb-2">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your event, what students will learn, requirements, etc."
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 resize-none"
          />
        </div>

        {/* Category */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <label className="block text-gray-700 text-sm mb-2">Event Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
          >
            <option value="workshop">Workshop</option>
            <option value="seminar">Seminar</option>
            <option value="hackathon">Hackathon</option>
            <option value="bootcamp">Bootcamp</option>
            <option value="conference">Conference</option>
            <option value="competition">Competition</option>
          </select>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <label className="block text-gray-700 text-sm mb-2">Date *</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <label className="block text-gray-700 text-sm mb-2">Time *</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <label className="block text-gray-700 text-sm mb-2">Location *</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Room 301, Computer Lab A"
              required
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
            />
          </div>
        </div>

        {/* Capacity */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <label className="block text-gray-700 text-sm mb-2">Maximum Capacity *</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="e.g., 50"
              min="1"
              required
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
            />
          </div>
        </div>

        {/* Event Image Upload */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <label className="block text-gray-700 text-sm mb-2">Event Image (Optional)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-500 transition-colors cursor-pointer">
            <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 text-sm mb-1">Click to upload event image</p>
            <p className="text-gray-400 text-xs">PNG, JPG up to 5MB</p>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={() => onNavigate('dashboard')}
            className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}
