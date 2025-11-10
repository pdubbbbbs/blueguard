import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle, Info } from "lucide-react";

interface ThreatEvent {
  id: number;
  time: string;
  type: "blocked" | "detected";
  severity: "high" | "medium" | "low";
  description: string;
  details: {
    source: string;
    target: string;
    method: string;
    impact: string;
  };
}

const threatTypes = [
  { 
    desc: "Unauthorized pairing attempt", 
    severity: "high" as const,
    source: "Unknown device (MAC: XX:XX:XX:XX:XX:XX)",
    target: "Laptop Bluetooth adapter",
    method: "Brute-force pairing request",
    impact: "Could allow device takeover"
  },
  { 
    desc: "BlueBorne exploit detected", 
    severity: "high" as const,
    source: "Malicious actor nearby",
    target: "Android smartphone",
    method: "CVE-2017-0785 exploitation",
    impact: "Remote code execution possible"
  },
  { 
    desc: "Suspicious device scan", 
    severity: "medium" as const,
    source: "Unrecognized Bluetooth device",
    target: "All nearby devices",
    method: "Active reconnaissance",
    impact: "Information gathering attempt"
  },
  { 
    desc: "Firmware injection attempt", 
    severity: "high" as const,
    source: "Attacker device",
    target: "IoT smart lock",
    method: "First-boot firmware override",
    impact: "Complete device compromise"
  },
  { 
    desc: "BleedingBit vulnerability probe", 
    severity: "high" as const,
    source: "Network scanner",
    target: "Cisco access point",
    method: "CVE-2018-16986 scan",
    impact: "Network infiltration risk"
  },
  { 
    desc: "Unknown device connection", 
    severity: "medium" as const,
    source: "Unverified Bluetooth peripheral",
    target: "Desktop computer",
    method: "Unauthorized connection request",
    impact: "Potential data exfiltration"
  },
  { 
    desc: "Pre-boot attack vector", 
    severity: "high" as const,
    source: "Malicious Bluetooth device",
    target: "Laptop during boot",
    method: "BIOS-level Bluetooth exploit",
    impact: "Persistent malware installation"
  },
  { 
    desc: "Malicious pairing request", 
    severity: "high" as const,
    source: "Spoofed trusted device",
    target: "Smartphone",
    method: "Social engineering + pairing",
    impact: "Data theft and surveillance"
  },
];

export default function ThreatGraph() {
  const [threats, setThreats] = useState<ThreatEvent[]>([]);
  const [stats, setStats] = useState({ blocked: 0, detected: 0 });
  const [hoveredThreat, setHoveredThreat] = useState<number | null>(null);

  useEffect(() => {
    // Initialize with some threats
    const initialThreats: ThreatEvent[] = [];
    for (let i = 0; i < 5; i++) {
      const threat = threatTypes[Math.floor(Math.random() * threatTypes.length)];
      initialThreats.push({
        id: Date.now() + i,
        time: new Date(Date.now() - (5 - i) * 2000).toLocaleTimeString(),
        type: "blocked",
        severity: threat.severity,
        description: threat.desc,
        details: {
          source: threat.source,
          target: threat.target,
          method: threat.method,
          impact: threat.impact,
        },
      });
    }
    setThreats(initialThreats);
    setStats({ blocked: 5, detected: 0 });

    // Add new threats periodically
    const interval = setInterval(() => {
      const threat = threatTypes[Math.floor(Math.random() * threatTypes.length)];
      const newThreat: ThreatEvent = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        type: Math.random() > 0.3 ? "blocked" : "detected",
        severity: threat.severity,
        description: threat.desc,
        details: {
          source: threat.source,
          target: threat.target,
          method: threat.method,
          impact: threat.impact,
        },
      };

      setThreats((prev) => {
        const updated = [newThreat, ...prev].slice(0, 8);
        return updated;
      });

      setStats((prev) => ({
        blocked: prev.blocked + (newThreat.type === "blocked" ? 1 : 0),
        detected: prev.detected + (newThreat.type === "detected" ? 1 : 0),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-green-500/10 border-green-500/30 hover:bg-green-500/15 transition-all duration-300 hover:scale-105 cursor-pointer group">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Threats Blocked</p>
                <p className="text-4xl font-bold text-green-500 transition-all group-hover:scale-110">{stats.blocked}</p>
                <p className="text-xs text-muted-foreground mt-1">Hardware-level protection active</p>
              </div>
              <Shield className="w-12 h-12 text-green-500 transition-all group-hover:rotate-12" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/15 transition-all duration-300 hover:scale-105 cursor-pointer group">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Threats Detected</p>
                <p className="text-4xl font-bold text-orange-500 transition-all group-hover:scale-110">{stats.detected}</p>
                <p className="text-xs text-muted-foreground mt-1">Awaiting user action</p>
              </div>
              <AlertTriangle className="w-12 h-12 text-orange-500 transition-all group-hover:rotate-12" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Live Threat Feed */}
      <Card className="bg-card/50 border-border">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="text-lg font-semibold text-foreground">Live Threat Monitor</h3>
            <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
              <Info className="w-4 h-4" />
              <span>Hover for details</span>
            </div>
          </div>
          
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {threats.map((threat, index) => (
              <div
                key={threat.id}
                className={`relative p-3 rounded-lg border transition-all duration-500 cursor-pointer ${
                  index === 0 ? "animate-in slide-in-from-top" : ""
                } ${
                  hoveredThreat === threat.id 
                    ? "scale-105 shadow-lg z-10" 
                    : "hover:scale-102"
                } ${
                  threat.type === "blocked"
                    ? "bg-green-500/5 border-green-500/20 hover:bg-green-500/10 hover:border-green-500/40"
                    : "bg-orange-500/5 border-orange-500/20 hover:bg-orange-500/10 hover:border-orange-500/40"
                }`}
                onMouseEnter={() => setHoveredThreat(threat.id)}
                onMouseLeave={() => setHoveredThreat(null)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {threat.type === "blocked" ? (
                        <Shield className="w-4 h-4 text-green-500" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                      )}
                      <span
                        className={`text-sm font-semibold ${
                          threat.type === "blocked" ? "text-green-500" : "text-orange-500"
                        }`}
                      >
                        {threat.type === "blocked" ? "BLOCKED" : "DETECTED"}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          threat.severity === "high"
                            ? "bg-red-500/20 text-red-500"
                            : threat.severity === "medium"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : "bg-blue-500/20 text-blue-500"
                        }`}
                      >
                        {threat.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{threat.description}</p>
                    
                    {/* Expanded details on hover */}
                    {hoveredThreat === threat.id && (
                      <div className="mt-3 pt-3 border-t border-border space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-muted-foreground">Source:</span>
                            <p className="text-foreground font-medium">{threat.details.source}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Target:</span>
                            <p className="text-foreground font-medium">{threat.details.target}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Method:</span>
                            <p className="text-foreground font-medium">{threat.details.method}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Impact:</span>
                            <p className={`font-medium ${
                              threat.severity === "high" ? "text-red-500" : 
                              threat.severity === "medium" ? "text-yellow-500" : "text-blue-500"
                            }`}>{threat.details.impact}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{threat.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <p className="text-xs text-center text-muted-foreground">
        * Simulated threat data for demonstration purposes
      </p>
    </div>
  );
}
