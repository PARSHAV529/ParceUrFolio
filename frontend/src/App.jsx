import './App.css';
import { AppSidebar } from './components/Navigation';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import DataPreview from './pages/DataPreview';
import GettingStarted from './pages/GettingStarted';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectTemplate from './pages/SelectTemplate';
import PortfolioPreview from './pages/PortfolioPreview'; // Import PortfolioPreview page
import TemplatePage from './pages/TemplatePage';

function App() {
  return (
    <>
      <Router>
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-64">
            <SidebarProvider>
              <AppSidebar />
              <main>
                <SidebarTrigger />
              </main>
            </SidebarProvider>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<GettingStarted />} />
              <Route path="/data-preview" element={<DataPreview />} />
              <Route path="/select-template" element={<SelectTemplate />} />
              <Route path="/template/:templateName" element={<TemplatePage />} />
              {/* <Route path="/preview/:templateName" element={<PortfolioPreview />} /> */}
              {/* Add more routes for themes, download, etc. */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
