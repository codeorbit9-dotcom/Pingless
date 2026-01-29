
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  BarChart3, 
  Key, 
  Globe, 
  Lock, 
  Check, 
  ChevronDown, 
  Menu, 
  X,
  Activity,
  Filter,
  Mail,
  Settings,
  ArrowRight,
  Users,
  LayoutDashboard,
  ShieldAlert,
  CreditCard,
  User,
  LogOut,
  Plus,
  Copy,
  Trash2,
  ExternalLink,
  Search,
  Bell
} from 'lucide-react';
import { 
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// --- Types & Data ---

type View = 'landing' | 'login' | 'signup' | 'dashboard' | 'apikeys' | 'firewall' | 'billing' | 'profile';

const chartData = [
  { name: '00:00', requests: 400, blocked: 24 },
  { name: '04:00', requests: 300, blocked: 18 },
  { name: '08:00', requests: 900, blocked: 65 },
  { name: '12:00', requests: 1200, blocked: 88 },
  { name: '16:00', requests: 1500, blocked: 120 },
  { name: '20:00', requests: 1100, blocked: 45 },
  { name: '23:59', requests: 600, blocked: 32 },
];

const pieData = [
  { name: 'Firebase', value: 400, color: '#6366f1' },
  { name: 'Direct API', value: 300, color: '#8b5cf6' },
  { name: 'Third Party', value: 300, color: '#d946ef' },
];

// --- Components ---

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 15V85M30 15H55C70 15 75 25 75 35C75 45 70 55 55 55H30" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    <path d="M30 15C30 15 50 20 60 40C65 55 50 85 40 85" fill="#8b5cf6" opacity="0.4"/>
    <path d="M75 35C75 45 70 55 55 55" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

const Navbar = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
            <Logo className="w-10 h-10 text-violet-600" />
            <span className="text-2xl font-black tracking-tight text-[#1a1a1a]">Pingless</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-slate-600 hover:text-violet-600 transition-colors font-semibold text-sm">Benefits</a>
            <a href="#pricing" className="text-slate-600 hover:text-violet-600 transition-colors font-semibold text-sm">Pricing</a>
            <button onClick={() => onNavigate('login')} className="text-violet-600 font-bold text-sm px-6 py-2 rounded-lg bg-violet-50 hover:bg-violet-100 transition-colors">Sign In</button>
            <button onClick={() => onNavigate('signup')} className="bg-[#5a46e5] text-white px-6 py-2 rounded-lg font-bold text-sm shadow-lg shadow-violet-200 hover:bg-[#4b39c7] transition-all">Get Started</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Landing Page Sections ---

const LandingHero = ({ onNavigate }: { onNavigate: (v: View) => void }) => (
  <section className="relative pt-40 pb-20 px-4 overflow-hidden">
    <div className="absolute top-40 left-10 w-40 h-40 dot-grid -z-10"></div>
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-sm font-bold border border-violet-100">
          <Zap size={14} fill="currentColor" /> Firebase Auth Ready
        </div>
        <h1 className="text-5xl lg:text-[4.5rem] font-black text-slate-900 leading-[1.05] tracking-tight">
          Protect Your APIs. <br />
          <span className="text-[#5a46e5]">Block Abuse Instantly.</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
          Pingless sits between your app and APIs to stop leaked keys, unauthorized requests, and unexpected billing spikes before they hit your wallet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => onNavigate('signup')} className="bg-[#5a46e5] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#4b39c7] transition-all shadow-xl shadow-violet-200">
            Start Free Trial
          </button>
          <button className="bg-white text-slate-700 border border-slate-200 px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors">
            View Documentation
          </button>
        </div>
      </div>
      <div className="relative group">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100 p-8 overflow-hidden transform lg:translate-x-12 translate-y-6 transition-transform duration-500 hover:rotate-1">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600"><Activity size={20} /></div>
               <div>
                 <h4 className="font-bold text-slate-800">Traffic Stream</h4>
                 <p className="text-xs text-slate-400">Live monitoring</p>
               </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black rounded-full">PROXY ACTIVE</div>
            </div>
          </div>
          <div className="h-48 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="landingGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5a46e5" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#5a46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="requests" stroke="#5a46e5" fill="url(#landingGrad)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status 200</p>
               <p className="text-xl font-black text-slate-800">99.8%</p>
            </div>
            <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
               <p className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Status 403</p>
               <p className="text-xl font-black text-red-600">0.2%</p>
            </div>
          </div>
        </div>
        <div className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 animate-bounce">
          <div className="w-12 h-12 bg-[#ffcc4d] rounded-xl flex items-center justify-center text-white shadow-lg">
            <ShieldAlert size={24} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Auth Components ---

// Fixed: Making children optional in props type to resolve TS error when passing as JSX children
const AuthLayout = ({ children, title, subtitle }: { children?: React.ReactNode, title: string, subtitle: string }) => (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
    <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 p-10 lg:p-14">
      <div className="text-center mb-10">
        <Logo className="w-12 h-12 text-violet-600 mx-auto mb-6" />
        <h2 className="text-3xl font-black text-slate-900 mb-2">{title}</h2>
        <p className="text-slate-500 font-medium">{subtitle}</p>
      </div>
      {children}
    </div>
  </div>
);

// --- Dashboard Layout & Pages ---

const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${active ? 'bg-violet-600 text-white shadow-lg shadow-violet-200' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
  >
    <Icon size={18} />
    {label}
  </button>
);

// Fixed: Making children optional in props type to resolve TS error when passing as JSX children
const DashboardShell = ({ activeView, onNavigate, children }: { activeView: View, onNavigate: (v: View) => void, children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-100 p-8 flex flex-col hidden lg:flex">
        <div className="flex items-center gap-3 mb-12 cursor-pointer" onClick={() => onNavigate('landing')}>
          <Logo className="w-8 h-8 text-violet-600" />
          <span className="text-xl font-black tracking-tight text-[#1a1a1a]">Pingless</span>
        </div>
        
        <div className="space-y-2 flex-grow">
          <SidebarItem icon={LayoutDashboard} label="Overview" active={activeView === 'dashboard'} onClick={() => onNavigate('dashboard')} />
          <SidebarItem icon={Key} label="API Keys" active={activeView === 'apikeys'} onClick={() => onNavigate('apikeys')} />
          <SidebarItem icon={ShieldAlert} label="Firewall Rules" active={activeView === 'firewall'} onClick={() => onNavigate('firewall')} />
          <SidebarItem icon={BarChart3} label="Analytics" active={activeView === 'dashboard'} onClick={() => onNavigate('dashboard')} />
          <SidebarItem icon={CreditCard} label="Billing" active={activeView === 'billing'} onClick={() => onNavigate('billing')} />
        </div>

        <div className="pt-8 border-t border-slate-100">
          <SidebarItem icon={User} label="Profile" active={activeView === 'profile'} onClick={() => onNavigate('profile')} />
          <SidebarItem icon={LogOut} label="Log Out" onClick={() => onNavigate('landing')} />
        </div>
      </aside>

      {/* Content */}
      <main className="flex-grow p-4 lg:p-10 max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-black text-slate-900 capitalize">{activeView.replace('dashboard', 'Overview')}</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-violet-600 transition-colors bg-white rounded-xl border border-slate-100 shadow-sm relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 bg-white p-1.5 pr-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600 font-bold text-sm">JD</div>
              <span className="text-sm font-bold text-slate-700">John Doe</span>
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
};

const DashboardHome = () => (
  <div className="space-y-10">
    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { label: "Total Requests", val: "1.2M", change: "+12.5%", color: "bg-violet-600", icon: Activity },
        { label: "Blocked Requests", val: "4.2K", change: "-2.3%", color: "bg-red-500", icon: ShieldAlert },
        { label: "Active API Keys", val: "12", change: "0%", color: "bg-blue-500", icon: Key },
        { label: "Remaining Limit", val: "88%", change: "", color: "bg-green-500", icon: Zap },
      ].map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl ${stat.color} text-white shadow-lg`}>
              <stat.icon size={20} />
            </div>
            <span className="text-xs font-bold text-green-500">{stat.change}</span>
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
          <p className="text-3xl font-black text-slate-900">{stat.val}</p>
        </div>
      ))}
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Main Chart */}
      <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-slate-800">Traffic Distribution</h3>
          <select className="bg-slate-50 border-none text-xs font-bold p-2 rounded-lg outline-none cursor-pointer">
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
          </select>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorReq" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" stroke="#cbd5e1" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#cbd5e1" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
              <Area type="monotone" dataKey="requests" stroke="#8b5cf6" strokeWidth={4} fillOpacity={1} fill="url(#colorReq)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Target Sources */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-8">Target Usage</h3>
        <div className="h-64 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          {pieData.map((d, i) => (
            <div key={i} className="flex justify-between items-center text-sm font-bold">
              <div className="flex items-center gap-2 text-slate-500">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }}></div>
                {d.name}
              </div>
              <span className="text-slate-900">{d.value} req/s</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ApiKeysPage = () => {
  const [keys] = useState([
    { id: '1', name: 'Production - Web App', key: 'pk_live_******************', status: 'Active', usage: '450k req' },
    { id: '2', name: 'Staging - Firebase', key: 'pk_test_******************', status: 'Active', usage: '12k req' },
    { id: '3', name: 'Legacy API', key: 'pk_live_******************', status: 'Revoked', usage: '0 req' },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input type="text" placeholder="Search keys..." className="w-full pl-12 pr-4 py-3 bg-white border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-violet-200 transition-all font-medium text-sm" />
        </div>
        <button className="bg-violet-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-violet-700 transition-all shadow-lg shadow-violet-100">
          <Plus size={20} />
          Create New Key
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <th className="px-8 py-4">Name</th>
              <th className="px-8 py-4">API Key</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4">Usage</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {keys.map(k => (
              <tr key={k.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-5 font-bold text-slate-800">{k.name}</td>
                <td className="px-8 py-5 text-sm font-mono text-slate-400">{k.key}</td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${k.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {k.status}
                  </span>
                </td>
                <td className="px-8 py-5 font-bold text-slate-600">{k.usage}</td>
                <td className="px-8 py-5">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-violet-600 transition-colors"><Copy size={18} /></button>
                    <button className="p-2 text-slate-400 hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FirewallPage = () => (
  <div className="space-y-10">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Rule Creator */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-6">Quick Rules</h3>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center"><Filter size={20} /></div>
              <div>
                <p className="font-bold text-slate-800">Block Malicious IPs</p>
                <p className="text-xs text-slate-400">Database managed by Pingless</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-violet-600 rounded-full p-1 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full translate-x-6"></div>
            </div>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"><Globe size={20} /></div>
              <div>
                <p className="font-bold text-slate-800">Geofencing (US Only)</p>
                <p className="text-xs text-slate-400">Restrict access to specific regions</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-slate-200 rounded-full p-1 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Firewall Stats */}
      <div className="bg-[#5a46e5] p-8 rounded-[2rem] text-white shadow-xl shadow-violet-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20"><ShieldAlert size={120} /></div>
        <h3 className="font-bold mb-2">Firewall Efficiency</h3>
        <p className="text-white/70 text-sm mb-8">Your rules protected your APIs from over 12k suspicious requests today.</p>
        <div className="flex items-end gap-1 mb-2">
          <span className="text-4xl font-black">94.2%</span>
          <span className="text-sm font-bold text-white/50 mb-1">Threats Blocked</span>
        </div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white w-[94%]"></div>
        </div>
      </div>
    </div>

    {/* Custom Rules List */}
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center">
        <h3 className="font-bold text-slate-800">Custom Firewall Rules</h3>
        <button className="text-violet-600 font-bold text-sm flex items-center gap-2">View History <ArrowRight size={14} /></button>
      </div>
      <table className="w-full text-left">
        <tbody className="divide-y divide-slate-50">
          {[
            { type: 'IP Block', value: '192.168.1.45', label: 'Spam Pattern', active: true },
            { type: 'Domain Block', value: 'malicious-bot.net', label: 'Reported Threat', active: true },
            { type: 'Rate Limit', value: '/api/v1/auth', label: '10 req / min', active: false },
          ].map((r, i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-8 py-5">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-full">{r.type}</span>
              </td>
              <td className="px-8 py-5 font-bold text-slate-800">{r.value}</td>
              <td className="px-8 py-5 text-sm text-slate-400 italic">{r.label}</td>
              <td className="px-8 py-5">
                <div className={`w-8 h-4 rounded-full p-0.5 cursor-pointer ${r.active ? 'bg-violet-600' : 'bg-slate-200'}`}>
                  <div className={`w-3 h-3 bg-white rounded-full transition-transform ${r.active ? 'translate-x-4' : ''}`}></div>
                </div>
              </td>
              <td className="px-8 py-5 text-right">
                <button className="p-2 text-slate-300 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [view, setView] = useState<View>('landing');
  const [email, setEmail] = useState('');

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  if (view === 'login' || view === 'signup') {
    return (
      <AuthLayout 
        title={view === 'login' ? 'Welcome Back' : 'Create Account'} 
        subtitle={view === 'login' ? 'Continue protecting your APIs.' : 'Join +250 developers using Pingless.'}
      >
        <div className="space-y-6">
          <button onClick={() => setView('dashboard')} className="w-full flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" className="w-5 h-5" alt="Google" />
            Continue with Google
          </button>
          
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-100 w-full"></div>
            <span className="bg-white px-4 text-[10px] font-black uppercase text-slate-400 absolute">OR</span>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email Address</label>
              <input type="email" placeholder="name@company.com" className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-violet-200 font-medium transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-violet-200 font-medium transition-all" />
            </div>
          </div>

          <button onClick={() => setView('dashboard')} className="w-full bg-[#5a46e5] text-white py-4 rounded-xl font-black text-lg shadow-xl shadow-violet-200 hover:bg-[#4b39c7] transition-all">
            {view === 'login' ? 'Login' : 'Create Account'}
          </button>

          <p className="text-center text-sm font-medium text-slate-500">
            {view === 'login' ? "Don't have an account?" : "Already have an account?"} 
            <button onClick={() => setView(view === 'login' ? 'signup' : 'login')} className="ml-1 text-violet-600 font-bold hover:underline">
              {view === 'login' ? 'Sign up' : 'Login'}
            </button>
          </p>
        </div>
      </AuthLayout>
    );
  }

  if (view === 'dashboard' || view === 'apikeys' || view === 'firewall' || view === 'billing' || view === 'profile') {
    return (
      <DashboardShell activeView={view} onNavigate={setView}>
        {view === 'dashboard' && <DashboardHome />}
        {view === 'apikeys' && <ApiKeysPage />}
        {view === 'firewall' && <FirewallPage />}
        {view === 'billing' && (
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
               <h3 className="font-bold text-xl mb-8">Current Subscription</h3>
               <div className="p-6 bg-violet-50 border border-violet-100 rounded-2xl mb-8 flex justify-between items-center">
                 <div>
                   <p className="text-[10px] font-black uppercase text-violet-400 mb-1">Active Plan</p>
                   <p className="text-2xl font-black text-violet-700">Pro Developer</p>
                 </div>
                 <div className="text-right">
                   <p className="text-xl font-black text-slate-800">$29/mo</p>
                   <p className="text-xs text-slate-500">Next billing: Oct 12</p>
                 </div>
               </div>
               <div className="space-y-6">
                 <div>
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                      <span className="text-slate-500">Requests Used</span>
                      <span className="text-slate-900">450,230 / 1,000,000</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-600 w-[45%]"></div>
                    </div>
                 </div>
                 <button className="w-full py-4 rounded-xl border-2 border-slate-100 text-slate-800 font-bold hover:bg-slate-50">Manage Card Details</button>
                 <button className="w-full py-4 rounded-xl text-red-600 font-bold hover:bg-red-50">Cancel Subscription</button>
               </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
               <h3 className="font-bold text-xl mb-8">Invoices</h3>
               <div className="divide-y divide-slate-50">
                 {[1,2,3].map(i => (
                    <div key={i} className="py-4 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-slate-800 text-sm">Invoice #000{i}</p>
                        <p className="text-xs text-slate-400">Sept {20 - i}, 2023</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-slate-800">$29.00</span>
                        <button className="p-2 text-slate-300 hover:text-violet-600 transition-colors"><ExternalLink size={16} /></button>
                      </div>
                    </div>
                 ))}
               </div>
            </div>
          </div>
        )}
        {view === 'profile' && (
          <div className="max-w-2xl bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <div className="flex items-center gap-6 mb-12">
               <div className="w-24 h-24 bg-violet-100 text-violet-600 rounded-3xl flex items-center justify-center text-3xl font-black">JD</div>
               <div>
                 <h3 className="text-2xl font-black text-slate-900">John Doe</h3>
                 <p className="text-slate-500 font-medium">Project Owner • Joined Aug 2023</p>
                 <button className="text-xs font-bold text-violet-600 mt-2 hover:underline">Change Photo</button>
               </div>
             </div>
             <div className="grid gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400">Full Name</label>
                  <input type="text" defaultValue="John Doe" className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl font-medium" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400">Work Email</label>
                  <input type="email" defaultValue="john@pingless.io" className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl font-medium" />
                </div>
                <div className="flex justify-end pt-6">
                  <button className="bg-violet-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-violet-100">Save Changes</button>
                </div>
             </div>
          </div>
        )}
      </DashboardShell>
    );
  }

  return (
    <div className="min-h-screen selection:bg-violet-100 selection:text-violet-900">
      <Navbar onNavigate={setView} />
      <main>
        <LandingHero onNavigate={setView} />
        
        {/* Simple features for context */}
        <section id="features" className="py-24 px-4 bg-slate-50/50">
           <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
              {[
                { title: "Firebase Auth Proxy", desc: "Native support for blocking unauthorized Firebase SDK requests.", icon: <Lock /> },
                { title: "Edge Performance", desc: "Under 5ms added latency with our global distributed proxy nodes.", icon: <Zap /> },
                { title: "Usage Guard", desc: "Set granular limits per API key to prevent surprise monthly bills.", icon: <Shield /> },
              ].map((f, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center mb-6">{f.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Pricing for context */}
        <section id="pricing" className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Start securing your APIs today.</h2>
            <p className="text-slate-500 font-medium">Choose a plan that fits your growth.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
             <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                <h4 className="font-bold text-slate-800 mb-2">Hacker</h4>
                <div className="text-4xl font-black mb-6">$0<span className="text-sm font-bold text-slate-400">/mo</span></div>
                <ul className="space-y-3 mb-10 text-sm font-medium text-slate-600">
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> 10k requests</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> 1 API Key</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Basic IP Filtering</li>
                </ul>
                <button onClick={() => setView('signup')} className="w-full py-4 rounded-xl border-2 border-slate-100 font-bold hover:bg-slate-50 transition-colors">Start for Free</button>
             </div>
             <div className="p-10 bg-white border-2 border-violet-600 rounded-[2.5rem] shadow-2xl shadow-violet-100 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">POPULAR</div>
                <h4 className="font-bold text-slate-800 mb-2">Pro</h4>
                <div className="text-4xl font-black mb-6">$29<span className="text-sm font-bold text-slate-400">/mo</span></div>
                <ul className="space-y-3 mb-10 text-sm font-medium text-slate-600">
                  <li className="flex items-center gap-2"><Check size={16} className="text-violet-600" /> 1M requests</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-violet-600" /> Unlimited Keys</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-violet-600" /> Advanced Regex Firewall</li>
                </ul>
                <button onClick={() => setView('signup')} className="w-full py-4 rounded-xl bg-violet-600 text-white font-black shadow-lg shadow-violet-200">Get Pro Access</button>
             </div>
          </div>
        </section>
      </main>
      
      <footer className="py-20 border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Logo className="w-8 h-8 text-violet-600" />
            <span className="text-xl font-black tracking-tight text-[#1a1a1a]">Pingless</span>
          </div>
          <p className="text-slate-400 font-bold text-sm">© {new Date().getFullYear()} Pingless Platform. Built for developers.</p>
        </div>
      </footer>
    </div>
  );
}
