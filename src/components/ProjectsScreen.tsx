import { Edit2, ExternalLink, Plus } from 'lucide-react';

export function ProjectsScreen() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce App',
      description: 'Full-stack online store with payment integration',
      author: 'by You',
      githubUrl: 'https://github.com',
      imageUrl: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjU4NDMxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'Stripe'],
    },
    {
      id: 2,
      title: 'Weather Forecast',
      description: 'Real-time weather app using OpenWeather API',
      author: 'by You',
      githubUrl: 'https://github.com',
      imageUrl: 'https://images.unsplash.com/photo-1764994344664-48c09e069b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZm9yZWNhc3QlMjBjbG91ZHN8ZW58MXx8fHwxNzY1OTE3NTMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['JavaScript', 'API', 'CSS'],
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'Productivity app with drag-and-drop features',
      author: 'by John Doe',
      githubUrl: 'https://github.com',
      imageUrl: 'https://images.unsplash.com/photo-1699570044128-b61ef113b72e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHByb2R1Y3Rpdml0eXxlbnwxfHx8fDE3NjU3OTg4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'DnD', 'Firebase'],
    },
  ];

  return (
    <div className="px-5 pt-12 pb-6">
      {/* Header */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl px-6 py-4 shadow-lg">
          <h1 className="text-white">Project Portfolio</h1>
          <p className="text-blue-100 text-sm mt-1">Showcase your amazing work</p>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4 mb-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            {/* Project Image */}
            <div className="relative h-40 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-blue-600 hover:bg-white transition-colors shadow-md">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-5">
              <div className="mb-3">
                <h3 className="text-gray-900 mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                <p className="text-gray-500 text-xs">{project.author}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="flex items-center gap-2 text-blue-600 text-sm hover:text-blue-700 transition-colors">
                <ExternalLink className="w-4 h-4" />
                <span>View on GitHub</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <div className="flex justify-end mb-4">
        <button className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all">
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}