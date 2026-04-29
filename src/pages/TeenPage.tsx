import { motion } from 'motion/react';
import { Wallet, GraduationCap, TrendingUp, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function TeenPage() {
  const benefits = [
    {
      title: "Earn Real Money",
      desc: "Complete projects for companies and get paid directly. Start earning independently while you're still a student.",
      icon: Wallet,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Learn by Doing",
      desc: "Acquire real-world skills like social media management, content writing, design, and more through actual tasks.",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Build Your Profile",
      desc: "Create an impressive professional profile before you even graduate. Get certifications and reviews from real companies.",
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <div className="pt-20 bg-zinc-950 min-h-screen text-zinc-100">
      <Helmet>
        <title>Funngro for Teens - Earn Money & Learn Skills</title>
        <meta name="description" content="Join Funngro and start earning money by completing projects for top companies. Best platform for teenagers to learn real-world skills." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Empowering Gen Z
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Start Your First <span className="text-emerald-400 italic">Job</span> Today.
            </h1>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-lg">
              Funngro connects smart teenagers with companies looking for fresh perspectives. Earn, learn, and build your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-emerald-500 text-emerald-950 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group">
                Download App <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-[100px] opacity-30 -z-10 translate-x-12"></div>
            <img 
              src="https://picsum.photos/seed/teens/800/800" 
              alt="Teens working together" 
              className="rounded-[40px] border border-zinc-800 shadow-2xl w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bento-card animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/10 p-3 rounded-2xl">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">100k+</p>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Active Teens</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Why Teens ❤️ Funngro</h2>
            <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bento-card group hover:bg-zinc-800/50 hover:border-emerald-500/30"
              >
                <div className={`w-12 h-12 ${item.color.replace('green', 'emerald').replace('blue', 'zinc').replace('purple', 'zinc')} bg-opacity-10 rounded-xl flex items-center justify-center mb-12 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2 block">Benefit {idx + 1}</span>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
              <img src="https://picsum.photos/seed/steps/600/600" alt="Process" className="rounded-[40px] border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">Getting Started is Easy</h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Create Profile', desc: 'Tell us about your interests and skills.' },
                  { step: '02', title: 'Apply for Projects', desc: 'Browse hundreds of tasks in your Favorite categories.' },
                  { step: '03', title: 'Complete & Earn', desc: 'Deliver quality work and get paid within 48 hours.' }
                ].map((s) => (
                  <div key={s.step} className="p-6 bento-card hover:bg-zinc-800 transition-colors flex gap-6 items-start">
                    <span className="text-3xl font-black text-emerald-500/20 shrink-0 font-mono">{s.step}</span>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{s.title}</h4>
                      <p className="text-zinc-500 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
