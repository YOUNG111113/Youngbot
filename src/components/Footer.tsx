import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] py-20 border-t border-[#f8fafc]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h3 className="font-serif text-3xl mb-6">
              Bloom<span className="italic text-[#fbbf24]">Jazz</span>
            </h3>
            <p className="text-[#f8fafc]/50 max-w-sm font-light">
              Empowering creators to build software with the soul of an artist.
              No code required, just pure imagination.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#f8fafc]/40 mb-6">Product</h4>
            <ul className="space-y-4">
              {['Features', 'Pricing', 'Showcase', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#f8fafc]/70 hover:text-[#fbbf24] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#f8fafc]/40 mb-6">Company</h4>
            <ul className="space-y-4">
              {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#f8fafc]/70 hover:text-[#fbbf24] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#f8fafc]/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#f8fafc]/30 text-sm">
            © 2026 Bloom Jazz Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Twitter', 'GitHub', 'Discord'].map((item) => (
              <a key={item} href="#" className="text-[#f8fafc]/30 hover:text-[#fbbf24] text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
