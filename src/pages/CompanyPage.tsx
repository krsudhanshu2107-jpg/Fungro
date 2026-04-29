import { motion } from 'motion/react';
import { Zap, Target, Users, Search, BarChart3, Briefcase, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function CompanyPage() {
  const stats = [
    { label: "Cost Saving", value: "60%", icon: BarChart3 },
    { label: "Turnaround", value: "24h", icon: Zap },
    { label: "Teen Talent", value: "1M+", icon: Users }
  ];

  const categories = [
    "Content Writing", "Graphic Design", "Social Media", "Lead Gen", "Data Entry", "Video Editing"
  ];

  return (
    <div className="pt-20 bg-zinc-950 min-h-screen text-zinc-100">
      <Helmet>
        <title>Funngro for Companies - Hire Agile Talent</title>
        <meta name="description" content="Hire talented teenagers for task-based work. Save costs and get fresh perspectives on your projects with Funngro's agile workforce." />
      </Helmet>

      {/* Hero Section - Bento Grid Style */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Main Title Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-3 md:row-span-2 bento-card flex flex-col justify-between bg-zinc-900/40 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Briefcase className="w-48 h-48 text-emerald-400" />
            </div>
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6 block">Professional Workforce</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Hire the <span className="text-emerald-400">Future</span>.
              </h1>
              <p className="text-zinc-400 text-lg max-w-xl mb-12 leading-relaxed">
                Access a pool of 1 Million+ teenagers eager to help your business grow with fresh perspectives and incredible agility.
              </p>
            </div>
            <div className="flex gap-4 relative z-10">
              <button className="px-8 py-3.5 bg-zinc-100 text-zinc-950 rounded-2xl font-bold text-sm hover:bg-white transition-all shadow-xl shadow-zinc-950/50">Post a Project</button>
              <button className="px-8 py-3.5 bg-zinc-800 text-white rounded-2xl font-bold text-sm border border-zinc-700 hover:bg-zinc-700 transition-all">Schedule Call</button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="md:col-span-1 bento-card flex flex-col justify-between bg-zinc-900/60 hover:bg-zinc-800/80"
            >
              <div className="p-2.5 bg-emerald-500/10 rounded-xl w-fit border border-emerald-500/20">
                <stat.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Focus Domains</h2>
            <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Cost Effective", desc: "Save up to 70% compared to traditional hiring models with task-based energy.", icon: Target },
              { title: "Young Perspectives", desc: "Get fresh, modern insights from a generation that lives digital first.", icon: Users },
              { title: "Scalable Output", desc: "Ramp up output quickly with a distributed workforce available 24/7.", icon: Zap }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="bento-card border-zinc-800/50 hover:border-emerald-500/30 group bg-zinc-900/20"
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mb-12 group-hover:bg-emerald-500 transition-colors">
                    <feature.icon className="w-5 h-5 text-emerald-400 group-hover:text-emerald-950 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & Audit Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bento-card bg-emerald-500/5 border-emerald-500/20 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-6 block">Technical Excellence</span>
                <h2 className="text-4xl font-bold text-white mb-8 tracking-tight leading-tight">Built for Performance. Engineered for Search.</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Speed Optimized",
                    "Semantic HTML5",
                    "Dynamic Meta",
                    "A11y Accessible"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 p-4 bg-zinc-950/50 border border-zinc-800/50 rounded-2xl">
                      <div className="w-5 h-5 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-xs font-semibold text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bento-card bg-zinc-950/90 border-zinc-800 p-8 shadow-2xl relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full blur-[20px] opacity-20"></div>
                <h4 className="text-xs font-bold text-emerald-400 mb-10 uppercase tracking-[0.2em] flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" /> SEO Dashboard
                </h4>
                <div className="space-y-8">
                  {[
                    { label: "Performance", value: 98 },
                    { label: "Accessibility", value: 100 },
                    { label: "Best Practices", value: 95 },
                    { label: "SEO Score", value: 100 }
                  ].map(metric => (
                    <div key={metric.label}>
                      <div className="flex justify-between text-[10px] font-bold mb-3 uppercase tracking-widest text-zinc-500">
                        <span>{metric.label}</span>
                        <span className="text-emerald-400">{metric.value}%</span>
                      </div>
                      <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          transition={{ duration: 1.2, delay: 0.3 }}
                          className="h-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-zinc-900 flex justify-between items-center">
                  <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest font-mono">System Health</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-zinc-600 font-bold text-[10px] tracking-[0.3em] uppercase mb-16">Ecosystem of 2000+ Brands</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-20 hover:opacity-50 transition-opacity">
              {["GOOGLE", "MICROSOFT", "META", "AMAZON", "APPLE"].map(l => (
                <span key={l} className="text-2xl font-black tracking-tighter text-white">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
