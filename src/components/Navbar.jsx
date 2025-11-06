import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold text-slate-900 text-lg tracking-tight">
          <span className="mr-1">⚡</span> DevPortfolio
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition"
          >
            Hire Me
          </a>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map(l => (
              <NavLink key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
