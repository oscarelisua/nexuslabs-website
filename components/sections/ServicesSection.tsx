'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Server,
  Code,
  BarChart3,
  Camera,
  Lightbulb,
  Network,
  Shield,
  Database,
  Cloud,
  Cpu,
  Bot,
  TrendingUp,
  Lock,
  Workflow,
} from 'lucide-react';

export default function ServicesSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const serviceCategories = [
    {
      id: 0,
      title: 'Infraestructura IT',
      icon: Server,
      color: 'from-[#173B8C] to-[#1F4AA8]',
      services: [
        { icon: Network, name: 'Soporte técnico empresarial' },
        { icon: Server, name: 'Mantenimiento IT' },
        { icon: Network, name: 'Redes y conectividad' },
        { icon: Database, name: 'Servidores' },
        { icon: Cpu, name: 'Virtualización' },
        { icon: Database, name: 'File servers' },
        { icon: Shield, name: 'Backup empresarial' },
        { icon: Lock, name: 'Seguridad informática' },
        { icon: Workflow, name: 'Migraciones' },
        { icon: Cloud, name: 'Cloud computing' },
      ],
    },
    {
      id: 1,
      title: 'Desarrollo y Automatización',
      icon: Code,
      color: 'from-[#1F4AA8] to-[#19B5E8]',
      services: [
        { icon: Code, name: 'Desarrollo web' },
        { icon: Server, name: 'Sistemas empresariales' },
        { icon: BarChart3, name: 'Dashboards' },
        { icon: Workflow, name: 'Automatización de procesos' },
        { icon: Code, name: 'Python' },
        { icon: Code, name: 'Streamlit' },
        { icon: Network, name: 'APIs' },
        { icon: Workflow, name: 'Integraciones' },
        { icon: Bot, name: 'Inteligencia artificial' },
        { icon: Bot, name: 'Bots empresariales' },
      ],
    },
    {
      id: 2,
      title: 'Business Intelligence',
      icon: BarChart3,
      color: 'from-[#19B5E8] to-[#28C7F7]',
      services: [
        { icon: BarChart3, name: 'Power BI' },
        { icon: TrendingUp, name: 'Dashboards ejecutivos' },
        { icon: BarChart3, name: 'Métricas empresariales' },
        { icon: Workflow, name: 'Análisis de procesos' },
        { icon: TrendingUp, name: 'Reportes automáticos' },
        { icon: BarChart3, name: 'KPIs' },
        { icon: TrendingUp, name: 'Optimización operativa' },
      ],
    },
    {
      id: 3,
      title: 'Videovigilancia y Seguridad',
      icon: Camera,
      color: 'from-[#1F4AA8] to-[#173B8C]',
      services: [
        { icon: Camera, name: 'Cámaras IP' },
        { icon: Camera, name: 'CCTV' },
        { icon: Shield, name: 'Monitoreo' },
        { icon: Lock, name: 'Control de acceso' },
        { icon: Camera, name: 'Soluciones Pelco' },
        { icon: Shield, name: 'Seguridad empresarial' },
      ],
    },
    {
      id: 4,
      title: 'Consultoría Tecnológica',
      icon: Lightbulb,
      color: 'from-[#28C7F7] to-[#19B5E8]',
      services: [
        { icon: Lightbulb, name: 'Transformación digital' },
        { icon: TrendingUp, name: 'Optimización tecnológica' },
        { icon: Shield, name: 'Diagnóstico IT' },
        { icon: BarChart3, name: 'Auditorías' },
        { icon: Lightbulb, name: 'Asesoramiento estratégico' },
        { icon: Workflow, name: 'Modernización empresarial' },
      ],
    },
  ];

  return (
    <section
      id="servicios"
      ref={containerRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[#F4F7FA] to-transparent opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#19B5E8] font-semibold uppercase text-sm tracking-wider">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#173B8C] mt-4 mb-6 font-heading">
            Soluciones tecnológicas integrales
          </h2>
          <p className="text-xl text-[#5E6B7A] max-w-3xl mx-auto">
            Ofrecemos un portafolio completo de servicios IT diseñados para
            impulsar el crecimiento de tu empresa
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-100 text-[#5E6B7A] hover:bg-gray-200'
              }`}
            >
              <category.icon size={20} />
              <span className="hidden sm:inline">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-white to-[#F4F7FA] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${serviceCategories[activeCategory].color} rounded-xl flex items-center justify-center`}
              >
                {(() => {
                  const Icon = serviceCategories[activeCategory].icon;
                  return <Icon className="text-white" size={32} />;
                })()}
              </div>
              <h3 className="text-3xl font-bold text-[#173B8C] font-heading">
                {serviceCategories[activeCategory].title}
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceCategories[activeCategory].services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#19B5E8]/30 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#19B5E8]/10 to-[#28C7F7]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="text-[#19B5E8]" size={20} />
                  </div>
                  <span className="text-[#173B8C] font-medium">{service.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-[#173B8C] to-[#19B5E8] rounded-3xl p-12 text-white relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
            }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              ¿Listo para modernizar tu empresa?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Nuestro equipo está preparado para analizar tus necesidades y
              diseñar la solución perfecta
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-[#173B8C] rounded-lg font-bold text-lg hover:shadow-2xl transition-all"
            >
              Solicitar Consultoría Gratuita
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
