import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center pt-32 md:pt-40 pb-20 overflow-hidden bg-[#020617]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-[#1E5EFF]/20 rounded-full blur-[120px] lg:blur-[160px] -mr-32 -mt-32 lg:-mr-64 lg:-mt-64" />
            <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center relative z-10 mt-8 lg:mt-0">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 lg:mb-8 mt-4 lg:mt-0">
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                        <span className="text-white/70 text-[10px] sm:text-[11px] font-black tracking-widest uppercase">Driving Business Growth</span>
                    </div>
                    <h1 className="text-[28px] sm:text-4xl lg:text-[38px] xl:text-[48px] font-black text-white leading-[1.1] mb-6 lg:mb-8 tracking-tighter">
                        <span className="whitespace-nowrap">Greatwork - Connecting Talent</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E5EFF] via-[#6EC1FF] to-[#22E6C3]">with Genuine Work</span>
                    </h1>
                    <ul className="flex flex-col gap-3 lg:gap-4 mb-6 lg:mb-8 max-w-xl text-white/80 text-sm sm:text-base lg:text-lg">
                        <li className="flex items-start gap-3 font-medium tracking-wide">
                            <span className="mt-0.5 flex flex-shrink-0 items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1E5EFF]/20 border border-[#1E5EFF]/40 text-[#6EC1FF]">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </span>
                            Carefully Matched, Performance-Monitored Talent
                        </li>
                        <li className="flex items-start gap-3 font-medium tracking-wide">
                            <span className="mt-0.5 flex flex-shrink-0 items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1E5EFF]/20 border border-[#1E5EFF]/40 text-[#6EC1FF]">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </span>
                            Premium Web, Mobile & Digital Marketing Services
                        </li>
                        <li className="flex items-start gap-3 font-medium tracking-wide">
                            <span className="mt-0.5 flex flex-shrink-0 items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#22E6C3]/20 border border-[#22E6C3]/40 text-[#22E6C3]">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </span>
                            Zero Fees for Jobseekers. Exact Matches for Clients.
                        </li>
                    </ul>
                    <p className="text-sm sm:text-base font-bold text-white/80 mb-8 lg:mb-12 max-w-xl tracking-wide border-l-4 border-[#22E6C3] pl-4">
                        Get Real Projects • Build Your Career •<span className="text-[#22E6C3]"> 100% Free for Job Seekers</span>
                    </p>
                    <div className="flex flex-row gap-2 sm:gap-6 mt-4 lg:mt-6 w-full">
                        <div className="flex flex-col gap-3 flex-1 sm:flex-none sm:w-auto">
                            <Link to="/join" aria-label="Join Great Work as a Job Seeker" className="w-full sm:w-[220px] lg:w-[240px] inline-flex items-center justify-center px-2 sm:px-6 py-3.5 lg:px-8 lg:py-4 bg-[#2596be] text-white rounded-lg font-black uppercase tracking-wider md:tracking-widest text-[9.5px] sm:text-[10px] lg:text-[11px] hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,150,190,0.4)] text-center leading-tight">
                                For Job Seekers
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3 flex-1 sm:flex-none sm:w-auto">
                            <Link to="/contact" aria-label="Contact Great Work for your business needs" className="w-full sm:w-[220px] lg:w-[240px] inline-flex items-center justify-center px-2 sm:px-6 py-3.5 lg:px-8 lg:py-4 bg-[#1E5EFF] text-white rounded-lg font-black uppercase tracking-wider md:tracking-widest text-[9.5px] sm:text-[10px] lg:text-[11px] hover:scale-105 transition-all shadow-[0_0_20px_rgba(30,94,255,0.3)] text-center leading-tight">
                                For Clients
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="lg:block hidden w-full max-w-2xl mx-auto">
                    <div className="animate-float">
                        <div className="glass rounded-[30px] xl:rounded-[50px] p-4 xl:p-6 border-white/10 shadow-2xl relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Greatwork Business Dashboard and Analytics Interface illustrating growth" className="rounded-[20px] xl:rounded-[40px] opacity-80 w-full object-cover" fetchPriority="high" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
