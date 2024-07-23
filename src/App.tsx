import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import OverlayLoader from './components/OverlayLoader/OverlayLoader'

function App() {

  return (
    <>
      <div className="relative z-0 w-full mx-auto ">
        <div className="z-50 h-screen">
          <OverlayLoader />
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App
