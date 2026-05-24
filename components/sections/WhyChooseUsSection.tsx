'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HeartHandshake,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Award,
  Clock,
  Sparkles,
} from 'lucide-react';

export default function WhyChooseUsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: HeartHandshake,
      title: 'Atención Personalizada',
      description:
        'Cada cliente es único. Diseñamos soluciones adaptadas a tus necesidades específicas.',
      color: 'from-[#173B8C] to-[#1F4AA8]',
    },
    {
      icon: TrendingUp,
      title: 'Soluciones Escalables',
      description:
        'Tecnología que crece con tu empresa, preparada para el futuro.',
      color: 'from-[#1F4AA8] to-[#19B5E8]',
    },
    {
      icon: Zap,
      title: 'Tecnología Moderna',
      description:
        'Herramientas de vanguardia y metodologías ágiles para resultados rápidos.',
      color: 'from-[#19B5E8] to-[#28C7F7]',
    },
    {
      icon: Users,
      title: 'Equipo Experto',
      description:
        'Profesionales certificados con años de experiencia en diferentes industrias.',
      color: 'from-[#173B8C] to-[#19B5E8]',
    },
    {
      icon: Clock,
      title: 'Soporte Continuo',
      description:
        'Asistencia técnica permanente y mantenimiento proactivo de tus sistemas.',
      color: 'from-[#1F4AA8] to-[#28C7F7]',
    },
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description:
        'Protección multicapa con las mejores prácticas de ciberseguridad.',
      color: 'from-[#173B8C] to-[#1F4AA8]',
    },
    {
      icon: Award,
      title: 'Calidad Certificada',
      description:
        'Procesos estandarizados y certificaciones internacionales en tecnología.',
      color: 'from-[#19B5E8] to-[#28C7F7]',
    },
    {
      icon: Sparkles,
      title: 'Innovación Constante',
      description:
        'Siempre explorando nuevas tecnologías para mantenerte competitivo.',
      color: 'from-[#1F4AA8] to-[#19B5E8]',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #173B8C 1px, transparent 1px),
            linear-gradient(to bottom, #173B8C 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#19B5E8] font-semibold uppercase text-sm tracking-wider">
            Ventajas Competitivas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#173B8C] mt-4 mb-6 font-heading">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-[#5E6B7A] max-w-3xl mx-auto">
            Más que un proveedor, somos tu socio estratégico en transformación
            digital
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-transparent overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}
                >
                  <feature.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#173B8C] mb-3 font-heading">
                  {feature.title}
                </h3>
                <p className="text-[#5E6B7A] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-[#5E6B7A] mb-6">
            Más de <strong className="text-[#173B8C]">150 empresas</strong> ya
            confiaron en nosotros
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#173B8C] to-[#19B5E8] text-white rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-[#19B5E8]/30 transition-all"
          >
            Descubre cómo podemos ayudarte
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
