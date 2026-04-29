import { Link } from 'react-router-dom';
import { Layout, Users, Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'For Teens', path: '/teens', icon: Users },
    { name: 'For Companies', path: '/companies', icon: Building2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-emerald-500 p-1.5 rounded-lg shadow-lg shadow-emerald-500/20">
                <Layout className="w-6 h-6 text-emerald-950" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Funngro<span className="text-emerald-500">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all font-medium text-sm"
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Link>
            ))}
            <Link
              to="/teens"
              className="bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-all shadow-xl shadow-zinc-950/50"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:bg-zinc-800 rounded-xl transition-colors font-medium"
                >
                  <link.icon className="w-5 h-5 text-emerald-500" />
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link
                  to="/teens"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-zinc-100 text-zinc-950 py-3 rounded-xl font-bold"
                >
                  Join the Community
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
