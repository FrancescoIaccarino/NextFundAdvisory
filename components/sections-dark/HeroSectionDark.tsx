"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { GridPattern } from "@/components/effects/GridPattern";

export function HeroSectionDark() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg-primary">
      {/* Background Effects */}
      <GridPattern />
      <GlowOrb />

      {/* Content */}
      <div className="container relative z-10 px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nextfund-blue/10 border border-nextfund-blue/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-gray-300">Finanza Agevolata di Nuova Generazione</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">
              Trasforma le Opportunità di Finanziamento
            </span>
            <br />
            <span className="text-white">
              in Crescita Concreta
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Trasformiamo le opportunità di finanziamento in crescita concreta con
            tecnologie innovative e consulenza strategica
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-nextfund-blue hover:bg-nextfund-blue-light text-white px-8 shadow-glow-blue hover:shadow-glow-blue-lg transition-all"
            >
              <Link href="#servizi">
                Scopri i Nostri Servizi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white px-8"
            >
              <Link href="#contatti">
                Chiamaci Ora
                <Phone className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            <div>
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-sm text-gray-500">Clienti Soddisfatti</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">400k+</div>
              <div className="text-sm text-gray-500">Euro Raccolti</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
