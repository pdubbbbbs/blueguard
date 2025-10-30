import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle } from "lucide-react";

interface ThreatEvent {
  id: number;
  time: string;
  type: "blocked" | "detected";
  severity: "high" | "medium" | "low";
  description: string;
}

const threatTypes = [
  { desc: "Unauthorized pairing attempt", severity: "high" as const },
  { desc: "BlueBorne exploit detected", severity: "high" as const },
  { desc: "Suspicious device scan", severity: "medium" as const },
  { desc: "Firmware injection attempt", severity: "high" as const },
  { desc: "BleedingBit vulnerability probe", severity: "high" as const },
  { desc: "Unknown device connection", severity: "medium" as const },
  { desc: "Pre-boot attack vector", severity: "high" as const },
  { desc: "Malicious pairing request", severity: "high" as const },
];

export default function ThreatGraph() {
  const [threats, setThreats] = useState<ThreatEvent[]>([]);
  const [stats, setStats] = useState({ blocked: 0, detected: 0 });

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
        <Card className="bg-green-500/10 border-green-500/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Threats Blocked</p>
                <p className="text-4xl font-bold text-green-500">{stats.blocked}</p>
              </div>
              <Shield className="w-12 h-12 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-500/10 border-orange-500/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Threats Detected</p>
                <p className="text-4xl font-bold text-orange-500">{stats.detected}</p>
              </div>
              <AlertTriangle className="w-12 h-12 text-orange-500" />
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
          </div>
          
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {threats.map((threat, index) => (
              <div
                key={threat.id}
                className={`p-3 rounded-lg border transition-all duration-500 ${
                  index === 0 ? "animate-in slide-in-from-top" : ""
                } ${
                  threat.type === "blocked"
                    ? "bg-green-500/5 border-green-500/20"
                    : "bg-orange-500/5 border-orange-500/20"
                }`}
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
