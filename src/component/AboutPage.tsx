import React from 'react';
import { Scroll } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Coffee, Globe, Users, Award, Heart, Leaf, Target, TrendingUp, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Scroll html style={{ width: '100%' }}>
      
      {/* HERO STORY SECTION */}
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
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">Our Journey Since 2015</span>
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            OUR STORY
          </h1>
          
          <p className="text-2xl md:text-3xl text-amber-500 font-serif italic mb-12">
            From humble beginnings to award-winning excellence
          </p>

          <div className="text-left space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              In 2015, Coffee.co was born from a simple dream: to bring the world's finest coffee experiences 
              to our community. What started as a small 200-square-foot roastery in downtown Jakarta has grown 
              into a beloved destination for coffee connoisseurs and casual drinkers alike.
            </p>
            <p>
              Our founders, <span className="text-amber-500 font-semibold">Michael Chen</span> and{' '}
              <span className="text-amber-500 font-semibold">Sarah Anderson</span>, spent years traveling 
              through coffee farms in Ethiopia, Colombia, and Indonesia—building relationships with farmers, 
              learning traditional roasting methods, and discovering what truly makes exceptional coffee.
            </p>
            <p>
              Today, we're proud to serve over <span className="text-amber-500 font-bold">10,000 customers monthly</span>, 
              operate three locations across the city, and maintain direct partnerships with{' '}
              <span className="text-amber-500 font-bold">25+ coffee farms worldwide</span>. But our mission 
              remains unchanged: craft coffee that tells a story with every sip.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { year: '2015', event: 'Founded' },
              { year: '2017', event: 'First Award' },
              { year: '2020', event: '3 Locations' },
              { year: '2024', event: '10K+ Customers' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className="bg-gradient-to-br from-amber-900/40 to-black/60 p-6 rounded-xl border border-amber-500/30"
              >
                <div className="text-4xl font-black text-amber-500 mb-2">{item.year}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="min-h-screen w-screen flex flex-col justify-center items-center px-10 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            What Drives Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our core beliefs shape every decision we make, from sourcing beans to serving customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-amber-900/30 via-amber-800/20 to-black/60 p-12 rounded-2xl border-2 border-amber-500/40 hover:border-amber-500 transition-all"
          >
            <Target className="text-amber-500 mb-6" size={56} />
            <h3 className="text-4xl font-black text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To create a community where coffee is more than a drink—it's an experience, 
              a moment of peace, and a connection to the world. We believe in:
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span>Elevating coffee culture through education and excellence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span>Building lasting relationships with farmers and customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span>Creating spaces where ideas flourish and connections deepen</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-amber-900/30 via-amber-800/20 to-black/60 p-12 rounded-2xl border-2 border-amber-500/40 hover:border-amber-500 transition-all"
          >
            <TrendingUp className="text-amber-500 mb-6" size={56} />
            <h3 className="text-4xl font-black text-white mb-6">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To become the leading specialty coffee brand in Southeast Asia, recognized for:
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span>Uncompromising quality and ethical sourcing practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span>Innovation in coffee preparation and customer experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span>Environmental stewardship and social responsibility</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
          {[
            { icon: <Leaf size={40} />, title: 'Sustainability', desc: 'Eco-friendly practices in every step' },
            { icon: <Users size={40} />, title: 'Community', desc: 'Building connections that matter' },
            { icon: <Award size={40} />, title: 'Excellence', desc: 'Never settling for good enough' },
            { icon: <Heart size={40} />, title: 'Passion', desc: 'Love for craft in every cup' },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-amber-500/20 hover:border-amber-500/60 transition-all text-center"
            >
              <div className="text-amber-500 mb-4 flex justify-center">{value.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
              <p className="text-sm text-gray-400">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="min-h-screen w-screen flex flex-col justify-center items-center px-10 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            Meet The Masters
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our passionate team of coffee experts, each bringing decades of experience 
            and an unwavering commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-16">
          {[
            { 
              name: 'Michael Chen', 
              role: 'Head Roaster & Co-Founder',
              desc: 'SCA Certified Roaster with 15+ years experience. Traveled to 30+ coffee farms across 3 continents.',
              specialty: 'Specialty: Ethiopian & Colombian Roasts'
            },
            { 
              name: 'Sarah Anderson', 
              role: 'Lead Barista & Co-Founder',
              desc: 'World Barista Championship finalist 2019. Expert in latte art and espresso extraction techniques.',
              specialty: 'Specialty: Signature Espresso Blends'
            },
            { 
              name: 'David Kurniawan', 
              role: 'Coffee Curator',
              desc: 'Q-Grader certified with expertise in green bean selection. Manages direct trade relationships.',
              specialty: 'Specialty: Single-Origin Selections'
            },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(217, 119, 6, 0.3)' }}
              className="bg-gradient-to-b from-amber-900/30 to-black/40 p-8 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-all text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-white" size={64} />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{member.name}</h3>
              <p className="text-amber-500 font-semibold mb-4 uppercase tracking-wider text-sm">{member.role}</p>
              <p className="text-gray-400 mb-4 leading-relaxed">{member.desc}</p>
              <div className="text-sm text-amber-400 italic">{member.specialty}</div>
            </motion.div>
          ))}
        </div>

        {/* Extended Team */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Supported by a team of <span className="text-amber-500 font-bold">25+ certified baristas</span>,{' '}
            <span className="text-amber-500 font-bold">5 quality control specialists</span>, and{' '}
            <span className="text-amber-500 font-bold">dedicated support staff</span>
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['Barista Training Program', 'SCA Certified Team', 'Award-Winning Service'].map((badge, idx) => (
              <div key={idx} className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="min-h-screen w-screen flex flex-col justify-center items-center px-10 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            Recognition & Awards
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our dedication to excellence has been recognized by industry leaders and coffee enthusiasts worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {[
            {
              year: '2024',
              award: 'Best Specialty Coffee Shop',
              org: 'Indonesia Coffee Awards',
              icon: <Award size={48} />
            },
            {
              year: '2023',
              award: 'Top 10 Cafes in Jakarta',
              org: 'TimeOut Magazine',
              icon: <Award size={48} />
            },
            {
              year: '2023',
              award: 'Sustainability Excellence',
              org: 'Green Business Council',
              icon: <Leaf size={48} />
            },
            {
              year: '2022',
              award: 'Best Latte Art',
              org: 'Asia Barista Championship',
              icon: <Coffee size={48} />
            },
            {
              year: '2021',
              award: 'Direct Trade Partner',
              org: 'Fairtrade International',
              icon: <Globe size={48} />
            },
            {
              year: '2019',
              award: 'Rising Star Cafe',
              org: 'Jakarta Food & Beverage Awards',
              icon: <Award size={48} />
            },
          ].map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-all"
            >
              <div className="text-amber-500 mb-4">{achievement.icon}</div>
              <div className="text-3xl font-black text-amber-500 mb-2">{achievement.year}</div>
              <h3 className="text-xl font-bold text-white mb-2">{achievement.award}</h3>
              <p className="text-gray-400 text-sm">{achievement.org}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="min-h-screen w-screen mb-20 flex flex-col justify-center items-center px-10 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <Leaf className="text-amber-500 mx-auto mb-6" size={64} />
          <h2 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            Our Commitment
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Coffee that's good for you, farmers, and the planet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {[
            {
              icon: <Globe size={48} />,
              title: 'Direct Trade Partnerships',
              desc: 'We work directly with 25+ coffee farms across Ethiopia, Colombia, Brazil, and Indonesia. By cutting out middlemen, we ensure farmers receive fair compensation—often 30-40% above market rates.',
              stats: ['25+ Partner Farms', '3 Countries', '100% Fair Trade']
            },
            {
              icon: <Leaf size={48} />,
              title: 'Environmental Stewardship',
              desc: 'From compostable cups to solar-powered roasting, we minimize our carbon footprint. Our partnerships prioritize shade-grown, organic farming methods that protect biodiversity.',
              stats: ['100% Compostable Packaging', 'Carbon Neutral Operations', 'Zero Waste Goal']
            },
            {
              icon: <Heart size={48} />,
              title: 'Community Impact',
              desc: 'We invest 5% of annual profits into farmer education programs, providing training in sustainable farming, quality control, and financial literacy. Your coffee creates lasting change.',
              stats: ['500+ Farmers Trained', '5% Profit Sharing', '$100K+ Invested']
            },
            {
              icon: <Users size={48} />,
              title: 'Local Engagement',
              desc: 'Beyond great coffee, we provide free community spaces, host educational workshops, and support local artists. We employ 50+ local staff with competitive wages and healthcare benefits.',
              stats: ['50+ Local Jobs', 'Free Community Events', 'Healthcare Benefits']
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="bg-gradient-to-br from-amber-900/20 to-black/60 p-10 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-all"
            >
              <div className="text-amber-500 mb-6">{item.icon}</div>
              <h3 className="text-3xl font-black text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.stats.map((stat, i) => (
                  <div key={i} className="bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold">
                    {stat}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="h-screen w-screen flex mt-20 pt-20 flex-col justify-center items-center px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <MapPin size={32} />, title: 'Visit Us', info: '123 Coffee District, Downtown Jakarta' },
              { icon: <Phone size={32} />, title: 'Call Us', info: '+62 812-3456-7890' },
              { icon: <Mail size={32} />, title: 'Email Us', info: 'hello@coffee.co' },
            ].map((contact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-amber-500/30"
              >
                <div className="text-amber-500 mb-4 flex justify-center">{contact.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{contact.title}</h3>
                <p className="text-gray-400">{contact.info}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {[
              { icon: <Instagram size={24} />, label: 'Instagram' },
              { icon: <Facebook size={24} />, label: 'Facebook' },
              { icon: <Twitter size={24} />, label: 'Twitter' },
            ].map((social, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(217, 119, 6, 0.2)' }}
                className="w-14 h-14 rounded-full border-2 border-amber-500 text-amber-500 flex items-center justify-center transition-all"
              >
                {social.icon}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-amber-600 text-white font-black uppercase tracking-widest hover:bg-amber-700 transition-all shadow-2xl rounded-sm"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </section>

    </Scroll>
  );
}

export default AboutPage;