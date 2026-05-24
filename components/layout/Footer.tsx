'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Share2,
  Globe,
  Link as LinkIcon,
  ArrowUp,
} from 'lucide-react';

export default function Footer() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    servicios: [
      { label: 'Infraestructura IT', href: '#servicios' },
      { label: 'Desarrollo Web', href: '#servicios' },
      { label: 'Business Intelligence', href: '#servicios' },
      { label: 'Videovigilancia', href: '#servicios' },
      { label: 'Consultoría', href: '#servicios' },
    ],
    empresa: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Portfolio', href: '#trabajos' },
      { label: 'Contacto', href: '#contacto' },
    ],
  };

  return (
    <footer
      ref={containerRef}
      className="bg-gradient-to-br from-[#111827] via-[#173B8C] to-[#1F4AA8] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.png"
                alt="NexusLabs Logo"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transformando empresas mediante soluciones tecnológicas innovadoras
              en Rosario, Santa Fe.
            </p>
            <div className="flex gap-3">
              {[
                { icon: LinkIcon, href: '#' },
                { icon: Share2, href: '#' },
                { icon: Globe, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 hover:bg-[#19B5E8] rounded-lg flex items-center justify-center transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 font-heading">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#19B5E8] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#19B5E8] transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 font-heading">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#19B5E8] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#19B5E8] transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 font-heading">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#19B5E8] flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  Rosario, Santa Fe
                  <br />
                  Argentina
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#19B5E8] flex-shrink-0 mt-1" />
                <div className="text-white/70">
                  <a
                    href="tel:+5493416536733"
                    className="hover:text-[#19B5E8] transition-colors block"
                  >
                    +54 9 3416 53-6733
                  </a>
                  <a
                    href="tel:+542974327555"
                    className="hover:text-[#19B5E8] transition-colors block"
                  >
                    +54 9 2974 327555
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#19B5E8] flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@nexuslabs.com.ar"
                  className="text-white/70 hover:text-[#19B5E8] transition-colors"
                >
                  info@nexuslabs.com.ar
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} NexusLabs. Todos los derechos reservados.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-[#19B5E8] hover:bg-[#28C7F7] rounded-lg flex items-center justify-center transition-all shadow-lg"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
