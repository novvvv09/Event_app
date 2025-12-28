import { motion } from 'motion/react';
import { GraduationCap, Users } from 'lucide-react';
import logo from 'figma:asset/51103e823abea49baaaa6b5e0a0f4a3f191864e3.png';

interface RoleSelectionScreenProps {
  onSelectRole: (role: 'student' | 'professor') => void;
}

export function RoleSelectionScreen({ onSelectRole }: RoleSelectionScreenProps) {
  return (
    <div className="h-[812px] bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-8">
      {/* Logo */}
      <motion.img 
        src={logo} 
        alt="SkillLink Logo"
        className="w-24 h-24 rounded-full object-cover shadow-xl mb-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      />

      {/* Title */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h1 className="text-gray-900 mb-2">Welcome to SkillLink</h1>
        <p className="text-gray-600">Choose your role to continue</p>
      </motion.div>

      {/* Role Cards */}
      <div className="w-full space-y-4">
        {/* Student Card */}
        <motion.button
          onClick={() => onSelectRole('student')}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-500 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-gray-900 mb-1">I'm a Student</h3>
              <p className="text-gray-600 text-sm">Access events, projects, and certificates</p>
            </div>
          </div>
        </motion.button>

        {/* Professor Card */}
        <motion.button
          onClick={() => onSelectRole('professor')}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-purple-500 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-gray-900 mb-1">I'm a Professor</h3>
              <p className="text-gray-600 text-sm">Manage events and student activities</p>
            </div>
          </div>
        </motion.button>
      </div>

      {/* Footer Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-500 text-sm mt-12 text-center"
      >
        By continuing, you agree to our Terms of Service and Privacy Policy
      </motion.p>
    </div>
  );
}
