// Glowing BlueGuard Hero Text Code
// This is the exact code used in Home.tsx for the glowing blue effect

<h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
  <span style={{ 
    color: 'white',
    textShadow: '0 0 10px rgba(59,130,246,0.8), 0 0 20px rgba(59,130,246,0.6), 0 0 30px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.3), -2px -2px 0 rgba(59,130,246,0.5), 2px -2px 0 rgba(59,130,246,0.5), -2px 2px 0 rgba(59,130,246,0.5), 2px 2px 0 rgba(59,130,246,0.5), 0 4px 15px rgba(0,0,0,0.3)',
    WebkitTextStroke: '1px rgba(59,130,246,0.6)',
    filter: 'drop-shadow(0 0 15px rgba(59,130,246,0.7))'
  }}>
    BlueGuard
  </span>
  <br />
  <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" style={{ textShadow: '0 2px 15px rgba(59,130,246,0.4), 0 4px 25px rgba(59,130,246,0.2)' }}>
    Protecting Every Device From Day One
  </span>
</h1>

/* 
EXPLANATION OF THE GLOW EFFECT:

1. color: 'white' - Base text color is white

2. textShadow - Multiple layered shadows create the glow:
   - '0 0 10px rgba(59,130,246,0.8)' - Tight blue glow (10px radius)
   - '0 0 20px rgba(59,130,246,0.6)' - Medium blue glow (20px radius)
   - '0 0 30px rgba(59,130,246,0.4)' - Wider blue glow (30px radius)
   - '0 0 40px rgba(59,130,246,0.3)' - Widest blue glow (40px radius)
   - '-2px -2px 0 rgba(59,130,246,0.5)' - Blue accent top-left
   - '2px -2px 0 rgba(59,130,246,0.5)' - Blue accent top-right
   - '-2px 2px 0 rgba(59,130,246,0.5)' - Blue accent bottom-left
   - '2px 2px 0 rgba(59,130,246,0.5)' - Blue accent bottom-right
   - '0 4px 15px rgba(0,0,0,0.3)' - Drop shadow for depth

3. WebkitTextStroke: '1px rgba(59,130,246,0.6)' - Blue outline around text

4. filter: 'drop-shadow(0 0 15px rgba(59,130,246,0.7))' - Additional blue glow filter

RESULT: White text with brilliant blue glow, blue outline, and multi-directional blue accents
*/

// Color values used:
// rgba(59,130,246,X) = Blue (Tailwind primary blue)
// X values (0.3-0.8) = Opacity levels for layered effect
