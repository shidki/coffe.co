import React from 'react';
import { Scroll } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Coffee, Award, Users, MapPin, Clock, Star, TrendingUp, Heart, Sparkles } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: 'home' | 'about' | 'menu' | 'reservation') => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <Scroll html style={{ width: '100%' }}>
      
      {/* HERO SECTION */}
      <section className="min-h-screen w-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative pb-40 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="z-10 mb-20 mt-12 sm:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-4 sm:mb-6"
          >
            <Sparkles className="text-amber-500" size={20} />
            <span className="text-amber-500 uppercase tracking-widest text-xs sm:text-sm font-semibold">Est. 2015 - Award Winning</span>
            <Sparkles className="text-amber-500" size={20} />
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white mb-3 sm:mb-4 tracking-tighter leading-none">
            COFFEE.CO
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl text-amber-500 font-serif italic mb-4 sm:mb-6">
            Where Every Cup Tells a Story
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed px-4">
            Discover the perfect harmony of artisanal craftsmanship and premium single-origin beans. 
            From the highlands of Ethiopia to your cup, we bring you an unparalleled coffee experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('menu')}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-amber-600 text-white font-bold uppercase tracking-widest hover:bg-amber-700 transition-all shadow-2xl rounded-sm text-sm sm:text-base"
            >
              Explore Menu
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('reservation')}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm text-sm sm:text-base"
            >
              Reserve Table
            </motion.button> */}
          </div>
        </motion.div>

        {/* Stats Bar - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 sm:bottom-16 left-4 right-4 sm:left-0 sm:right-0"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-8 md:gap-12 text-center max-w-4xl mx-auto">
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '50+', label: 'Coffee Varieties' },
              { number: '15', label: 'Awards Won' },
            ].map((stat, idx) => (
              <div key={idx} className="backdrop-blur-sm bg-white/5 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg flex-1">
                <div className="text-2xl sm:text-3xl font-black text-amber-500">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-10 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            The Coffee.co Difference
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            We don't just serve coffee. We curate experiences, foster community, and champion sustainability 
            with every single cup we brew.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full">
          {[
            { 
              icon: <Coffee className="text-amber-500" size={48} />, 
              title: 'Single-Origin Excellence', 
              desc: 'Each bean is handpicked from the world\'s most prestigious coffee regions—Ethiopia, Colombia, Brazil, and Indonesia. We work directly with farmers who share our commitment to quality and sustainability.' 
            },
            { 
              icon: <Award className="text-amber-500" size={48} />, 
              title: 'Master Roasting', 
              desc: 'Our award-winning roast masters bring over 30 years of combined experience. Every batch is precision-roasted in small quantities to unlock complex flavor profiles and aromatic depth.' 
            },
            { 
              icon: <Users className="text-amber-500" size={48} />, 
              title: 'Expert Barista Team', 
              desc: 'Certified by the Specialty Coffee Association, our baristas are trained in the art and science of extraction. From pour-over to espresso, every technique is perfected to serve you excellence.' 
            },
            { 
              icon: <Heart className="text-amber-500" size={48} />, 
              title: 'Sustainable Sourcing', 
              desc: 'We believe in ethical coffee. Through direct trade partnerships, we ensure fair wages for farmers while supporting regenerative farming practices that protect our planet.' 
            },
            { 
              icon: <MapPin className="text-amber-500" size={48} />, 
              title: 'Premium Atmosphere', 
              desc: 'Designed by award-winning architects, our space blends industrial chic with warm, natural elements. It\'s more than a café—it\'s your third place, your creative sanctuary.' 
            },
            { 
              icon: <Clock className="text-amber-500" size={48} />, 
              title: 'Always Fresh', 
              desc: 'We roast fresh every morning and brew throughout the day. No coffee sits longer than 4 hours. What you taste is coffee at its absolute peak—vibrant, aromatic, and full of life.' 
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/60 transition-all group"
            >
              <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SIGNATURE DRINKS */}
      <section className="min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-10 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            Signature Collection
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Our most celebrated creations, crafted by master baristas using exclusive blends 
            you won't find anywhere else.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full">
          {[
            { 
              name: 'Midnight Ritual', 
              price: '$8', 
              desc: 'Double-shot espresso pulled from our award-winning Ethiopian Yirgacheffe, known for its wine-like acidity and floral notes. Served over hand-carved ice spheres.',
              badge: 'Bestseller',
              rating: 4.9
            },
            { 
              name: 'Golden Hour Latte', 
              price: '$9', 
              desc: 'Silky microfoam meets our signature Colombian blend, topped with 24K edible gold flakes and a hint of Madagascar vanilla. A luxurious morning indulgence.',
              badge: 'Premium',
              rating: 4.8
            },
            { 
              name: 'Cloud Nine Cappuccino', 
              price: '$7.5', 
              desc: 'Perfectly balanced espresso crowned with cloud-like foam art. Made with Brazilian Santos beans roasted to medium perfection. Rich, smooth, unforgettable.',
              badge: 'Classic',
              rating: 4.9
            },
            { 
              name: 'Velvet Mocha', 
              price: '$9.5', 
              desc: 'Belgian dark chocolate melted into our house espresso, finished with hand-whipped cream and cocoa nibs. Decadence in every sip.',
              badge: 'Indulgent',
              rating: 5.0
            },
            { 
              name: 'Sunrise Cold Brew', 
              price: '$8.5', 
              desc: 'Steeped for 16 hours using our Sumatran blend. Notes of dark chocolate, caramel, and tobacco. Served over ice with a splash of oat milk.',
              badge: 'New',
              rating: 4.7
            },
            { 
              name: 'The Artisan', 
              price: '$12', 
              desc: 'Single-origin pour-over featuring rare micro-lot beans from award-winning farms. Flavor notes curated weekly. Limited to 20 cups per day.',
              badge: 'Exclusive',
              rating: 5.0
            },
          ].map((drink, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-gradient-to-br from-amber-900/40 via-amber-800/20 to-black/60 p-6 sm:p-8 rounded-2xl border-2 border-amber-500/40 hover:border-amber-500 cursor-pointer transition-all relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {drink.badge}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">
                {drink.name}
              </h3>
              
              <div className="flex items-center gap-1 mb-4">
                <Star className="text-amber-500 fill-amber-500" size={16} />
                <span className="text-amber-500 font-bold text-sm">{drink.rating}</span>
                <span className="text-gray-500 text-sm ml-2">(2.5k reviews)</span>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">{drink.desc}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl sm:text-3xl text-white font-black">{drink.price}</span>
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-6 py-2 rounded-sm font-bold uppercase text-xs sm:text-sm transition-colors">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setCurrentPage('menu')}
          className="mt-16 px-8 sm:px-12 py-4 sm:py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all shadow-2xl rounded-sm text-sm sm:text-base"
        >
          View Full Menu
        </motion.button>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-10 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            More Than Coffee
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Join our community events, masterclasses, and exclusive tasting sessions. 
            Coffee education meets social connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl w-full">
          {[
            {
              icon: <TrendingUp className="text-amber-500" size={40} />,
              title: 'Coffee Masterclasses',
              desc: 'Learn from certified baristas every Saturday. From latte art to home brewing techniques, unlock the secrets of perfect coffee.',
              action: 'Join Masterclass'
            },
            {
              icon: <Users className="text-amber-500" size={40} />,
              title: 'Private Events',
              desc: 'Host your meetings, celebrations, or creative sessions in our private lounge. Full catering and barista service included.',
              action: 'Book Event'
            },
            {
              icon: <Coffee className="text-amber-500" size={40} />,
              title: 'Coffee Subscription',
              desc: 'Get our freshly roasted beans delivered to your door monthly. Choose from 20+ single-origin and signature blends.',
              action: 'Subscribe Now'
            },
            {
              icon: <Star className="text-amber-500" size={40} />,
              title: 'Loyalty Rewards',
              desc: 'Earn points with every purchase. Unlock free drinks, exclusive merchandise, and early access to limited editions.',
              action: 'Join Program'
            },
          ].map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 backdrop-blur-lg p-8 sm:p-10 rounded-2xl border border-amber-500/30 hover:bg-white/10 transition-all"
            >
              <div className="mb-6">{exp.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{exp.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">{exp.desc}</p>
              <button className="text-amber-500 font-bold uppercase tracking-wider hover:text-amber-400 transition-colors flex items-center gap-2 text-sm sm:text-base">
                {exp.action}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="h-screen w-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="z-10"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block mb-6"
          >
            <Coffee className="text-amber-500" size={60} />
          </motion.div>
          
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-tight">
            Your Table<br />Awaits
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed px-4">
            Step into a world where coffee is an art form and every visit becomes a cherished memory.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-10 px-4">
            📍 123 Coffee District, Downtown Jakarta  •  🕒 Open Daily 7AM - 10PM
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(217, 119, 6, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('reservation')}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-amber-600 text-white font-black uppercase tracking-widest hover:bg-amber-700 transition-all shadow-2xl rounded-sm text-sm sm:text-base"
            >
              Reserve Your Spot
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('about')}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-transparent border-2 border-amber-600 text-amber-600 font-black uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all rounded-sm text-sm sm:text-base"
            >
              Our Story
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-20 left-10"
          >
            <Coffee className="text-amber-500" size={40} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            className="absolute bottom-32 right-16"
          >
            <Star className="text-amber-500" size={40} />
          </motion.div>
        </div>
      </section>

    </Scroll>
  );
}

export default HomePage;