import React from "react";

export default function ByTheNumbers() {
  return (
    <section className="py-16 px-6 bg-muted/40 border-t border-border">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-foreground">
          By the Numbers
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Jennifer, Celeste, and Sarah live very different lives. The same class of vulnerabilities runs underneath all of them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">200+</div>
            <div className="font-semibold text-foreground mb-1">Days Undetected</div>
            <p className="text-sm text-muted-foreground">
              Average dwell time for advanced threats originating from firmware and first-boot compromises.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">21,500+</div>
            <div className="font-semibold text-foreground mb-1">New CVEs in 6 Months</div>
            <p className="text-sm text-muted-foreground">
              H1 2025 alone, averaging 133 new vulnerabilities per day across the ecosystem.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl font-bold text-orange-500 mb-2">90%</div>
            <div className="font-semibold text-foreground mb-1">Smart Devices Vulnerable</div>
            <p className="text-sm text-muted-foreground">
              Studies show 9 out of 10 smart devices ship with at least one exploitable vulnerability.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-500 mb-2">70%</div>
            <div className="font-semibold text-foreground mb-1">Critical CVEs in Hardware/Firmware</div>
            <p className="text-sm text-muted-foreground">
              Most newly discovered critical flaws live below the OS, where traditional defenses cant see them.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl font-bold text-foreground mb-2">$169</div>
            <div className="font-semibold text-foreground mb-1">To Defeat $50M</div>
            <p className="text-sm text-muted-foreground">
              The cost of the device that breached Celestes $50M home and $2M security stack.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl font-bold text-foreground mb-2">3</div>
            <div className="font-semibold text-foreground mb-1">Lives, One Pattern</div>
            <p className="text-sm text-muted-foreground">
              Journalist, actress, therapisteach taken down by the same invisible layer every device ships with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
