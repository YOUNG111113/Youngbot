import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Smartphone, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#020617]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f43f5e] rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#fbbf24] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#fbbf24]/30 bg-[#fbbf24]/10 text-[#fbbf24] text-xs uppercase tracking-widest mb-6">
              <Sparkles size={12} />
              Now in Public Beta
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] text-[#f8fafc]">
              Compose your <br />
              <span className="italic text-[#f43f5e]">masterpiece.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#f8fafc]/60 max-w-md font-light leading-relaxed"
          >
            Go from idea to native mobile app without writing a single line of code. 
            Let your creativity bloom with the rhythm of jazz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group px-8 py-4 bg-[#f43f5e] text-white rounded-full font-medium hover:bg-[#fbbf24] hover:text-[#020617] transition-all flex items-center gap-2">
              Start Building Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-[#f8fafc]/20 text-[#f8fafc] rounded-full font-medium hover:bg-[#f8fafc]/5 transition-colors">
              Watch the Film
            </button>
          </motion.div>
        </div>

        {/* Visual/Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[320px] h-[640px] mx-auto bg-[#020617] border-[8px] border-[#1e293b] rounded-[3rem] shadow-2xl overflow-hidden">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-[#020617] flex flex-col">
              {/* Header */}
              <div className="h-14 px-6 flex items-center justify-between border-b border-[#f8fafc]/10">
                <div className="w-8 h-8 rounded-full bg-[#f43f5e]/20" />
                <div className="w-20 h-2 rounded-full bg-[#f8fafc]/10" />
              </div>
              
              {/* Content Area */}
              <div className="flex-1 p-6 space-y-4">
                <div className="h-40 rounded-2xl bg-gradient-to-br from-[#f43f5e] to-[#020617] border border-[#f8fafc]/10 p-4 flex items-end">
                  <div className="w-1/2 h-4 rounded-full bg-[#f8fafc]/20" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-2xl bg-[#f8fafc]/5 border border-[#f8fafc]/5" />
                  <div className="h-32 rounded-2xl bg-[#f8fafc]/5 border border-[#f8fafc]/5" />
                </div>

                <div className="h-20 rounded-2xl bg-[#fbbf24]/10 border border-[#fbbf24]/20 flex items-center justify-center">
                  <span className="font-serif italic text-[#fbbf24]">Improvise</span>
                </div>
              </div>

              {/* Tab Bar */}
              <div className="h-16 border-t border-[#f8fafc]/10 flex items-center justify-around px-6">
                <Smartphone size={20} className="text-[#f43f5e]" />
                <Layers size={20} className="text-[#f8fafc]/30" />
                <div className="w-8 h-8 rounded-full bg-[#f8fafc]/10" />
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -right-12 p-4 bg-[#020617] border border-[#f8fafc]/10 rounded-xl shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f43f5e] flex items-center justify-center text-white">
                <Sparkles size={18} />
              </div>
              <div>
                <div className="text-xs text-[#f8fafc]/50 uppercase tracking-wider">Status</div>
                <div className="text-sm font-medium text-[#f8fafc]">Published</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
