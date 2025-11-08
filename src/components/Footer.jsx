export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Kodikas Studio. All rights reserved.</p>
        <p className="text-sm text-slate-600">Made by <span className="font-semibold text-[#2F80ED]">Kodikas Studio</span></p>
      </div>
    </footer>
  );
}
