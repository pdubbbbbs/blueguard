import React, { useEffect, useState } from 'react';
import { Shield, Radio } from 'lucide-react';

interface Signal {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  delay: number;
  blocked: boolean;
  speed: number;
}

export default function BluetoothDefenseAnimation() {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Generate more signals for dynamic feel
    const initialSignals: Signal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      targetX: 50,
      targetY: 50,
      delay: Math.random() * 1.5,
      blocked: Math.random() > 0.35, // 65% blocked, 35% allowed
      speed: 0.5 + Math.random() * 0.5,
    }));
    setSignals(initialSignals);

    // Animate signals moving toward center
    const animationInterval = setInterval(() => {
      setTime(t => t + 0.05);
      setSignals(prev => 
        prev.map(signal => {
          const progress = Math.min((time + signal.delay) * signal.speed, 1);
          const newX = signal.x + (signal.targetX - signal.x) * progress * 0.02;
          const newY = signal.y + (signal.targetY - signal.y) * progress * 0.02;
          
          // Reset if reached center
          if (Math.abs(newX - 50) < 2 && Math.abs(newY - 50) < 2) {
            return {
              ...signal,
              x: Math.random() * 100,
              y: Math.random() * 100,
              blocked: Math.random() > 0.35,
              speed: 0.5 + Math.random() * 0.5,
            };
          }
          
          return { ...signal, x: newX, y: newY };
        })
      );
    }, 50);

    // Periodically spawn new signals
    const spawnInterval = setInterval(() => {
      setSignals(prev => {
        const newSignal: Signal = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          targetX: 50,
          targetY: 50,
          delay: 0,
          blocked: Math.random() > 0.35,
          speed: 0.5 + Math.random() * 0.5,
        };
        return [...prev.slice(-11), newSignal]; // Keep max 12 signals
      });
    }, 2000);

    return () => {
      clearInterval(animationInterval);
      clearInterval(spawnInterval);
    };
  }, [time]);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 border-2 border-primary/20">
      {/* Central Shield */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          {/* Faster pulsing rings */}
          <div className="absolute inset-0 animate-ping opacity-25" style={{ animationDuration: '1.5s' }}>
            <div className="w-32 h-32 rounded-full border-4 border-primary"></div>
          </div>
          <div className="absolute inset-0 animate-ping opacity-20" style={{ animationDuration: '2s', animationDelay: '0.3s' }}>
            <div className="w-40 h-40 rounded-full border-4 border-primary"></div>
          </div>
          <div className="absolute inset-0 animate-pulse opacity-30" style={{ animationDuration: '1s' }}>
            <div className="w-32 h-32 rounded-full border-4 border-primary"></div>
          </div>
          
          {/* Main shield with glow */}
          <div className="relative w-32 h-32 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full flex items-center justify-center border-4 border-primary/60 shadow-2xl shadow-primary/40 backdrop-blur-sm">
            <Shield className="w-16 h-16 text-primary animate-pulse" style={{ animationDuration: '1.5s' }} />
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" style={{ animationDuration: '2s' }}></div>
          </div>
          
          {/* Faster rotating outer ring */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
            <div className="w-32 h-32 rounded-full border-2 border-dashed border-primary/40"></div>
          </div>
          
          {/* Counter-rotating ring */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
            <div className="w-40 h-40 rounded-full border border-dotted border-primary/20"></div>
          </div>
        </div>
      </div>

      {/* Bluetooth Signals with dynamic movement */}
      {signals.map((signal) => {
        const distanceToCenter = Math.sqrt(Math.pow(signal.x - 50, 2) + Math.pow(signal.y - 50, 2));
        const scale = Math.max(0.5, 1 - distanceToCenter / 100);
        
        return (
          <div
            key={signal.id}
            className="absolute transition-all duration-100 ease-linear"
            style={{
              left: `${signal.x}%`,
              top: `${signal.y}%`,
              transform: `scale(${scale})`,
            }}
          >
            {/* Signal wave with trail effect */}
            <div className={`relative ${signal.blocked ? 'opacity-60' : 'opacity-100'}`}>
              <Radio 
                className={`w-7 h-7 ${signal.blocked ? 'text-red-500' : 'text-green-500'} drop-shadow-lg animate-pulse`}
                style={{ animationDuration: '1s' }}
              />
              
              {/* Multiple expanding circles for more dynamic feel */}
              <div 
                className={`absolute inset-0 -m-2 rounded-full border-2 ${
                  signal.blocked ? 'border-red-500/40' : 'border-green-500/40'
                } animate-ping`}
                style={{ animationDuration: '1.5s' }}
              ></div>
              <div 
                className={`absolute inset-0 -m-4 rounded-full border-2 ${
                  signal.blocked ? 'border-red-500/30' : 'border-green-500/30'
                } animate-ping`}
                style={{ animationDuration: '1.8s', animationDelay: '0.3s' }}
              ></div>
              <div 
                className={`absolute inset-0 -m-6 rounded-full border ${
                  signal.blocked ? 'border-red-500/20' : 'border-green-500/20'
                } animate-ping`}
                style={{ animationDuration: '2s', animationDelay: '0.6s' }}
              ></div>
              
              {/* Glow effect */}
              <div 
                className={`absolute inset-0 -m-3 rounded-full blur-sm ${
                  signal.blocked ? 'bg-red-500/20' : 'bg-green-500/20'
                } animate-pulse`}
                style={{ animationDuration: '1.2s' }}
              ></div>
            </div>

            {/* Signal line to center with animation */}
            <svg 
              className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60"
              style={{
                width: '100vw',
                height: '100vh',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <line
                x1={`${signal.x}%`}
                y1={`${signal.y}%`}
                x2="50%"
                y2="50%"
                stroke={signal.blocked ? 'rgba(239, 68, 68, 0.3)' : 'rgba(34, 197, 94, 0.3)'}
                strokeWidth="2"
                strokeDasharray="6 4"
                className="animate-pulse"
                style={{ animationDuration: '1.5s' }}
              />
            </svg>

            {/* Status indicator with faster animation */}
            {signal.blocked && distanceToCenter > 20 && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="bg-red-500/95 text-white text-xs px-2 py-1 rounded font-semibold shadow-lg animate-pulse border border-red-400">
                  BLOCKED
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Stats overlay with live updates */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-end z-10 gap-2">
        <div className="bg-card/90 backdrop-blur-md border border-border rounded-lg p-3 sm:p-4 shadow-xl flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDuration: '1s' }}></div>
            <span className="text-xs text-muted-foreground">Threats</span>
          </div>
          <div className="text-xl sm:text-2xl font-semibold text-red-500 transition-all">
            {signals.filter(s => s.blocked).length}
          </div>
        </div>

        <div className="bg-card/90 backdrop-blur-md border border-border rounded-lg p-3 sm:p-4 shadow-xl flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDuration: '1s' }}></div>
            <span className="text-xs text-muted-foreground">Safe</span>
          </div>
          <div className="text-xl sm:text-2xl font-semibold text-green-500 transition-all">
            {signals.filter(s => !s.blocked).length}
          </div>
        </div>

        <div className="bg-card/90 backdrop-blur-md border border-border rounded-lg p-3 sm:p-4 shadow-xl flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-3 h-3 text-primary animate-pulse" style={{ animationDuration: '1.5s' }} />
            <span className="text-xs text-muted-foreground">Status</span>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-primary">
            ACTIVE
          </div>
        </div>
      </div>

      {/* More ambient particles with varied movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 1.5}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Scanning beam effect */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.3) 50%, transparent 100%)',
          animation: 'scan 4s linear infinite',
        }}
      ></div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
