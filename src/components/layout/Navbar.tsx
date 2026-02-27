import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

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
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl py-3 md:py-4 border-b border-slate-100' : 'bg-transparent py-4 md:py-7'}`}>
            <div className="container mx-auto px-4 lg:px-6 flex lg:grid lg:grid-cols-[auto_1fr_auto] items-center justify-between gap-4">
                {/* Logo - Left */}
                <Link to="/" className="cursor-pointer group flex items-center z-50">
                    <img
                        src="/logo.png"
                        alt="Great Work - 100% Genuine Work"
                        className="h-14 md:h-16 lg:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                    />
                </Link>

                {/* Central Navigation - Hidden on mobile */}
                <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 w-full">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={`flex items-center h-full text-[11px] xl:text-[12px] uppercase tracking-widest font-black transition-all group ${isScrolled
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
                        className="px-4 xl:px-6 py-2.5 xl:py-3 bg-[#1E5EFF] text-white rounded-lg text-[10px] xl:text-[11px] font-black uppercase tracking-widest hover:bg-[#020617] transition-all shadow-xl hover:scale-105 active:scale-95 btn-glow whitespace-nowrap"
                    >
                        For Clients
                    </Link>
                    <Link
                        to="/login"
                        className="px-4 xl:px-6 py-2.5 xl:py-3 bg-[#22E6C3] text-[#020617] rounded-lg text-[10px] xl:text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,230,195,0.3)] active:scale-95 whitespace-nowrap"
                    >
                        Join
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button aria-label="Toggle mobile menu" className="lg:hidden p-2 text-slate-800 min-w-[44px] min-h-[44px] flex items-center justify-center z-50 bg-white/50 backdrop-blur rounded-xl border border-white/20 shadow-sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-[#020617] z-[110] p-10 lg:hidden flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <img
                                src="/logo.png"
                                alt="Great Work"
                                className="h-16 w-auto object-contain"
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
                            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full py-5 bg-[#22E6C3] text-[#020617] rounded-xl text-lg font-bold text-center shadow-[0_0_20px_rgba(34,230,195,0.3)]">Join</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
