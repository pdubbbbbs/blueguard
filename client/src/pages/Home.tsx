import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Radio, Lock, Zap, Users, TrendingUp, CheckCircle, Smartphone, Laptop, Home as HomeIcon, AlertTriangle, Clock, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50">
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
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Hardware-Level Bluetooth Security</span>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">One Vulnerability.<br />
            Billions of Devices.<br />
            One Solution.</span>
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
                  Proprietary technology with strong patent protection creating defensible competitive barriers.
                </p>
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
          <div className="grid md:grid-cols-3 gap-8">
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
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 BlueGuard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
