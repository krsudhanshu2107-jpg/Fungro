import { Instagram, Twitter, Linkedin, Facebook, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white mb-6">
              <div className="bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/20">
                <Layout className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Funngro</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Enabling teenagers to earn, learn, and grow while helping companies access agile talent.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-zinc-100 font-bold mb-6 text-sm uppercase tracking-widest">Discovery</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/teens" className="hover:text-emerald-400 transition-colors">For Teens</Link></li>
              <li><Link to="/companies" className="hover:text-emerald-400 transition-colors">For Companies</Link></li>
              <li><Link to="#" className="hover:text-emerald-400 transition-colors">Projects</Link></li>
              <li><Link to="#" className="hover:text-emerald-400 transition-colors">Learning Tracks</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-100 font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="#" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-zinc-100 font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/funngro/" className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all transform hover:-translate-y-1">
                <Instagram className="w-5 h-5 text-emerald-500" />
              </a>
              <a href="#" className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all transform hover:-translate-y-1">
                <Twitter className="w-5 h-5 text-emerald-500" />
              </a>
              <a href="#" className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all transform hover:-translate-y-1">
                <Linkedin className="w-5 h-5 text-emerald-500" />
              </a>
            </div>
            <p className="mt-8 text-[10px] text-zinc-600 font-medium uppercase tracking-tighter">
              © 2026 Funngro Platform. Built for Excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
