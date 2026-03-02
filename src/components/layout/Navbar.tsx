import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Determine if the current page has a light hero background at the top
    const isLightHero = location.pathname === '/login' || location.pathname === '/profile' || (location.pathname.startsWith('/services/') && location.pathname !== '/services');
    const useDarkText = isScrolled || isLightHero;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Solutions', path: '/solutions' },
        { label: 'Contact Us', path: '/contact' },
    ];

    return (
        <>
            <nav aria-label="Main Navigation" className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${useDarkText ? 'bg-white/95 backdrop-blur-xl shadow-xl py-3 md:py-4 border-b border-slate-100' : 'bg-transparent py-4 md:py-7'}`}>
                <div className="container mx-auto px-4 lg:px-6 flex lg:grid lg:grid-cols-[auto_1fr_auto] items-center justify-between gap-4">
                    {/* Logo - Left */}
                    <Link to="/" aria-label="Great Work Home Page" className="cursor-pointer group flex items-center z-50">
                        <img
                            src="/logo.png"
                            alt="Great Work - 100% Genuine Work"
                            className="h-[68px] md:h-[78px] lg:h-[96px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md py-1"
                        />
                    </Link>

                    {/* Central Navigation - Hidden on mobile */}
                    <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 w-full" aria-label="Desktop Navigation">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={`flex items-center h-full text-[11px] xl:text-[12px] uppercase tracking-widest font-black transition-all group ${useDarkText
                                    ? 'text-slate-600 hover:text-[#1E5EFF]'
                                    : 'text-white hover:text-white/80'
                                    }`}
                            >
                                {({ isActive }) => (
                                    <span className="relative inline-block whitespace-nowrap">
                                        {link.label}
                                        <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-[#1E5EFF] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                    </span>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Side Buttons - Hidden on mobile */}
                    <div className="hidden lg:flex items-center justify-end gap-3 xl:gap-4">
                        <Link
                            to="/contact"
                            className="flex items-center justify-center px-4 xl:px-6 py-2.5 xl:py-3 bg-[#1E5EFF] text-white rounded-lg text-[10px] xl:text-[11px] font-black uppercase tracking-widest hover:bg-[#020617] transition-all shadow-xl hover:scale-105 active:scale-95 btn-glow whitespace-nowrap"
                        >
                            For Clients
                        </Link>
                        <Link
                            to="/login"
                            className="flex items-center justify-center px-4 xl:px-6 py-2.5 xl:py-3 bg-[#2596be] text-white rounded-lg text-[10px] xl:text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,150,190,0.4)] active:scale-95 whitespace-nowrap"
                        >
                            Join
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"} className="lg:hidden p-2 text-slate-800 min-w-[44px] min-h-[44px] flex items-center justify-center z-50 bg-white/50 backdrop-blur rounded-xl border border-white/20 shadow-sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-[#020617] p-10 lg:hidden flex flex-col z-[9999]"
                        aria-label="Mobile Navigation"
                        role="dialog"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <img
                                src="/logo.png"
                                alt="Great Work"
                                className="h-[78px] w-auto object-contain"
                            />
                            <button onClick={() => setMobileMenuOpen(false)} className="text-white"><X size={28} /></button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-left text-2xl font-black text-white/60 hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <hr className="border-white/10 my-4" />
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-5 bg-[#1E5EFF] text-white rounded-xl text-lg font-bold text-center">Contact Us</Link>
                            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full py-5 bg-[#2596be] text-white rounded-xl text-lg font-bold text-center shadow-[0_0_20px_rgba(37,150,190,0.4)]">Join</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
