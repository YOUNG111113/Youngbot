import { motion } from 'motion/react';
import { Music, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-[#f8fafc]/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-[#fbbf24] flex items-center justify-center text-[#020617]">
            <Music size={16} />
          </div>
          <span className="font-serif text-xl font-medium tracking-wide text-[#f8fafc]">
            Bloom<span className="italic text-[#fbbf24]">Jazz</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Showcase', 'Pricing', 'About'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm uppercase tracking-widest text-[#f8fafc]/70 hover:text-[#fbbf24] transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#f43f5e] text-white rounded-full text-sm font-medium hover:bg-[#fbbf24] hover:text-[#020617] transition-colors"
          >
            Start Composing
          </motion.button>
        </div>

        <button 
          className="md:hidden text-[#f8fafc]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[#020617] border-b border-[#f8fafc]/10 px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            {['Features', 'Showcase', 'Pricing', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-serif text-[#f8fafc]/80 hover:text-[#fbbf24]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full py-3 bg-[#f43f5e] text-white rounded-lg font-medium mt-4">
              Start Composing
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
