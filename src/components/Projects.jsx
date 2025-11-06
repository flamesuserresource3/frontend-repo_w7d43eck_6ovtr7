import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: '3D Product Showcase',
    desc: 'Interactive 3D product configurator built with React, Spline and Three.js.',
    tags: ['React', 'Spline', 'Three.js'],
    link: '#',
    github: '#',
  },
  {
    title: 'Realtime Chat',
    desc: 'Full-stack chat experience with websockets, authentication and animations.',
    tags: ['Node', 'Socket.io', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    title: 'Portfolio Generator',
    desc: 'CLI to scaffold animated portfolio sites with best practices baked in.',
    tags: ['CLI', 'JavaScript', 'DX'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected Projects</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">A mix of personal experiments and client work focused on performance, polish and fun interactions.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <div className="flex items-center gap-2">
                  <a href={p.github} aria-label="GitHub" className="text-slate-500 hover:text-slate-900 transition"><Github size={18} /></a>
                  <a href={p.link} aria-label="External" className="text-slate-500 hover:text-slate-900 transition"><ExternalLink size={18} /></a>
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full bg-slate-50 text-slate-700 ring-1 ring-slate-200 px-2.5 py-1 text-xs">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
