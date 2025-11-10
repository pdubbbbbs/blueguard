import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThreatGraph from "@/components/ThreatGraph";
import RealWorldStories from "@/components/RealWorldStories";
import { Shield, Radio, Lock, Zap, Users, TrendingUp, CheckCircle, Smartphone, Laptop, Home as HomeIcon, ShieldCheck, Usb, Cpu, Activity, Award, Mail, Linkedin, Phone, Menu, X } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/90 backdrop-blur-xl border-b border-border z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span
              className="text-2xl font-bold"
              style={{
                color: 'white',
                textShadow: '0 0 10px rgba(59,130,246,0.8), 0 0 20px rgba(59,130,246,0.6), 0 0 30px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.3), -2px -2px 0 rgba(59,130,246,0.5), 2px -2px 0 rgba(59,130,246,0.5), -2px 2px 0 rgba(59,130,246,0.5), 2px 2px 0 rgba(59,130,246,0.5), 0 4px 15px rgba(0,0,0,0.3)',
                WebkitTextStroke: '1px rgba(59,130,246,0.6)',
                filter: 'drop-shadow(0 0 15px rgba(59,130,246,0.7))'
              }}
            >
              BlueGuard
            </span>
            <span className="ml-3 text-xs bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30 animate-pulse">PATENT PENDING</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#threat" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">The Threat</a>
            <a href="#solution" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Solution</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">How It Works</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Contact</a>
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
            <a 
              href="#contact" 
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20 hover:bg-primary/20 transition-colors duration-300">
              <Zap className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">Hardware-Level Bluetooth Security</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span style={{ 
              color: 'white',
              textShadow: '0 0 10px rgba(59,130,246,0.8), 0 0 20px rgba(59,130,246,0.6), 0 0 30px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.3), -2px -2px 0 rgba(59,130,246,0.5), 2px -2px 0 rgba(59,130,246,0.5), -2px 2px 0 rgba(59,130,246,0.5), 2px 2px 0 rgba(59,130,246,0.5), 0 4px 15px rgba(0,0,0,0.3)',
              WebkitTextStroke: '1px rgba(59,130,246,0.6)',
              filter: 'drop-shadow(0 0 15px rgba(59,130,246,0.7))'
            }}>BlueGuard</span><br />
            <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" style={{ textShadow: '0 2px 15px rgba(59,130,246,0.4), 0 4px 25px rgba(59,130,246,0.2)' }}>Protecting Every Device From Day One</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            The first hardware-level security solution addressing a universal vulnerability 
            affecting every Bluetooth-enabled device currently manufactured.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8 animate-in fade-in duration-700 delay-300">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Three U.S. Provisional Patents Pending</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400">
            <Button size="lg" className="text-lg px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Learn More
              <span className="ml-2">→</span>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Real World Stories - Jennifer, Celeste, Sarah */}
      <RealWorldStories />

      {/* Live Threat Visualization Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Activity className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">Live Monitoring</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)' }}>Real-Time Threat Protection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how BlueGuard detects and blocks Bluetooth threats in real-time
            </p>
          </div>
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <ThreatGraph />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 border border-primary/20">
              <Award className="w-4 h-4" />
              <span className="text-xs font-medium">PATENT PENDING TECHNOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)' }}>How BlueGuard Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hardware-enforced security that activates before your operating system even loads
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
              <div className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-xl font-semibold text-primary">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Pre-Boot Initialization</h4>
                  <p className="text-muted-foreground leading-relaxed">BlueGuard powers on and initializes before your device's operating system loads, establishing a hardware security layer that cannot be bypassed by software attacks.</p>
                </div>
              </div>

              <div className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-xl font-semibold text-primary">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Bluetooth Monitoring</h4>
                  <p className="text-muted-foreground leading-relaxed">The integrated Bluetooth 5.2 radio monitors all pairing requests and connection attempts, using cryptographic verification to validate every device before allowing access.</p>
                </div>
              </div>

              <div className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-xl font-semibold text-primary">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Threat Detection & Prevention</h4>
                  <p className="text-muted-foreground leading-relaxed">Real-time pattern recognition identifies suspicious Bluetooth activity and immediately blocks unauthorized pairing attempts, preventing first-boot attacks at the hardware level.</p>
                </div>
              </div>

              <div className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-xl font-semibold text-primary">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Continuous Protection</h4>
                  <p className="text-muted-foreground leading-relaxed">Once your OS loads, BlueGuard continues monitoring and enforcing security policies, providing 24/7 protection against Bluetooth-based exploits across all platforms.</p>
                </div>
              </div>
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

      {/* Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)' }}>Why BlueGuard?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hardware-level protection for the most critical vulnerability in modern devices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-card hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 group">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">First-Boot Protection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hardware-level security that activates before any software loads, protecting against the most fundamental attacks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-card hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 group">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Radio className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">Universal Coverage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Protects all Bluetooth-enabled devices regardless of manufacturer, price point, or existing security features.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-card hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 group">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)' }}>Protection for Every Device</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              BlueGuard secures all Bluetooth-enabled hardware from the moment they power on
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smartphones */}
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-card hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 group">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
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
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-card hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 group">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
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
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-card hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 group">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)' }}>Market Opportunity</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Addressing a critical need in a rapidly expanding cybersecurity market
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 group">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <div className="text-5xl font-semibold text-primary mb-2 group-hover:scale-110 transition-transform duration-300" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.2), 0 2px 0 rgba(59,130,246,0.3), 0 3px 0 rgba(59,130,246,0.2), 0 6px 12px rgba(59,130,246,0.4)' }}>$351B</div>
                <p className="text-muted-foreground">Global cybersecurity market by 2030</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 group">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <div className="text-5xl font-semibold text-primary mb-2 group-hover:scale-110 transition-transform duration-300" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.2), 0 2px 0 rgba(59,130,246,0.3), 0 3px 0 rgba(59,130,246,0.2), 0 6px 12px rgba(59,130,246,0.4)' }}>5.6B</div>
                <p className="text-muted-foreground">Bluetooth devices shipped annually worldwide</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 group">
              <CardContent className="pt-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <div className="text-5xl font-semibold text-primary mb-2 group-hover:scale-110 transition-transform duration-300" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.2), 0 2px 0 rgba(59,130,246,0.3), 0 3px 0 rgba(59,130,246,0.2), 0 6px 12px rgba(59,130,246,0.4)' }}>75%</div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)' }}>Competitive Advantage</h2>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)' }}>Investment Opportunity</h2>
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
                    <p className="text-5xl font-semibold text-primary mb-1 group-hover:scale-110 transition-transform duration-300" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.2), 0 2px 0 rgba(59,130,246,0.3), 0 3px 0 rgba(59,130,246,0.2), 0 6px 12px rgba(59,130,246,0.4)' }}>$250K</p>
                    <p className="text-xs text-muted-foreground">Seed Investment</p>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <p className="text-sm text-muted-foreground mb-2">20-Year Projection</p>
                    <p className="text-5xl font-semibold text-primary mb-1 group-hover:scale-110 transition-transform duration-300" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.2), 0 2px 0 rgba(59,130,246,0.3), 0 3px 0 rgba(59,130,246,0.2), 0 6px 12px rgba(59,130,246,0.4)' }}>$2B-$8B</p>
                    <p className="text-xs text-muted-foreground">Potential Valuation</p>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <p className="text-sm text-muted-foreground mb-2">Potential ROI</p>
                    <p className="text-5xl font-semibold text-primary mb-1 group-hover:scale-110 transition-transform duration-300" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.2), 0 2px 0 rgba(59,130,246,0.3), 0 3px 0 rgba(59,130,246,0.2), 0 6px 12px rgba(59,130,246,0.4)' }}>8,000x-32,000x</p>
                    <p className="text-xs text-muted-foreground">Over 20 Years</p>
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

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Strategic timing in the 2024-2025 window before widespread market awareness creates 
                a unique opportunity for early investors to capture significant value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)' }}>Mission & Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building a more secure digital future, one device at a time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-left-6 duration-700 delay-100">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mb-6 border-2 border-primary/40 hover:scale-110 hover:rotate-6 transition-all duration-300">
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
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mb-6 border-2 border-primary/40 hover:scale-110 hover:rotate-6 transition-all duration-300">
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
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Cpu className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Hardware Innovation</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Developing next-generation security chips and USB devices</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Strategic Partnerships</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Collaborating with device manufacturers and OEMs</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">IP Portfolio</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Expanding patent protection across hardware and software</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)' }}>Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experienced leaders driving innovation in hardware security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Philip S. Wright - CEO */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 group">
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-3xl font-semibold text-primary">PW</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Philip S. Wright</h3>
                <p className="text-sm text-primary mb-4 font-semibold">Founder & CEO</p>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-300 group/item">
                    <Mail className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-300" />
                    <a href="mailto:pwright@bluetoothdefense.com" className="hover:underline">pwright@bluetoothdefense.com</a>
                  </div>
                  <div className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-300 group/item">
                    <Phone className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-300" />
                    <a href="tel:+15103816988" className="hover:underline">+1 (510) 381-6988</a>
                  </div>
                  <div className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-300 group/item">
                    <Linkedin className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-300" />
                    <a href="https://linkedin.com/in/philipswright" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Steven Blatt - CIO */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 group">
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-3xl font-semibold text-primary">SB</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Steven Blatt</h3>
                <p className="text-sm text-primary mb-4 font-semibold">Chief Information Officer</p>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-300 group/item">
                    <Mail className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-300" />
                    <a href="mailto:sblatt@bluetoothdefense.com" className="hover:underline">sblatt@bluetoothdefense.com</a>
                  </div>
                  <div className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-300 group/item">
                    <Phone className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-300" />
                    <a href="tel:+15103816988" className="hover:underline">+1 (510) 381-6988</a>
                  </div>
                  <div className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-300 group/item">
                    <Linkedin className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-300" />
                    <a href="https://linkedin.com/in/stevenblatt" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lesli Mayorga - CFO */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 group">
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-3xl font-semibold text-primary">LM</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Lesli Mayorga</h3>
                <p className="text-sm text-primary mb-4 font-semibold">Chief Financial Officer</p>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-300 group/item">
                    <Mail className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-300" />
                    <a href="mailto:lmayorga@bluetoothdefense.com" className="hover:underline">lmayorga@bluetoothdefense.com</a>
                  </div>
                  <div className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-300 group/item">
                    <Phone className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-300" />
                    <a href="tel:+15103816988" className="hover:underline">+1 (510) 381-6988</a>
                  </div>
                  <div className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-300 group/item">
                    <Linkedin className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-300" />
                    <a href="https://linkedin.com/in/leslimayorga" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center animate-in fade-in duration-700 delay-400">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Interested in learning more about BlueGuard or discussing investment opportunities?
            </p>
            <Button size="lg" className="text-lg px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Schedule a Meeting
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card/50 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 group">
            <Shield className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-semibold text-primary">BlueGuard</span>
            <span className="ml-3 text-xs bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30">PATENT PENDING</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Hardware-Level Bluetooth Security for Every Device
          </p>
          <p className="text-xs text-muted-foreground">
            © 2024 BlueGuard. All rights reserved. | Three U.S. Provisional Patents Pending
          </p>
        </div>
      </footer>
    </div>
  );
}
