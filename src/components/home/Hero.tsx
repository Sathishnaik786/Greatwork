import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-[#020617]">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1E5EFF]/20 rounded-full blur-[160px] -mr-64 -mt-64" />
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                        <span className="text-white/70 text-[10px] font-black tracking-widest uppercase">Driving Business Growth</span>
                    </div>
                    <h1 className="text-3xl lg:text-5xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                        Great Work Connecting Talent <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E5EFF] via-[#6EC1FF] to-[#22E6C3]">with Genuine Work</span>
                    </h1>
                    <ul className="flex flex-col gap-4 mb-8 max-w-xl text-white/80 sm:text-lg">
                        <li className="flex items-start gap-3 font-medium tracking-wide">
                            <span className="mt-0.5 flex flex-shrink-0 items-center justify-center w-6 h-6 rounded-full bg-[#1E5EFF]/20 border border-[#1E5EFF]/40 text-[#6EC1FF]">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </span>
                            Carefully Matched, Performance-Monitored Talent
                        </li>
                        <li className="flex items-start gap-3 font-medium tracking-wide">
                            <span className="mt-0.5 flex flex-shrink-0 items-center justify-center w-6 h-6 rounded-full bg-[#1E5EFF]/20 border border-[#1E5EFF]/40 text-[#6EC1FF]">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </span>
                            Premium Web, Mobile & Digital Marketing Services
                        </li>
                        <li className="flex items-start gap-3 font-medium tracking-wide">
                            <span className="mt-0.5 flex flex-shrink-0 items-center justify-center w-6 h-6 rounded-full bg-[#22E6C3]/20 border border-[#22E6C3]/40 text-[#22E6C3]">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </span>
                            Zero Fees for Jobseekers. Exact Matches for Clients.
                        </li>
                    </ul>
                    <p className="text-base font-bold text-white/80 mb-12 max-w-xl tracking-wide border-l-4 border-[#22E6C3] pl-4">
                        Get Real Projects • Build Your Career •<span className="text-[#22E6C3]"> 100% Free for Job Seekers</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 mt-4">
                        <div className="flex flex-col gap-3 w-full sm:w-auto">
                            {/* <span className="text-[#22E6C3] text-xs font-bold uppercase tracking-widest">For Job Seekers</span> */}
                            <Link to="/join" className="w-full sm:w-[220px] inline-flex items-center justify-center px-8 py-4 bg-[#22E6C3] text-[#020617] rounded-lg font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,230,195,0.3)]">
                                For Job Seekers
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3 w-full sm:w-auto">
                            {/* <span className="text-[#1E5EFF] text-xs font-bold uppercase tracking-widest">For Clients</span> */}
                            <Link to="/contact" className="w-full sm:w-[220px] inline-flex items-center justify-center px-8 py-4 bg-[#1E5EFF] text-white rounded-lg font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-[0_0_20px_rgba(30,94,255,0.3)]">
                                For Clients
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="lg:block hidden">
                    <div className="animate-float">
                        <div className="glass rounded-[50px] p-6 border-white/10 shadow-2xl relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Dashboard" className="rounded-[40px] opacity-80" fetchPriority="high" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
