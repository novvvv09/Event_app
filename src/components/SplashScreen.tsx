import { motion } from 'motion/react';
import logo from 'figma:asset/51103e823abea49baaaa6b5e0a0f4a3f191864e3.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const text = "SkillLink";
  const letters = text.split("");

  return (
    <motion.div 
      className="h-[812px] bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 3500);
      }}
    >
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1
        }}
        className="mb-8"
      >
        <motion.img 
          src={logo} 
          alt="SkillLink Logo"
          className="w-32 h-32 rounded-full object-cover shadow-2xl"
          animate={{ 
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </motion.div>

      {/* Animated Text */}
      <div className="flex items-center justify-center">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.2 + index * 0.1,
              type: "spring",
              stiffness: 200
            }}
            className="text-white text-5xl font-bold inline-block"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="text-blue-100 text-sm mt-4 tracking-wide"
      >
        Connect. Learn. Grow.
      </motion.p>

      {/* Loading dots */}
      <motion.div 
        className="flex gap-2 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}