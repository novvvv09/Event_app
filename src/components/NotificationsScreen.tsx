import { motion } from 'motion/react';
import { 
  Bell, 
  ChevronLeft, 
  Calendar, 
  CheckCircle, 
  Award, 
  MessageSquare, 
  Users, 
  AlertCircle,
  TrendingUp,
  Target,
  Clock
} from 'lucide-react';

interface Notification {
  id: number;
  type: 'event' | 'project' | 'achievement' | 'milestone' | 'feedback' | 'registration' | 'deadline';
  title: string;
  description: string;
  time: string;
  unread: boolean;
}

interface NotificationsScreenProps {
  role: 'student' | 'professor';
  onBack: () => void;
  onNavigate: (screen: any) => void;
}

export function NotificationsScreen({ role, onBack, onNavigate }: NotificationsScreenProps) {
  const isStudent = role === 'student';
  
  const studentNotifications: Notification[] = [
    {
      id: 1,
      type: 'achievement',
      title: 'New Achievement Earned!',
      description: 'Great job! You earned the "React Master" badge for completing the bootcamp.',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      type: 'event',
      title: 'Upcoming Workshop',
      description: 'Reminder: The "AI Workshop" starts in 1 hour in Room 301.',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      type: 'feedback',
      title: 'Project Feedback Received',
      description: 'Professor Smith left comments on your "Alpha E-commerce" project.',
      time: '5 hours ago',
      unread: false
    },
    {
      id: 4,
      type: 'event',
      title: 'Event Update',
      description: 'The "Flutter Workshop" location has been changed to Lab C.',
      time: '1 day ago',
      unread: false
    }
  ];

  const professorNotifications: Notification[] = [
    {
      id: 1,
      type: 'registration',
      title: 'New Event Registrations',
      description: '20 new students registered for the "CS Hackathon 2026".',
      time: '30 mins ago',
      unread: true
    },
    {
      id: 2,
      type: 'milestone',
      title: 'Major Milestone Reached!',
      description: 'Your events have reached 500+ total student attendees this semester.',
      time: '4 hours ago',
      unread: true
    },
    {
      id: 3,
      type: 'deadline',
      title: 'Grading Deadline Reminder',
      description: 'Reminder: Please approve final project submissions by 5 PM today.',
      time: '6 hours ago',
      unread: true
    },
    {
      id: 4,
      type: 'feedback',
      title: 'Student Question',
      description: 'A student asked a question regarding the "Web Dev Bootcamp" requirements.',
      time: '1 day ago',
      unread: false
    }
  ];

  const notifications = isStudent ? studentNotifications : professorNotifications;
  const gradientColor = isStudent ? 'from-blue-500 to-purple-600' : 'from-purple-500 to-indigo-600';
  const bgColor = isStudent ? 'bg-blue-50' : 'bg-purple-50';
  const accentColor = isStudent ? 'text-blue-600' : 'text-purple-600';

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'event': return <Calendar className="w-5 h-5" />;
      case 'achievement': return <Award className="w-5 h-5" />;
      case 'feedback': return <MessageSquare className="w-5 h-5" />;
      case 'milestone': return <TrendingUp className="w-5 h-5" />;
      case 'registration': return <Users className="w-5 h-5" />;
      case 'deadline': return <AlertCircle className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  const getIconBg = (type: Notification['type']) => {
    switch (type) {
      case 'achievement': return 'bg-yellow-100 text-yellow-600';
      case 'event': return 'bg-blue-100 text-blue-600';
      case 'feedback': return 'bg-green-100 text-green-600';
      case 'milestone': return 'bg-purple-100 text-purple-600';
      case 'registration': return 'bg-indigo-100 text-indigo-600';
      case 'deadline': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const handleNotificationClick = (notif: Notification) => {
    if (isStudent) {
      switch (notif.type) {
        case 'event':
          onNavigate('events');
          break;
        case 'achievement':
          onNavigate('certificates');
          break;
        case 'feedback':
        case 'project':
          onNavigate('projects');
          break;
        default:
          onBack();
      }
    } else {
      switch (notif.type) {
        case 'registration':
        case 'deadline':
          onNavigate('events');
          break;
        case 'milestone':
        case 'feedback':
          onNavigate('dashboard');
          break;
        default:
          onBack();
      }
    }
  };

  return (
    <div className={`h-[812px] flex flex-col ${bgColor}`}>
      {/* Header */}
      <div className={`bg-gradient-to-r ${gradientColor} p-6 pb-12 text-white`}>
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={onBack}
            className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-white">Notifications</h2>
        </div>
        <p className="text-white/80 text-sm">
          {isStudent 
            ? 'Stay updated on your learning journey' 
            : 'Track your event performance and engagement'}
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 -mt-6 bg-white rounded-t-[2.5rem] p-6 shadow-2xl overflow-y-auto">
        {/* Summary Card */}
        <div className="mb-8 bg-gray-50 rounded-2xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <Target className={`w-4 h-4 ${accentColor}`} />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Today's Summary</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">{isStudent ? 'Events' : 'Registrations'}</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">{isStudent ? '2' : '+20'}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isStudent ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                  {isStudent ? 'Upcoming' : 'New'}
                </span>
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">{isStudent ? 'Badges' : 'Active Events'}</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">{isStudent ? '5' : '3'}</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-purple-100 text-purple-600 rounded-full">
                  Total
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          <h3 className="text-gray-900 text-sm font-bold flex items-center justify-between">
            Recent Activity
            <button className={`${accentColor} text-xs font-semibold`}>Mark all as read</button>
          </h3>
          
          {notifications.map((notif, index) => (
            <motion.div
              key={notif.id}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNotificationClick(notif)}
              className={`relative flex gap-4 p-4 rounded-2xl border transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                notif.unread 
                  ? 'bg-blue-50/30 border-blue-100 shadow-sm' 
                  : 'bg-white border-gray-100'
              }`}
            >
              {notif.unread && (
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full"></div>
              )}
              
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${getIconBg(notif.type)}`}>
                {getIcon(notif.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`text-sm font-bold ${notif.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                    {notif.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed mb-2">
                  {notif.description}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                  <Clock size={10} />
                  {notif.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <button className={`w-full mt-8 py-4 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 text-sm font-medium hover:border-${isStudent ? 'blue' : 'purple'}-300 hover:text-gray-600 transition-all`}>
          View Notification Archive
        </button>
      </div>
    </div>
  );
}