import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Radio, Lock, Zap, Users, TrendingUp, CheckCircle, Smartphone, Laptop, Home as HomeIcon, AlertTriangle, Clock, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">BlueGuard</span>
          </div>
          <div className="flex gap-6">
            <a href="#threat" className="text-foreground hover:text-primary transition-colors">The Threat</a>
            <a href="#solution" className="text-foreground hover:text-primary transition-colors">Solution</a>
            <a href="#devices" className="text-foreground hover:text-primary transition-colors">Protection</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Hardware-Level Bluetooth Security</span>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
            BlueGuard<br />
            <span className="text-primary">Protecting Every Device From Day One</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            The first hardware-level security solution addressing a universal vulnerability 
            affecting every Bluetooth-enabled device currently manufactured.
          </p>
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

      {/* Three Opening Stories Section */}
      <section id="threat" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">The Critical Security Gap</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the universal vulnerability and the urgent need for protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Story 1: The Threat is Real */}
            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-card-foreground">The Threat is Real</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  A critical security gap affects every device currently on the market. This universal vulnerability 
                  impacts all hardware regardless of existing security measures.
                </p>
                <div className="bg-white/80 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-muted-foreground italic">
                    "Exploits against unpatched vulnerabilities account for nearly half of all security incidents, 
                    demonstrating the critical need for robust, foundational hardware-level protection."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-semibold">— IBM Security X-Force, 2023</p>
                </div>
              </CardContent>
            </Card>

            {/* Story 2: The Window is Closing */}
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-orange-50">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-card-foreground">The Window is Closing</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  2024-2025 represents a critical timeframe for deployment before widespread exploitation 
                  of this vulnerability becomes the norm across all devices.
                </p>
                <div className="bg-white/80 p-4 rounded-lg border border-orange-200">
                  <p className="text-sm text-muted-foreground italic">
                    "Firmware vulnerabilities are a persistent and growing threat, often exploited in the 
                    earliest stages of an attack, underlining the urgency for pre-boot protection."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-semibold">— NIST</p>
                </div>
              </CardContent>
            </Card>

            {/* Story 3: BlueGuard is the Solution */}
            <Card className="border-2 border-blue-100 hover:border-primary transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-blue-50">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-card-foreground">BlueGuard is the Solution</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Our hardware-level protection addresses first-boot attacks, specifically targeting this 
                  universal exploit across all devices with no exceptions.
                </p>
                <div className="bg-white/80 p-4 rounded-lg border border-blue-200">
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

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why BlueGuard?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hardware-level protection for the most critical vulnerability in modern devices
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">First-Boot Protection</h3>
                <p className="text-muted-foreground">
                  Hardware-level security that activates before any software loads, protecting against the most fundamental attacks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Radio className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Universal Coverage</h3>
                <p className="text-muted-foreground">
                  Protects all Bluetooth-enabled devices regardless of manufacturer, price point, or existing security features.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Patent-Protected</h3>
                <p className="text-muted-foreground">
                  Proprietary technology with strong patent protection creating defensible competitive barriers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Device-Specific Protection Section */}
      <section id="devices" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Protection for Every Device</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              BlueGuard secures all Bluetooth-enabled hardware from the moment they power on
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Smartphones */}
            <Card className="border-2 border-blue-100 hover:border-primary transition-all duration-300 hover:shadow-xl bg-white">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
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
            <Card className="border-2 border-blue-100 hover:border-primary transition-all duration-300 hover:shadow-xl bg-white">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
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
            <Card className="border-2 border-blue-100 hover:border-primary transition-all duration-300 hover:shadow-xl bg-white">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
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
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Market Opportunity</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Addressing a critical need in a rapidly expanding cybersecurity market
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">$351B</div>
                <p className="text-muted-foreground">Global cybersecurity market by 2030</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">5.6B</div>
                <p className="text-muted-foreground">Bluetooth devices shipped annually worldwide</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">75%</div>
                <p className="text-muted-foreground">Organizations restructuring security by 2025 (Gartner)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Secure the Future</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Learn how BlueGuard addresses the most critical vulnerability in modern Bluetooth devices 
            with hardware-level protection from day one.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
              Download Deck
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-blue-100">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 BlueGuard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
