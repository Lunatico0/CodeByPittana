'use client';

import { FadeInSlideUpItem, StaggerContainer } from "@lib/animationPresets";
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 w-full max-w-6xl mx-auto px-4 scroll-mt-24 md:scroll-mt-28">

      <motion.div
        variants={StaggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-12 p-2"
      >

        <motion.div variants={FadeInSlideUpItem}>
          <ContactInfoCard />
        </motion.div>

        <motion.div
          variants={FadeInSlideUpItem}
          className="bg-primary/5 p-6 rounded-2xl border border-primary/10"
        >
          <ContactForm />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ContactSection;
