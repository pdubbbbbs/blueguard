import { useState } from "react";
import { Shield, FileText, Download, Eye, Printer, Save, Award, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PatentDocument {
  id: string;
  title: string;
  description: string;
  filename: string;
  category: "Hardware" | "Software" | "Enterprise";
  filingDate?: string;
  applicationNumber?: string;
}

const patentDocuments: PatentDocument[] = [
  // Patent 1 - Hardware Device
  {
    id: "patent1-spec",
    title: "Hardware Device Specification",
    description: "Complete technical specification for the BlueGuard hardware security device",
    filename: "SPECIFICATION_SIGNED.pdf",
    category: "Hardware",
    applicationNumber: "63/904,791",
  },
  {
    id: "patent1-filing",
    title: "USPTO Filing Receipt",
    description: "Official USPTO filing receipt for hardware device patent",
    filename: "USPTO_FILING_RECEIPT_63904791.pdf",
    category: "Hardware",
  },
  {
    id: "patent1-scanned",
    title: "Complete Filing Documentation",
    description: "Scanned documentation package for hardware patent filing",
    filename: "Scanned_Document.pdf",
    category: "Hardware",
  },
  {
    id: "patent1-correspondence",
    title: "Correspondence Address Form",
    description: "Change of correspondence address documentation",
    filename: "Change of Correspondence Address, Application - aia0122.pdf",
    category: "Hardware",
  },

  // Patent 2 - Software Method
  {
    id: "patent2-spec",
    title: "Software Method Specification",
    description: "Patent specification for BlueGuard's automated attack surface reduction system",
    filename: "PATENT_2_SOFTWARE_SPECIFICATION.pdf",
    category: "Software",
  },
  {
    id: "patent2-form1",
    title: "Application Data Sheet",
    description: "USPTO Application Data Sheet for software patent",
    filename: "aia0014.pdf",
    category: "Software",
  },
  {
    id: "patent2-form2",
    title: "Fee Transmittal Form",
    description: "USPTO fee transmittal documentation",
    filename: "N417.pdf",
    category: "Software",
  },

  // Patent 3 - Enterprise System
  {
    id: "patent3-spec",
    title: "Enterprise System Specification",
    description: "Patent specification for BlueGuard's enterprise management platform",
    filename: "PATENT_3_ENTERPRISE_SPECIFICATION.pdf",
    category: "Enterprise",
  },
  {
    id: "patent3-form",
    title: "Fee Transmittal Form",
    description: "USPTO fee transmittal documentation for enterprise patent",
    filename: "N417 (1).pdf",
    category: "Enterprise",
  },
];

export default function Patents() {
  const [hoveredDoc, setHoveredDoc] = useState<string | null>(null);

  const handleAction = (action: string, filename: string) => {
    const filepath = `/patents/${filename}`;

    switch (action) {
      case "open":
        window.open(filepath, "_blank");
        break;
      case "download":
        const link = document.createElement("a");
        link.href = filepath;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      case "save":
        // Trigger browser's save as dialog
        const saveLink = document.createElement("a");
        saveLink.href = filepath;
        saveLink.download = filename;
        saveLink.click();
        break;
      case "print":
        // Open in new window and trigger print
        const printWindow = window.open(filepath, "_blank");
        if (printWindow) {
          printWindow.onload = () => {
            printWindow.print();
          };
        }
        break;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Hardware":
        return "from-blue-500/20 to-blue-600/10 border-blue-500/30";
      case "Software":
        return "from-purple-500/20 to-purple-600/10 border-purple-500/30";
      case "Enterprise":
        return "from-green-500/20 to-green-600/10 border-green-500/30";
      default:
        return "from-primary/20 to-primary/10 border-primary/30";
    }
  };

  const getCategoryIcon = (category: string) => {
    const iconClass = "w-5 h-5";
    switch (category) {
      case "Hardware":
        return <Shield className={`${iconClass} text-blue-400`} />;
      case "Software":
        return <FileText className={`${iconClass} text-purple-400`} />;
      case "Enterprise":
        return <Award className={`${iconClass} text-green-400`} />;
      default:
        return <FileText className={iconClass} />;
    }
  };

  // Group documents by category
  const groupedDocs = patentDocuments.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, PatentDocument[]>);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-xl border-b border-border/50 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold brand-text-glow">
              BlueGuard
            </span>
            <span className="ml-3 text-xs bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30 animate-pulse">PATENT PENDING</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/#threat" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium text-sm">The Threat</a>
            <a href="/#solution" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium text-sm">Solution</a>
            <a href="/#how-it-works" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium text-sm">How It Works</a>
            <a href="/patent" className="text-primary font-medium text-sm">Patents</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_60%)]"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Award className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">Intellectual Property Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              <span className="brand-text-glow">BlueGuard</span> Patent Portfolio
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
              Comprehensive Patent Documentation for Our Innovative Bluetooth Security Technology
            </p>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Complete technical specifications and filing documentation organized by technology category
            </p>
          </div>

          {/* Patent Categories Overview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-500/30 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-blue-500/40">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Hardware Device</h3>
                <p className="text-sm text-muted-foreground">USB-based security device with pre-boot protection</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-2 border-purple-500/30 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/40">
                  <FileText className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Software Method</h3>
                <p className="text-sm text-muted-foreground">Automated attack surface reduction algorithms</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/10 border-2 border-green-500/30 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-500">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-green-500/40">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Enterprise System</h3>
                <p className="text-sm text-muted-foreground">Centralized management and monitoring platform</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patent Documents by Category */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container mx-auto">
          {Object.entries(groupedDocs).map(([category, docs]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border-2 border-primary/30">
                  {getCategoryIcon(category)}
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-foreground">{category} Patent</h2>
                  <p className="text-sm text-muted-foreground">
                    {category === "Hardware" && "USB-based security device documentation"}
                    {category === "Software" && "Software method and algorithm documentation"}
                    {category === "Enterprise" && "Enterprise management system documentation"}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {docs.map((doc) => (
                  <Card
                    key={doc.id}
                    className={`relative bg-gradient-to-br ${getCategoryColor(doc.category)} border-2 hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden`}
                    onMouseEnter={() => setHoveredDoc(doc.id)}
                    onMouseLeave={() => setHoveredDoc(null)}
                  >
                    <CardContent className="pt-6 pb-4">
                      {/* Document Icon and Title */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-12 h-12 bg-background/50 rounded-lg flex items-center justify-center border border-border group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {doc.title}
                          </h3>
                          {doc.applicationNumber && (
                            <p className="text-xs text-muted-foreground font-mono">
                              App. No. {doc.applicationNumber}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {doc.description}
                      </p>

                      {/* Filename Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs bg-background/50 px-2 py-1 rounded border border-border font-mono truncate">
                          {doc.filename}
                        </span>
                      </div>

                      {/* Interactive Action Menu (shows on hover) */}
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          hoveredDoc === doc.id
                            ? "opacity-100 translate-y-0 max-h-40"
                            : "opacity-0 translate-y-4 max-h-0 overflow-hidden"
                        }`}
                      >
                        <div className="border-t border-border/50 pt-4 mt-2">
                          <p className="text-xs text-muted-foreground mb-3 font-medium">Select Action:</p>
                          <div className="grid grid-cols-2 gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                              onClick={() => handleAction("open", doc.filename)}
                            >
                              <Eye className="w-3 h-3 mr-1" />
                              Open
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                              onClick={() => handleAction("download", doc.filename)}
                            >
                              <Download className="w-3 h-3 mr-1" />
                              Save
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                              onClick={() => handleAction("save", doc.filename)}
                            >
                              <Save className="w-3 h-3 mr-1" />
                              Save As
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                              onClick={() => handleAction("print", doc.filename)}
                            >
                              <Printer className="w-3 h-3 mr-1" />
                              Print
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Hover Indicator */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-primary transition-all duration-500 ${
                          hoveredDoc === doc.id ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Patent Portfolio Documentation</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            This portfolio includes complete technical specifications, USPTO filing receipts, and application documentation for three distinct patent filings covering hardware, software, and enterprise system innovations in Bluetooth security.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm">
            <div className="bg-card/50 rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Hardware Innovation</h3>
              <p className="text-muted-foreground">USB-based security device providing pre-boot Bluetooth protection</p>
            </div>
            <div className="bg-card/50 rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Software Methods</h3>
              <p className="text-muted-foreground">Automated attack surface reduction and threat detection algorithms</p>
            </div>
            <div className="bg-card/50 rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Enterprise Platform</h3>
              <p className="text-muted-foreground">Centralized management system for fleet-wide security deployment</p>
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
            © 2025 BlueGuard LLC. All rights reserved. | Patent Applications Filed with USPTO
          </p>
        </div>
      </footer>
    </div>
  );
}
