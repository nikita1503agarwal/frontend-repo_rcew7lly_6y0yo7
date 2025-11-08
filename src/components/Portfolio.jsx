import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Analytics Dashboard',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFseXRpY3MlMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MjU4NjA4N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    stack: ['React', 'Tailwind', 'FastAPI'],
    description: 'Real-time metrics and insights with a blazing-fast API.',
    demo: '#',
    code: '#',
  },
  {
    title: 'E-commerce UI',
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1200&auto=format&fit=crop',
    stack: ['Next.js', 'Stripe', 'MongoDB'],
    description: 'Minimal storefront with secure checkout flow.',
    demo: '#',
    code: '#',
  },
  {
    title: 'Portfolio Starter',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    stack: ['Vite', 'Framer Motion'],
    description: 'Animated sections and responsive grid system.',
    demo: '#',
    code: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Portfolio</h2>
            <p className="text-slate-600 mt-1">Selected projects showcasing design systems, dashboards, and apps.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="relative overflow-hidden">
                <img src={p.image} alt={p.title} className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">{s}</span>
                  ))}
                </div>
                <div className="pt-2 flex items-center gap-3">
                  <a href={p.demo} className="inline-flex items-center gap-1.5 text-[#2F80ED] hover:text-[#256ad1] font-medium">
                    <ExternalLink className="h-4 w-4" /> View Demo
                  </a>
                  <a href={p.code} className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900">
                    <Github className="h-4 w-4" /> View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
