import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RealWorldStories from "@/components/RealWorldStories";
import { Shield, Radio, Lock, Zap, Users, TrendingUp, CheckCircle, Smartphone, Laptop, Home as HomeIcon, ShieldCheck, Usb, Cpu, Activity, Award, Menu, X, AlertTriangle } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-xl border-b border-border/50 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold brand-text-glow">
              BlueGuard
            </span>
            <span className="ml-3 text-xs bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30 animate-pulse">PATENT PENDING</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#threat" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">The Threat</a>
            <a href="#solution" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Solution</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">How It Works</a>
          </div>
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-card/95 backdrop-blur-xl z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <a 
              href="#threat" 
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Threat
            </a>
            <a 
              href="#solution" 
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solution
            </a>
            <a
              href="#how-it-works"
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="main-content" className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_60%)]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20 hover:bg-primary/20 transition-colors duration-300">
              <Zap className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">Hardware-Level Bluetooth Security</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold mb-4 sm:mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="brand-text-glow">BlueGuard</span><br />
            <span className="bg-gradient-to-r from-primary via-primary to-blue-400 bg-clip-text text-transparent">
              One Vulnerability.<br />
              Billions of Devices.<br />
              One Solution.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            The first hardware-level security solution addressing a universal vulnerability
            affecting every Bluetooth-enabled device currently manufactured.
          </p>
          <div className="max-w-4xl mx-auto mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-250">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold brand-text-glow leading-relaxed">
              In plain terms: a pre-boot Bluetooth firewall that closes the global BLE security blind spot from the moment a device powers on.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 mb-8 animate-in fade-in duration-700 delay-300">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Three U.S. Provisional Patents Pending</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400">
            <a href="#how-it-works" aria-label="Learn more about how BlueGuard works">
              <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </a>
            <a href="#contact" aria-label="Request an investor and technical briefing">
              <Button size="lg" variant="outline" className="text-lg px-8 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300">
                Request Investor Briefing
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What is BlueGuard - Product Clarity Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-primary/10 via-card/50 to-transparent border-y border-primary/20 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-8 border border-primary/30 shadow-lg">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide">THE SOLUTION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-10 leading-tight">
              Hardware That Sees Everything.<br />
              <span className="bg-gradient-to-r from-primary via-primary to-blue-400 bg-clip-text text-transparent">Software That Stops Anything.</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              Plug-and-play USB hardware paired with a mobile command center—giving you <span className="text-primary font-semibold">total visibility and instant control</span> over every Bluetooth signal in your environment.
            </p>

            {/* Compatibility showcase with enhanced design */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-card/90 via-card/80 to-card/90 backdrop-blur-md border-2 border-primary/40 rounded-3xl p-10 md:p-12 max-w-5xl mx-auto shadow-2xl group-hover:border-primary/60 transition-all duration-500">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground text-center">
                    Universal. Vendor-Agnostic. Plug-and-Play.
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 text-center max-w-3xl mx-auto leading-relaxed">
                  Works with <span className="text-primary font-semibold">any device</span> that has Bluetooth and a USB port. No firmware changes. No software installation. Just plug in and protect.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 text-base text-muted-foreground">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 group/item transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="font-medium">Consumer Devices</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 group/item transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="font-medium">Smart TVs</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 group/item transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="font-medium">Enterprise Servers</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 group/item transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="font-medium">Medical Equipment</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 group/item transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="font-medium">IoT Networks</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 group/item transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="font-medium">Industrial Systems</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 group/item transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="font-medium">Vehicle Systems</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 group/item transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="font-medium">Smart Buildings</span>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-primary/20">
                  <p className="text-lg md:text-xl text-center leading-relaxed">
                    <span className="text-primary font-bold text-xl md:text-2xl">15+ billion vulnerable devices worldwide.</span><br />
                    <span className="text-muted-foreground">One universal solution.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-20 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            {/* Hardware Layer */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-10 md:p-12 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/40 to-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary/50 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Usb className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">The Hardware</h3>
                    <p className="text-base md:text-lg text-primary font-semibold">Zero-Day Protection Layer</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Pre-Boot Activation</p>
                      <p className="text-muted-foreground leading-relaxed">Powers on before your OS—protection starts the instant electricity flows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Unbypassable Hardware Filter</p>
                      <p className="text-muted-foreground leading-relaxed">Physical layer security that malware and rootkits can't touch</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">True Plug-and-Play</p>
                      <p className="text-muted-foreground leading-relaxed">No drivers, no firmware mods, no integration work—just instant protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Software Layer */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-10 md:p-12 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/40 to-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary/50 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Smartphone className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">The Software</h3>
                    <p className="text-base md:text-lg text-primary font-semibold">Command & Control Center</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Total Network Visibility</p>
                      <p className="text-muted-foreground leading-relaxed">See every Bluetooth broadcast and pairing attempt across all devices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Instant Threat Response</p>
                      <p className="text-muted-foreground leading-relaxed">Approve or block any connection with a single tap—in real time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Intelligent Automation</p>
                      <p className="text-muted-foreground leading-relaxed">Trust lists and policies that learn from your decisions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Value Proposition - Enhanced */}
          <div className="relative group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/40 to-primary/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-primary/15 via-primary/10 to-primary/15 border-2 border-primary/50 rounded-3xl p-12 md:p-16 text-center shadow-2xl group-hover:border-primary/70 transition-all duration-500">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                  The First—and Only—Solution with<br />
                  <span className="bg-gradient-to-r from-primary via-primary to-blue-400 bg-clip-text text-transparent">Complete Bluetooth Sovereignty</span>
                </h3>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
                  For the first time in history, you control <span className="text-primary font-bold">every single Bluetooth signal</span> in your environment.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Not just laptops. Not just phones. <span className="text-foreground font-semibold">Every Bluetooth-enabled device.</span><br />
                  Every pairing request. Every broadcast. Every connection.<br />
                  <span className="text-primary font-bold">Visible. Controllable. Yours.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real World Stories - Jennifer, Celeste, Sarah */}
      <RealWorldStories />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 border border-primary/20">
              <Award className="w-4 h-4" />
              <span className="text-xs font-medium">PATENT PENDING TECHNOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">How <span className="brand-text-glow">BlueGuard</span> Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-3">
              Hardware-enforced security that activates before your operating system even loads.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Practically, BlueGuard sits between existing hardware and the outside world, acting as a vendor-agnostic Bluetooth security layer that OEMs can ship without changing their firmware.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* USB Device Visualization */}
            <div className="relative animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-12 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                <div className="relative">
                  {/* USB Device Illustration */}
                  <div className="bg-card rounded-xl p-8 shadow-2xl border-2 border-primary/40 hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-center mb-6">
                      <Usb className="w-24 h-24 text-primary animate-pulse" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-card-foreground mb-2">BlueGuard USB Device</h3>
                      <p className="text-sm text-muted-foreground mb-4">Plug & Play Hardware Security</p>
                      <div className="grid grid-cols-2 gap-3 text-left">
                        <div className="bg-background/50 p-3 rounded border border-border hover:border-primary/40 transition-colors duration-300 group">
                          <Cpu className="w-5 h-5 text-primary mb-1 group-hover:scale-110 transition-transform duration-300" />
                          <p className="text-xs text-muted-foreground">ARM Cortex-M4</p>
                        </div>
                        <div className="bg-background/50 p-3 rounded border border-border hover:border-primary/40 transition-colors duration-300 group">
                          <Shield className="w-5 h-5 text-primary mb-1 group-hover:scale-110 transition-transform duration-300" />
                          <p className="text-xs text-muted-foreground">AES-256 Crypto</p>
                        </div>
                        <div className="bg-background/50 p-3 rounded border border-border hover:border-primary/40 transition-colors duration-300 group">
                          <Radio className="w-5 h-5 text-primary mb-1 group-hover:scale-110 transition-transform duration-300" />
                          <p className="text-xs text-muted-foreground">Bluetooth 5.2</p>
                        </div>
                        <div className="bg-background/50 p-3 rounded border border-border hover:border-primary/40 transition-colors duration-300 group">
                          <Zap className="w-5 h-5 text-primary mb-1 group-hover:scale-110 transition-transform duration-300" />
                          <p className="text-xs text-muted-foreground">USB Powered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-primary/10 rounded-xl blur-3xl -z-10 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* How It Works Steps */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
              <div className="flex gap-4 group hover:translate-x-1 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-xl font-semibold text-primary">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Pre-Boot Initialization</h4>
                  <p className="text-muted-foreground leading-relaxed">BlueGuard powers on and initializes before your device's operating system loads, establishing a hardware security layer that cannot be bypassed by software attacks.</p>
                </div>
              </div>

              <div className="flex gap-4 group hover:translate-x-1 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-xl font-semibold text-primary">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Bluetooth Monitoring</h4>
                  <p className="text-muted-foreground leading-relaxed">The integrated Bluetooth 5.2 radio monitors all pairing requests and connection attempts, using cryptographic verification to validate every device before allowing access.</p>
                </div>
              </div>

              <div className="flex gap-4 group hover:translate-x-1 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-xl font-semibold text-primary">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Threat Detection & Prevention</h4>
                  <p className="text-muted-foreground leading-relaxed">Real-time pattern recognition identifies suspicious Bluetooth activity and immediately blocks unauthorized pairing attempts, preventing first-boot attacks at the hardware level.</p>
                </div>
              </div>

              <div className="flex gap-4 group hover:translate-x-1 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-xl font-semibold text-primary">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Continuous Protection</h4>
                  <p className="text-muted-foreground leading-relaxed">Once your OS loads, BlueGuard continues monitoring and enforcing security policies, providing 24/7 protection against Bluetooth-based exploits across all platforms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Companion App Control Section */}
          <div className="bg-gradient-to-br from-primary/10 to-card/50 border-2 border-primary/30 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4 border border-primary/30">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm font-semibold">COMPANION APP</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Full Control Over Your Bluetooth Network</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The BlueGuard mobile app gives you complete visibility and control over every Bluetooth broadcast, pairing request, and connection across all your devices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4 group hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 transition-all duration-300">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Real-Time Network Monitoring</h4>
                    <p className="text-muted-foreground leading-relaxed">See every Bluetooth device attempting to connect to any device protected by BlueGuard—phones, laptops, smart home devices, wearables, and more.</p>
                  </div>
                </div>

                <div className="flex gap-4 group hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 transition-all duration-300">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">One-Tap Approval & Blocking</h4>
                    <p className="text-muted-foreground leading-relaxed">Approve or deny pairing requests with a single tap. Unknown device trying to connect? Block it instantly before any data can be exchanged.</p>
                  </div>
                </div>

                <div className="flex gap-4 group hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Allowlists & Blocklists</h4>
                    <p className="text-muted-foreground leading-relaxed">Create custom allowlists for trusted devices (your headphones, car, smartwatch) and blocklists for known threats or unwanted connections.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 group hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 transition-all duration-300">
                    <Radio className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Complete BLE Network Visibility</h4>
                    <p className="text-muted-foreground leading-relaxed">For the first time ever, see your entire Bluetooth Low Energy network—all devices, all connections, all broadcast traffic—in one unified dashboard.</p>
                  </div>
                </div>

                <div className="flex gap-4 group hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 transition-all duration-300">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Threat Alerts & Notifications</h4>
                    <p className="text-muted-foreground leading-relaxed">Receive instant alerts when suspicious pairing attempts are detected, with detailed threat information and recommended actions.</p>
                  </div>
                </div>

                <div className="flex gap-4 group hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 transition-all duration-300">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Multi-Device Management</h4>
                    <p className="text-muted-foreground leading-relaxed">Manage multiple BlueGuard dongles from a single app—protect your entire home, office, or enterprise network from one central location.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-background/50 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-lg font-semibold text-foreground mb-2">
                No Other Solution Offers This Level of Control
              </p>
              <p className="text-muted-foreground">
                Traditional security tools are blind to Bluetooth—they can't see BLE networks, can't intercept pairing requests, and can't protect at boot. <span className="text-primary font-semibold">BlueGuard is the only solution that gives you complete visibility and control over your entire Bluetooth ecosystem.</span>
              </p>
            </div>
          </div>

          {/* Patent Information */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-8 text-center hover:border-primary/40 transition-all duration-500 hover:shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
            <Award className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-semibold text-foreground mb-3">Protected Innovation</h3>
            <p className="text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              BlueGuard's technology is protected by three U.S. provisional patent applications covering our USB-based hardware security device, automated attack surface reduction system, and enterprise management platform.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="bg-background px-4 py-2 rounded-full text-sm border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">Hardware Device Patent</span>
              <span className="bg-background px-4 py-2 rounded-full text-sm border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">Software Method Patent</span>
              <span className="bg-background px-4 py-2 rounded-full text-sm border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">Business System Patent</span>
            </div>
          </div>
        </div>
      </section>

      {/* Initial Markets Strip */}
      <section className="py-10 px-6 bg-gradient-to-r from-primary/5 via-background to-primary/5 border-y border-border/40">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">Who BlueGuard Is Built For</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto mb-6">
            BlueGuard is designed for anyone who relies on Bluetooth—from individuals at home to OEMs and enterprises that ship and secure millions of devices.
          </p>
          <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto text-sm sm:text-base text-muted-foreground">
            <div className="bg-card/70 border border-border rounded-xl p-4">
              <p className="font-medium text-foreground mb-1">Everyday Users & Households</p>
              <p>People who want a simple, plug-and-play way to protect their phones, laptops, wearables, and smart devices.</p>
            </div>
            <div className="bg-card/70 border border-border rounded-xl p-4">
              <p className="font-medium text-foreground mb-1">IT & Security Teams</p>
              <p>Organizations that need boot-level Bluetooth assurance across fleets of endpoints and critical systems.</p>
            </div>
            <div className="bg-card/70 border border-border rounded-xl p-4">
              <p className="font-medium text-foreground mb-1">Device Manufacturers & OEMs</p>
              <p>Vendors looking to ship devices with built-in BLE boot protection and clear security guarantees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLE Network Vulnerability & Critical Boot Window Section */}
      <section id="threat" className="py-20 px-6 bg-gradient-to-b from-red-950/10 to-transparent border-y border-red-500/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full mb-6 border border-red-500/20">
              <AlertTriangle className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">Critical Security Gap</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              The Invisible Network: BLE Is the Global Wireless Security Blind Spot
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              BLE quietly underpins the modern world—from phones and laptops to sensors, vehicles, and wearables—creating invisible wireless networks that almost no one monitors or secures. Unlike WiFi, BLE is often unauthenticated and effectively unprotected at first boot, turning it into a pervasive, unmonitored attack surface.
            </p>
          </div>

          {/* BLE vs WiFi Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="bg-card border-2 border-primary/30 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Radio className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold">WiFi Network</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Password enforcement (WPA2/WPA3) on almost every network</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Strong encryption by default and standardized best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Centralized visibility and management (SSIDs, logs, controllers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Firewall and segmentation as part of normal network design</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border-2 border-red-500/30 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Radio className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-semibold text-red-500">BLE Network</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-red-400">No meaningful authentication or encryption at first boot on most devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-red-400">Devices constantly broadcasting presence with little or no monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-red-400">No central inventory, logs, or policy—BLE is not treated as a network at all</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-red-400">Sits outside traditional firewalls and WiFi controls—a true blind spot</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Critical Boot Window */}
          <div className="bg-gradient-to-br from-red-950/30 to-orange-950/20 border-2 border-red-500/30 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-red-400">The 4-Second Vulnerability Window</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-background/50 rounded-xl p-6 border border-red-500/30">
                <div className="text-4xl font-bold text-red-500 mb-2">0-4 sec</div>
                <h4 className="text-xl font-semibold mb-3 text-red-400">Device Boots</h4>
                <p className="text-muted-foreground text-sm">Bluetooth hardware initializes. BLE network active and vulnerable. <span className="text-red-400 font-semibold">NO PROTECTION YET.</span></p>
              </div>

              <div className="bg-background/50 rounded-xl p-6 border border-orange-500/30">
                <div className="text-4xl font-bold text-orange-500 mb-2">4-7 sec</div>
                <h4 className="text-xl font-semibold mb-3 text-orange-400">OS Loading</h4>
                <p className="text-muted-foreground text-sm">Operating system begins to load. Antivirus still offline. Firewall not active. <span className="text-orange-400 font-semibold">STILL VULNERABLE.</span></p>
              </div>

              <div className="bg-background/50 rounded-xl p-6 border border-green-500/30">
                <div className="text-4xl font-bold text-green-500 mb-2">7+ sec</div>
                <h4 className="text-xl font-semibold mb-3 text-green-400">Security Online</h4>
                <p className="text-muted-foreground text-sm">Traditional security software finally loads. <span className="text-green-400 font-semibold">TOO LATE</span> - attack already complete.</p>
              </div>
            </div>

            <div className="bg-red-950/40 border-2 border-red-500/50 rounded-xl p-6 text-center">
              <p className="text-lg text-red-400 font-semibold mb-2">
                Within 4 seconds, an attacker can: compromise firmware, inject malware, establish persistence
              </p>
              <p className="text-muted-foreground">
                Traditional security solutions load at 7+ seconds. <span className="text-red-400 font-semibold">They are ALWAYS too late.</span>
              </p>
            </div>
          </div>

          {/* How BLE Cascading Attacks Work */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">How Cascading BLE Attacks Spread</h3>

            <div className="space-y-6">
              <div className="bg-card border-l-4 border-red-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500">
                    <span className="text-red-500 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Initial Compromise (0-4 seconds)</h4>
                    <p className="text-muted-foreground">Attacker exploits unprotected BLE during first boot. Like connecting to an open WiFi network—no password needed.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-l-4 border-orange-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border-2 border-orange-500">
                    <span className="text-orange-500 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Device-to-Device Spread (Day 1)</h4>
                    <p className="text-muted-foreground">Compromised device scans for other BLE devices on the network. Your phone, laptop, smart watch—all connected via invisible BLE networks.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center border-2 border-yellow-500">
                    <span className="text-yellow-500 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Network Takeover (Day 2)</h4>
                    <p className="text-muted-foreground">Attacker pivots through BLE connections to WiFi, smart home devices, IoT systems. One compromised device becomes a gateway to everything.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-l-4 border-purple-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border-2 border-purple-500">
                    <span className="text-purple-500 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Silent Persistence (200+ Days)</h4>
                    <p className="text-muted-foreground">Malware embedded in firmware survives reboots, updates, factory resets. Average detection time: 200+ days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BlueGuard Solution */}
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 md:p-12 mt-16 text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4"><span className="brand-text-glow">BlueGuard</span>: The ONLY Solution for the 4-Second Window</h3>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              BlueGuard activates at <span className="text-primary font-semibold">0 seconds</span>—intercepting BLE traffic before the OS even starts loading. We protect the critical window that every other security solution misses.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">0 sec</div>
                <div className="text-sm text-muted-foreground">BlueGuard Active</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">Hardware</div>
                <div className="text-sm text-muted-foreground">USB-Level Protection</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Boot Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">Why <span className="brand-text-glow">BlueGuard</span>?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hardware-level protection for the most critical vulnerability in modern devices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-card hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 group">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">First-Boot Protection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hardware-level security that activates before any software loads, protecting against the most fundamental attacks.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-card hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 group">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
                  <Radio className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">Universal Coverage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Protects all Bluetooth-enabled devices regardless of manufacturer, price point, or existing security features.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-card hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 group">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
                  <Lock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">Patent-Protected</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proprietary technology with three provisional patents creating defensible competitive barriers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Device-Specific Protection Section */}
      <section id="devices" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">Protection for Every Device</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              BlueGuard secures all Bluetooth-enabled hardware from the moment they power on
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smartphones */}
            <Card className="border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-card hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 group">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500">
                  <Smartphone className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">Smartphones</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">Boot-level protection before OS loads</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">Secure Bluetooth pairing from first power-on</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">Protection against firmware-level exploits</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">Hardware-enforced connection policies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Laptops */}
            <Card className="border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-card hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 group">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500">
                  <Laptop className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">Laptops & Computers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">Pre-boot security initialization</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">BlueBorne and BleedingBit exploit prevention</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">Secure peripheral authentication</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">Hardware-level threat detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Smart Home */}
            <Card className="border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-card hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 group">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500">
                  <HomeIcon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">Smart Home & IoT</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">Factory-level security integration</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">Protect smart locks and security systems</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">IoT device boot-time verification</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground">Prevent unauthorized device takeover</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">Market Opportunity</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Addressing a critical need in a rapidly expanding cybersecurity market
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 group">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <div className="text-5xl font-semibold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 tabular-nums">$351B</div>
                <p className="text-muted-foreground">Global cybersecurity market by 2030</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 group">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <div className="text-5xl font-semibold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 tabular-nums">5.6B</div>
                <p className="text-muted-foreground">Bluetooth devices shipped annually worldwide</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 group">
              <CardContent className="pt-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <div className="text-5xl font-semibold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 tabular-nums">75%</div>
                <p className="text-muted-foreground">Organizations restructuring security by 2025 (Gartner)</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Market Analysis */}
          <div className="bg-gradient-to-br from-card/50 to-card/30 border-2 border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
            <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">Bluetooth Security Market Growth</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group">
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">2024 Market Size</span>
                    <span className="text-3xl font-semibold text-primary group-hover:scale-110 transition-transform duration-300">$1.44B</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group">
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">2032 Projected Market</span>
                    <span className="text-3xl font-semibold text-primary group-hover:scale-110 transition-transform duration-300">$4.32B</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/30 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                    <span className="text-foreground font-semibold">Growth Rate (CAGR)</span>
                    <span className="text-3xl font-semibold text-primary group-hover:scale-110 transition-transform duration-300">~15%</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Bluetooth security market is experiencing rapid growth driven by increasing device adoption, 
                  rising cyber threats, and regulatory compliance requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  BlueGuard's hardware-level protection addresses the most fundamental vulnerability in this expanding 
                  ecosystem, positioning us at the forefront of a $4+ billion market opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">Competitive Advantage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Patent-protected innovation in a strategic market position
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-left-6 duration-700 delay-100">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Patent Landscape</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <p className="text-foreground font-medium">Intel Corporation</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Related firmware security patents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <p className="text-foreground font-medium">Texas Instruments</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Bluetooth hardware security IP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <p className="text-foreground font-medium">High Sec Labs</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Boot-level security solutions</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    While established players hold related patents, BlueGuard's unique approach to 
                    <span className="text-primary font-semibold"> first-boot Bluetooth attack prevention</span> creates 
                    a defensible competitive moat.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-right-6 duration-700 delay-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Differentiation</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                    <div>
                      <p className="text-foreground font-medium">Pre-Boot Protection</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Hardware activates before OS loads</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                    <div>
                      <p className="text-foreground font-medium">Universal Compatibility</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Works across all device types and manufacturers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                    <div>
                      <p className="text-foreground font-medium">Plug-and-Play Deployment</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">No firmware modifications required</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                    <div>
                      <p className="text-foreground font-medium">Three Patent Applications</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Comprehensive IP protection strategy</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">Investment Opportunity</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strategic entry into a high-growth market with defensible IP and clear exit potential
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <p className="text-sm text-muted-foreground mb-2">Current Round</p>
                    <p className="text-5xl font-semibold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">Pre-Seed</p>
                    <p className="text-xs text-muted-foreground">Round size available on request</p>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <p className="text-sm text-muted-foreground mb-2">Market Context</p>
                    <p className="text-lg font-semibold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">Billions of BLE devices</p>
                    <p className="text-xs text-muted-foreground">No standard for boot-level BLE security today.</p>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <p className="text-sm text-muted-foreground mb-2">Exit Paths</p>
                    <p className="text-lg font-semibold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">Strategic acquisition</p>
                    <p className="text-xs text-muted-foreground">Chipmakers, security vendors, or major OEMs.</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">Use of Funds</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">Product Development</span>
                        <span className="text-primary font-semibold text-xl group-hover:scale-110 transition-transform duration-300">40%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Hardware prototyping, firmware development, testing</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">Patent Filing</span>
                        <span className="text-primary font-semibold text-xl group-hover:scale-110 transition-transform duration-300">20%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Convert provisional to non-provisional patents</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">Market Validation</span>
                        <span className="text-primary font-semibold text-xl group-hover:scale-110 transition-transform duration-300">25%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Pilot programs, partnerships, early customer acquisition</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">Operations</span>
                        <span className="text-primary font-semibold text-xl group-hover:scale-110 transition-transform duration-300">15%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Team expansion, infrastructure, legal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing & Revenue Model */}
            <div className="mt-12">
              <Card className="bg-gradient-to-br from-primary/10 to-card/50 border-2 border-primary/30 hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Pricing & Revenue Model</h3>

                  {/* Device Price Points */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4 text-center">Device Price Points by Market Segment</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-background/50 p-6 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-primary mb-2">$49-79</div>
                          <p className="text-sm font-semibold text-foreground">Consumer / Prosumer</p>
                        </div>
                        <ul className="text-xs text-muted-foreground space-y-2">
                          <li>• Individual users and households</li>
                          <li>• Direct-to-consumer retail and e-commerce</li>
                          <li>• Plug-and-play USB dongle + mobile app</li>
                          <li>• Protect 1-5 devices per household</li>
                        </ul>
                      </div>

                      <div className="bg-background/50 p-6 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-primary mb-2">$129-249</div>
                          <p className="text-sm font-semibold text-foreground">SMB / Enterprise</p>
                        </div>
                        <ul className="text-xs text-muted-foreground space-y-2">
                          <li>• Small/medium businesses and IT teams</li>
                          <li>• Volume licensing with fleet management</li>
                          <li>• Centralized policy and monitoring dashboard</li>
                          <li>• Protect 10-1000+ endpoints</li>
                        </ul>
                      </div>

                      <div className="bg-background/50 p-6 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-primary mb-2">$5-15</div>
                          <p className="text-sm font-semibold text-foreground">OEM / Embedded</p>
                        </div>
                        <ul className="text-xs text-muted-foreground space-y-2">
                          <li>• Device manufacturers shipping at scale</li>
                          <li>• Integrated into product manufacturing</li>
                          <li>• Per-unit royalty licensing model</li>
                          <li>• Millions of units annually</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Royalty-Based Model */}
                  <div className="border-t border-border pt-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4 text-center">Perpetual Royalty Revenue Model</h4>
                    <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/40 rounded-xl p-6 mb-6">
                      <div className="text-center mb-4">
                        <p className="text-xl font-bold text-foreground mb-2">
                          Every Dongle Sold = Recurring Royalty Revenue
                        </p>
                        <p className="text-sm text-muted-foreground">
                          BlueGuard generates perpetual revenue on every device sold through our OEM licensing program
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-background/50 p-5 rounded-lg border border-border">
                        <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          OEM Licensing Model
                        </h5>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• <span className="text-primary font-semibold">$5-15 per unit royalty</span> for devices shipped with BlueGuard integrated</li>
                          <li>• OEMs pay royalty on <span className="font-semibold">every device manufactured and sold</span></li>
                          <li>• No upfront R&D costs for manufacturers—instant security upgrade</li>
                          <li>• Revenue scales automatically with OEM device shipments</li>
                        </ul>
                      </div>

                      <div className="bg-background/50 p-5 rounded-lg border border-border">
                        <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          Revenue Projections (OEM Channel)
                        </h5>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-primary/5 rounded">
                            <span className="text-sm text-muted-foreground">1 OEM @ 100K units/yr</span>
                            <span className="text-primary font-semibold">$500K-1.5M/yr</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-primary/5 rounded">
                            <span className="text-sm text-muted-foreground">5 OEMs @ 500K units/yr</span>
                            <span className="text-primary font-semibold">$12.5M-37.5M/yr</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-primary/10 rounded border border-primary/30">
                            <span className="text-sm font-semibold text-foreground">10 OEMs @ 1M units/yr</span>
                            <span className="text-primary font-bold text-lg">$50M-150M/yr</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-background/50 border border-primary/20 rounded-xl p-5 text-center">
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Why OEMs Choose BlueGuard's Royalty Model
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-primary font-semibold">Zero upfront investment.</span> No firmware rewrites. Instant boot-level BLE security that ships with every device. OEMs differentiate their products with a security feature their competitors don't have—and BlueGuard earns royalties on <span className="text-primary font-semibold">every single unit sold</span>, creating a perpetual, scalable revenue stream as the OEM's sales grow.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-3">Why Now</h3>
              <div className="text-sm text-muted-foreground max-w-3xl mx-auto space-y-2 leading-relaxed text-left sm:text-center">
                <p>• BLE device volume is exploding across consumer, medical, industrial, and automotive markets, but boot-level security standards do not exist.</p>
                <p>• Regulators are beginning to demand stronger guarantees around device integrity and secure boot paths.</p>
                <p>• Incumbent tools focus on WiFi and OS-level threats, leaving BLE boot sequences untouched—a gap that BlueGuard is purpose-built to close.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">Mission & Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building the missing security layer for the world’s Bluetooth-enabled devices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-left-6 duration-700 delay-100">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mb-6 border-2 border-primary/40 hover:scale-110 hover:rotate-2 transition-all duration-300">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To eliminate first-boot vulnerabilities in Bluetooth-enabled devices through innovative hardware-level security solutions, protecting individuals and organizations from the most fundamental cyber threats.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe every device deserves protection from the moment it powers on—not after the first compromise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-right-6 duration-700 delay-200">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mb-6 border-2 border-primary/40 hover:scale-110 hover:rotate-2 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A world where hardware-level security is the standard, not the exception. Where every Bluetooth-enabled device—from smartphones to smart homes—ships with built-in protection against firmware-level attacks.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We're building the foundation for the next generation of secure computing.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Strategic Focus Areas */}
          <div className="bg-card/50 border-2 border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Strategic Focus Areas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/20 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
                  <Cpu className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Hardware Innovation</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Developing next-generation security chips and USB devices</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/20 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Strategic Partnerships</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Collaborating with device manufacturers and OEMs</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/20 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">IP Portfolio</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Expanding patent protection across hardware and software</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card/30 border-t border-border/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 group">
            <Shield className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-semibold brand-text-glow">BlueGuard</span>
            <span className="ml-3 text-xs bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30">PATENT PENDING</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Hardware-Level Bluetooth Security for Every Device
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 BlueGuard. All rights reserved. | Three U.S. Provisional Patents Pending
          </p>
        </div>
      </footer>
    </div>
  );
}
