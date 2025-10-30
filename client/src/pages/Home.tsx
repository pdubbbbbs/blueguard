import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Radio, Lock, Zap, Users, TrendingUp, CheckCircle } from "lucide-react";

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
            <a href="#solution" className="text-foreground hover:text-primary transition-colors">Solution</a>
            <a href="#technology" className="text-foreground hover:text-primary transition-colors">Technology</a>
            <a href="#market" className="text-foreground hover:text-primary transition-colors">Market</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Bluetooth Security for Everyone</span>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
            BlueGuard<br />
            <span className="text-primary">Protect Your Wireless Devices</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive security for all your Bluetooth-enabled devices. 
            Real-time threat detection and protection for smartphones, laptops, smart homes, and more.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why BlueGuard?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete protection for your Bluetooth devices against modern security threats
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Always-On Protection</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring of your Bluetooth connections to detect and block suspicious activity before it affects your devices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Radio className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Smart Device Control</h3>
                <p className="text-muted-foreground">
                  Easily manage which devices can connect to your phone, computer, or smart home with simple approval controls.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Privacy First</h3>
                <p className="text-muted-foreground">
                  Military-grade encryption keeps your data safe during Bluetooth transfers, from file sharing to audio streaming.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">How It Works</h2>
              <p className="text-lg text-muted-foreground mb-6">
                BlueGuard uses advanced AI to monitor your Bluetooth connections in real-time, 
                learning what's normal for you and alerting you to anything suspicious.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Intelligent Threat Detection</h4>
                    <p className="text-muted-foreground">Automatically identifies and blocks unauthorized connection attempts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Simple Setup</h4>
                    <p className="text-muted-foreground">Install once and forget it—works silently in the background</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Works Everywhere</h4>
                    <p className="text-muted-foreground">Protects all your devices—phones, tablets, computers, and smart home gadgets</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-24 h-24 text-primary opacity-50" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Threat Detection</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">&lt;10ms</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section id="market" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">The Bluetooth Security Problem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Billions of devices rely on Bluetooth every day, but most lack proper security
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">$8.2B</div>
                <p className="text-muted-foreground">Projected Bluetooth security market by 2028</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">5.6B</div>
                <p className="text-muted-foreground">Bluetooth devices shipped worldwide each year</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardContent className="pt-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">67%</div>
                <p className="text-muted-foreground">Users without dedicated Bluetooth security</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your Devices Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users protecting their Bluetooth devices with BlueGuard. 
            Get started in minutes with our simple setup.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Download Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
              View Pricing
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
