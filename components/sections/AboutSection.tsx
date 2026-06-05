'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Building2, Users, Trophy, Target } from 'lucide-react';

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Building2,
      title: 'Profesionalismo',
      description: 'Soluciones enterprise con estándares corporativos',
    },
    {
      icon: Users,
      title: 'Cercanía',
      description: 'Atención personalizada para cada cliente',
    },
    {
      icon: Trophy,
      title: 'Innovación',
      description: 'Tecnología de vanguardia y metodologías ágiles',
    },
    {
      icon: Target,
      title: 'Resultados',
      description: 'Enfocados en el crecimiento de tu negocio',
    },
  ];

  const stats = [
    { label: 'Clientes Activos', value: 10, suffix: '+' },
    { label: 'Proyectos Completados', value: 50, suffix: '+' },
    { label: 'Años de Experiencia', value: 3, suffix: '+' },
    { label: 'Tasa de Satisfacción', value: 99, suffix: '%' },
  ];

  return (
    <section
      id="nosotros"
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-white to-[#F4F7FA]"
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
            Quiénes Somos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#173B8C] mt-4 mb-6 font-heading">
            Tu socio tecnológico en Rosario
          </h2>
          <p className="text-xl text-[#5E6B7A] max-w-3xl mx-auto leading-relaxed">
            <strong className="text-[#173B8C]">NexusLabs</strong> es una empresa
            tecnológica de Rosario especializada en brindar soluciones IT para PyMEs
            y empresas que buscan modernizar sus procesos, optimizar su
            infraestructura y acelerar su crecimiento mediante tecnología.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#19B5E8]/30"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#173B8C] to-[#19B5E8] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#173B8C] mb-2 font-heading">
                {value.title}
              </h3>
              <p className="text-[#5E6B7A]">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-[#173B8C] to-[#1F4AA8] rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">
              Números que nos respaldan
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold mb-2 font-heading">
                    <AnimatedCounter end={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-white/80 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-[#173B8C] text-center mb-12 font-heading">
            Nuestro proceso de trabajo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Análisis',
                description: 'Evaluamos tus necesidades y objetivos empresariales',
              },
              {
                step: '02',
                title: 'Solución',
                description: 'Diseñamos una estrategia tecnológica personalizada',
              },
              {
                step: '03',
                title: 'Implementación',
                description: 'Ejecutamos con seguimiento continuo y soporte',
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#19B5E8] to-[#28C7F7] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {phase.step}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#173B8C] mb-2 font-heading">
                      {phase.title}
                    </h4>
                    <p className="text-[#5E6B7A]">{phase.description}</p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#19B5E8] to-transparent -translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
