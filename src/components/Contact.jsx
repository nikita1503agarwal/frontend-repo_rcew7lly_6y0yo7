import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Contact</h2>
            <p className="text-slate-600 mt-2">Have a project in mind? Let’s build something great together.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Subject</label>
                <input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]" required />
              </div>
              <button type="submit" className="inline-flex items-center rounded-full bg-[#2F80ED] px-5 py-2.5 text-white font-medium shadow-sm hover:shadow-md hover:bg-[#256ad1] transition-all">Send Message</button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#2F80ED]" />
                <a href="mailto:hello@kodikas.studio" className="text-slate-700 hover:text-slate-900">hello@kodikas.studio</a>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-600 mb-3">Find me on social</p>
              <div className="flex items-center gap-3">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
