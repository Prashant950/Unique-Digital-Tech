import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    ({ type = 'success', title, message, duration = 5000 }) => {
      const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
      const newToast = { id, type, title, message, duration };

      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
      return id;
    },
    [removeToast]
  );

  const toast = {
    success: (message, title = 'Success!') =>
      addToast({ type: 'success', title, message }),
    error: (message, title = 'Error') =>
      addToast({ type: 'error', title, message }),
    info: (message, title = 'Information') =>
      addToast({ type: 'info', title, message }),
    custom: addToast,
    dismiss: removeToast,
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}

      {/* Floating Toast Notification Container */}
      <div
        className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none max-w-sm sm:max-w-md w-full px-4"
        aria-live="polite"
      >
        <AnimatePresence>
          {toasts.map((t) => {
            const isSuccess = t.type === 'success';
            const isError = t.type === 'error';

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: -25, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className={`pointer-events-auto relative overflow-hidden rounded-2xl border p-4 sm:p-5 shadow-2xl backdrop-blur-2xl transition-all ${
                  isSuccess
                    ? 'border-emerald-500/50 bg-ink-950/95 shadow-[0_10px_35px_rgba(16,185,129,0.25)]'
                    : isError
                    ? 'border-rose-500/50 bg-ink-950/95 shadow-[0_10px_35px_rgba(244,63,94,0.25)]'
                    : 'border-brand-500/50 bg-ink-950/95 shadow-[0_10px_35px_rgba(14,165,233,0.25)]'
                }`}
              >
                {/* Ambient glow in corner */}
                <div
                  className={`pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full blur-xl opacity-40 ${
                    isSuccess ? 'bg-emerald-500' : isError ? 'bg-rose-500' : 'bg-brand-500'
                  }`}
                />

                <div className="flex items-start gap-3.5 relative z-10">
                  <div
                    className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border ${
                      isSuccess
                        ? 'border-emerald-500/30 bg-emerald-500/15 text-emerald-400'
                        : isError
                        ? 'border-rose-500/30 bg-rose-500/15 text-rose-400'
                        : 'border-brand-500/30 bg-brand-500/15 text-brand-400'
                    }`}
                  >
                    {isSuccess ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : isError ? (
                      <AlertCircle className="h-5 w-5" />
                    ) : (
                      <Info className="h-5 w-5" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0 pr-2">
                    <h5 className="text-sm font-bold text-white tracking-tight leading-snug">
                      {t.title}
                    </h5>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      {t.message}
                    </p>
                  </div>

                  <button
                    onClick={() => removeToast(t.id)}
                    className="grid h-7 w-7 place-items-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition shrink-0"
                    aria-label="Dismiss notification"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Progress countdown bar */}
                {t.duration > 0 && (
                  <motion.div
                    initial={{ width: '100%' }}
                    animate={{ width: '0%' }}
                    transition={{ duration: t.duration / 1000, ease: 'linear' }}
                    className={`absolute bottom-0 left-0 h-1 ${
                      isSuccess ? 'bg-emerald-400' : isError ? 'bg-rose-500' : 'bg-brand-400'
                    }`}
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

