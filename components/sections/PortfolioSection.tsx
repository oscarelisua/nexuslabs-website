'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

export default function PortfolioSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'infraestructura', label: 'Infraestructura' },
    { id: 'desarrollo', label: 'Desarrollo' },
    { id: 'camaras', label: 'Videovigilancia' },
    { id: 'dashboards', label: 'BI & Dashboards' },
  ];

  const projects = [
    {
      id: 1,
      category: 'infraestructura',
      title: 'Data Center Corporativo',
      description: 'Instalación completa de rack de servidores',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      category: 'desarrollo',
      title: 'Sistema de Gestión Empresarial',
      description: 'ERP personalizado para empresa manufacturera',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      category: 'camaras',
      title: 'CCTV Industrial',
      description: 'Red de 50+ cámaras IP con análisis de video',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      category: 'dashboards',
      title: 'Dashboard Ejecutivo Power BI',
      description: 'Métricas en tiempo real para C-Level',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      id: 5,
      category: 'infraestructura',
      title: 'Cableado Estructurado',
      description: 'Instalación Cat6A en oficinas corporativas',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    },
    {
      id: 6,
      category: 'desarrollo',
      title: 'Portal de Autogestión',
      description: 'Web app para clientes con pagos integrados',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      id: 7,
      category: 'camaras',
      title: 'Control de Acceso Biométrico',
      description: 'Sistema de seguridad multicapa',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    },
    {
      id: 8,
      category: 'infraestructura',
      title: 'Migración a Cloud',
      description: 'Infraestructura híbrida AWS/On-premise',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    },
    {
      id: 9,
      category: 'dashboards',
      title: 'Analytics en Tiempo Real',
      description: 'Streamlit dashboard para análisis de ventas',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="trabajos"
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-[#F4F7FA] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#19B5E8] font-semibold uppercase text-sm tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#173B8C] mt-4 mb-6 font-heading">
            Proyectos que transforman empresas
          </h2>
          <p className="text-xl text-[#5E6B7A] max-w-3xl mx-auto">
            Casos de éxito en infraestructura, desarrollo, seguridad y business
            intelligence
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#173B8C] to-[#19B5E8] text-white shadow-lg'
                  : 'bg-white text-[#5E6B7A] hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setSelectedImage(project.id)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#173B8C]/90 via-[#173B8C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#173B8C]">
                {categories.find((c) => c.id === project.category)?.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#19B5E8] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  projects.find((p) => p.id === selectedImage)?.image || ''
                }
                alt=""
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2 font-heading">
                  {projects.find((p) => p.id === selectedImage)?.title}
                </h3>
                <p className="text-white/80">
                  {projects.find((p) => p.id === selectedImage)?.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
