'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp message
    const message = `Hola! Me contacto desde la web.
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Empresa: ${formData.company}
Mensaje: ${formData.message}`;
    window.open(
      `https://wa.me/5493416536733?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Gerente Comercial',
      content: 'Geremias Bustamante',
      detail: '+54 9 3416 53-6733',
      link: 'tel:+5493416536733',
    },
    {
      icon: Phone,
      title: 'Gerente Operativo',
      content: 'Oscar Aquino',
      detail: '+54 9 2974 327555',
      link: 'tel:+542974327555',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Rosario, Santa Fe',
      detail: 'Argentina',
      link: null,
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@nexuslabs.com.ar',
      detail: 'Consultas y presupuestos',
      link: 'mailto:info@nexuslabs.com.ar',
    },
  ];

  return (
    <section
      id="contacto"
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-white to-[#F4F7FA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#19B5E8] font-semibold uppercase text-sm tracking-wider">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#173B8C] mt-4 mb-6 font-heading">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-[#5E6B7A] max-w-3xl mx-auto">
            Estamos listos para ayudarte a transformar tu empresa con tecnología
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#173B8C] mb-6 font-heading">
                Envíanos un mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#5E6B7A] font-medium mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19B5E8] focus:border-transparent transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#5E6B7A] font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19B5E8] focus:border-transparent transition-all"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#5E6B7A] font-medium mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19B5E8] focus:border-transparent transition-all"
                      placeholder="341 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#5E6B7A] font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19B5E8] focus:border-transparent transition-all"
                    placeholder="Mi Empresa S.A."
                  />
                </div>

                <div>
                  <label className="block text-[#5E6B7A] font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19B5E8] focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto o necesidad tecnológica..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#173B8C] to-[#19B5E8] text-white rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-[#19B5E8]/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Consulta por WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-[#19B5E8]/30 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#173B8C] to-[#19B5E8] rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-[#173B8C] mb-1">{info.title}</h4>
                  <p className="text-[#5E6B7A] text-sm mb-1">{info.content}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-[#19B5E8] font-semibold hover:underline"
                    >
                      {info.detail}
                    </a>
                  ) : (
                    <p className="text-[#5E6B7A] text-sm">{info.detail}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/5493416536733"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1 }}
              whileHover={{ scale: 1.02 }}
              className="block bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">¿Necesitas ayuda inmediata?</h4>
                  <p className="text-white/90">Chatea con nosotros por WhatsApp</p>
                </div>
              </div>
            </motion.a>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107006.77413125378!2d-60.73623758203124!3d-32.95033699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6539335d7d75b%3A0xec4086e90258a557!2sRosario%2C%20Santa%20Fe!5e0!3m2!1sen!2sar!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
