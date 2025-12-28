import React, { useState } from 'react';
import { Scroll } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Droplets, Flame, Sparkles, Clock, ThermometerSun, Award, Star, Milk, Bean } from 'lucide-react';

interface MenuPageProps {
  setTotalPages?: (pages: number) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ setTotalPages }) => {
  const [selectedCategory, setSelectedCategory] = useState('espresso');
  
  // Set total pages untuk menu page (6 sections)
  React.useEffect(() => {
    if (setTotalPages) {
      setTotalPages(6);
    }
  }, [setTotalPages]);

  const menuData = {
    espresso: {
      icon: <Flame size={32} />,
      tagline: "Pure, Bold, Uncompromising",
      description: "Our espresso-based drinks are crafted from single-origin beans roasted to perfection. Each shot is pulled with precision using our La Marzocco Linea PB, ensuring rich crema and balanced flavor notes in every cup.",
      items: [
        { 
          name: 'Single Espresso', 
          price: '$3', 
          desc: 'A pure, concentrated shot showcasing our signature blend. Notes of dark chocolate and caramel.',
          roast: 'Medium',
          intensity: 5,
          time: '25-30s'
        },
        { 
          name: 'Double Espresso', 
          price: '$5', 
          desc: 'Double the intensity with 18g of finely ground beans. Bold, full-bodied experience.',
          roast: 'Medium-Dark',
          intensity: 5,
          time: '25-30s'
        },
        { 
          name: 'Americano', 
          price: '$4', 
          desc: 'Espresso lengthened with hot water. Smooth, aromatic, with a lighter body than espresso.',
          roast: 'Medium',
          intensity: 4,
          time: '2-3 min'
        },
        { 
          name: 'Macchiato', 
          price: '$4.5', 
          desc: 'Espresso "stained" with a dollop of velvety microfoam. Strong yet balanced.',
          roast: 'Medium',
          intensity: 5,
          time: '30s'
        },
      ]
    },
    lattes: {
      icon: <Milk size={32} />,
      tagline: "Creamy, Smooth, Indulgent",
      description: "Our lattes combine expertly pulled espresso with velvety steamed milk, creating a harmonious balance of bold coffee flavor and creamy sweetness. We use locally sourced whole milk, steamed to the perfect microfoam consistency.",
      items: [
        { 
          name: 'Classic Latte', 
          price: '$6', 
          desc: 'The perfect marriage of rich espresso and silky steamed milk. Finished with delicate latte art.',
          roast: 'Medium',
          intensity: 3,
          time: '3-4 min'
        },
        { 
          name: 'Vanilla Latte', 
          price: '$6.5', 
          desc: 'House-made Madagascar vanilla syrup adds natural sweetness without overpowering the coffee.',
          roast: 'Medium',
          intensity: 3,
          time: '3-4 min'
        },
        { 
          name: 'Caramel Latte', 
          price: '$6.5', 
          desc: 'Rich caramel sauce made in-house daily. Topped with a delicate caramel drizzle.',
          roast: 'Medium',
          intensity: 3,
          time: '3-4 min'
        },
        { 
          name: 'Mocha Latte', 
          price: '$7', 
          desc: 'Belgian dark chocolate meets premium espresso. A sophisticated blend of bitter and sweet.',
          roast: 'Medium-Dark',
          intensity: 4,
          time: '3-4 min'
        },
      ]
    },
    specialty: {
      icon: <Sparkles size={32} />,
      tagline: "Artisan Crafted, Uniquely Ours",
      description: "Our specialty menu showcases unique brewing methods and creative combinations. Each drink is a testament to our baristas' expertise and our commitment to pushing the boundaries of coffee craft.",
      items: [
        { 
          name: 'Flat White', 
          price: '$6', 
          desc: 'An Australian classic. Ristretto shots with perfectly textured microfoam creating a velvet mouthfeel.',
          roast: 'Medium',
          intensity: 4,
          time: '3 min'
        },
        { 
          name: 'Cortado', 
          price: '$5', 
          desc: 'Spanish precision: equal parts espresso and steamed milk. Balanced, smooth, no foam.',
          roast: 'Medium',
          intensity: 4,
          time: '2 min'
        },
        { 
          name: 'Affogato', 
          price: '$8', 
          desc: 'Italian dessert meets coffee. Double espresso poured over artisan vanilla gelato. Decadent.',
          roast: 'Dark',
          intensity: 5,
          time: '1 min'
        },
        { 
          name: 'Cold Brew', 
          price: '$5.5', 
          desc: '20-hour cold extraction. Naturally sweet, low acidity. Served over ice with a hint of citrus.',
          roast: 'Light-Medium',
          intensity: 3,
          time: '20 hrs brew'
        },
      ]
    },
    seasonal: {
      icon: <Star size={32} />,
      tagline: "Limited Time, Maximum Flavor",
      description: "Our seasonal menu celebrates the best of each harvest and the flavors of the moment. These limited-edition drinks are carefully crafted to highlight unique single-origin beans and seasonal ingredients.",
      items: [
        { 
          name: 'Honey Lavender Latte', 
          price: '$7.5', 
          desc: 'Organic lavender-infused honey meets our house espresso. Floral, sweet, and surprisingly balanced.',
          roast: 'Light',
          intensity: 3,
          time: '4 min'
        },
        { 
          name: 'Spiced Cardamom Coffee', 
          price: '$6.5', 
          desc: 'Middle Eastern inspired. Freshly ground cardamom pods infused with rich espresso and steamed milk.',
          roast: 'Medium-Dark',
          intensity: 4,
          time: '4 min'
        },
        { 
          name: 'Ethiopian Yirgacheffe Pour Over', 
          price: '$8', 
          desc: 'Single-origin masterpiece. Bright acidity, floral notes, and hints of blueberry. Brewed to order.',
          roast: 'Light',
          intensity: 2,
          time: '4-5 min'
        },
        { 
          name: 'Nitro Cold Brew', 
          price: '$7', 
          desc: 'Cold brew infused with nitrogen. Creamy cascade, smooth texture, and natural sweetness without dairy.',
          roast: 'Medium',
          intensity: 4,
          time: '20 hrs + N2'
        },
      ]
    }
  };

  const categories = [
    { key: 'espresso', label: 'Espresso Bar' },
    { key: 'lattes', label: 'Lattes & Milk' },
    { key: 'specialty', label: 'Specialty' },
    { key: 'seasonal', label: 'Seasonal' }
  ];

  const currentMenu = menuData[selectedCategory as keyof typeof menuData];

  return (
    <Scroll html style={{ width: '100%' }}>
      
      {/* HERO SECTION */}
      <section className="min-h-screen w-screen flex flex-col justify-center items-center px-10 text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Coffee className="text-amber-500" size={32} />
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">Handcrafted Daily</span>
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            OUR MENU
          </h1>
          
          <p className="text-2xl md:text-3xl text-amber-500 font-serif italic mb-12">
            Every cup tells a story, crafted with passion and precision
          </p>

          <div className="text-left space-y-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              At Coffee.co, we believe great coffee starts long before it reaches your cup. Each drink on our 
              menu is the culmination of <span className="text-amber-500 font-semibold">direct farmer partnerships</span>, 
              expertly selected green beans, <span className="text-amber-500 font-semibold">small-batch roasting</span>, 
              and the skilled hands of our SCA-certified baristas.
            </p>
            <p>
              We source our beans from <span className="text-amber-500 font-bold">25+ partner farms</span> across 
              Ethiopia, Colombia, Brazil, and Indonesia. Every origin is chosen for its unique flavor profile, 
              sustainable farming practices, and the passionate farmers behind them.
            </p>
          </div>

          {/* Quality Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Bean size={24} />, text: 'Single Origin' },
              { icon: <Award size={24} />, text: 'SCA Certified' },
              { icon: <Flame size={24} />, text: 'Fresh Roasted' },
              { icon: <Droplets size={24} />, text: 'Expert Brewed' },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className="bg-gradient-to-br from-amber-900/40 to-black/60 p-4 rounded-xl border border-amber-500/30 flex flex-col items-center gap-2"
              >
                <div className="text-amber-500">{badge.icon}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{badge.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* MENU CATEGORIES */}
      <section className="min-h-screen w-screen flex flex-col justify-center items-center px-10 py-24">
        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-4 mb-16 justify-center"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-8 py-4 font-bold uppercase tracking-widest transition-all rounded-sm border-2 ${
                selectedCategory === cat.key
                  ? 'bg-amber-600 text-white border-amber-600 shadow-lg shadow-amber-600/50'
                  : 'bg-transparent text-gray-300 border-amber-500/30 hover:border-amber-500 hover:bg-white/5'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Category Header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`header-${selectedCategory}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-center mb-12 max-w-4xl"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="text-amber-500">{currentMenu.icon}</div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                {categories.find(c => c.key === selectedCategory)?.label}
              </h2>
            </div>
            <p className="text-2xl text-amber-500 font-serif italic mb-6">{currentMenu.tagline}</p>
            <p className="text-gray-400 text-lg leading-relaxed">{currentMenu.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`items-${selectedCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full"
          >
            {currentMenu.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(217, 119, 6, 0.2)' }}
                className="bg-gradient-to-br from-amber-900/20 via-black/60 to-black/80 p-8 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-all backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-black text-white">{item.name}</h3>
                  <span className="text-3xl text-amber-400 font-mono font-bold">{item.price}</span>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{item.desc}</p>

                {/* Drink Details */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-amber-500/20">
                  <div className="flex flex-col items-center">
                    <Flame className="text-amber-500 mb-1" size={20} />
                    <span className="text-xs text-gray-500 uppercase mb-1">Roast</span>
                    <span className="text-sm text-gray-300 font-semibold">{item.roast}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ThermometerSun className="text-amber-500 mb-1" size={20} />
                    <span className="text-xs text-gray-500 uppercase mb-1">Intensity</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < item.intensity ? 'bg-amber-500' : 'bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="text-amber-500 mb-1" size={20} />
                    <span className="text-xs text-gray-500 uppercase mb-1">Prep Time</span>
                    <span className="text-sm text-gray-300 font-semibold">{item.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CUSTOMIZATION INFO */}
      <section className="min-h-screen w-screen flex flex-col justify-center items-center px-10 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            Make It Yours
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Customize every drink to your taste. Our baristas are here to help you craft the perfect cup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mb-16">
          {[
            {
              title: 'Milk Options',
              icon: <Milk size={40} />,
              options: ['Whole Milk', 'Oat Milk (+$0.50)', 'Almond Milk (+$0.50)', 'Soy Milk (+$0.50)', 'Coconut Milk (+$0.50)']
            },
            {
              title: 'Coffee Strength',
              icon: <Flame size={40} />,
              options: ['Regular Shot', 'Extra Shot (+$1)', 'Ristretto Shot', 'Lungo Shot', 'Decaf Available']
            },
            {
              title: 'Temperature',
              icon: <ThermometerSun size={40} />,
              options: ['Hot (150-160°F)', 'Extra Hot (170°F)', 'Iced', 'Room Temp']
            },
            {
              title: 'Sweetness',
              icon: <Sparkles size={40} />,
              options: ['No Sugar', 'Light Sweet', 'Regular', 'Extra Sweet', 'Sugar-Free Options']
            },
          ].map((custom, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-b from-amber-900/20 to-black/60 p-8 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-all"
            >
              <div className="text-amber-500 mb-4">{custom.icon}</div>
              <h3 className="text-2xl font-black text-white mb-4">{custom.title}</h3>
              <ul className="space-y-2">
                {custom.options.map((option, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-amber-900/30 to-black/60 p-8 rounded-2xl border border-amber-500/30 max-w-4xl"
        >
          <div className="flex items-start gap-4">
            <Award className="text-amber-500 flex-shrink-0" size={48} />
            <div>
              <h3 className="text-2xl font-black text-white mb-3">Allergen Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                All our drinks can be customized to accommodate dietary restrictions and allergies. 
                We offer dairy-free, nut-free, and sugar-free options. Please inform our baristas 
                of any allergies or dietary requirements.
              </p>
              <p className="text-sm text-gray-500 italic">
                * Cross-contamination may occur. Please speak with our staff if you have severe allergies.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ORDER CTA */}
      <section className="min-h-screen w-screen flex flex-col justify-center items-center px-10 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            Ready to Order?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Visit us in-store, order online, or through our mobile app for pickup.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Visit Us', desc: 'Walk-in and order at the counter', highlight: '3 Locations' },
              { title: 'Order Online', desc: 'Pick up at your preferred time', highlight: 'Skip the Line' },
              { title: 'Mobile App', desc: 'Order ahead and earn rewards', highlight: 'Get 10% Off' },
            ].map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-amber-500/30 hover:border-amber-500 transition-all"
              >
                <div className="inline-block px-4 py-1 bg-amber-600 text-white text-xs font-bold uppercase rounded-full mb-4">
                  {method.highlight}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-white text-bold">{method.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-amber-600 text-white font-black uppercase tracking-widest hover:bg-amber-700 transition-all shadow-2xl rounded-sm"
            >
              Order Online Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-transparent text-white font-black uppercase tracking-widest border-2 border-amber-500 hover:bg-amber-500 hover:text-black transition-all rounded-sm"
            >
              View Locations
            </motion.button>
          </div>

          <p className="text-white text-bold text-sm mt-8">
            * Prices may vary by location. Seasonal items available for limited time only.
          </p>
        </motion.div>
      </section>

    </Scroll>
  );
}

export default MenuPage;