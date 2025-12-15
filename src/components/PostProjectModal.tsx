import { useState } from "react";
import { X, Upload } from "lucide-react";

interface PostProjectModalProps {
  onClose: () => void;
  onSubmit: (projectData: any) => void;
}

export function PostProjectModal({
  onClose,
  onSubmit,
}: PostProjectModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubUrl: "",
    liveUrl: "",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      technologies: formData.technologies
        .split(",")
        .map((tech) => tech.trim()),
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-gray-900">Post Your Project</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 mb-1"
            >
              Project Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your project title"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 mb-1"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Describe what your project does and what makes it unique..."
            />
          </div>

          <div>
            <label
              htmlFor="technologies"
              className="block text-gray-700 mb-1"
            >
              Technologies Used *
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              required
              value={formData.technologies}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. React, Node.js, MongoDB (comma-separated)"
            />
            <p className="text-gray-500 text-sm mt-1">
              Separate multiple technologies with commas
            </p>
          </div>

          <div>
            <label
              htmlFor="githubUrl"
              className="block text-gray-700 mb-1"
            >
              GitHub Repository URL *
            </label>
            <input
              type="url"
              id="githubUrl"
              name="githubUrl"
              required
              value={formData.githubUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://github.com/username/repository"
            />
          </div>

          <div>
            <label
              htmlFor="liveUrl"
              className="block text-gray-700 mb-1"
            >
              Live Demo URL (Optional)
            </label>
            <input
              type="url"
              id="liveUrl"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://your-project.com"
            />
          </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-gray-700 mb-1"
            >
              Project Image URL (Optional)
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
            {formData.imageUrl && (
              <div className="mt-3">
                <img
                  src={formData.imageUrl}
                  alt="Project preview"
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80";
                  }}
                />
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Post Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}