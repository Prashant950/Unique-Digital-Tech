import { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { homeFaqs } from '../../data/site';
import { Link } from 'react-router-dom';

export default function HomeFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section relative overflow-hidden bg-ink-900/40 border-t border-white/5 py-16 sm:py-24">

      <div className="container-x max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold text-brand-300 mb-3 shadow-sm backdrop-blur">
            <HelpCircle className="h-3.5 w-3.5 text-brand-400" />
            CLEAR ANSWERS FOR FOUNDERS &amp; CTOs
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need to know about working with Unique Digital Tech before your first sprint.
          </p>
        </div>

        <div className="space-y-3.5">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                  isOpen
                    ? 'border-brand-500/40 bg-ink-900/90 shadow-lg shadow-brand-500/10'
                    : 'border-white/10 bg-ink-900/60 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left text-base font-semibold text-white hover:text-brand-300 transition"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition duration-300 ${
                    isOpen ? 'border-brand-500/40 bg-brand-500/15 text-brand-300 rotate-180' : 'border-white/10 bg-ink-800/80 text-slate-400'
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm sm:text-[15px] leading-relaxed text-slate-300 border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-400">
            Have a custom question about your stack or architecture?{' '}
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 font-semibold underline underline-offset-4 ml-1"
            >
              <span>Speak directly with an engineer</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
