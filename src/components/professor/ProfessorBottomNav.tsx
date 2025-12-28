import { LayoutDashboard, Calendar, Plus, User } from 'lucide-react';

interface ProfessorBottomNavProps {
  currentScreen: 'dashboard' | 'events' | 'create-event' | 'profile';
  onNavigate: (screen: 'dashboard' | 'events' | 'create-event' | 'profile') => void;
}

export function ProfessorBottomNav({ currentScreen, onNavigate }: ProfessorBottomNavProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 rounded-b-[2.5rem]">
      <div className="flex items-center justify-around">
        <button
          onClick={() => onNavigate('dashboard')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            currentScreen === 'dashboard' ? 'text-purple-600' : 'text-gray-400'
          }`}
        >
          <LayoutDashboard className="w-6 h-6" />
          <span className="text-xs">Dashboard</span>
        </button>
        
        <button
          onClick={() => onNavigate('events')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            currentScreen === 'events' ? 'text-purple-600' : 'text-gray-400'
          }`}
        >
          <Calendar className="w-6 h-6" />
          <span className="text-xs">My Events</span>
        </button>
        
        <button
          onClick={() => onNavigate('create-event')}
          className="flex flex-col items-center gap-1 -mt-8"
        >
          <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs text-purple-600 mt-1">Create</span>
        </button>
        
        <button
          onClick={() => onNavigate('profile')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            currentScreen === 'profile' ? 'text-purple-600' : 'text-gray-400'
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}
