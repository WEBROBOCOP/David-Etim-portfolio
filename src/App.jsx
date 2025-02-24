import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import TerminalHero from './components/Home/TerminalHero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ContactForm from './components/Contact/ContactForm';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<TerminalHero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 