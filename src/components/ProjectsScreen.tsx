import { Edit2, Trash2, ExternalLink } from 'lucide-react';

export function ProjectsScreen() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce App',
      description: 'Full-stack online store with payment integration',
      author: 'by You',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Weather Forecast',
      description: 'Real-time weather app using OpenWeather API',
      author: 'by You',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'Productivity app with drag-and-drop features',
      author: 'by John Doe',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <div className="px-5 pt-12 pb-6">
      {/* Header */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl px-6 py-4 shadow-lg">
          <h1 className="text-white">Project Portfolio</h1>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                <p className="text-gray-500 text-xs">{project.author}</p>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-600 hover:bg-red-100 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <button className="flex items-center gap-2 text-blue-600 text-sm hover:text-blue-700">
              <span>GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ))}

        {/* Add Project Button */}
        <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 hover:border-blue-500 hover:text-blue-600 transition-colors">
          + Add New Project
        </button>
      </div>
    </div>
  );
}
