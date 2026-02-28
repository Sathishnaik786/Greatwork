import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ServicesGrid from '../components/home/ServicesGrid';
import PerformanceStats from '../components/home/PerformanceStats';
import SEO from '../components/SEO';

const Services = () => {
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white">
            <SEO
                title="Our Services"
                description="Explore Great Work Academy's comprehensive digital services, including web development, mobile app design, and digital marketing."
                keywords="web development services, mobile app design, SEO agency, software development company, marketing solutions"
            />
            <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" alt="Digital Services" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#020617]/70" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/40 via-transparent to-[#22E6C3]/20 mix-blend-overlay" />

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <SectionTitle
                        subtitle="Expertise"
                        title="Our Full Range of Digital Services"
                        description="From conceptualization to deployment, we provide end-to-end digital excellence."
                        light centered
                    />
                </div>
            </section>
            <ServicesGrid />
            <PerformanceStats />
        </motion.main>
    );
};

export default Services;
