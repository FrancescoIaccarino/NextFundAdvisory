"use client";

import { motion } from "framer-motion";

const partners = [
  "Banca Intesa",
  "UniCredit",
  "MISE",
  "Regione Lombardia",
  "Invitalia",
  "CDP",
];

export function LogoBand() {
  return (
    <section className="py-16 bg-dark-bg-secondary border-y border-gray-900">
      <div className="container px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider"
        >
          Partner e Istituzioni di Fiducia
        </motion.p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center"
            >
              <span className="text-gray-600 hover:text-gray-400 transition-colors text-sm font-medium">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
