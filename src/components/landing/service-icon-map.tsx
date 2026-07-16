import {
  Truck,
  ShieldCheck,
  Zap,
  BarChart3,
  Route,
  FileText,
  Bell,
  Users,
} from "lucide-react";

// ─── Reusable helpers ─────────────────────────────────────────────────────────
export const ServiceIconMap: Record<string, React.ReactNode> = {
  truck: <Truck size={22} />,
  route: <Route size={22} />,
  shield: <ShieldCheck size={22} />,
  file: <FileText size={22} />,
  bell: <Bell size={22} />,
  users: <Users size={22} />,
  zap: <Zap size={22} />,
  chart: <BarChart3 size={22} />,
};
