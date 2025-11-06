import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          <p className="opacity-80">Built with React, Tailwind, Framer Motion & Spline.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
