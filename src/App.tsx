import { useState } from 'react';
import { DashboardScreen } from './components/DashboardScreen';
import { EventsScreen } from './components/EventsScreen';
import { ProjectsScreen } from './components/ProjectsScreen';
import { CertificatesScreen } from './components/CertificatesScreen';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'dashboard' | 'events' | 'projects' | 'certificates'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Mobile Device Frame */}
      <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-800 relative">
        {/* Device Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-50"></div>
        
        {/* Screen Content */}
        <div className="h-[812px] overflow-y-auto bg-gradient-to-b from-blue-50 to-white">
          {currentScreen === 'dashboard' && <DashboardScreen onNavigate={setCurrentScreen} />}
          {currentScreen === 'events' && <EventsScreen />}
          {currentScreen === 'projects' && <ProjectsScreen />}
          {currentScreen === 'certificates' && <CertificatesScreen />}
          
          {/* Bottom Navigation Spacing */}
          <div className="pb-20"></div>
        </div>
        
        <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      </div>
    </div>
  );
}
