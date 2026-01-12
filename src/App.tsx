import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'

function App() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
