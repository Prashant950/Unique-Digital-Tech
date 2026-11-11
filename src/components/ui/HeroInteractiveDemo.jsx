import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Activity, Code2, Sliders, Check, Copy, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import BorderBeam from './BorderBeam';
import { Link } from 'react-router-dom';

export default function HeroInteractiveDemo() {
  const [activeTab, setActiveTab] = useState('telemetry');
  const [copied, setCopied] = useState(false);
  const [pingMultiplier, setPingMultiplier] = useState(1);
  const [trafficActive, setTrafficActive] = useState(false);

  // Dynamic live ping jitter for realism
  const [nodes, setNodes] = useState([
    { city: 'Mumbai', code: 'BOM', basePing: 18, ping: 18, status: 'Optimal' },
    { city: 'Singapore', code: 'SIN', basePing: 24, ping: 24, status: 'Optimal' },
    { city: 'Frankfurt', code: 'FRA', basePing: 38, ping: 38, status: 'Fast' },
    { city: 'N. Virginia', code: 'IAD', basePing: 62, ping: 62, status: 'Fast' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes((prev) =>
        prev.map((n) => {
          const jitter = (Math.random() * 4 - 2) * (trafficActive ? 1.5 : 1);
          const newPing = Math.max(12, Math.round(n.basePing + jitter));
          return { ...n, ping: newPing };
        })
      );
    }, 2400);
    return () => clearInterval(interval);
  }, [trafficActive]);

  const handleCopyCode = () => {
    setCopied(true);
    navigator.clipboard?.writeText?.(codeSnippet);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippet = `// unique-platform.config.ts
export default defineEnterpriseArchitecture({
  organization: "Unique Digital Tech",
  availabilitySLA: "99.99%",
  globalEdge: {
    nodes: ["BOM", "SIN", "FRA", "IAD"],
    medianLatency: "<28ms",
    ddosMitigation: "Always-On L7",
  },
  ipOwnership: "100% Client-Owned",
  stack: ["Next.js", "React", "TypeScript", "Node.js", "Cloudflare"]
});`;

  return (
    <div className="relative mx-auto mt-12 w-full max-w-4xl">
      {/* Floating Glass Pill Left */}
      <div className="hidden lg:flex absolute -left-12 top-10 z-20 items-center gap-2 rounded-xl border border-white/10 bg-ink-900/90 px-3.5 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-xl animate-float">
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
        <span>100% IP &amp; Code Ownership</span>
      </div>

      {/* Floating Glass Pill Right */}
      <div className="hidden lg:flex absolute -right-10 bottom-12 z-20 items-center gap-2 rounded-xl border border-white/10 bg-ink-900/90 px-3.5 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-xl animate-float-delayed">
        <Zap className="h-3.5 w-3.5 text-amber-400" />
        <span className="text-amber-300 font-mono">24ms Avg Latency</span>
        <span className="text-slate-400 font-normal">· Global Edge</span>
      </div>

      {/* Main Glassmorphic Interactive Console */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-ink-900/90 shadow-2xl backdrop-blur-2xl">
        <BorderBeam duration={7} color="#38bdf8" />

        {/* Console Window Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 px-4 py-3.5 sm:px-6 bg-ink-950/70 gap-3">
          {/* Mac style control dots */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 border border-rose-400/30" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 border border-amber-400/30" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 border border-emerald-400/30" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
              unique-control-matrix://v2.6
            </span>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex items-center gap-1 rounded-xl bg-ink-800/80 p-1 border border-white/5">
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                activeTab === 'telemetry'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="h-3.5 w-3.5" />
              <span>Live Telemetry</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                activeTab === 'code'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>Architecture</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                activeTab === 'calculator'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="h-3.5 w-3.5" />
              <span>Sprint Estimator</span>
            </button>
          </div>
        </div>

        {/* Tab Body */}
        <div className="p-5 sm:p-7 min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === 'telemetry' && (
              <motion.div
                key="telemetry"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Status Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    <span className="text-sm font-semibold text-white">Global Edge Fleet Operational</span>
                    <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono text-emerald-300 border border-emerald-500/20">
                      99.99% Uptime
                    </span>
                  </div>

                  <button
                    onClick={() => setTrafficActive(!trafficActive)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300 hover:bg-brand-500/20 transition"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                    <span>{trafficActive ? 'Reset Traffic Test' : 'Simulate Spike (10k req/s)'}</span>
                  </button>
                </div>

                {/* Nodes Grid */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {nodes.map((node) => (
                    <div
                      key={node.code}
                      className="rounded-xl border border-white/10 bg-ink-950/60 p-4 transition hover:border-brand-500/30 hover:bg-ink-950/80"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="font-semibold text-white">{node.city}</span>
                        <span className="font-mono text-[11px] text-slate-500">[{node.code}]</span>
                      </div>
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="font-mono text-2xl font-bold text-brand-400 tracking-tight">
                          {node.ping}ms
                        </span>
                        <span className="text-[11px] text-emerald-400 font-medium">{node.status}</span>
                      </div>
                      {/* Pulse visual line */}
                      <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-ink-800">
                        <div
                          className="h-full bg-gradient-to-r from-brand-500 to-sky-400 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, (node.ping / 80) * 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom stats row */}
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-brand-500/20 bg-brand-500/5 px-4 py-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Mean First Contentful Paint:</span>
                    <span className="font-mono font-semibold text-white">&lt;0.4s</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Deployment Automation:</span>
                    <span className="font-mono font-semibold text-brand-300">Git Push → Edge Live</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Security:</span>
                    <span className="font-mono font-semibold text-emerald-400">Zero-Trust WAF</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'code' && (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                <div className="flex items-center justify-between pb-3">
                  <span className="text-xs font-mono text-slate-400">unique-platform.config.ts</span>
                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-ink-800/80 px-2.5 py-1 text-xs text-slate-300 hover:text-white hover:bg-ink-700 transition"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? 'Copied Config' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="overflow-x-auto rounded-xl border border-white/10 bg-ink-950/80 p-4 font-mono text-xs text-slate-300 leading-relaxed">
                  <code>{codeSnippet}</code>
                </pre>
              </motion.div>
            )}

            {activeTab === 'calculator' && (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="text-left">
                  <h4 className="text-base font-bold text-white">Interactive Sprint &amp; Scope Estimator</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Calculate your approximate launch runway and engineering sprint setup.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-brand-500/40 bg-brand-500/10 p-4 text-left">
                    <span className="text-xs font-semibold text-brand-300">Phase 1: Architecture</span>
                    <p className="mt-1 text-lg font-bold text-white">Sprint 0 (1 Wk)</p>
                    <p className="text-xs text-slate-400 mt-1">Full System Design, Schema, UI/UX Mockups &amp; Infra Provisioning.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-ink-950/60 p-4 text-left">
                    <span className="text-xs font-semibold text-sky-300">Phase 2: Build &amp; Test</span>
                    <p className="mt-1 text-lg font-bold text-white">Sprints 1–3 (3–5 Wks)</p>
                    <p className="text-xs text-slate-400 mt-1">Continuous CI/CD shipping code every Tuesday &amp; Friday.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-ink-950/60 p-4 text-left">
                    <span className="text-xs font-semibold text-emerald-300">Phase 3: Production</span>
                    <p className="mt-1 text-lg font-bold text-white">Edge Deployment</p>
                    <p className="text-xs text-slate-400 mt-1">30–90 day hypercare, SLA monitoring &amp; post-launch scale guarantee.</p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-slate-400">Need custom enterprise requirements?</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300"
                  >
                    <span>Discuss With Senior Engineer</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
