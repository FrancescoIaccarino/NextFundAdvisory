"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function FeatureCard({ icon: Icon, title, description, features }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative group"
    >
      <div className="relative bg-dark-bg-card border border-gray-800 rounded-xl p-8 h-full hover:border-nextfund-blue/50 transition-all duration-300">
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-nextfund-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-14 h-14 rounded-lg bg-nextfund-blue/10 flex items-center justify-center mb-6 group-hover:bg-nextfund-blue/20 transition-colors">
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">{description}</p>

          {/* Features List */}
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-nextfund-blue mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
