"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Come funziona la finanza agevolata?",
    answer: "La finanza agevolata è un sistema di incentivi pubblici (bandi, contributi a fondo perduto, finanziamenti agevolati) erogati da enti pubblici per supportare investimenti aziendali. Il nostro sistema AI analizza automaticamente migliaia di bandi per trovare quelli più adatti alla tua azienda.",
  },
  {
    question: "Quali bandi sono disponibili per la mia azienda?",
    answer: "Utilizziamo algoritmi di machine learning per fare un matching preciso tra le caratteristiche della tua azienda (settore, dimensione, localizzazione, tipo di investimento) e i bandi disponibili a livello europeo, nazionale e regionale. Ricevi alert personalizzati in tempo reale.",
  },
  {
    question: "Quanto tempo richiede il processo?",
    answer: "Grazie all'automazione, riduciamo drasticamente i tempi. L'analisi preliminare richiede 24-48h, la preparazione documentazione 1-2 settimane (vs 1-2 mesi del processo tradizionale). Una volta inviata la domanda, i tempi dipendono dall'ente erogatore.",
  },
  {
    question: "Quali sono i costi del servizio?",
    answer: "Lavoriamo con un modello success fee: paghi solo se ottieni il finanziamento. La fee è una percentuale del contributo ottenuto, concordata in fase di consulenza iniziale. Nessun costo anticipato, massima trasparenza.",
  },
  {
    question: "Come posso iniziare?",
    answer: "Semplice: richiedi una consulenza gratuita, analizziamo la tua azienda con il nostro sistema AI, ti presentiamo le opportunità disponibili e, se decidi di procedere, gestiamo tutto noi. Dalla candidatura alla rendicontazione.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-32 bg-dark-bg-secondary">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Abbiamo le Risposte che
            <br />
            <span className="gradient-text">Stai Cercando</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Domande frequenti sulla finanza agevolata e i nostri servizi
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-dark-bg-card border border-gray-800 rounded-lg px-6 data-[state=open]:border-nextfund-blue/30"
              >
                <AccordionTrigger className="text-left text-white hover:text-nextfund-blue transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
