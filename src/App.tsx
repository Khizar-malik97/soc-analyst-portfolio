import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Reports from './pages/Reports'
import ReportDetail from './pages/ReportDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import DetectionRules from './pages/DetectionRules'
import Playbooks from './pages/Playbooks'
import DetectionLab from './pages/DetectionLab'
import Certifications from './pages/Certifications'
import Connect from './pages/Connect'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/:id" element={<ReportDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detection-rules" element={<DetectionRules />} />
          <Route path="/playbooks" element={<Playbooks />} />
          <Route path="/detection-lab" element={<DetectionLab />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App