import { Star, MoreHorizontal, ArrowRight } from 'lucide-react'

const projects = [
  { name: 'Perfect Pixel Copy', viewedAgo: '2 days ago', published: true },
  { name: '3JS Bloom', viewedAgo: '2 days ago', published: false },
  { name: 'Somaliaudit Interactive Map', viewedAgo: '9 days ago', published: false },
  { name: 'trenches-solana-frontline', viewedAgo: '21 days ago', published: false },
]

const tabs = ['Recently viewed', 'My projects', 'Shared with me', 'Templates']

export function ProjectCards() {
  return (
    <div className="bg-[hsl(0,0%,8%)] border-t border-[hsl(60,3%,15%)] px-6 py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={
                i === 0 
                  ? 'px-4 py-2 rounded-lg text-sm bg-[hsl(60,3%,15%)] text-[hsl(42,38%,95%)]' 
                  : 'px-4 py-2 rounded-lg text-sm text-[hsl(42,38%,95%)] opacity-60 hover:opacity-100 hover:bg-[hsl(60,3%,12%)]'
              }
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-1 text-sm text-[hsl(42,38%,95%)] opacity-70 hover:opacity-100 transition-opacity">
          Browse all
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2">
        {projects.map((project) => (
          <div key={project.name} className="flex-shrink-0 w-[240px] group">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[hsl(60,3%,12%)] mb-3">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
              {project.published && (
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-400">
                  Published
                </div>
              )}
              <button className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <Star className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                J
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-[hsl(42,38%,95%)] truncate">{project.name}</div>
                <div className="text-xs text-[hsl(42,38%,95%)] opacity-50">Viewed {project.viewedAgo}</div>
              </div>
              <button className="p-1 rounded hover:bg-[hsl(60,3%,15%)] opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4 text-[hsl(42,38%,95%)] opacity-60" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
