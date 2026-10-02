'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Store } from 'lucide-react';

const clients = [
  { name: 'Orígenes S.R.L.', logo: '/clientes/origenes.png' },
  { name: 'Drovandi Distribuciones', logo: '/clientes/drovandi.png' },
];

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#19B5E8] font-semibold uppercase text-sm tracking-wider">
            Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#173B8C] mt-4 font-heading">
            Empresas con las que trabajamos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#F4F7FA] rounded-2xl p-6 flex flex-col items-center border border-gray-100 hover:border-[#19B5E8]/30 hover:shadow-xl transition-all"
            >
              <div className="h-32 w-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="max-h-full max-w-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <p className="mt-4 text-center font-semibold text-[#173B8C]">
                {client.name}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: clients.length * 0.1 }}
            className="bg-[#F4F7FA] rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-100 text-center"
          >
            <div className="h-32 flex items-center justify-center">
              <Store className="w-14 h-14 text-[#19B5E8]" />
            </div>
            <p className="mt-4 font-semibold text-[#173B8C]">
              Negocios gastronómicos y comerciales
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
