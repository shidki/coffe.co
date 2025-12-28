import React, { useState } from 'react';
import { Scroll } from '@react-three/drei';
import { motion } from 'framer-motion';

const ReservationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${formData.name}!`);
  };

  return (
    <Scroll html style={{ width: '100%' }}>
      
      <section className="min-h-screen w-screen flex flex-col justify-center items-center px-10 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <h1 className="text-7xl font-black text-white mb-4 text-center tracking-tighter">
            RESERVE
          </h1>
          <p className="text-xl text-amber-500 italic mb-12 text-center">
            Your table awaits
          </p>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-amber-500/30 space-y-6"
          >
            <div>
              <label className="block text-amber-500 mb-2 font-semibold uppercase tracking-wider text-sm">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/40 border-b-2 border-gray-600 focus:border-amber-500 p-3 text-white outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-amber-500 mb-2 font-semibold uppercase tracking-wider text-sm">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black/40 border-b-2 border-gray-600 focus:border-amber-500 p-3 text-white outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-amber-500 mb-2 font-semibold uppercase tracking-wider text-sm">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-black/40 border-b-2 border-gray-600 focus:border-amber-500 p-3 text-white outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-amber-500 mb-2 font-semibold uppercase tracking-wider text-sm">
                  Time
                </label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-black/40 border-b-2 border-gray-600 focus:border-amber-500 p-3 text-white outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-amber-500 mb-2 font-semibold uppercase tracking-wider text-sm">
                Number of Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full bg-black/40 border-b-2 border-gray-600 focus:border-amber-500 p-3 text-white outline-none transition-all"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-amber-600 text-white font-bold uppercase tracking-widest hover:bg-amber-700 transition-all mt-6"
            >
              Confirm Reservation
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

    </Scroll>
  );
}

export default ReservationPage;