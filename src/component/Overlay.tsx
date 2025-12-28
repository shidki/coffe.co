import React from 'react';
import { Scroll } from '@react-three/drei';
import { motion } from 'framer-motion';

// Definisi Tipe Props
interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  align?: 'left' | 'right'; 
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, align = "left" }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`h-screen w-screen flex flex-col justify-center px-10 md:px-32 
        ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
    >
      <div className="max-w-xl">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-tighter">
          {title}
        </h1>
        <h2 className="text-xl md:text-2xl text-amber-500 font-serif italic mb-6">
          {subtitle}
        </h2>
        <div className="text-gray-300 text-lg md:text-xl leading-relaxed bg-black/40 p-6 rounded-lg backdrop-blur-sm border-l-4 border-amber-500">
          {children}
        </div>
      </div>
    </motion.section>
  );
};

const Overlay: React.FC = () => {
  return (
    <Scroll html style={{ width: '100%' }}>
      
      {/* PAGE 1 */}
      <Section title="WAKE UP." subtitle="The morning brew aimed at perfection.">
        <p className="mb-6">
          Kopi bukan sekadar minuman, ini adalah ritual. Rasakan perpaduan biji kopi pilihan dari dataran tinggi Gayo hingga Ethiopia.
        </p>
        <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors">
          Order Now
        </button>
      </Section>

      {/* PAGE 2 */}
      <Section title="ORIGIN" subtitle="From earth to cup." align="right">
        <p>
          Kami bekerja langsung dengan petani lokal. Memastikan setiap biji dipetik saat kemerahan sempurna (red cherry) untuk rasa yang fruity dan clean.
        </p>
      </Section>

      {/* PAGE 3 */}
      <Section title="TASTE" subtitle="Curated menu.">
        <ul className="space-y-4 font-mono text-amber-200">
          <li className="flex justify-between border-b border-gray-600 pb-2"><span>Black Essence</span> <span>$4</span></li>
          <li className="flex justify-between border-b border-gray-600 pb-2"><span>White Velvet</span> <span>$5</span></li>
          <li className="flex justify-between border-b border-gray-600 pb-2"><span>Golden Drip</span> <span>$7</span></li>
        </ul>
      </Section>

      {/* PAGE 4 */}
      <Section title="JOIN US" subtitle="Visit our sanctuary." align="right">
        <div className="flex flex-col gap-4 bg-white/5 p-6 rounded-xl">
          <input className="bg-transparent border-b border-gray-500 p-2 text-white focus:outline-none focus:border-amber-500" placeholder="Name" />
          <input className="bg-transparent border-b border-gray-500 p-2 text-white focus:outline-none focus:border-amber-500" type="email" placeholder="Email" />
          <button className="bg-amber-600 text-white py-2 mt-2 font-bold hover:bg-amber-700">SUBMIT</button>
        </div>
      </Section>

    </Scroll>
  );
}

export default Overlay;