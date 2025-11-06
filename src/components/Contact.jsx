import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-slate-900"
        >
          Let\'s collaborate
        </motion.h2>
        <p className="mt-3 text-slate-600">Have an idea or opportunity? I\'m open for freelance and collaborations.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-800 transition"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
