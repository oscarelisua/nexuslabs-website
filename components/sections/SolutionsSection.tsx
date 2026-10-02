'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Smartphone,
  BarChart3,
  Plug,
  Cog,
  Truck,
  MessageCircle,
  ClipboardList,
  Globe,
  Check,
} from 'lucide-react';

const solutions = [
  {
    icon: Smartphone,
    title: 'Aplicaciones móviles de campo',
    items: [
      'App para choferes: registro de entregas y cierre de ruta',
      'App para vendedores: toma de pedidos y gestión en la calle',
    ],
  },
  {
    icon: BarChart3,
    title: 'Tableros de control',
    items: [
      'Tableros comerciales: ventas, clientes, rentabilidad y evolución en el tiempo',
      'Panel de stock donde se consulta con preguntas en lenguaje natural',
      'Gestión gerencial para gastronomía con varias sucursales: punto de equilibrio, costo de mercadería, ventas vs. objetivo y costos financieros',
      'Conexión de sus datos a Power BI',
    ],
  },
  {
    icon: Plug,
    title: 'Integración con su sistema de gestión',
    items: [
      'Conexión directa con su ERP (Chess), sin cargas manuales en Excel',
      'Importación automática de ventas desde sus sistemas',
      'Migración de catálogos de miles de artículos entre sistemas',
    ],
  },
  {
    icon: Cog,
    title: 'Automatización administrativa',
    items: [
      'Liquidación automática de horas extras',
      'Liquidación de fleteros',
      'Liquidación de cobros con tarjeta (POSNET)',
      'Herramientas para manejar listas de precios',
    ],
  },
  {
    icon: Truck,
    title: 'Logística y reparto',
    items: [
      'Seguimiento de envíos por chofer',
      'Visibilidad de las entregas en tiempo real',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Comunicación con clientes',
    items: ['Mensajes masivos automáticos por WhatsApp'],
  },
  {
    icon: ClipboardList,
    title: 'Consultoría y diagnóstico',
    items: [
      'Relevamiento y diagnóstico de los procesos de su empresa',
      'Informes ejecutivos y hoja de ruta para la gerencia',
    ],
  },
  {
    icon: Globe,
    title: 'Sitios web y tiendas online',
    items: ['Sitios web y tiendas online con WordPress / WooCommerce'],
  },
];

export default function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" ref={ref} className="py-24 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <span className="text-[#19B5E8] font-semibold uppercase text-sm tracking-wider">
            Soluciones
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#173B8C] mt-4 mb-6 font-heading">
            Lo que desarrollamos para su empresa
          </h2>
          <p className="text-lg text-[#5E6B7A]">
            Herramientas a medida que ahorran tiempo, ordenan la información y
            ayudan a decidir mejor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#19B5E8]/30 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#173B8C] to-[#19B5E8] flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#173B8C] mb-4 font-heading">
                {s.title}
              </h3>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-[#5E6B7A]">
                    <Check className="w-4 h-4 text-[#19B5E8] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
