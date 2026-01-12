import { Plus, Paperclip, Palette, MessageSquare, Mic, ArrowUp } from 'lucide-react'
import { ProjectCards } from './ProjectCards'

export function MainContent() {
  return (
    <main className="flex-1 flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 gradient-bg" />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
          <button className="mb-6 px-4 py-2 rounded-full bg-[rgba(39,39,37,0.8)] border border-[rgba(252,251,248,0.1)] text-sm text-[hsl(42,38%,95%)] flex items-center gap-2 hover:bg-[rgba(39,39,37,0.9)] transition-colors">
            <span>Your</span>
            <span className="text-red-400">2025</span>
            <span>Lovable Vibes are here</span>
            <span className="ml-1">→</span>
          </button>

          <h1 className="text-[30px] font-medium text-[hsl(45,40%,98%)] mb-8">
            Whats on your mind, James?
          </h1>

          <div className="w-full max-w-2xl">
            <div className="bg-[rgb(39,39,37)] rounded-[28px] border border-[rgba(252,251,248,0.16)] p-4">
              <input
                type="text"
                placeholder="Ask Lovable to create a landing page for..."
                className="w-full bg-transparent text-[hsl(45,40%,98%)] placeholder-[hsl(45,10%,50%)] outline-none text-base mb-3"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                    <Plus className="w-5 h-5 text-[hsl(42,38%,95%)] opacity-60" />
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                    <Paperclip className="w-4 h-4 text-[hsl(42,38%,95%)] opacity-60" />
                    <span className="text-sm text-[hsl(42,38%,95%)] opacity-80">Attach</span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                    <Palette className="w-4 h-4 text-[hsl(42,38%,95%)] opacity-60" />
                    <span className="text-sm text-[hsl(42,38%,95%)] opacity-80">Theme</span>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                    <MessageSquare className="w-4 h-4 text-[hsl(42,38%,95%)] opacity-60" />
                    <span className="text-sm text-[hsl(42,38%,95%)] opacity-80">Chat</span>
                  </button>
                  <button className="p-2 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                    <Mic className="w-5 h-5 text-[hsl(42,38%,95%)] opacity-60" />
                  </button>
                  <button className="p-2 rounded-full bg-[hsl(60,3%,25%)] hover:bg-[hsl(60,3%,30%)] transition-colors">
                    <ArrowUp className="w-5 h-5 text-[hsl(42,38%,95%)]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectCards />
      </div>
    </main>
  )
}
