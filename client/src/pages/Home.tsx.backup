import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThreatGraph from "@/components/ThreatGraph";
import { Shield, Radio, Lock, Zap, Users, TrendingUp, CheckCircle, Smartphone, Laptop, Home as HomeIcon, AlertTriangle, Clock, ShieldCheck, Usb, Cpu, Activity, BarChart3, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">BlueGuard</span>
            <span className="ml-3 text-xs bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30">PATENT PENDING</span>
          </div>
          <div className="flex gap-6">
            <a href="#threat" className="text-foreground hover:text-primary transition-colors">The Threat</a>
            <a href="#solution" className="text-foreground hover:text-primary transition-colors">Solution</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Hardware-Level Bluetooth Security</span>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
            BlueGuard<br />
            <span className="text-primary">Protecting Every Device From Day One</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            The first hardware-level security solution addressing a universal vulnerability 
            affecting every Bluetooth-enabled device currently manufactured.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Three U.S. Provisional Patents Pending</span>
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Threat Statistics Bar */}
      <section className="py-8 px-6 bg-red-500/10 border-y border-red-500/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-red-500" />
                <div className="text-3xl font-bold text-red-500">5.6B</div>
              </div>
              <p className="text-sm text-muted-foreground">Vulnerable devices shipped annually</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <div className="text-3xl font-bold text-orange-500">100%</div>
              </div>
              <p className="text-sm text-muted-foreground">Current devices lack first-boot protection</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-yellow-500" />
                <div className="text-3xl font-bold text-yellow-500">47%</div>
              </div>
              <p className="text-sm text-muted-foreground">Security incidents from unpatched vulnerabilities</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-3xl font-bold text-primary">2024-25</div>
              </div>
              <p className="text-sm text-muted-foreground">Critical deployment window</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Threat Visualization Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Real-Time Threat Protection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how BlueGuard detects and blocks Bluetooth threats in real-time
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ThreatGraph />
          </div>
        </div>
      </section>

      {/* Three Opening Stories Section */}
      <section id="threat" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">The Critical Security Gap</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the universal vulnerability and the urgent need for protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Story 1: The Threat is Real */}
            <Card className="border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-xl bg-card">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-red-500/20">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-card-foreground">The Threat is Real</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  A critical security gap affects every device currently on the market. This universal vulnerability 
                  impacts all hardware regardless of existing security measures.
                </p>
                <div className="bg-background/50 p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "Exploits against unpatched vulnerabilities account for nearly half of all security incidents, 
                    demonstrating the critical need for robust, foundational hardware-level protection."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-semibold">— IBM Security X-Force, 2023</p>
                </div>
              </CardContent>
            </Card>

            {/* Story 2: The Window is Closing */}
            <Card className="border-2 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl bg-card">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-orange-500/20">
                  <Clock className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-card-foreground">The Window is Closing</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  2024-2025 represents a critical timeframe for deployment before widespread exploitation 
                  of this vulnerability becomes the norm across all devices.
                </p>
                <div className="bg-background/50 p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "Firmware vulnerabilities are a persistent and growing threat, often exploited in the 
                    earliest stages of an attack, underlining the urgency for pre-boot protection."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-semibold">— NIST</p>
                </div>
              </CardContent>
            </Card>

            {/* Story 3: BlueGuard is the Solution */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-primary/20">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-card-foreground">BlueGuard is the Solution</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Our hardware-level protection addresses first-boot attacks, specifically targeting this 
                  universal exploit across all devices with no exceptions.
                </p>
                <div className="bg-background/50 p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "The weakest link is often the first one. If you can compromise a device at boot, you own it completely, 
                    regardless of subsequent software security measures."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-semibold">— Bruce Schneier, Security Expert</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 border border-primary/20">
              <Award className="w-4 h-4" />
              <span className="text-xs font-medium">PATENT PENDING TECHNOLOGY</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">How BlueGuard Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hardware-enforced security that activates before your operating system even loads
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* USB Device Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-12 border-2 border-primary/30">
                <div className="relative">
                  {/* USB Device Illustration */}
                  <div className="bg-card rounded-xl p-8 shadow-2xl border-2 border-primary/40">
                    <div className="flex items-center justify-center mb-6">
                      <Usb className="w-24 h-24 text-primary" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">BlueGuard USB Device</h3>
                      <p className="text-sm text-muted-foreground mb-4">Plug & Play Hardware Security</p>
                      <div className="grid grid-cols-2 gap-3 text-left">
                        <div className="bg-background/50 p-3 rounded border border-border">
                          <Cpu className="w-5 h-5 text-primary mb-1" />
                          <p className="text-xs text-muted-foreground">ARM Cortex-M4</p>
                        </div>
                        <div className="bg-background/50 p-3 rounded border border-border">
                          <Shield className="w-5 h-5 text-primary mb-1" />
                          <p className="text-xs text-muted-foreground">AES-256 Crypto</p>
                        </div>
                        <div className="bg-background/50 p-3 rounded border border-border">
                          <Radio className="w-5 h-5 text-primary mb-1" />
                          <p className="text-xs text-muted-foreground">Bluetooth 5.2</p>
                        </div>
                        <div className="bg-background/50 p-3 rounded border border-border">
                          <Zap className="w-5 h-5 text-primary mb-1" />
                          <p className="text-xs text-muted-foreground">USB Powered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-primary/10 rounded-xl blur-3xl -z-10"></div>
                </div>
              </div>
            </div>

            {/* How It Works Steps */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Pre-Boot Initialization</h4>
                  <p className="text-muted-foreground">BlueGuard powers on and initializes before your device's operating system loads, establishing a hardware security layer that cannot be bypassed by software attacks.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Bluetooth Monitoring</h4>
                  <p className="text-muted-foreground">The integrated Bluetooth 5.2 radio monitors all pairing requests and connection attempts, using cryptographic verification to validate every device before allowing access.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Threat Detection & Prevention</h4>
                  <p className="text-muted-foreground">Real-time pattern recognition identifies suspicious Bluetooth activity and immediately blocks unauthorized pairing attempts, preventing first-boot attacks at the hardware level.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Continuous Protection</h4>
                  <p className="text-muted-foreground">Once your OS loads, BlueGuard continues monitoring and enforcing security policies, providing 24/7 protection against Bluetooth-based exploits across all platforms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Patent Information */}
          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Protected Innovation</h3>
            <p className="text-muted-foreground mb-4 max-w-3xl mx-auto">
              BlueGuard's technology is protected by three U.S. provisional patent applications covering our USB-based hardware security device, automated attack surface reduction system, and enterprise management platform.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="bg-background px-4 py-2 rounded-full text-sm border border-border">Hardware Device Patent</span>
              <span className="bg-background px-4 py-2 rounded-full text-sm border border-border">Software Method Patent</span>
              <span className="bg-background px-4 py-2 rounded-full text-sm border border-border">Business System Patent</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why BlueGuard?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hardware-level protection for the most critical vulnerability in modern devices
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">First-Boot Protection</h3>
                <p className="text-muted-foreground">
                  Hardware-level security that activates before any software loads, protecting against the most fundamental attacks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                  <Radio className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Universal Coverage</h3>
                <p className="text-muted-foreground">
                  Protects all Bluetooth-enabled devices regardless of manufacturer, price point, or existing security features.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Patent-Protected</h3>
                <p className="text-muted-foreground">
                  Proprietary technology with three provisional patents creating defensible competitive barriers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Device-Specific Protection Section */}
      <section id="devices" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Protection for Every Device</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              BlueGuard secures all Bluetooth-enabled hardware from the moment they power on
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Smartphones */}
            <Card className="border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-primary/20">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-card-foreground">Smartphones</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Boot-level protection before OS loads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Secure Bluetooth pairing from first power-on</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Protection against firmware-level exploits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Hardware-enforced connection policies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Laptops */}
            <Card className="border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-primary/20">
                  <Laptop className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-card-foreground">Laptops & Computers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Pre-boot security initialization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">BlueBorne and BleedingBit exploit prevention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Secure peripheral authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Hardware-level threat detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Smart Home */}
            <Card className="border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-primary/20">
                  <HomeIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-card-foreground">Smart Home & IoT</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Factory-level security integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Protect smart locks and security systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">IoT device boot-time verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Prevent unauthorized device takeover</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Market Opportunity</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Addressing a critical need in a rapidly expanding cybersecurity market
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">$351B</div>
                <p className="text-muted-foreground">Global cybersecurity market by 2030</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">5.6B</div>
                <p className="text-muted-foreground">Bluetooth devices shipped annually worldwide</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">75%</div>
                <p className="text-muted-foreground">Organizations restructuring security by 2025 (Gartner)</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Market Analysis */}
          <div className="bg-card/50 border-2 border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Bluetooth Security Market Growth</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg border border-border">
                    <span className="text-muted-foreground">2024 Market Size</span>
                    <span className="text-2xl font-bold text-primary">$1.44B</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg border border-border">
                    <span className="text-muted-foreground">2032 Projected Market</span>
                    <span className="text-2xl font-bold text-primary">$4.32B</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border border-primary/30">
                    <span className="text-foreground font-semibold">Growth Rate (CAGR)</span>
                    <span className="text-2xl font-bold text-primary">~15%</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  The Bluetooth security market is experiencing rapid growth driven by increasing device adoption, 
                  rising cyber threats, and regulatory compliance requirements.
                </p>
                <p className="text-muted-foreground">
                  BlueGuard's hardware-level protection addresses the most fundamental vulnerability in this expanding 
                  ecosystem, positioning us at the forefront of a $4+ billion market opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Competitive Advantage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Patent-protected innovation in a strategic market position
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Patent Landscape</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-foreground font-medium">Intel Corporation</p>
                      <p className="text-sm text-muted-foreground">Related firmware security patents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-foreground font-medium">Texas Instruments</p>
                      <p className="text-sm text-muted-foreground">Bluetooth hardware security IP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-foreground font-medium">High Sec Labs</p>
                      <p className="text-sm text-muted-foreground">Boot-level security solutions</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    While established players hold related patents, BlueGuard's unique approach to 
                    <span className="text-primary font-semibold"> first-boot Bluetooth attack prevention</span> creates 
                    a defensible competitive moat.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Differentiation</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium">Pre-Boot Protection</p>
                      <p className="text-sm text-muted-foreground">Hardware activates before OS loads</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium">Universal Compatibility</p>
                      <p className="text-sm text-muted-foreground">Works across all device types and manufacturers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium">Plug-and-Play Deployment</p>
                      <p className="text-sm text-muted-foreground">No firmware modifications required</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium">Three Patent Applications</p>
                      <p className="text-sm text-muted-foreground">Comprehensive IP protection strategy</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Investment Opportunity</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic entry into a high-growth market with defensible IP and clear exit potential
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Current Round</p>
                    <p className="text-4xl font-bold text-primary mb-1">$250K</p>
                    <p className="text-xs text-muted-foreground">Seed Investment</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">20-Year Projection</p>
                    <p className="text-4xl font-bold text-primary mb-1">$2B-$8B</p>
                    <p className="text-xs text-muted-foreground">Potential Valuation</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Potential ROI</p>
                    <p className="text-4xl font-bold text-primary mb-1">8,000x-32,000x</p>
                    <p className="text-xs text-muted-foreground">Over 20 Years</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Use of Funds</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg border border-border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">Product Development</span>
                        <span className="text-primary font-bold">40%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Hardware prototyping, firmware development, testing</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border border-border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">Patent Filing</span>
                        <span className="text-primary font-bold">20%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Convert provisional to non-provisional patents</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border border-border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">Market Validation</span>
                        <span className="text-primary font-bold">25%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Pilot programs, partnerships, early customer acquisition</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border border-border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">Operations</span>
                        <span className="text-primary font-bold">15%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Team expansion, infrastructure, legal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Strategic timing in the 2024-2025 window before widespread market awareness creates 
                a unique opportunity for early investors to capture significant value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Secure the Future</h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Learn how BlueGuard addresses the most critical vulnerability in modern Bluetooth devices 
            with hardware-level protection from day one.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Download Deck
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-2">&copy; 2025 BlueGuard. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Three U.S. Provisional Patents Pending</p>
        </div>
      </footer>
    </div>
  );
}
