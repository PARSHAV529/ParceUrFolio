import './App.css';
import { AppSidebar } from './components/Navigation';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import DataPreview from './pages/DataPreview';
import GettingStarted from './pages/GettingStarted';
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import SelectTemplate from './pages/SelectTemplate';
import PortfolioPreview from './pages/PortfolioPreview'; // Import PortfolioPreview page
import TemplatePage from './pages/TemplatePage';
import ThemeSelectionPage from './pages/ThemeSelectionPage';
import Download from './pages/Download';
import Hero from './pages/Hero';
import GenerateResume from './pages/GenerateResume';
import Host from './pages/Host';
import Host_Template from './pages/Host_Template';

function App() {
  const location = useLocation(); // Get current location

  // Check if the current path matches '/host/:githubUsername'
  const isHostPage = location.pathname.startsWith('/host/');

  return (
    <div className=''>
      {/* Ensure Router wraps the entire app */}
      <div className="flex h-screen">
        {/* Conditionally render Sidebar */}
        {!isHostPage && (
          <div className="">
            <SidebarProvider>
              <AppSidebar />
              <main>
                <SidebarTrigger />
              </main>
            </SidebarProvider>
          </div>
        )}

        {/* Main Content */}
        <div className={`flex-1 p-6 items-center justify-center ${isHostPage ? 'w-full' : ''}`}>
          <Routes>
            <Route path="/GettingStarted" element={<GettingStarted />} />
            <Route path="/" element={<Hero />} />
            <Route path="/data-preview" element={<DataPreview />} />
            <Route path="/select-template" element={<SelectTemplate />} />
            <Route path="/template/:templateName" element={<TemplatePage />} />
            <Route path="/themes" element={<ThemeSelectionPage />} />
            {/* <Route path="/download" element={<Download />} /> */}
            <Route path="/resume" element={<GenerateResume />} />
            <Route path="/host" element={<Host />} />
            <Route path="/host/:githubUsername" element={<Host_Template />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
