import { useState } from 'react';
import { Search, MapPin, DollarSign, Clock, Briefcase, ExternalLink, BookmarkPlus, Bookmark } from 'lucide-react';

interface Internship {
  id: string;
  company: string;
  position: string;
  location: string;
  type: 'remote' | 'onsite' | 'hybrid';
  duration: string;
  stipend: string;
  description: string;
  requirements: string[];
  applicationDeadline: string;
  logo: string;
  saved: boolean;
}

const mockInternships: Internship[] = [
  {
    id: '1',
    company: 'Google',
    position: 'Software Engineering Intern',
    location: 'Mountain View, CA',
    type: 'hybrid',
    duration: '12 weeks',
    stipend: '$8,000/month',
    description: 'Work on real-world projects alongside experienced engineers. Contribute to products used by billions.',
    requirements: ['Pursuing BS/MS in Computer Science', 'Knowledge of data structures', 'Proficiency in Java, C++, or Python'],
    applicationDeadline: '2025-02-15',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&q=80',
    saved: false,
  },
  {
    id: '2',
    company: 'Microsoft',
    position: 'Cloud Computing Intern',
    location: 'Redmond, WA',
    type: 'onsite',
    duration: '10 weeks',
    stipend: '$7,500/month',
    description: 'Join Azure team to build and optimize cloud infrastructure solutions.',
    requirements: ['Computer Science major', 'Understanding of cloud platforms', 'Strong problem-solving skills'],
    applicationDeadline: '2025-02-20',
    logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80',
    saved: false,
  },
  {
    id: '3',
    company: 'Amazon',
    position: 'Full Stack Developer Intern',
    location: 'Seattle, WA',
    type: 'hybrid',
    duration: '12 weeks',
    stipend: '$7,800/month',
    description: 'Build scalable web applications for Amazon retail platform.',
    requirements: ['Experience with React and Node.js', 'Database knowledge', 'Strong communication skills'],
    applicationDeadline: '2025-03-01',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400&q=80',
    saved: true,
  },
  {
    id: '4',
    company: 'Meta',
    position: 'AI/ML Research Intern',
    location: 'Menlo Park, CA',
    type: 'onsite',
    duration: '16 weeks',
    stipend: '$9,000/month',
    description: 'Research and develop cutting-edge machine learning models.',
    requirements: ['ML/AI coursework', 'Python and TensorFlow', 'Research experience preferred'],
    applicationDeadline: '2025-02-10',
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80',
    saved: false,
  },
  {
    id: '5',
    company: 'Startup Inc',
    position: 'Mobile App Developer Intern',
    location: 'Remote',
    type: 'remote',
    duration: '8 weeks',
    stipend: '$5,000/month',
    description: 'Develop and maintain iOS and Android applications for our growing user base.',
    requirements: ['React Native or Flutter experience', 'Mobile development passion', 'Self-motivated'],
    applicationDeadline: '2025-03-15',
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
    saved: false,
  },
  {
    id: '6',
    company: 'Tech Corp',
    position: 'Cybersecurity Intern',
    location: 'Austin, TX',
    type: 'hybrid',
    duration: '10 weeks',
    stipend: '$6,500/month',
    description: 'Assist security team in penetration testing and vulnerability assessment.',
    requirements: ['Security fundamentals', 'Networking knowledge', 'Ethical hacking interest'],
    applicationDeadline: '2025-02-28',
    logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
    saved: true,
  },
];

export function InternshipsPage() {
  const [internships, setInternships] = useState(mockInternships);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const toggleSave = (id: string) => {
    setInternships(internships.map(internship =>
      internship.id === id ? { ...internship, saved: !internship.saved } : internship
    ));
  };

  const filteredInternships = internships.filter((internship) => {
    const matchesSearch = internship.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          internship.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || internship.type === selectedType;
    const matchesSaved = !showSavedOnly || internship.saved;
    return matchesSearch && matchesType && matchesSaved;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'remote': return 'bg-green-100 text-green-700';
      case 'onsite': return 'bg-blue-100 text-blue-700';
      case 'hybrid': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Browse Internships</h1>
        <p className="text-gray-600">Find the perfect internship opportunity for your career</p>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by position or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="all">All Types</option>
              <option value="remote">Remote</option>
              <option value="onsite">Onsite</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => setShowSavedOnly(!showSavedOnly)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            showSavedOnly
              ? 'bg-blue-50 border-blue-300 text-blue-700'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Bookmark className="w-5 h-5" />
          <span>Saved Only</span>
        </button>
      </div>

      <div className="space-y-4">
        {filteredInternships.map((internship) => (
          <div key={internship.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <img 
                src={internship.logo} 
                alt={internship.company}
                className="w-16 h-16 rounded-lg object-cover"
              />
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-gray-900 mb-1">{internship.position}</h3>
                    <p className="text-gray-600">{internship.company}</p>
                  </div>
                  <button
                    onClick={() => toggleSave(internship.id)}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {internship.saved ? (
                      <Bookmark className="w-6 h-6 fill-blue-600 text-blue-600" />
                    ) : (
                      <BookmarkPlus className="w-6 h-6" />
                    )}
                  </button>
                </div>

                <p className="text-gray-600 mb-4">{internship.description}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>{internship.stipend}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${getTypeColor(internship.type)}`}>
                    {internship.type.charAt(0).toUpperCase() + internship.type.slice(1)}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-gray-900 text-sm mb-2">Requirements:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {internship.requirements.map((req, index) => (
                      <li key={index} className="text-gray-600 text-sm">{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-gray-600 text-sm">
                    Deadline: <span className="text-gray-900">
                      {new Date(internship.applicationDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <span>Apply Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredInternships.length === 0 && (
        <div className="text-center py-12">
          <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No internships found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
