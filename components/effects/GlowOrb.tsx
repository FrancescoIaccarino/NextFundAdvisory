"use client";

export function GlowOrb() {
  return (
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative w-[500px] h-[500px]">
        {/* Main Orb */}
        <div className="absolute inset-0 rounded-full bg-nextfund-blue opacity-20 blur-3xl animate-float" />

        {/* Inner Glow */}
        <div className="absolute inset-[20%] rounded-full bg-nextfund-blue opacity-30 blur-2xl animate-glow-pulse" />

        {/* Core */}
        <div className="absolute inset-[40%] rounded-full bg-nextfund-blue opacity-50 blur-xl" />
      </div>
    </div>
  );
}
