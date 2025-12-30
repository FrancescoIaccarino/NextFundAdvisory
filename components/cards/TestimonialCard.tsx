"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export function TestimonialCard({ name, role, company, content, rating }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-dark-bg-card border border-gray-800 rounded-xl p-6 hover:border-nextfund-blue/30 transition-all duration-300"
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-nextfund-gold fill-nextfund-gold' : 'text-gray-600'}`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-300 text-sm mb-6 leading-relaxed">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10 border border-gray-700">
          <AvatarFallback className="bg-nextfund-blue/20 text-white font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{role} • {company}</p>
        </div>
      </div>
    </motion.div>
  );
}
