import { Home, Calendar, FolderKanban, Award } from 'lucide-react';

interface BottomNavProps {
  currentScreen: 'dashboard' | 'events' | 'projects' | 'certificates';
  onNavigate: (screen: 'dashboard' | 'events' | 'projects' | 'certificates') => void;
}

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'dashboard' as const, icon: Home, label: 'Home' },
    { id: 'events' as const, icon: Calendar, label: 'Events' },
    { id: 'projects' as const, icon: FolderKanban, label: 'Projects' },
    { id: 'certificates' as const, icon: Award, label: 'Certs' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 rounded-b-[2.5rem]">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                isActive ? 'bg-blue-50' : ''
              }`}
            >
              <Icon 
                className={`w-6 h-6 ${
                  isActive ? 'text-blue-600' : 'text-gray-400'
                }`} 
              />
              <span 
                className={`text-xs ${
                  isActive ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
