import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { company } from '../../data/site';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950 text-slate-300">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
