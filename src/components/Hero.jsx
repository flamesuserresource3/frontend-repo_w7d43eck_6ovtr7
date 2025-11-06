import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
            Available for freelance • React, Node, 3D
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Building modern, animated web experiences
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            I craft interactive products with React, Node and delightful motion. Let\'s create something users love.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white/80 backdrop-blur px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-white">Contact</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
