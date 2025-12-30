"use client";

import { motion } from "framer-motion";
import { Search, FileText, Send, TrendingUp, CheckCircle } from "lucide-react";
import { ProcessStep } from "@/components/cards/ProcessStep";

const steps = [
  {
    icon: Search,
    title: "Analisi Esigenze",
    description: "Analizziamo la tua azienda e identifichiamo le opportunità di finanziamento più adatte",
  },
  {
    icon: FileText,
    title: "Ricerca Opportunità",
    description: "Il nostro sistema AI seleziona i bandi più rilevanti in tempo reale",
  },
  {
    icon: Send,
    title: "Preparazione Documentazione",
    description: "Gestiamo l'intera documentazione con automazione e controllo qualità",
  },
  {
    icon: TrendingUp,
    title: "Gestione Pratica",
    description: "Seguiamo ogni fase del processo fino all'erogazione dei fondi",
  },
  {
    icon: CheckCircle,
    title: "Monitoraggio Risultati",
    description: "Dashboard in tempo reale per tracciare lo stato di avanzamento",
  },
];

export function ProcessSection() {
  return (
    <section className="py-32 bg-dark-bg-secondary">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Il Nostro Processo
            <br />
            <span className="gradient-text">Semplice, Smart e Scalabile</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dalla prima consulenza all'erogazione dei fondi, ti accompagniamo in ogni passo
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <ProcessStep key={idx} number={idx + 1} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
