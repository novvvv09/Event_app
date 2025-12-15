import { Award, Download, Share2 } from 'lucide-react';

export function CertificatesScreen() {
  const certificates = [
    {
      id: 1,
      title: 'Flutter Development Bootcamp',
      completedOn: '2024-12-15',
      icon: '📱',
    },
    {
      id: 2,
      title: 'Web Development Workshop',
      completedOn: '2024-11-20',
      icon: '🌐',
    },
    {
      id: 3,
      title: 'AI/ML Fundamentals',
      completedOn: '2024-10-10',
      icon: '🤖',
    },
    {
      id: 4,
      title: 'Cloud Computing Essentials',
      completedOn: '2024-09-05',
      icon: '☁️',
    },
  ];

  return (
    <div className="px-5 pt-12 pb-6">
      {/* Header */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl px-6 py-4 shadow-lg flex items-center gap-3">
          <Award className="w-8 h-8 text-white" />
          <h1 className="text-white">My Certificates</h1>
        </div>
      </div>

      {/* Certificates List */}
      <div className="space-y-4">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                  {certificate.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{certificate.title}</h3>
                  <p className="text-gray-500 text-sm">Completed on {certificate.completedOn}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 flex items-center gap-2">
              <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-sm">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
              <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Card */}
      <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
        <p className="text-3xl mb-2">{certificates.length}</p>
        <p className="text-blue-100">Total Certificates Earned</p>
      </div>
    </div>
  );
}
