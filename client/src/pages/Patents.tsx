import { useState } from "react";
import { Shield, FileText, Download, Eye, Printer, Save, Award, Folder, FolderOpen, ChevronDown, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PatentDocument {
  id: string;
  title: string;
  description: string;
  filename: string;
  applicationNumber?: string;
}

interface PatentFolder {
  id: string;
  title: string;
  description: string;
  category: "Hardware" | "Software" | "Enterprise";
  icon: string;
  documents: PatentDocument[];
}

const patentFolders: PatentFolder[] = [
  {
    id: "patent-1-hardware",
    title: "Patent 1: Hardware Device",
    description: "USB-based security device with pre-boot protection",
    category: "Hardware",
    icon: "🔧",
    documents: [
      {
        id: "patent1-spec",
        title: "Hardware Device Specification",
        description: "Complete technical specification for the BlueGuard hardware security device",
        filename: "SPECIFICATION_SIGNED.pdf",
        applicationNumber: "63/904,791",
      },
      {
        id: "patent1-filing",
        title: "USPTO Filing Receipt",
        description: "Official USPTO filing receipt for hardware device patent",
        filename: "USPTO_FILING_RECEIPT_63904791.pdf",
      },
      {
        id: "patent1-scanned",
        title: "Complete Filing Documentation",
        description: "Scanned documentation package for hardware patent filing",
        filename: "Scanned_Document.pdf",
      },
      {
        id: "patent1-correspondence",
        title: "Correspondence Address Form",
        description: "Change of correspondence address documentation",
        filename: "Change of Correspondence Address, Application - aia0122.pdf",
      },
    ],
  },
  {
    id: "patent-2-software",
    title: "Patent 2: Software Method",
    description: "Automated attack surface reduction algorithms",
    category: "Software",
    icon: "💻",
    documents: [
      {
        id: "patent2-spec",
        title: "Software Method Specification",
        description: "Patent specification for BlueGuard's automated attack surface reduction system",
        filename: "PATENT_2_SOFTWARE_SPECIFICATION.pdf",
      },
      {
        id: "patent2-form1",
        title: "Application Data Sheet",
        description: "USPTO Application Data Sheet for software patent",
        filename: "aia0014.pdf",
      },
      {
        id: "patent2-form2",
        title: "Fee Transmittal Form",
        description: "USPTO fee transmittal documentation",
        filename: "N417.pdf",
      },
    ],
  },
  {
    id: "patent-3-enterprise",
    title: "Patent 3: Enterprise System",
    description: "Centralized management and monitoring platform",
    category: "Enterprise",
    icon: "🏢",
    documents: [
      {
        id: "patent3-spec",
        title: "Enterprise System Specification",
        description: "Patent specification for BlueGuard's enterprise management platform",
        filename: "PATENT_3_ENTERPRISE_SPECIFICATION.pdf",
      },
      {
        id: "patent3-form",
        title: "Fee Transmittal Form",
        description: "USPTO fee transmittal documentation for enterprise patent",
        filename: "N417 (1).pdf",
      },
    ],
  },
];

export default function Patents() {
  const [expandedFolder, setExpandedFolder] = useState<string | null>(null);
  const [hoveredDoc, setHoveredDoc] = useState<string | null>(null);

  const handleFolderClick = (folderId: string) => {
    setExpandedFolder(expandedFolder === folderId ? null : folderId);
  };

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
        const saveLink = document.createElement("a");
        saveLink.href = filepath;
        saveLink.download = filename;
        saveLink.click();
        break;
      case "print":
        const printWindow = window.open(filepath, "_blank");
        if (printWindow) {
          printWindow.onload = () => {
            printWindow.print();
          };
        }
        break;
    }
  };

  const getFolderColor = (category: string) => {
    switch (category) {
      case "Hardware":
        return {
          gradient: "from-blue-500/20 to-blue-600/10",
          border: "border-blue-500/30 hover:border-blue-500/60",
          icon: "text-blue-400",
          bg: "bg-blue-500/10",
        };
      case "Software":
        return {
          gradient: "from-purple-500/20 to-purple-600/10",
          border: "border-purple-500/30 hover:border-purple-500/60",
          icon: "text-purple-400",
          bg: "bg-purple-500/10",
        };
      case "Enterprise":
        return {
          gradient: "from-green-500/20 to-green-600/10",
          border: "border-green-500/30 hover:border-green-500/60",
          icon: "text-green-400",
          bg: "bg-green-500/10",
        };
      default:
        return {
          gradient: "from-primary/20 to-primary/10",
          border: "border-primary/30 hover:border-primary/60",
          icon: "text-primary",
          bg: "bg-primary/10",
        };
    }
  };

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
            <a href="/#threat" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium text-sm hidden md:block">The Threat</a>
            <a href="/#solution" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium text-sm hidden md:block">Solution</a>
            <a href="/#how-it-works" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium text-sm hidden md:block">How It Works</a>
            <a href="/patent" className="text-primary font-medium text-sm">Patents</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_60%)]"></div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Award className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">Patent Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              <span className="brand-text-glow">BlueGuard</span> Patent Documentation
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Three comprehensive patent filings covering hardware, software, and enterprise innovations
            </p>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Click on any folder below to view complete documentation and USPTO filing materials
            </p>
          </div>
        </div>
      </section>

      {/* Patent Folders Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6">
            {patentFolders.map((folder) => {
              const colors = getFolderColor(folder.category);
              const isExpanded = expandedFolder === folder.id;

              return (
                <div key={folder.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Folder Card */}
                  <Card
                    className={`bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      isExpanded ? "shadow-2xl" : ""
                    }`}
                    onClick={() => handleFolderClick(folder.id)}
                  >
                    <CardContent className="pt-8 pb-8">
                      <div className="flex items-center gap-6">
                        {/* Folder Icon */}
                        <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center border-2 ${colors.border} transition-transform duration-300 ${
                          isExpanded ? "scale-110" : "hover:scale-105"
                        }`}>
                          {isExpanded ? (
                            <FolderOpen className={`w-10 h-10 ${colors.icon}`} />
                          ) : (
                            <Folder className={`w-10 h-10 ${colors.icon}`} />
                          )}
                        </div>

                        {/* Folder Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-2xl font-semibold text-foreground">{folder.title}</h2>
                            <span className="text-2xl">{folder.icon}</span>
                          </div>
                          <p className="text-muted-foreground">{folder.description}</p>
                          <p className="text-sm text-muted-foreground/70 mt-2">
                            {folder.documents.length} document{folder.documents.length !== 1 ? "s" : ""} • Click to {isExpanded ? "collapse" : "expand"}
                          </p>
                        </div>

                        {/* Expand/Collapse Icon */}
                        <div className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                          <ChevronDown className={`w-8 h-8 ${colors.icon}`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Expanded Documents */}
                  {isExpanded && (
                    <div className="mt-4 ml-8 space-y-3 animate-in fade-in slide-in-from-top-4 duration-500">
                      {folder.documents.map((doc) => (
                        <Card
                          key={doc.id}
                          className={`bg-card/50 border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg group`}
                          onMouseEnter={() => setHoveredDoc(doc.id)}
                          onMouseLeave={() => setHoveredDoc(null)}
                        >
                          <CardContent className="pt-4 pb-4">
                            <div className="flex items-start gap-4">
                              {/* Document Icon */}
                              <div className="w-12 h-12 bg-background/50 rounded-lg flex items-center justify-center border border-border group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 flex-shrink-0">
                                <FileText className="w-6 h-6 text-primary" />
                              </div>

                              {/* Document Info */}
                              <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                                  {doc.title}
                                </h3>
                                {doc.applicationNumber && (
                                  <p className="text-xs text-muted-foreground font-mono mb-1">
                                    App. No. {doc.applicationNumber}
                                  </p>
                                )}
                                <p className="text-sm text-muted-foreground mb-2">
                                  {doc.description}
                                </p>
                                <span className="text-xs bg-background/50 px-2 py-1 rounded border border-border font-mono">
                                  {doc.filename}
                                </span>

                                {/* Action Buttons */}
                                <div
                                  className={`transition-all duration-300 ease-in-out mt-3 ${
                                    hoveredDoc === doc.id
                                      ? "opacity-100 translate-y-0 max-h-20"
                                      : "opacity-0 -translate-y-2 max-h-0 overflow-hidden"
                                  }`}
                                >
                                  <div className="flex gap-2 flex-wrap">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleAction("open", doc.filename);
                                      }}
                                    >
                                      <Eye className="w-3 h-3 mr-1" />
                                      Open
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleAction("download", doc.filename);
                                      }}
                                    >
                                      <Download className="w-3 h-3 mr-1" />
                                      Save
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleAction("save", doc.filename);
                                      }}
                                    >
                                      <Save className="w-3 h-3 mr-1" />
                                      Save As
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleAction("print", doc.filename);
                                      }}
                                    >
                                      <Printer className="w-3 h-3 mr-1" />
                                      Print
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-semibold text-foreground mb-6">Complete Patent Portfolio</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            This portfolio includes complete technical specifications, USPTO filing receipts, and application documentation
            for three distinct patent filings covering hardware, software, and enterprise system innovations in Bluetooth security.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-card/50 rounded-lg p-6 border border-border">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-semibold text-foreground mb-2">Hardware Device</h3>
              <p className="text-muted-foreground">USB-based security device providing pre-boot Bluetooth protection</p>
            </div>
            <div className="bg-card/50 rounded-lg p-6 border border-border">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-semibold text-foreground mb-2">Software Methods</h3>
              <p className="text-muted-foreground">Automated attack surface reduction and threat detection algorithms</p>
            </div>
            <div className="bg-card/50 rounded-lg p-6 border border-border">
              <div className="text-3xl mb-3">🏢</div>
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
