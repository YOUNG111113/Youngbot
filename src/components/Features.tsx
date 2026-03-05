import { motion } from 'motion/react';
import { Palette, Zap, Globe, Smartphone, Code, Share2 } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: "Artistic Control",
    description: "Design with the freedom of a painter. Every pixel is yours to command."
  },
  {
    icon: Zap,
    title: "Instant Preview",
    description: "See your changes bloom in real-time on your actual device."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy to a global edge network with a single click."
  },
  {
    icon: Smartphone,
    title: "Native Performance",
    description: "Compile to true native code for iOS and Android. No webviews."
  },
  {
    icon: Code,
    title: "No-Code Logic",
    description: "Build complex logic visually. Like composing jazz, but for logic."
  },
  {
    icon: Share2,
    title: "Seamless Sharing",
    description: "Share your creations with a link. Let the world experience your art."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            The Rhythm of <span className="italic text-[#f43f5e]">Creation</span>
          </motion.h2>
          <p className="text-[#f8fafc]/60 max-w-2xl mx-auto text-lg font-light">
            Tools that feel like instruments. Designed for the virtuoso in everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-[#f8fafc]/5 border border-[#f8fafc]/5 hover:bg-[#f8fafc]/10 hover:border-[#f43f5e]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f43f5e]/20 flex items-center justify-center text-[#f43f5e] mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-[#f8fafc]">{feature.title}</h3>
              <p className="text-[#f8fafc]/50 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
