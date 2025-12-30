"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Settings, BarChart3 } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";

const features = [
  {
    icon: Target,
    title: "Ricerca e Selezione Bandi",
    description:
      "Identifichiamo i bandi più adatti al tuo business attraverso un'analisi approfondita delle tue esigenze.",
    features: [
      "Matching personalizzato bandi-azienda",
      "Monitoraggio costante nuove opportunità",
      "Database completo bandi EU, nazionali e regionali",
    ],
  },
  {
    icon: Settings,
    title: "Gestione Completa Pratiche",
    description:
      "Dalla compilazione alla rendicontazione, ti supportiamo in ogni fase del processo.",
    features: [
      "Supporto completo end-to-end",
      "Gestione documentale centralizzata",
      "Monitoraggio timeline e scadenze",
    ],
  },
  {
    icon: BarChart3,
    title: "Consulenza Strategica",
    description:
      "Business plan e strategie basate su dati concreti e analisi di mercato approfondite.",
    features: [
      "Analisi finanziaria e forecasting",
      "Analisi di mercato dettagliata",
      "Monitoraggio KPI e performance",
    ],
  },
  {
    icon: TrendingUp,
    title: "Accompagnamento alla Crescita",
    description:
      "Ti affianchiamo nel percorso di crescita della tua azienda con strategie mirate e supporto continuo.",
    features: [
      "Pianificazione strategica crescita",
      "Ottimizzazione processi aziendali",
      "Supporto operativo continuo",
    ],
  },
];

export function FeatureShowcase() {
  return (
    <section id="servizi" className="py-32 bg-dark-bg-primary">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluzioni di Finanza Agevolata che Portano il Tuo
            <br />
            <span className="gradient-text">Business al Prossimo Livello</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluzioni complete e personalizzate per accelerare la crescita del tuo business
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
