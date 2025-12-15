import { useState } from 'react';
import { Plus, Search, Github, ExternalLink, Heart, MessageCircle, Code2, Tag } from 'lucide-react';
import { PostProjectModal } from './PostProjectModal';

interface Project {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  likes: number;
  comments: number;
  liked: boolean;
  postedDate: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Real-time Chat Application',
    author: 'Sarah Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    description: 'A fully functional chat app built with WebSocket for real-time messaging, file sharing, and group conversations.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80',
    likes: 42,
    comments: 8,
    liked: false,
    postedDate: '2025-01-08',
  },
  {
    id: '2',
    title: 'AI Code Assistant',
    author: 'Mike Rodriguez',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    description: 'VS Code extension that uses machine learning to provide intelligent code completions and suggestions.',
    technologies: ['Python', 'TensorFlow', 'TypeScript', 'VS Code API'],
    githubUrl: 'https://github.com',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    likes: 67,
    comments: 15,
    liked: true,
    postedDate: '2025-01-05',
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    author: 'Emily Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    likes: 89,
    comments: 22,
    liked: false,
    postedDate: '2025-01-03',
  },
  {
    id: '4',
    title: 'Fitness Tracker Mobile App',
    author: 'David Kim',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with data visualization.',
    technologies: ['React Native', 'Firebase', 'Chart.js'],
    githubUrl: 'https://github.com',
    imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    likes: 34,
    comments: 6,
    liked: false,
    postedDate: '2025-01-01',
  },
  {
    id: '5',
    title: 'Smart Home Dashboard',
    author: 'Lisa Park',
    authorAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    description: 'IoT dashboard for controlling and monitoring smart home devices with automated routines.',
    technologies: ['Vue.js', 'MQTT', 'Raspberry Pi', 'AWS IoT'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    likes: 56,
    comments: 11,
    liked: true,
    postedDate: '2024-12-28',
  },
  {
    id: '6',
    title: 'Blockchain Voting System',
    author: 'Alex Turner',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    description: 'Secure and transparent voting system built on Ethereum blockchain with smart contracts.',
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
    githubUrl: 'https://github.com',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    likes: 78,
    comments: 19,
    liked: false,
    postedDate: '2024-12-25',
  },
];

export function ProjectsPage() {
  const [projects, setProjects] = useState(mockProjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPostModal, setShowPostModal] = useState(false);

  const toggleLike = (id: string) => {
    setProjects(projects.map(project =>
      project.id === id 
        ? { ...project, liked: !project.liked, likes: project.liked ? project.likes - 1 : project.likes + 1 }
        : project
    ));
  };

  const handlePostProject = (projectData: any) => {
    const newProject: Project = {
      id: Date.now().toString(),
      ...projectData,
      author: 'You',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      likes: 0,
      comments: 0,
      liked: false,
      postedDate: new Date().toISOString().split('T')[0],
    };
    setProjects([newProject, ...projects]);
    setShowPostModal(false);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Student Projects</h1>
          <p className="text-gray-600">Showcase your work and discover amazing projects</p>
        </div>
        <button
          onClick={() => setShowPostModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Post Project</span>
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects by title, description, or technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={project.authorAvatar}
                  alt={project.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-gray-900">{project.author}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(project.postedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>

              <h3 className="text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(project.id)}
                    className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${project.liked ? 'fill-red-600 text-red-600' : ''}`} />
                    <span className="text-sm">{project.likes}</span>
                  </button>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{project.comments}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    title="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Code2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No projects found matching your search</p>
        </div>
      )}

      {showPostModal && (
        <PostProjectModal
          onClose={() => setShowPostModal(false)}
          onSubmit={handlePostProject}
        />
      )}
    </div>
  );
}
