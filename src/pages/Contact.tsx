import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import FloatingInput from '../components/ui/FloatingInput';
import { MessageCircle, Mail, Phone, MapPin, Clock, Share2, Check, User, Smartphone, Briefcase, Layout, DollarSign, MessageSquare, Send, Loader2, ChevronDown, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        details: '',
        budget: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');

        // Simulate API call
        setTimeout(() => {
            setFormState('success');
        }, 2000);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/20 via-[#020617] to-transparent" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <SectionTitle
                        subtitle="Contact Us"
                        title="Let’s Start Building Your Success Story"
                        description="Have a project in mind or need expert guidance? Our team is ready to help you transform your ideas into powerful digital solutions."
                        light centered
                    />
                </div>
            </section>

            {/* Quick Connect Bar */}
            <section className="py-24 bg-slate-50/30">
                <div className="container mx-auto px-6">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-12 text-center text-slate-400">Connect With Us Instantly</h3>
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {/* WhatsApp */}
                        <a href="https://wa.me/918367208436" target="_blank" rel="noreferrer"
                            className="group p-10 lg:p-14 rounded-[40px] bg-white border border-slate-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-emerald-50/60 transition-colors duration-500" />
                            <div className="relative z-10 w-16 h-16 flex items-center justify-center mb-6">
                                <img src="/whatsup.png" alt="WhatsApp" className="w-14 h-14 object-contain drop-shadow-sm" />
                            </div>
                            <h4 className="text-[22px] font-bold text-slate-900 mb-3 relative z-10 tracking-tight">WhatsApp Chat</h4>
                            <p className="text-[13px] text-slate-500 font-medium leading-relaxed relative z-10 max-w-[200px]">Get instant responses from our support team.</p>
                        </a>

                        {/* Email */}
                        <a href="mailto:greatworksolutions.india@gmail.com"
                            className="group p-10 lg:p-14 rounded-[40px] bg-white border border-slate-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-slate-50/80 transition-colors duration-500" />
                            <div className="relative z-10 w-16 h-16 flex items-center justify-center mb-6">
                                <img src="/gmail.png" alt="Email" className="w-14 h-14 object-contain drop-shadow-sm" />
                            </div>
                            <h4 className="text-[22px] font-bold text-slate-900 mb-3 relative z-10 tracking-tight">Email Us</h4>
                            <p className="text-[13px] text-slate-500 font-medium leading-relaxed relative z-10 max-w-[200px]">Send us your project details anytime.</p>
                        </a>

                        {/* Phone */}
                        <a href="tel:+918367208436"
                            className="group p-10 lg:p-14 rounded-[40px] bg-white border border-slate-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-indigo-50/40 transition-colors duration-500" />
                            <div className="relative z-10 w-14 h-14 rounded-[18px] bg-[#F4F4FB] text-[#5A63F5] flex items-center justify-center mb-7 mt-1 shadow-sm">
                                <Phone size={24} strokeWidth={2} />
                            </div>
                            <h4 className="text-[22px] font-bold text-slate-900 mb-3 relative z-10 tracking-tight">Call Us</h4>
                            <p className="text-[13px] text-slate-500 font-medium leading-relaxed relative z-10 max-w-[200px]">Speak directly with our consultants.</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24 items-start max-w-7xl mx-auto">
                        {/* Left: Contact Info */}
                        <div className="w-full lg:w-2/5 space-y-16">
                            <div>
                                <SectionTitle subtitle="Direct Access" title="Our Contact Information" />
                                <div className="space-y-12">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 text-[#1E5EFF]"><MapPin size={24} /></div>
                                        <div>
                                            <h5 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Office Address</h5>
                                            <p className="text-xl font-bold text-[#020617] leading-relaxed">India Headquarters, Tech Valley Hub, Hyderabad</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 text-[#1E5EFF]"><Clock size={24} /></div>
                                        <div>
                                            <h5 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Business Hours</h5>
                                            <p className="text-xl font-bold text-[#020617]">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 text-[#1E5EFF]"><Mail size={24} /></div>
                                        <div>
                                            <h5 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Support Email</h5>
                                            <p className="text-xl font-bold text-[#1E5EFF]">greatworksolutions.india@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 text-[#1E5EFF]"><Phone size={24} /></div>
                                        <div>
                                            <h5 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Customer Support</h5>
                                            <p className="text-xl font-bold text-[#020617]">+91 8367208436</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-slate-400">Social & Messaging</h5>
                                <div className="flex flex-wrap gap-4">
                                    {[
                                        { icon: <Instagram />, color: 'hover:bg-pink-500', link: 'https://www.instagram.com/greatwork.solutions?utm_source=qr&igsh=dWVraGE0cGh1dHhv' },
                                        { icon: <MessageCircle />, color: 'hover:bg-emerald-500', link: 'https://wa.me/qr/7QTLRCDFVZQHP1' },
                                        { icon: <Facebook />, color: 'hover:bg-blue-600', link: 'https://www.facebook.com/Greatwork.Solutions' },
                                        { icon: <Twitter />, color: 'hover:bg-sky-500', link: 'https://x.com/Greatwork_Sltns' },
                                        { icon: <Mail />, color: 'hover:bg-blue-500', link: 'mailto:greatworksolutions.india@gmail.com' },
                                        { icon: <Phone />, color: 'hover:bg-indigo-500', link: 'tel:+918367208436' },
                                    ].map((s, i) => (
                                        <a key={i} href={s.link} className={`w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 transition-all duration-300 hover:text-white hover:scale-110 ${s.color}`}>
                                            {s.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="w-full lg:w-3/5">
                            <AnimatePresence mode="wait">
                                {formState === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        className="bg-[#020617] p-16 rounded-[60px] text-white text-center shadow-2xl overflow-hidden relative"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-bl-full blur-3xl" />
                                        <div className="w-24 h-24 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-10 border border-teal-500/20">
                                            <Check size={48} className="animate-bounce" />
                                        </div>
                                        <h2 className="text-5xl font-black mb-6">🎉 Thank You!</h2>
                                        <p className="text-xl text-white/60 mb-12 font-medium leading-relaxed">Your message has been successfully sent.<br />Our team will contact you shortly.</p>
                                        <Link
                                            to="/"
                                            className="px-12 py-5 bg-[#1E5EFF] text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform inline-block"
                                        >
                                            Back Home
                                        </Link>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="bg-white p-12 lg:p-16 rounded-[60px] shadow-2xl border border-slate-100"
                                    >
                                        <h2 className="text-4xl font-black text-[#020617] mb-4">Send Us a Message</h2>
                                        <p className="text-slate-500 font-medium mb-12">Fill out the form below and our experts will contact you within 24 hours.</p>

                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <FloatingInput label="Full Name" name="name" required icon={User} value={formData.name} onChange={handleInputChange} />
                                                <FloatingInput label="Email Address" name="email" type="email" required icon={Mail} value={formData.email} onChange={handleInputChange} />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <FloatingInput label="Phone Number" name="phone" required icon={Smartphone} value={formData.phone} onChange={handleInputChange} />
                                                <FloatingInput label="Company Name" name="company" icon={Briefcase} value={formData.company} onChange={handleInputChange} />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                {/* Service Selection */}
                                                <div className="relative">
                                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                                        <Layout size={18} />
                                                    </div>
                                                    <select
                                                        name="service"
                                                        value={formData.service}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-12 pr-10 py-5 outline-none appearance-none font-medium text-slate-800 hover:border-slate-200 focus:border-[#1E5EFF] transition-all"
                                                    >
                                                        <option value="">Service Interested In*</option>
                                                        <option value="app">App Development</option>
                                                        <option value="web">Website Design</option>
                                                        <option value="marketing">Digital Marketing</option>
                                                        <option value="advertising">Advertising</option>
                                                        <option value="integrated">Integrated Marketing</option>
                                                        <option value="consulting">Consulting</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                                                </div>

                                                {/* Budget Selection */}
                                                <div className="relative">
                                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                                        <DollarSign size={18} />
                                                    </div>
                                                    <select
                                                        name="budget"
                                                        value={formData.budget}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-12 pr-10 py-5 outline-none appearance-none font-medium text-slate-800 hover:border-slate-200 focus:border-[#1E5EFF] transition-all"
                                                    >
                                                        <option value="">Estimated Budget (Optional)</option>
                                                        <option value="low">Under ₹50,000</option>
                                                        <option value="mid">₹50,000 – ₹1,00,000</option>
                                                        <option value="high">₹1,00,000 – ₹5,00,000</option>
                                                        <option value="premium">Above ₹5,00,000</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                                                </div>
                                            </div>

                                            <div className="relative">
                                                <div className="absolute left-5 top-8 text-slate-400">
                                                    <MessageSquare size={18} />
                                                </div>
                                                <textarea
                                                    name="details"
                                                    value={formData.details}
                                                    onChange={handleInputChange}
                                                    rows={4}
                                                    placeholder="Tell us about your project, goals, and timeline..."
                                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-12 pr-6 py-5 outline-none resize-none font-medium text-slate-800 hover:border-slate-200 focus:border-[#1E5EFF] transition-all"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={formState === 'loading'}
                                                className="w-full py-6 bg-gradient-to-r from-[#1E5EFF] to-[#1E5EFF]/80 text-white rounded-[24px] font-black uppercase tracking-[0.2em] shadow-xl hover:shadow-[#1E5EFF]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {formState === 'loading' ? (
                                                    <Loader2 className="animate-spin" size={24} />
                                                ) : (
                                                    <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section Placeholder / Visual Ornament */}
            <section className="h-[400px] bg-slate-200 overflow-hidden grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4522238477755!2d78.38466181471!3d17.43806088804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                />
            </section>
        </motion.div>
    );
};

export default Contact;
