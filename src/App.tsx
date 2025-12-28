import { useState } from "react";
import { DashboardScreen } from "./components/DashboardScreen";
import { EventsScreen } from "./components/EventsScreen";
import { ProjectsScreen } from "./components/ProjectsScreen";
import { CertificatesScreen } from "./components/CertificatesScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { BottomNav } from "./components/BottomNav";
import { SplashScreen } from "./components/SplashScreen";
import { RoleSelectionScreen } from "./components/RoleSelectionScreen";
import { LoginScreen } from "./components/LoginScreen";
import { ProfessorDashboard } from "./components/professor/ProfessorDashboard";
import { MyEventsScreen } from "./components/professor/MyEventsScreen";
import { CreateEventScreen } from "./components/professor/CreateEventScreen";
import { EventDetailsScreen } from "./components/professor/EventDetailsScreen";
import { ProfessorProfile } from "./components/professor/ProfessorProfile";
import { ProfessorBottomNav } from "./components/professor/ProfessorBottomNav";

export default function App() {
  // Auth states
  const [currentScreen, setCurrentScreen] = useState<
    | "dashboard"
    | "events"
    | "profile"
    | "projects"
    | "certificates"
  >("dashboard");
  const [showSplash, setShowSplash] = useState(true);
  const [showRoleSelection, setShowRoleSelection] =
    useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userRole, setUserRole] = useState<
    "student" | "professor" | null
  >(null);

  // Professor states
  const [professorScreen, setProfessorScreen] = useState<
    "dashboard" | "events" | "create-event" | "profile"
  >("dashboard");
  const [selectedEventId, setSelectedEventId] = useState<
    number | null
  >(null);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowRoleSelection(true);
  };

  const handleRoleSelect = (role: "student" | "professor") => {
    setUserRole(role);
    setShowRoleSelection(false);
    setShowLogin(true);
  };

  const handleLogin = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUserRole(null);
    setShowSplash(true);
    setShowRoleSelection(false);
    setShowLogin(false);
    setCurrentScreen("dashboard");
    setProfessorScreen("dashboard");
    setSelectedEventId(null);
  };

  const handleViewEvent = (eventId: number) => {
    setSelectedEventId(eventId);
  };

  const handleBackFromEventDetails = () => {
    setSelectedEventId(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Mobile Device Frame */}
      <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-800 relative">
        {/* Device Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-50"></div>

        {showSplash ? (
          <SplashScreen onComplete={handleSplashComplete} />
        ) : showRoleSelection ? (
          <RoleSelectionScreen
            onSelectRole={handleRoleSelect}
          />
        ) : showLogin ? (
          <LoginScreen role={userRole!} onLogin={handleLogin} />
        ) : userRole === "professor" ? (
          <>
            {/* Professor Interface */}
            <div className="h-[812px] overflow-y-auto bg-gradient-to-b from-purple-50 to-white">
              {selectedEventId !== null ? (
                <EventDetailsScreen
                  eventId={selectedEventId}
                  onNavigate={(screen) => {
                    setSelectedEventId(null);
                    setProfessorScreen(screen);
                  }}
                />
              ) : (
                <>
                  {professorScreen === "dashboard" && (
                    <ProfessorDashboard
                      onNavigate={setProfessorScreen}
                      onViewEvent={handleViewEvent}
                    />
                  )}
                  {professorScreen === "events" && (
                    <MyEventsScreen
                      onViewEvent={handleViewEvent}
                      onNavigate={setProfessorScreen}
                    />
                  )}
                  {professorScreen === "create-event" && (
                    <CreateEventScreen
                      onNavigate={setProfessorScreen}
                    />
                  )}
                  {professorScreen === "profile" && (
                    <ProfessorProfile onLogout={handleLogout} />
                  )}
                </>
              )}

              {/* Bottom Navigation Spacing */}
              <div className="pb-20"></div>
            </div>

            {selectedEventId === null && (
              <ProfessorBottomNav
                currentScreen={professorScreen}
                onNavigate={setProfessorScreen}
              />
            )}
          </>
        ) : (
          <>
            {/* Student Interface */}
            <div className="h-[812px] overflow-y-auto bg-gradient-to-b from-blue-50 to-white">
              {currentScreen === "dashboard" && (
                <DashboardScreen
                  onNavigate={setCurrentScreen}
                />
              )}
              {currentScreen === "events" && <EventsScreen />}
              {currentScreen === "profile" && <ProfileScreen />}
              {currentScreen === "projects" && (
                <ProjectsScreen />
              )}
              {currentScreen === "certificates" && (
                <CertificatesScreen />
              )}

              {/* Bottom Navigation Spacing */}
              <div className="pb-20"></div>
            </div>

            <BottomNav
              currentScreen={currentScreen}
              onNavigate={setCurrentScreen}
            />
          </>
        )}
      </div>
    </div>
  );
}