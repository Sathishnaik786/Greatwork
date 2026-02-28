import { Link } from 'react-router-dom';
import { TrendingUp, ChevronRight, Instagram, MessageCircle, Facebook, Twitter } from 'lucide-react';

const Footer = () => (
    <footer className="py-24 bg-[#020617] text-white/50 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <img src="/footer_logo.png" alt="Great Work" className="w-auto h-12 object-contain" />
                    <div className="flex flex-col">
                        <span className="text-[26px] font-black text-[#2596be] tracking-tighter leading-none uppercase whitespace-nowrap">Great Work</span>
                        <span className="text-[11px] font-bold text-[#1FB8A8] tracking-[0.1em] mt-0.5 uppercase whitespace-nowrap">100% Genuine Work</span>
                    </div>
                </div>
                <p className="text-sm font-medium leading-relaxed mb-8">Delivering premium digital solutions worldwide. 100% genuine work for global brands.</p>
            </div>
            <div>
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Quick Links</h4>
                <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
                    {[
                        { label: 'home', path: '/' },
                        { label: 'services', path: '/services' },
                        { label: 'solutions', path: '/solutions' },
                        { label: 'about', path: '/about' },
                        { label: 'contact', path: '/contact' }
                    ].map(link => (
                        <li key={link.label}>
                            <Link to={link.path} className="hover:text-white cursor-pointer transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Contact Us</h4>
                <p className="text-sm font-medium mb-4">📍 Hyderabad, India</p>
                <p className="text-sm font-medium text-[#6EC1FF] mb-6">greatworksolutions.india@gmail.com</p>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/greatwork.solutions?utm_source=qr&igsh=dWVraGE0cGh1dHhv" target="_blank" rel="noreferrer" className="relative w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform flex-shrink-0 group">
                        <img src="/instagram.png" alt="Instagram" className="absolute inset-0 w-full h-full object-cover scale-[1.05] group-hover:scale-[1.15] transition-transform duration-300" />
                    </a>
                    <a href="https://wa.me/qr/7QTLRCDFVZQHP1" target="_blank" rel="noreferrer" className="relative w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform flex-shrink-0 group">
                        <img src="/social.png" alt="WhatsApp" className="absolute inset-0 w-full h-full object-cover scale-[1.05] group-hover:scale-[1.15] transition-transform duration-300" />
                    </a>
                    <a href="https://www.facebook.com/Greatwork.Solutions" target="_blank" rel="noreferrer" className="relative w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform flex-shrink-0 group">
                        <img src="/facebook.png" alt="Facebook" className="absolute inset-0 w-full h-full object-cover scale-[1.05] group-hover:scale-[1.15] transition-transform duration-300" />
                    </a>
                    <a href="https://x.com/Greatwork_Sltns" target="_blank" rel="noreferrer" className="relative w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform flex-shrink-0 group">
                        <img src="/twitter.png" alt="Twitter" className="absolute inset-0 w-full h-full object-cover scale-[1.05] group-hover:scale-[1.15] transition-transform duration-300" />
                    </a>
                </div>
            </div>
            <div>
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Newsletter</h4>
                <div className="flex gap-2">
                    <input type="email" placeholder="email@company.com" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs w-full focus:border-[#1E5EFF] outline-none" />
                    <button className="p-3 bg-[#1E5EFF] text-white rounded-lg"><ChevronRight size={18} /></button>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-6 pt-10 border-t border-white/5 text-[11px] font-black uppercase tracking-widest">
            <p>© 2024 Great Work Agency. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;
