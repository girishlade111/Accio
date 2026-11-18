import { Shield, Sparkles, Terminal, FileText, CheckCircle, Lock, Fingerprint, Scan, Folder, Calendar, Cpu, Compass } from 'lucide-react';

interface ProjectCardVisualProps {
  theme: string;
  title: string;
  category: string;
}

export function ProjectCardVisual({ theme, title, category }: ProjectCardVisualProps) {
  switch (theme) {
    case 'purple-shield':
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#6b21a8] via-[#7e22ce] to-[#4c1d95] rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-white/25 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#7e22ce] shadow-md">
              <Shield size={26} strokeWidth={2.5} />
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-xs font-semibold text-white/90 tracking-wider uppercase font-mono">{title}</span>
            <p className="text-[11px] text-white/60 mt-0.5">{category}</p>
          </div>
        </div>
      );

    case 'retro-mac':
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-b from-[#f3e8d7] to-[#e6d5bd] dark:from-[#2a241f] dark:to-[#1a1714] rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group border border-amber-900/10">
          <div className="w-28 h-28 rounded-2xl bg-[#ece1cf] dark:bg-[#38312b] border-2 border-[#d5c3aa] dark:border-[#4d443c] p-2.5 shadow-xl flex flex-col items-center justify-between transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-16 rounded-lg bg-[#f43f5e] flex items-center justify-center shadow-inner">
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">IDE</span>
            </div>
            <div className="w-full flex items-center justify-between px-1">
              <div className="w-4 h-1 rounded bg-black/20 dark:bg-white/20" />
              <div className="w-8 h-1 rounded bg-black/30 dark:bg-white/30" />
            </div>
          </div>
          <span className="mt-3 text-xs font-medium text-amber-950 dark:text-amber-200">{title}</span>
        </div>
      );

    case 'dark-editor':
      return (
        <div className="w-full h-full min-h-[240px] bg-[#111111] rounded-3xl p-5 flex flex-col justify-between border border-white/10 group">
          <div className="flex items-center gap-1.5 pb-3 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-[10px] font-mono text-white/40 ml-2">document.md</span>
          </div>
          <div className="font-mono text-xs text-white/70 space-y-2 py-4">
            <div className="text-emerald-400 font-semibold"># {title}</div>
            <div className="text-white/40 text-[11px] leading-relaxed">
              &gt; Compiling Markdown chapters to PDF
            </div>
            <div className="flex items-center gap-2 text-cyan-400 text-[11px]">
              <span>[✓] KaTeX formulas</span>
              <span>[✓] GFM syntax</span>
            </div>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40">
            <span>Client-side PDF Engine</span>
            <span className="text-emerald-400">READY</span>
          </div>
        </div>
      );

    case 'feature-metrics':
      return (
        <div className="w-full h-full min-h-[220px] bg-white dark:bg-[#161616] rounded-3xl p-5 flex flex-col justify-between border border-black/5 dark:border-white/10 shadow-sm group">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">Local-First</span>
            <h4 className="text-sm font-semibold text-black dark:text-white mt-1 leading-snug">Experience Privacy at Speed</h4>
          </div>
          <div className="my-3 p-3 rounded-xl bg-blue-50/60 dark:bg-white/5 border border-blue-100 dark:border-white/5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-500">Processing Time</span>
              <span className="font-mono font-bold text-neutral-900 dark:text-white">0.12s</span>
            </div>
            <div className="w-full bg-blue-100 dark:bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-blue-600 h-full w-4/5 rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-neutral-400">
            <span>{title}</span>
            <span>100% In-Memory</span>
          </div>
        </div>
      );

    case 'blue-symbols':
      return (
        <div className="w-full h-full min-h-[200px] bg-gradient-to-br from-[#1d4ed8] to-[#1e40af] rounded-3xl p-6 flex flex-col justify-between text-white group shadow-lg">
          <div className="grid grid-cols-4 gap-3 place-items-center opacity-85 group-hover:opacity-100 transition-opacity">
            <Compass size={18} />
            <Scan size={18} />
            <Terminal size={18} />
            <Cpu size={18} />
            <Fingerprint size={18} />
            <Lock size={18} />
            <FileText size={18} />
            <CheckCircle size={18} />
          </div>
          <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wide uppercase font-mono">{title}</span>
            <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">Formulas</span>
          </div>
        </div>
      );

    case 'warm-plans':
      return (
        <div className="w-full h-full min-h-[230px] bg-gradient-to-b from-[#fed7aa]/70 to-[#fdba74]/50 dark:from-[#312318] dark:to-[#1f160e] rounded-3xl p-5 flex flex-col justify-between border border-amber-200 dark:border-amber-900/30 group">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase font-bold text-amber-900 dark:text-amber-300">Resume Builder</span>
            <span className="text-[10px] bg-amber-500/20 text-amber-950 dark:text-amber-200 px-2 py-0.5 rounded-md font-medium">A4 Live</span>
          </div>
          <div className="space-y-1.5 my-2">
            <div className="h-3 w-3/4 rounded bg-amber-900/20 dark:bg-white/15" />
            <div className="h-2 w-full rounded bg-amber-900/10 dark:bg-white/10" />
            <div className="h-2 w-5/6 rounded bg-amber-900/10 dark:bg-white/10" />
          </div>
          <div className="flex items-center justify-between text-xs text-amber-900/80 dark:text-amber-200/70 pt-2 border-t border-amber-900/10 dark:border-white/10">
            <span>{title}</span>
            <span className="font-mono text-[10px]">PDF Export</span>
          </div>
        </div>
      );

    case 'context-menu':
      return (
        <div className="w-full h-full min-h-[220px] bg-[#f5f5f5] dark:bg-[#1a1a1a] rounded-3xl p-5 flex flex-col justify-between border border-black/5 dark:border-white/10 group">
          <div className="bg-white dark:bg-[#222222] rounded-xl p-3 shadow-md border border-black/5 dark:border-white/5 space-y-2 text-xs text-neutral-800 dark:text-neutral-200">
            <div className="flex items-center justify-between hover:text-cyan-500 transition-colors">
              <span>Canvas Compression</span>
              <span className="text-[10px] text-neutral-400 font-mono">WebP</span>
            </div>
            <div className="flex items-center justify-between hover:text-cyan-500 transition-colors">
              <span>Resize & Format</span>
              <span className="text-[10px] text-neutral-400 font-mono">PNG / JPG</span>
            </div>
            <div className="flex items-center justify-between text-cyan-600 dark:text-cyan-400 font-medium">
              <span>EXIF Stripped</span>
              <span>✓</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-neutral-500 mt-2">
            <span>{title}</span>
            <span className="font-mono text-[10px]">PWA Ready</span>
          </div>
        </div>
      );

    case 'game-cottage':
      return (
        <div className="w-full h-full min-h-[230px] bg-gradient-to-br from-[#8b5cf6] via-[#6d28d9] to-[#4c1d95] rounded-3xl p-6 flex flex-col items-center justify-center text-white relative overflow-hidden group shadow-lg">
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
            <Sparkles size={32} className="text-yellow-300 animate-pulse" />
          </div>
          <div className="mt-4 text-center">
            <span className="text-xs font-bold uppercase tracking-wider font-mono">{title}</span>
            <p className="text-[11px] text-white/70 mt-0.5">33 Browser Games Catalog</p>
          </div>
        </div>
      );

    case 'calendar-card':
      return (
        <div className="w-full h-full min-h-[210px] bg-white dark:bg-[#141414] rounded-3xl p-5 flex flex-col justify-between border border-black/5 dark:border-white/10 group">
          <div className="flex items-center justify-between pb-2 border-b border-black/5 dark:border-white/5">
            <div className="flex items-center gap-2">
              <Folder size={14} className="text-indigo-500" />
              <span className="text-xs font-semibold text-neutral-900 dark:text-white">Files & Vaults</span>
            </div>
            <span className="text-[10px] font-mono text-indigo-500 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-md font-medium">Experimental</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 my-3 text-center text-[10px] font-mono text-neutral-400">
            <div className="p-1 rounded bg-black/5 dark:bg-white/5">DOC</div>
            <div className="p-1 rounded bg-black/5 dark:bg-white/5">IMG</div>
            <div className="p-1 rounded bg-black/5 dark:bg-white/5">PDF</div>
            <div className="p-1 rounded bg-indigo-500/20 text-indigo-400 font-bold">ZIP</div>
          </div>
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span>{title}</span>
            <Calendar size={13} />
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0f766e] to-[#134e4a] rounded-3xl p-6 flex flex-col items-center justify-center text-white relative overflow-hidden group">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Sparkles size={28} className="text-teal-300" />
          </div>
          <span className="mt-4 text-xs font-mono uppercase tracking-wider font-semibold">{title}</span>
          <p className="text-[11px] text-white/60 mt-0.5">{category}</p>
        </div>
      );
  }
}
