import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Me</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I\'m a full‑stack developer focused on crafting immersive, high‑performance web apps. My sweet spot is where clean code meets cinematic motion.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["React & Node", "TypeScript", "Spline/Three.js", "Framer Motion"].map(item => (
              <li key={item} className="flex items-center gap-2 text-slate-700">
                <Sparkles size={16} className="text-slate-900" /> {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition">
              <Rocket size={16} className="mr-2" /> Start a project
            </a>
            <a href="#projects" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50">
              See work
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 p-1">
            <div className="h-full w-full rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] flex items-center justify-center">
              <div className="text-white text-center p-8">
                <p className="text-5xl">👋</p>
                <p className="mt-4 text-lg font-medium opacity-90">Let\'s build something delightful</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
