'use client';

import { FadeInSlideUpItem, StaggerContainer } from "@lib/animationPresets";
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';

const ContactSection: React.FC = () => {
  return (
    <motion.section
      id="contact"
      variants={StaggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full mx-auto scroll-mt-24 grid md:grid-cols-2 gap-12"
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
    </motion.section>
  );
};

export default ContactSection;
