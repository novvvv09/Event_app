import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, User, GraduationCap, BookOpen } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import logo from 'figma:asset/51103e823abea49baaaa6b5e0a0f4a3f191864e3.png';

interface SignUpScreenProps {
  role: 'student' | 'professor';
  onSignUp: () => void;
  onBackToLogin: () => void;
}

export function SignUpScreen({ role, onSignUp, onBackToLogin }: SignUpScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Account created successfully!');
      onSignUp();
    }, 1500);
  };

  const handleSocialLogin = (provider: 'Google' | 'Facebook') => {
    setIsLoading(true);
    toast.info(`Redirecting to ${provider}...`);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Successfully signed up with ${provider}!`);
      onSignUp();
    }, 2000);
  };

  const isStudent = role === 'student';
  const gradientColor = isStudent ? 'from-blue-500 to-purple-600' : 'from-purple-500 to-indigo-600';
  const accentColor = isStudent ? 'text-blue-600' : 'text-purple-600';
  const focusRing = isStudent ? 'focus:ring-blue-500' : 'focus:ring-purple-500';

  return (
    <div className="h-[812px] bg-gradient-to-b from-gray-50 to-white overflow-y-auto px-6 py-8">
      <div className="max-w-md mx-auto pb-10">
        {/* Logo and Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="inline-block mb-3">
            <img 
              src={logo} 
              alt="SkillLink Logo"
              className="w-16 h-16 rounded-2xl object-cover shadow-lg mx-auto"
            />
          </div>
          <h2 className="text-gray-900 mb-1">Join SkillLink</h2>
          <p className="text-gray-600">Create your {role} account</p>
        </motion.div>

        {/* Role Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className={`flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r ${gradientColor} text-white rounded-full text-xs font-medium shadow-md`}>
            {isStudent ? (
              <><GraduationCap size={14} /> Student Account</>
            ) : (
              <><BookOpen size={14} /> Professor Account</>
            )}
          </div>
        </motion.div>

        {/* Sign Up Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Input */}
            <div>
              <label className="block text-gray-700 text-xs font-semibold mb-1.5 ml-1 uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className={`w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${focusRing} focus:border-transparent transition-all text-gray-700`}
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 text-xs font-semibold mb-1.5 ml-1 uppercase tracking-wider">University Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@university.edu"
                  className={`w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${focusRing} focus:border-transparent transition-all text-gray-700`}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700 text-xs font-semibold mb-1.5 ml-1 uppercase tracking-wider">Create Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className={`w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${focusRing} focus:border-transparent transition-all text-gray-700`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 bg-gradient-to-r ${gradientColor} text-white rounded-xl hover:shadow-lg transition-all font-semibold mt-4 disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </div>
              ) : 'Create Account'}
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600 text-sm mt-4">
              Already have an account?{' '}
              <button 
                type="button" 
                onClick={onBackToLogin}
                className={`${accentColor} font-semibold hover:underline`}
              >
                Sign in
              </button>
            </p>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-gray-400 text-xs uppercase tracking-widest font-medium">Or join with</span>
              </div>
            </div>

            {/* Social Sign Up Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors bg-white shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-gray-700 text-sm font-medium">Google</span>
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin('Facebook')}
                className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors bg-white shadow-sm"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-gray-700 text-sm font-medium">Facebook</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Terms and Privacy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-400 text-[10px] mt-6 px-4 uppercase tracking-widest leading-relaxed"
        >
          By creating an account, you agree to our{' '}
          <button className={`${accentColor} font-bold hover:underline`}>Terms of Service</button>
          {' '}and{' '}
          <button className={`${accentColor} font-bold hover:underline`}>Privacy Policy</button>
        </motion.p>
      </div>
    </div>
  );
}