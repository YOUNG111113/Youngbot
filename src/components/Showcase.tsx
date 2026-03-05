import { motion } from 'motion/react';
import { Play, Layout, Type, Image, Settings, Layers, MousePointer2 } from 'lucide-react';

export default function Showcase() {
  return (
    <section id="showcase" className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            The <span className="text-[#f43f5e] italic">Studio</span> Interface
          </motion.h2>
          <p className="text-[#f8fafc]/60 max-w-2xl mx-auto text-lg font-light">
            A powerful visual environment where your ideas come to life.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-xl border border-[#f8fafc]/10 bg-[#020617]/80 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {/* Window Controls */}
          <div className="h-12 border-b border-[#f8fafc]/10 flex items-center px-4 gap-2 bg-[#0f172a]/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="ml-4 text-xs text-[#f8fafc]/30 font-mono">bloom-studio-v2.4.0</div>
          </div>

          <div className="flex h-[600px]">
            {/* Sidebar Tools */}
            <div className="w-16 border-r border-[#f8fafc]/10 flex flex-col items-center py-6 gap-6 bg-[#0f172a]/30">
              {[Layout, Type, Image, Layers, Settings].map((Icon, i) => (
                <div key={i} className="p-2 rounded-lg text-[#f8fafc]/40 hover:text-[#f43f5e] hover:bg-[#f43f5e]/10 transition-colors cursor-pointer">
                  <Icon size={20} />
                </div>
              ))}
            </div>

            {/* Main Canvas */}
            <div className="flex-1 bg-grid-white relative flex items-center justify-center bg-[#020617]">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="px-3 py-1 rounded-md bg-[#f43f5e] text-white text-xs font-medium flex items-center gap-2">
                  <Play size={10} fill="currentColor" /> Preview
                </div>
              </div>

              {/* Phone Mockup in Center */}
              <motion.div 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[280px] h-[560px] bg-white rounded-[2.5rem] border-[8px] border-[#1e293b] shadow-2xl overflow-hidden relative"
              >
                {/* App Header */}
                <div className="h-16 bg-[#f43f5e] flex items-end p-4 pb-2">
                  <div className="text-white font-serif text-lg">My App</div>
                </div>
                
                {/* App Body */}
                <div className="p-4 space-y-4 bg-slate-50 h-full">
                  <div className="h-32 rounded-xl bg-white shadow-sm p-4 animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-slate-100 mb-2" />
                    <div className="w-3/4 h-3 bg-slate-100 rounded mb-1" />
                    <div className="w-1/2 h-2 bg-slate-100 rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-24 rounded-xl bg-white shadow-sm" />
                    <div className="h-24 rounded-xl bg-white shadow-sm" />
                  </div>
                  <div className="h-12 rounded-lg bg-[#0f172a] text-white flex items-center justify-center font-medium text-sm">
                    Get Started
                  </div>
                </div>
              </motion.div>

              {/* Cursor Interaction */}
              <motion.div
                animate={{ 
                  x: [-100, 40, 40, -100],
                  y: [-50, 80, 80, -50]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 z-20 pointer-events-none"
              >
                <MousePointer2 className="text-[#fbbf24] fill-[#fbbf24]" size={24} />
                <div className="ml-4 mt-1 px-2 py-0.5 bg-[#fbbf24] text-[#0f172a] text-xs font-bold rounded rounded-tl-none whitespace-nowrap">
                  You
                </div>
              </motion.div>
            </div>

            {/* Properties Panel */}
            <div className="w-64 border-l border-[#f8fafc]/10 bg-[#0f172a]/30 p-4 hidden md:block">
              <div className="text-xs font-medium text-[#f8fafc]/40 uppercase tracking-wider mb-4">Properties</div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-[#f8fafc]/60">Background</div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#f43f5e] ring-2 ring-white/20" />
                    <div className="w-6 h-6 rounded-full bg-[#0f172a] border border-white/10" />
                    <div className="w-6 h-6 rounded-full bg-white border border-white/10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-[#f8fafc]/60">Border Radius</div>
                  <div className="h-1 w-full bg-[#f8fafc]/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-[#fbbf24]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-[#f8fafc]/60">Padding</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 bg-[#f8fafc]/5 rounded border border-[#f8fafc]/10" />
                    <div className="h-8 bg-[#f8fafc]/5 rounded border border-[#f8fafc]/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
