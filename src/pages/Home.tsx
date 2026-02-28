import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import AboutUsPreview from '../components/home/AboutUsPreview';
import ServicesGrid from '../components/home/ServicesGrid';
import IndustrySolutionsPreview from '../components/home/IndustrySolutionsPreview';
import PerformanceStats from '../components/home/PerformanceStats';
import Testimonials from '../components/home/Testimonials';

import SEO from '../components/SEO';

const Home = () => {
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SEO
                title="Home"
                description="Welcome to GreatWork Academy. We provide top-notch digital presence, professional web design, and cutting-edge solutions for your business."
                keywords="web design, digital marketing, app development, SEO services, business solutions"
            />
            <Hero />
            <AboutUsPreview />
            <ServicesGrid />
            <IndustrySolutionsPreview />
            <PerformanceStats />
            <Testimonials />
            <section className="py-32 bg-[#1E5EFF] text-center text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl lg:text-7xl font-black mb-12 leading-tight">Ready to Elevate Your <br /> Digital Presence?</h2>
                    <Link to="/contact" className="px-12 py-6 bg-[#020617] text-white rounded-full font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform inline-block" aria-label="Start your digital project with us today">Start Project</Link>
                </div>
                <div className="absolute inset-0 bg-[#22E6C3]/20 mix-blend-overlay" aria-hidden="true" />
            </section>
        </motion.main>
    );
};

export default Home;
