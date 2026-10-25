import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { homeFaqs } from '../../data/site';
import SectionHeading from '../ui/SectionHeading';

export default function HomeFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section relative overflow-hidden bg-ink-900/40 border-t border-white/5 py-16 sm:py-20">
      <div className="container-x max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold text-brand-300 mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            CLEAR ANSWERS FOR FOUNDERS & CTOs
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Everything you need to know about working with Unique Digital Tech before your first sprint.
          </p>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-ink-900/80 transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-brand-300 transition"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-slate-300 border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400">
            Have a custom question about your tech stack or architecture?{' '}
            <a href="/contact" className="text-brand-400 hover:text-brand-300 font-semibold underline underline-offset-4">
              Speak directly with an engineer &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
