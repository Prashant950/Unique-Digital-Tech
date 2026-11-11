import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollProgress from '../ui/ScrollProgress';
import FloatingContactWidget from '../ui/FloatingContactWidget';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950 text-slate-300 selection:bg-brand-500 selection:text-white">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FloatingContactWidget />
      <Footer />
    </div>
  );
}
