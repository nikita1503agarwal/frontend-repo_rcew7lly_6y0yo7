import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent" />
        </div>

        <div className="space-y-5">
          <p className="inline-flex items-center rounded-full bg-[#EAF2FE] text-[#2F80ED] px-3 py-1 text-xs font-semibold">Available for freelance</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Hi, I’m <span className="text-[#2F80ED]">Kodikas</span>
          </h1>
          <p className="text-slate-600 text-lg">Full-stack developer crafting modern web experiences with a focus on performance, accessibility, and delightful UX.</p>
          <p className="text-slate-500">Job Title: Senior Web Developer</p>

          <div className="flex items-center gap-4 pt-2">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="group">
              <div className="p-2 rounded-full border border-slate-200 bg-white shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                <Github className="h-5 w-5 text-slate-700 group-hover:text-[#2F80ED]" />
              </div>
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group">
              <div className="p-2 rounded-full border border-slate-200 bg-white shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                <Linkedin className="h-5 w-5 text-slate-700 group-hover:text-[#2F80ED]" />
              </div>
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="group">
              <div className="p-2 rounded-full border border-slate-200 bg-white shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                <Instagram className="h-5 w-5 text-slate-700 group-hover:text-[#2F80ED]" />
              </div>
            </a>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <a href="#portfolio" className="inline-flex items-center rounded-full bg-[#2F80ED] px-5 py-2.5 text-white font-medium shadow-sm hover:shadow-md hover:bg-[#256ad1] transition-all">View Work</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-slate-700 font-medium hover:bg-slate-50 transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 -top-40 -z-0 h-72 bg-gradient-to-b from-[#2F80ED]/10 to-transparent blur-2xl" />
    </section>
  );
}
