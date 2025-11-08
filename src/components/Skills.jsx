import { Trophy } from 'lucide-react';

const skills = [
  { name: 'Laravel', level: 85 },
  { name: 'PHP', level: 90 },
  { name: 'MySQL', level: 80 },
  { name: 'TailwindCSS', level: 88 },
  { name: 'Next.js', level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Skills</h2>
            <p className="text-slate-600 mt-2">I teach and mentor developers on modern web stacks, focusing on clean architecture, testing, and performance-minded UI engineering.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((s) => (
                <div key={s.name} className="rounded-xl border border-slate-200 p-4 shadow-sm bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-800">{s.name}</span>
                    <span className="text-sm text-slate-500">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-gradient-to-r from-[#2F80ED] to-[#F2994A]" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm w-full max-w-sm">
            <Trophy className="h-10 w-10 text-[#F2994A]" />
            <p className="mt-3 text-center text-slate-600">Passionate about sharing knowledge through workshops and code reviews to help teams ship quality software faster.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
