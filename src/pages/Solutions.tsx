import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import IndustrySolutionsPreview from '../components/home/IndustrySolutionsPreview';
import Testimonials from '../components/home/Testimonials';

const Solutions = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white">
            <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" alt="Industry Solutions" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#020617]/70" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/40 via-transparent to-[#22E6C3]/20 mix-blend-overlay" />

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <SectionTitle
                        subtitle="Industry Solutions"
                        title="Strategic Digital Ecosystems"
                        description="We build purpose-built solutions for complex industry requirements."
                        light centered
                    />
                </div>
            </section>
            <IndustrySolutionsPreview />
            <div className="py-20">
                <Testimonials />
            </div>
        </motion.div>
    );
};

export default Solutions;
