import { 
  Home, 
  Search, 
  Clock, 
  LayoutGrid, 
  Star, 
  Users, 
  Compass, 
  FileText, 
  BookOpen,
  Gift,
  Zap,
  ChevronDown,
  FolderPlus
} from 'lucide-react'

const recentProjects = [
  'Perfect Pixel Copy',
  '3JS Bloom',
  'Somaliaudit Interactive Map',
  'trenches-solana-frontline',
]

export function Sidebar() {
  return (
    <aside className="flex flex-col w-[272px] h-full bg-[rgba(13,13,13,0.95)] border-r border-[hsl(60,3%,15%)]">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-3">
        <div className="w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.5 8.5L21 10L15.5 14.5L17 21L12 17L7 21L8.5 14.5L3 10L9.5 8.5L12 2Z" fill="#FF6B6B"/>
          </svg>
        </div>
      </div>
      
      {/* Workspace Selector */}
      <button className="flex items-center gap-2 mx-3 px-3 py-2 rounded-lg bg-[hsl(60,3%,15%)] hover:bg-[hsl(60,3%,18%)] transition-colors">
        <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-bold text-white">
          LP
        </div>
        <span className="flex-1 text-left text-sm font-medium text-[hsl(42,38%,95%)]">LOVABLE PROJECTS</span>
        <ChevronDown className="w-4 h-4 text-[hsl(42,38%,95%)] opacity-60" />
      </button>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          <NavItem icon={<Home className="w-4 h-4" />} label="Home" active />
          <NavItem icon={<Search className="w-4 h-4" />} label="Search" shortcut="Ctrl+K" />
        </div>
        
        <div className="mt-6">
          <div className="px-3 py-2 text-xs font-medium text-[hsl(42,38%,95%)] opacity-50 uppercase tracking-wider">
            Projects
          </div>
          <div className="space-y-1">
            <NavItem icon={<Clock className="w-4 h-4" />} label="Recent" />
            <div className="ml-4 space-y-1">
              {recentProjects.map((project) => (
                <a key={project} href="#" className="block px-3 py-1.5 text-sm text-[hsl(42,38%,95%)] opacity-70 hover:opacity-100 hover:bg-[hsl(60,3%,15%)] rounded-md transition-all">
                  {project}
                </a>
              ))}
            </div>
            <NavItem icon={<LayoutGrid className="w-4 h-4" />} label="All projects" />
            <NavItem icon={<FolderPlus className="w-4 h-4" />} label="New folder" />
            <NavItem icon={<Star className="w-4 h-4" />} label="Starred" />
            <NavItem icon={<Users className="w-4 h-4" />} label="Shared with me" />
          </div>
        </div>
        
        <div className="mt-6">
          <div className="px-3 py-2 text-xs font-medium text-[hsl(42,38%,95%)] opacity-50 uppercase tracking-wider">
            Resources
          </div>
          <div className="space-y-1">
            <NavItem icon={<Compass className="w-4 h-4" />} label="Discover" />
            <NavItem icon={<FileText className="w-4 h-4" />} label="Templates" />
            <NavItem icon={<BookOpen className="w-4 h-4" />} label="Learn" />
          </div>
        </div>
      </nav>
      
      <div className="px-3 pb-4 space-y-2">
        <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg bg-[hsl(60,3%,15%)] hover:bg-[hsl(60,3%,18%)] transition-colors">
          <div>
            <div className="text-sm font-medium text-[hsl(42,38%,95%)]">Share Lovable</div>
            <div className="text-xs text-[hsl(42,38%,95%)] opacity-50">Get 10 credits each</div>
          </div>
          <Gift className="w-4 h-4 text-[hsl(42,38%,95%)] opacity-60" />
        </button>
        
        <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg bg-[hsl(60,3%,15%)] hover:bg-[hsl(60,3%,18%)] transition-colors">
          <div>
            <div className="text-sm font-medium text-[hsl(42,38%,95%)]">Upgrade to Business</div>
            <div className="text-xs text-[hsl(42,38%,95%)] opacity-50">Unlock more benefits</div>
          </div>
          <Zap className="w-4 h-4 text-yellow-400" />
        </button>
        
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-medium">
            J
          </div>
        </div>
      </div>
    </aside>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
  shortcut?: string
}

function NavItem({ icon, label, active, shortcut }: NavItemProps) {
  const baseClasses = 'flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition-colors'
  const activeClasses = active 
    ? 'bg-[hsl(60,3%,15%)] text-[hsl(42,38%,95%)]' 
    : 'text-[hsl(42,38%,95%)] opacity-70 hover:opacity-100 hover:bg-[hsl(60,3%,15%)]'
  
  return (
    <button className={baseClasses + ' ' + activeClasses}>
      {icon}
      <span className="flex-1 text-left">{label}</span>
      {shortcut && <span className="text-xs text-[hsl(42,38%,95%)] opacity-40">{shortcut}</span>}
    </button>
  )
}
