import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const fontOptions = [
  {
    name: "Option 1: Inter + JetBrains Mono",
    heading: "Inter",
    body: "Inter",
    googleFonts: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
    description: "Professional, startup-friendly, highly readable • Used by GitHub, Vercel, Linear"
  },
  {
    name: "Option 2: Outfit + Space Grotesk",
    heading: "Outfit",
    body: "Space Grotesk",
    googleFonts: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
    description: "Bold, contemporary, investor-grabbing • Used by modern SaaS companies, fintech startups"
  },
  {
    name: "Option 3: Sora + Inter",
    heading: "Sora",
    body: "Inter",
    googleFonts: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap",
    description: "Innovative, cutting-edge, memorable • Used by AI/tech companies, crypto projects"
  },
  {
    name: "Option 4: Manrope",
    heading: "Manrope",
    body: "Manrope",
    googleFonts: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap",
    description: "Approachable yet professional, balanced • Used by product companies, design-forward brands"
  },
  {
    name: "Option 5: Poppins",
    heading: "Poppins",
    body: "Poppins",
    googleFonts: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap",
    description: "Modern, accessible, universally appealing • Used by consumer tech, mobile apps"
  },
  {
    name: "Option 6: Space Grotesk",
    heading: "Space Grotesk",
    body: "Space Grotesk",
    googleFonts: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
    description: "Tech-forward, startup energy, bold • Used by Web3, crypto, tech startups"
  }
];

export default function FontPreview() {
  useEffect(() => {
    // Load all fonts
    fontOptions.forEach(option => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = option.googleFonts;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Back to BlueGuard</span>
          </a>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4">Font Preview</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            See how each font option looks with actual BlueGuard content. Each preview uses different fonts.
          </p>

          <div className="space-y-16">
            {fontOptions.map((option, index) => (
              <div key={index}>
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-primary mb-2">{option.name}</h2>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                      <p className="text-xs text-muted-foreground/60 mt-1">
                        Heading: {option.heading} • Body: {option.body}
                      </p>
                    </div>

                    <div 
                      className="space-y-6 p-8 bg-background/50 rounded-lg border border-border"
                      style={{
                        fontFamily: `'${option.body}', sans-serif`
                      }}
                    >
                      {/* Heading Example */}
                      <h1 
                        className="text-5xl font-bold"
                        style={{ fontFamily: `'${option.heading}', sans-serif` }}
                      >
                        BlueGuard
                      </h1>
                      
                      <h2 
                        className="text-3xl font-bold text-primary"
                        style={{ fontFamily: `'${option.heading}', sans-serif` }}
                      >
                        Protecting Every Device From Day One
                      </h2>

                      {/* Body Text Example */}
                      <p className="text-lg text-muted-foreground">
                        The first hardware-level security solution addressing a universal vulnerability 
                        affecting every Bluetooth-enabled device currently manufactured.
                      </p>

                      {/* Stats Example */}
                      <div className="grid grid-cols-3 gap-4 py-4">
                        <div className="text-center">
                          <div 
                            className="text-4xl font-bold text-primary mb-1"
                            style={{ fontFamily: `'${option.heading}', sans-serif` }}
                          >
                            5.6B
                          </div>
                          <p className="text-sm text-muted-foreground">Vulnerable Devices</p>
                        </div>
                        <div className="text-center">
                          <div 
                            className="text-4xl font-bold text-primary mb-1"
                            style={{ fontFamily: `'${option.heading}', sans-serif` }}
                          >
                            $351B
                          </div>
                          <p className="text-sm text-muted-foreground">Market by 2030</p>
                        </div>
                        <div className="text-center">
                          <div 
                            className="text-4xl font-bold text-primary mb-1"
                            style={{ fontFamily: `'${option.heading}', sans-serif` }}
                          >
                            100%
                          </div>
                          <p className="text-sm text-muted-foreground">Protection Rate</p>
                        </div>
                      </div>

                      {/* Quote Example */}
                      <div className="bg-card p-4 rounded border border-border">
                        <p className="italic text-muted-foreground mb-2">
                          "The weakest link is often the first one. If you can compromise a device at boot, 
                          you own it completely, regardless of subsequent software security measures."
                        </p>
                        <p 
                          className="text-sm font-semibold"
                          style={{ fontFamily: `'${option.heading}', sans-serif` }}
                        >
                          — Bruce Schneier, Security Expert
                        </p>
                      </div>

                      {/* Button Example */}
                      <div className="flex gap-4">
                        <Button 
                          size="lg"
                          style={{ fontFamily: `'${option.heading}', sans-serif` }}
                        >
                          Learn More
                        </Button>
                        <Button 
                          size="lg" 
                          variant="outline"
                          style={{ fontFamily: `'${option.heading}', sans-serif` }}
                        >
                          Contact Us
                        </Button>
                      </div>

                      {/* Alphabet Sample */}
                      <div className="pt-4 border-t border-border">
                        <p 
                          className="text-sm text-muted-foreground mb-2"
                          style={{ fontFamily: `'${option.heading}', sans-serif` }}
                        >
                          ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
