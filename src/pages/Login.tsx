import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, X, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Login = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'join'>('join');
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');
        setTimeout(() => {
            setFormState('success');
            setTimeout(() => {
                navigate('/contact');
            }, 1000);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-[#F0F4F8] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans">
            <SEO
                title="Sign In / Sign Up"
                description="Join Great Work Academy or sign in to your account. Access our digital solutions and seamless project management tools."
                keywords="login, sign up, great work academy login, digital solutions account"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-[1200px] bg-white rounded-3xl sm:rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative mt-20 lg:mt-24 mb-4"
            >
                {/* Left Form Panel */}
                <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col relative z-10">

                    {/* Top Branding Pill */}
                    <div className="mb-8 lg:mb-12">
                        <Link to="/" className="inline-flex items-center gap-2 px-6 py-2 border border-[#2596be]/20 bg-[#2596be]/5 rounded-full text-[#2596be] font-black tracking-tighter hover:bg-[#2596be]/10 transition-colors text-sm">
                            <img src="/logo.png" alt="Great Work" className="h-6 w-auto object-contain" />
                            Great Work
                        </Link>
                    </div>

                    {/* Central Form Content */}
                    <div className="flex-grow flex flex-col justify-center max-w-sm mx-auto w-full">
                        <div className="flex bg-slate-100 p-1.5 rounded-full mb-8 relative">
                            <button
                                type="button"
                                onClick={() => setActiveTab('login')}
                                className={`flex-1 py-2.5 text-sm font-bold rounded-full transition-all z-10 ${activeTab === 'login' ? 'text-white' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Sign In
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab('join')}
                                className={`flex-1 py-2.5 text-sm font-bold rounded-full transition-all z-10 ${activeTab === 'join' ? 'text-white' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Sign Up
                            </button>
                            <div
                                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#2596be] rounded-full transition-all duration-300 ease-out shadow-md`}
                                style={{ left: activeTab === 'login' ? '6px' : 'calc(50%)' }}
                            />
                        </div>

                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-normal text-slate-800 tracking-tight mb-2">
                                {activeTab === 'login' ? 'Welcome back' : 'Create an account'}
                            </h2>
                        </div>

                        <AnimatePresence mode="wait">
                            {formState === 'success' ? (
                                <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Success!</h3>
                                    <p className="text-slate-500">Redirecting to contact page...</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    {activeTab === 'join' && (
                                        <div>
                                            <label className="block text-[11px] font-medium text-slate-500 mb-2 ml-4">Full name</label>
                                            <input
                                                type="text" name="name" required value={formData.name} onChange={handleChange}
                                                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2596be] hover:border-slate-300 rounded-full px-6 py-4 text-sm font-medium text-slate-800 outline-none transition-all shadow-sm placeholder-slate-400"
                                                placeholder="Enter your full Name"
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-[11px] font-medium text-slate-500 mb-2 ml-4">Email</label>
                                        <input
                                            type="email" name="email" required value={formData.email} onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2596be] hover:border-slate-300 rounded-full px-6 py-4 text-sm font-medium text-slate-800 outline-none transition-all shadow-sm placeholder-slate-400"
                                            placeholder="example@gmail.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-medium text-slate-500 mb-2 ml-4">Password</label>
                                        <input
                                            type="password" name="password" required value={formData.password} onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2596be] hover:border-slate-300 rounded-full px-6 py-4 text-sm font-medium text-slate-800 outline-none transition-all shadow-sm placeholder-slate-400"
                                            placeholder="••••••••••••••••"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formState === 'loading'}
                                        className="w-full mt-8 py-4 bg-[#2596be] text-white rounded-full font-bold shadow-lg shadow-[#2596be]/30 hover:bg-[#1a7394] transition-all flex items-center justify-center transform active:scale-95"
                                    >
                                        {formState === 'loading' ? <Loader2 className="animate-spin" size={20} /> : (activeTab === 'login' ? 'Sign In' : 'Sign Up')}
                                    </button>

                                    <div className="flex gap-4 mt-6">
                                        <button type="button" className="flex-1 py-3 bg-transparent border border-slate-200 rounded-full flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors text-sm font-semibold text-slate-700 whitespace-nowrap overflow-hidden">
                                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.82 1.54-.03 2.75.56 3.51 1.62-3.01 1.76-2.52 5.56.35 6.74-.69 1.77-1.48 3.56-2.53 4.63zm-4.34-13.6c-.15-1.39.69-2.73 1.83-3.09 1.05-.28 2.05.51 2.28 1.76.28 1.5.06 2.62-1.63 3.09-1.28.32-2.31-.38-2.48-1.76z" /></svg>
                                            Apple
                                        </button>
                                        <button type="button" className="flex-1 py-3 bg-transparent border border-slate-200 rounded-full flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors text-sm font-semibold text-slate-700 whitespace-nowrap overflow-hidden">
                                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-blue-500"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                            Google
                                        </button>
                                    </div>

                                    <div className="mt-8 pt-12 pb-4 grid grid-cols-2 items-center text-[13px] sm:text-sm font-medium text-slate-500 w-full gap-4">
                                        <div className="text-left w-full">
                                            <Link to="/about" className="underline hover:text-slate-800 transition-colors whitespace-nowrap">Privacy Policy</Link>
                                        </div>
                                        <div className="text-right w-full">
                                            <Link to="/terms" className="underline hover:text-slate-800 transition-colors whitespace-nowrap">Terms & Conditions</Link>
                                        </div>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Image Panel */}
                <div className="hidden lg:flex w-1/2 p-4 flex-col relative z-20">
                    <div className="w-full flex-1 bg-slate-200 rounded-[32px] overflow-hidden relative shadow-inner">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                src={activeTab === 'join'
                                    ? "https://media.istockphoto.com/id/2208190620/photo/professional-team-welcomes-new-colleague-in-a-casual-office-environment.jpg?s=612x612&w=0&k=20&c=yc3mQT1ohxTa6KfIswklFy_qaWE5yDrUWxP-_qiVObQ="
                                    : "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"}
                                alt="Team meeting"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        <div className="absolute top-[140%] -translate-y-[140%] left-1/2 -translate-x-1/2 w-[80%] h-48 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl">
                            <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
                                    <div key={d} className="flex flex-col items-center gap-2">
                                        <span className="text-xs text-white/80">{d}</span>
                                        <span className={`text-lg font-bold ${i === 3 ? 'text-white' : 'text-white/60'}`}>{22 + i}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full h-full glass-pattern opacity-20" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
};

export default Login;
