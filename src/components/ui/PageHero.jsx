import { Sparkles } from 'lucide-react';
import CyberBackground from './CyberBackground';
import { motion } from 'framer-motion';

export default function PageHero({ badge, title, text, children, className = '' }) {
  return (
    <section className={`relative overflow-hidden border-b border-white/10 pt-36 pb-24 sm:pt-44 sm:pb-32 min-h-[60vh] sm:min-h-[68vh] flex flex-col justify-center ${className}`}>
      {/* Cyber ambient dot grid and glowing aurora orbs */}
      <CyberBackground variant="dots" />

      <div className="container-x relative max-w-4xl text-center z-10">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300 mb-5 shadow-sm backdrop-blur-xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-400" />
            <span>{badge}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold sm:text-5xl lg:text-6xl text-white leading-[1.12] tracking-tight"
        >
          {title}
        </motion.h1>

        {text && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            {text}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
