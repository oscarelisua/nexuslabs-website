'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Carlos Méndez',
      position: 'Director General',
      company: 'Industrias del Sur S.A.',
      logo: 'IDS',
      content:
        'NexusLabs transformó completamente nuestra infraestructura IT. La migración a cloud fue impecable y el soporte es excepcional. Nuestros procesos ahora son 3 veces más rápidos.',
      rating: 5,
    },
    {
      name: 'María González',
      position: 'Gerente de Operaciones',
      company: 'Distribuidora Rosario',
      logo: 'DR',
      content:
        'El dashboard de Power BI que desarrollaron nos dio visibilidad total sobre nuestras operaciones. Ahora tomamos decisiones basadas en datos reales en tiempo real.',
      rating: 5,
    },
    {
      name: 'Jorge Fernández',
      position: 'CEO',
      company: 'Tech Solutions Plus',
      logo: 'TSP',
      content:
        'La automatización de procesos que implementaron nos ahorra 20 horas semanales. El ROI fue inmediato. Profesionalismo y expertise de primer nivel.',
      rating: 5,
    },
    {
      name: 'Ana Rodríguez',
      position: 'Directora Administrativa',
      company: 'Comercial Santa Fe',
      logo: 'CSF',
      content:
        'El sistema de videovigilancia instalado superó nuestras expectativas. La calidad de imagen y el acceso remoto son increíbles. Nos sentimos mucho más seguros.',
      rating: 5,
    },
    {
      name: 'Diego Martínez',
      position: 'Gerente IT',
      company: 'Logística Integral',
      logo: 'LI',
      content:
        'El soporte técnico de NexusLabs es excepcional. Siempre disponibles, resuelven problemas en minutos. Se convirtieron en nuestro departamento IT externo.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-br from-[#F4F7FA] to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#19B5E8] rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#173B8C] rounded-full blur-3xl opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#19B5E8] font-semibold uppercase text-sm tracking-wider">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#173B8C] mt-4 mb-6 font-heading">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-[#5E6B7A] max-w-3xl mx-auto">
            Empresas de Rosario y la región confían en nosotros
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#173B8C] to-[#19B5E8] rounded-full flex items-center justify-center shadow-lg">
              <Quote className="text-white" size={28} />
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 fill-[#19B5E8]"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-[#173B8C] leading-relaxed text-center mb-8 font-medium">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#173B8C] to-[#19B5E8] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeIndex].logo}
                </div>
                <div>
                  <div className="font-bold text-[#173B8C] text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-[#5E6B7A]">
                    {testimonials[activeIndex].position}
                  </div>
                  <div className="text-[#19B5E8] font-semibold">
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-[#19B5E8] hover:text-white rounded-full flex items-center justify-center transition-all"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? 'bg-[#19B5E8] w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-[#19B5E8] hover:text-white rounded-full flex items-center justify-center transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
