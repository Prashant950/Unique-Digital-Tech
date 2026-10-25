import {
  Globe,
  Smartphone,
  Megaphone,
  Search,
  Target,
  Database,
  Cloud,
  Layers,
  ShieldCheck,
  TrendingUp,
  KeyRound,
  Users,
  RefreshCw,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const map = {
  globe: Globe,
  phone: Smartphone,
  megaphone: Megaphone,
  search: Search,
  target: Target,
  database: Database,
  message: WhatsAppIcon,
  whatsapp: WhatsAppIcon,
  cloud: Cloud,
  layers: Layers,
  shield: ShieldCheck,
  trend: TrendingUp,
  key: KeyRound,
  users: Users,
  cycle: RefreshCw,
};

export default function Icon({ name, className = 'h-6 w-6' }) {
  const Cmp = map[name] || Globe;
  return <Cmp className={className} aria-hidden="true" />;
}
