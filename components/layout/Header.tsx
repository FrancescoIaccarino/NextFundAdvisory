"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-900 bg-dark-bg-primary/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-nextfund-blue to-nextfund-blue-light flex items-center justify-center shadow-glow-blue">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold text-white">
              NextFund Advisory
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#servizi"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Servizi
          </Link>
          <Link
            href="#processo"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Processo
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="#contatti"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Contatti
          </Link>
        </nav>

        {/* CTA Button */}
        <Button
          asChild
          size="sm"
          className="bg-nextfund-blue hover:bg-nextfund-blue-light text-white shadow-glow-blue"
        >
          <Link href="#contatti">Chiamaci Ora</Link>
        </Button>
      </div>
    </header>
  );
}
