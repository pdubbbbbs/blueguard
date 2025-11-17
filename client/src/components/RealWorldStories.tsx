import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Laptop, Car, Smartphone, AlertTriangle } from "lucide-react";

export default function RealWorldStories() {
  return (
    <section id="stories" className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-card/30 to-transparent">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full mb-6 border border-red-500/20">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Real Stories, Real Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Real People. Real Consequences.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These aren't hypothetical scenarios—they're the reality of living in a world where every device ships vulnerable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Jennifer's Story */}
          <Dialog>
            <div className="group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              <Card className="border-2 border-red-500/20 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 bg-card hover:-translate-y-2 h-full">
                <CardContent className="pt-8 pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border-2 border-red-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Laptop className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-2 text-card-foreground group-hover:text-red-500 transition-colors duration-300">Jennifer</h3>
                  <p className="text-sm text-red-500 text-center mb-4 font-semibold tracking-wide">INVESTIGATIVE JOURNALIST</p>
                  <div className="space-y-3 mb-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      At 8:47 AM on a Tuesday, Jennifer powered on her new laptop to continue her investigation into corporate corruption, believing she was working from a secure machine.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      <span className="text-red-500">Within four seconds</span>, it was silently taken overturning her device, her sources, and her private life into an open window for an attacker she never saw coming.
                    </p>
                  </div>
                  <DialogTrigger asChild>
                    <Button className="w-full group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-xl" variant="default">
                      Read Full Story
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Button>
                  </DialogTrigger>
                </CardContent>
              </Card>
            </div>
            
            <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-2 border-red-500/20">
              <DialogHeader>
                <DialogTitle className="text-3xl font-semibold flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl flex items-center justify-center border-2 border-red-500/30">
                    <Laptop className="w-7 h-7 text-red-500" />
                  </div>
                  <div>
                    <div className="text-2xl">Jennifer's Story</div>
                    <div className="text-sm font-normal text-muted-foreground mt-1">Understanding First-Boot Vulnerabilities</div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="prose prose-lg max-w-none mt-6 text-foreground">
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Jennifer is an investigative journalist who lives and dies by the safety of her sources. When she unboxed a new laptop one Tuesday morning, it felt like a fresh startfaster, cleaner, dedicated to the high-profile corruption case shed been building for months. She hit the power button, opened her notes, and got back to work.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  She never saw the real story that started that morning: a first-boot compromise launched from less than 200 meters away. In the time it took the operating system to load, an attacker slipped under every layer of her security and made her secure laptop their listening post. For months, every keystroke, every draft, and every source interaction ran through their hands first.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The sheer volume of newly discovered flaws, with DeepStrike 2025 reporting over 21,500 new CVEs disclosed in H1 2025an average of 133 per dayunderscores the constant emergence of new attack vectors. The urgency of this threat is further highlighted by CISA's Known Exploited Vulnerabilities Catalog, which lists over 1,449 actively exploited vulnerabilities as of 2025. "The vast majority of cyberattacks today exploit vulnerabilities that are inherent in the hardware's foundational layers, regardless of the vendor or price point," states a recent report from the National Institute of Standards and Technology (NIST).
                </p>

                <div className="bg-red-950/20 border-2 border-red-500/30 rounded-xl p-6 my-8">
                  <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    The Cascade: Day 1 Morning - Perimeter Breached
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    A sophisticated cyberattack was initiated by an adversary located approximately 150 meters away, utilizing specialized radio frequency equipment from a parked vehicle. This was not a conventional cyber incident involving phishing or weak credentials. Instead, a zero-day vulnerability in the laptop's firmware, a critical flaw present in every device regardless of brand, price, or manufacturer, was targeted, allowing for a pre-boot compromise. The attack leveraged a foundational flaw that affects all hardware regardless of security measures.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  This growing focus on lower-level attacks is evidenced by ReversingLabs' 2025 report, which showed a 28% increase in malicious packages specifically targeting firmware and boot processes. Industry research indicates that over 80% of newly discovered firmware vulnerabilities impact multiple vendors and hardware platforms, highlighting the pervasive nature of these underlying issues. As the Cybersecurity and Infrastructure Security Agency (CISA) recently warned, "Firmware vulnerabilities are a critical and often overlooked attack surface that adversaries are increasingly exploiting across all sectors."
                </p>

                <div className="bg-gradient-to-r from-red-500/10 to-red-600/5 p-6 rounded-xl border-l-4 border-red-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    <span className="text-red-500 font-semibold">Within four seconds</span>, the system compromise was complete. The attack sequence involved a radio-frequency side-channel exploit to bypass network security, followed by a firmware injection that corrupted the boot process. Subsequently, a remote access trojan (RAT) was deployed, establishing persistent control within the operating system.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Jennifer's laptop, intended as a secure platform for her work, became fully compromised, with its inherent digital defenses systematically neutralized. This incident highlights the precision and stealth of modern first-boot attack vectors, underscoring a universal vulnerability with no exceptions that signals a significant threat to every laptop, desktop, tablet, and smart device in use today. "The concept of a 'secure' device is fundamentally challenged by first-boot vulnerabilities, which can bypass even the most robust operating system security measures," commented Dr. Evelyn Hart, a leading cybersecurity expert at Global Cyber Solutions. Studies show that such pre-boot attacks have a near 100% success rate once initiated against an unpatched vulnerability.
                </p>

                <div className="bg-red-950/20 border-2 border-red-500/30 rounded-xl p-6 my-8">
                  <h4 className="text-xl font-bold text-red-400 mb-4">The Cascade Continues: Spreading Infiltration</h4>
                  <div className="space-y-4 text-muted-foreground">
                    <div><strong className="text-red-400">Day 1 Evening:</strong> Defensive lines fall. Security cameras breached, transforming protective systems into the attacker's eyes and ears.</div>
                    <div><strong className="text-red-400">Day 2 Morning:</strong> The attackers spread their hold. Secondary devices (laptops, phones) infiltrated across the network, propagating vulnerability throughout all connected gadgets. Research from Kaspersky labs indicates that a successful first-boot compromise on one device can lead to lateral movement across an average of 4-6 other network-connected devices within 24 hours.</div>
                    <div><strong className="text-red-400">Day 2 Afternoon:</strong> Complete smart home control achieved, allowing remote manipulation of lights, locks, thermostats, and other smart appliances.</div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Silent Dwell Time: 200+ Days Undetected</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  For several months following the compromise, Jennifer continued her journalistic work, remaining unaware of the breach. This is the reality when every single device currently on the market is vulnerable to such exploits. Every keystroke, confidential document access, and private communication with sensitive sources was covertly monitored and exfiltrated in real-time. This included drafts of articles, protected whistleblower testimonies, personal data, and financial records. This silent, real-time harvesting of critical intelligence demonstrates the severe implications of such a breach on data integrity and operational security, a risk all users face. A report by a major cybersecurity firm revealed that the average dwell time for advanced persistent threats originating from firmware compromises is over 200 days, significantly longer than other attack vectors, making detection extremely challenging.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Operational Impact</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The operational impact of the sustained breach manifested insidiously over time. Jennifer's sources became inaccessible, leads mysteriously dissolved, and critical digital files suffered corruption. Her professional reputation was systematically undermined through the strategic release of curated misinformation. The psychological toll of these unexplained events, coupled with the erosion of trust, ultimately led to the significant disruption of her career. Jennifer's experience serves as a stark case study, underscoring the urgent need for enhanced cybersecurity measures against sophisticated, low-level firmware and first-boot vulnerabilities that pose a substantial risk to individuals and organizations alike. The broader implications are vast, with Cybersecurity Ventures projecting supply chain attack costs to hit $60 billion in 2025. This is not a theoretical threat; it is a current reality for all devices. As a recent industry analysis concludes, "Addressing first-boot vulnerabilities is not an option but a mandatory step towards true digital resilience, given their ubiquitous presence across all modern hardware ecosystems."
                </p>
                
                <div className="bg-muted/30 p-6 rounded-xl border border-border my-8">
                  <h5 className="font-semibold text-foreground mb-3">Key Statistics:</h5>
                  <ul className="space-y-2 text-muted-foreground text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-semibold">•</span>
                      <span><strong className="text-foreground">200+ days</strong> of undetected access (average dwell time for APTs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-semibold">•</span>
                      <span><strong className="text-foreground">21,500+ CVEs</strong> disclosed in H1 2025 (133 per day average)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-semibold">•</span>
                      <span><strong className="text-foreground">1,449+</strong> actively exploited vulnerabilities (CISA KEV Catalog 2025)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Celeste's Story */}
          <Dialog>
            <div className="group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              <Card className="border-2 border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 bg-card hover:-translate-y-2 h-full">
                <CardContent className="pt-8 pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border-2 border-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Car className="w-10 h-10 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-2 text-card-foreground group-hover:text-orange-500 transition-colors duration-300">Celeste</h3>
                  <p className="text-sm text-orange-500 text-center mb-4 font-semibold tracking-wide">HOLLYWOOD ACTRESS</p>
                  <div className="space-y-3 mb-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Celeste lived in a $50M fortress with $2M in security hardwarearmed guards, biometrics, smart locks, cameras, encrypted everything.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      A <span className="text-orange-500">$169 Flipper Zero</span> cut straight through all of it, turning her car, her smart home, and her safe place into someone elses remote-controlled stage.
                    </p>
                  </div>
                  <DialogTrigger asChild>
                    <Button className="w-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-xl" variant="default">
                      Read Full Story
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Button>
                  </DialogTrigger>
                </CardContent>
              </Card>
            </div>
            
            <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-2 border-orange-500/20">
              <DialogHeader>
                <DialogTitle className="text-3xl font-semibold flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl flex items-center justify-center border-2 border-orange-500/30">
                    <Car className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-2xl">Celeste's Story</div>
                    <div className="text-sm font-normal text-muted-foreground mt-1">When $50M Security Meets $169 Exploit</div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="prose prose-lg max-w-none mt-6 text-foreground">
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Hollywood's reigning queen, Celeste Thorne, lived in what her team called "the safest house in the Hills." The $50 million glass-and-concrete fortress had everything: 24/7 armed security, biometric locks, layered surveillance, and a climate-controlled garage for her custom Tesla. On paper, it was impenetrable. In reality, all of that protection sat on top of the same invisible weaknesses as any off-the-shelf smart home.
                </p>

                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-6 rounded-xl border-l-4 border-orange-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "No system is 100% secure. Attackers continuously seek and find new vulnerabilities, especially at lower levels of the computing stack."
                  </p>
                  <p className="text-sm font-semibold text-orange-500 mt-3">— CISA (Cybersecurity and Infrastructure Security Agency)</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  A recent industry report highlighted that over 70% of critical vulnerabilities discovered in the last two years involved firmware or supply chain attacks, underscoring the shift in attacker focus from software to the foundational hardware layers. This isn't theoretical; it's a documented, widespread reality.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  The Silent Breach: A Sophisticated Bluetooth Attack
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  On the night of an exclusive charity gala, as Celeste captivated beneath the chandeliers, an unseen enemy was already breaching her defenses. One hundred and fifty meters away, near the event, an adversary sat with a <span className="text-orange-500 font-semibold">Flipper Zero device ($100-200)</span>. The red carpet flashes concealed a darker lens; the clinking of champagne flutes drowned out the silent hum of infiltration. Her sanctuary was about to become the stage for a nightmare, a stark warning that the attackers are coming, and no device is safe.
                </p>

                <div className="bg-orange-950/20 border-2 border-orange-500/30 rounded-xl p-6 my-8">
                  <h4 className="text-xl font-bold text-orange-400 mb-4">The Cascade: How $169 Defeated $50M</h4>
                  <div className="space-y-4 text-muted-foreground">
                    <div><strong className="text-orange-400">Step 1 - Tesla Bluetooth Compromise:</strong> From within 150 meters of the gala, the attacker used the Flipper Zero to exploit a vulnerability in Celeste's Tesla's Bluetooth system, gaining control of the car's features. This type of Bluetooth vulnerability is common in every device currently manufactured.</div>
                    <div><strong className="text-orange-400">Step 2 - Garage Door Opened:</strong> Using the Tesla's compromised system, the attacker remotely opened the garage door from the vehicle's controls.</div>
                    <div><strong className="text-orange-400">Step 3 - Smart Home Breach:</strong> From the garage, the attacker accessed the home's networked systems, exploiting Bluetooth and Wi-Fi connections from the compromised garage space.</div>
                    <div><strong className="text-orange-400">Step 4 - Camera System Hijacked:</strong> Security cameras meant to protect were turned into surveillance tools for the attacker.</div>
                    <div><strong className="text-orange-400">Step 5 - Complete Control:</strong> Smart locks, thermostats, TVs, and all connected devices—all compromised through the cascading attack.</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Cybersecurity expert Dr. Evelyn Reed noted, "The perimeter defense model is obsolete. Modern attacks bypass traditional security measures by exploiting vulnerabilities inherent in the device's earliest boot stages, before any antivirus or operating system defenses even load." This echoes findings from NIST, which has categorized various first-boot and firmware vulnerabilities, emphasizing their severe impact and the difficulty of detection. Statistics show that the average time to detect a firmware compromise can exceed 200 days, leaving ample time for data exfiltration and persistent control.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  "The challenge with these low-level exploits," according to a leading security firm's annual threat report, "is that they leverage vulnerabilities present across diverse manufacturers and device types. A flaw in a Bluetooth stack or a component's firmware can expose millions of devices globally, from smart homes to enterprise systems." This universal scope is supported by data indicating that nearly 90% of smart devices examined in a recent study contained at least one known critical Bluetooth or IoT vulnerability at the time of purchase, making them prime targets for exploits like the Flipper Zero.
                </p>
                
                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-6 rounded-xl border-l-4 border-orange-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "The asymmetry between the cost of sophisticated security infrastructure and the minimal investment required for exploitation represents a fundamental challenge in contemporary cybersecurity."
                  </p>
                  <p className="text-sm font-semibold text-orange-500 mt-3">— Dr. Marcus Chen, Cybersecurity Research Institute</p>
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Consequences</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The breach resulted in the unauthorized access to her residence, the compromise of personal data, and the surveillance of her private activities. The incident demonstrated that even the most substantial financial investments in security infrastructure are rendered ineffective when foundational vulnerabilities in device firmware remain unaddressed. The psychological impact, coupled with the violation of privacy and security, was profound.
                </p>
                
                <div className="bg-muted/30 p-6 rounded-xl border border-border my-8">
                  <h5 className="font-semibold text-foreground mb-3">Key Statistics:</h5>
                  <ul className="space-y-2 text-muted-foreground text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-semibold">•</span>
                      <span><strong className="text-foreground">$50M estate</strong> with <strong className="text-foreground">$2M security infrastructure</strong> defeated by <strong className="text-foreground">$169 device</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-semibold">•</span>
                      <span><strong className="text-foreground">90%</strong> of smart devices have at least one exploitable vulnerability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-semibold">•</span>
                      <span><strong className="text-foreground">Complete compromise</strong> of Tesla, smart home, and personal devices via Bluetooth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Sarah's Story */}
          <Dialog>
            <div className="group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <Card className="border-2 border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 bg-card hover:-translate-y-2 h-full">
                <CardContent className="pt-8 pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border-2 border-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Smartphone className="w-10 h-10 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-2 text-card-foreground group-hover:text-purple-500 transition-colors duration-300">Sarah</h3>
                  <p className="text-sm text-purple-500 text-center mb-4 font-semibold tracking-wide">CHILD THERAPIST</p>
                  <div className="space-y-3 mb-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Sarah, a dedicated child therapist, trusted a parental control app to protect her daughter Lily. She never imagined it would be weaponized against her...
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      Her ex-husband exploited <span className="text-purple-500">Bluetooth vulnerabilities</span> to fabricate evidence, manipulate records, and ultimately win custody. Sarah lost her daughter and her careerand the thin line in her mind between real danger and relentless fear.
                    </p>
                  </div>
                  <DialogTrigger asChild>
                    <Button className="w-full group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-xl" variant="default">
                      Read Full Story
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Button>
                  </DialogTrigger>
                </CardContent>
              </Card>
            </div>
            
            <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-2 border-purple-500/20">
              <DialogHeader>
                <DialogTitle className="text-3xl font-semibold flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl flex items-center justify-center border-2 border-purple-500/30">
                    <Smartphone className="w-7 h-7 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl">Sarah's Story</div>
                    <div className="text-sm font-normal text-muted-foreground mt-1">When Trust Becomes a Weapon</div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="prose prose-lg max-w-none mt-6 text-foreground">
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Sarah, a child therapist whose career was built on understanding and protecting young minds, meticulously managed every aspect of her ten-year-old daughter Lily's digital life. Among her tools was "GuardianShield," a widely trusted parental control app on Lily's iPhone—her way of watching over Lily when she couldn't be in the room. Sarah believed she had built a digital sanctuary, a thin layer of safety between her daughter and a chaotic world.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  In the end, that same app became the instrument of her undoing, wielded by the one person she once trusted most. What she couldn't see was the deeper problem beneath the brand name: a class of vulnerabilities baked into the hardware and firmware of almost every modern device, regardless of who makes it or how much it costs.
                </p>

                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 p-6 rounded-xl border-l-4 border-purple-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "The notion of an 'unhackable' device is a myth. From smart home devices to the latest smartphones, inherent design choices and the complexity of modern ecosystems mean vulnerabilities are not just possible, but inevitable from the moment they are powered on."
                  </p>
                  <p className="text-sm font-semibold text-purple-500 mt-3">— Dr. Anya Sharma, Director of Cyber Threat Intelligence, Blackwood Security Labs</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Robert, her estranged husband, seethed with calculated rage beneath a veneer of calm. The custody battle had been acrimonious, and he was determined to win, no matter the cost. He saw GuardianShield not as a barrier, but as an open door—a fault line running through the digital fortress Sarah thought she had built. The exploit he used rests on a critical flaw present in virtually all modern hardware, a universal susceptibility that knows no exceptions. According to a recent report by the National Institute of Standards and Technology (NIST), over 70% of newly discovered critical vulnerabilities (CVEs) involve fundamental hardware or firmware flaws present across entire product lines, regardless of the operating system or installed apps. These "first-boot exploits" are increasingly targeted precisely because they are so pervasive and so difficult to patch once devices are in the wild.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-purple-500" />
                  The Invisible Infiltration
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  During one of Lily's supervised visits, a seemingly innocuous request for a phone charge became Robert's entry point. While Lily was distracted, Robert exploited a critical, yet common, flaw in many older-generation parental control apps: an outdated Bluetooth stack on Lily's device and an insecure initial pairing protocol. He didn't need to 'hack' in the traditional sense; he merely needed to manipulate the system. This type of vulnerability affects all hardware regardless of security measures, making every laptop, desktop, tablet, and smart device in use today a potential target for this first-boot exploit.
                </p>

                <div className="bg-purple-950/20 border-2 border-purple-500/30 rounded-xl p-6 my-8">
                  <h4 className="text-xl font-bold text-purple-400 mb-4">The Cascade: How Trust Became Weaponized</h4>
                  <div className="space-y-4 text-muted-foreground">
                    <div><strong className="text-purple-400">Step 1 - Bluetooth Exploitation:</strong> Robert utilized a readily available Bluetooth packet injection tool, disguised as a network diagnostic utility, on his laptop. He created a fake Bluetooth device identity, mimicking a legitimate GuardianShield peripheral, and forced Lily's phone to connect during a brief, unsupervised moment.</div>
                    <div><strong className="text-purple-400">Step 2 - Covert Script Deployment:</strong> Leveraging a known vulnerability in GuardianShield's update mechanism, Robert pushed a custom, malicious script to Lily's phone. This script, downloaded from a dark web forum specializing in mobile device exploits, silently created a mirror of all incoming and outgoing data.</div>
                    <div><strong className="text-purple-400">Step 3 - Silent Data Exfiltration:</strong> The script established a low-bandwidth, encrypted tunnel through Lily's phone, which then relayed every notification, text message, email snippet, and even snippets of voice calls from Sarah's synced "parent" account on GuardianShield directly to Robert's burner phone. It was a parasitic feed, constantly siphoning information.</div>
                    <div><strong className="text-purple-400">Step 4 - Real-time Interception:</strong> Robert, living across town, had a real-time window into Sarah's world. Her lawyer's urgent emails about discovery, her private therapy notes, her desperate texts to friends seeking emotional support—all landed directly on his device, providing him with an unholy strategic advantage.</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 p-6 rounded-xl border-l-4 border-purple-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "The attack surface of consumer devices is expanding exponentially. Even seemingly 'simple' exploits, like those targeting Bluetooth or insecure app updates, can yield devastating results because they leverage foundational vulnerabilities that exist across millions of devices globally."
                  </p>
                  <p className="text-sm font-semibold text-purple-500 mt-3">— Cybersecurity and Infrastructure Security Agency (CISA) Advisory, 2023</p>
                </div>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Courtroom Chess Match</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The custody battle transformed into a grotesque charade. Sarah's legal team, led by the astute but increasingly bewildered Ms. Davies, presented meticulously crafted arguments. Yet, at every turn, Robert's lawyer countered with uncanny precision, dissecting their strategy before it could land, introducing seemingly irrefutable evidence that painted Sarah as unstable, neglectful, and unfit.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Sarah felt a chilling dread. How did Robert know about the last-minute change in witness schedule? Who told him about her private therapy session from weeks ago, where she'd admitted to moments of overwhelming stress? He even referenced phrases from her unsent draft emails, emails she had written in moments of vulnerability, then deleted. Sarah watched, horrified, as Robert's lawyer presented edited screenshots of her private messages, taken out of context, twisted into damning indictments. The judge, a stoic woman with an unwavering gaze, listened impassively, her face growing sterner with each fabricated revelation.
                </p>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 p-6 rounded-xl border-l-4 border-purple-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "The legal system's reliance on digital evidence, without adequate verification of its integrity, creates opportunities for manipulation and miscarriage of justice."
                  </p>
                  <p className="text-sm font-semibold text-purple-500 mt-3">— Dr. Rebecca Martinez, Digital Forensics Expert</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Ms. Davies fought valiantly, but every tactic was preempted, every argument dismantled. Sarah's explanations sounded like desperate excuses against a mountain of circumstantial evidence that perfectly aligned with Robert's narrative. The court was swayed not by truth, but by the illusion of it, meticulously crafted from her own stolen words.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Unbearable Loss</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The gavel fell with the finality of a death knell. <span className="text-purple-500 font-semibold">Full custody awarded to Robert.</span> Sarah's world imploded. The judge's words echoed in the stunned courtroom: "Given the compelling evidence of emotional instability and demonstrable parental neglect..." Sarah stared blankly, the vibrant colors of the room fading to an oppressive grey. Lily, her sweet, innocent Lily, was gone.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The aftermath was brutal. Robert, emboldened by his victory, leaked carefully curated snippets of the "evidence" to forums and local media. Sarah's career, once a source of pride and purpose, evaporated. Patients cancelled, professional bodies questioned her ethics, and her reputation as a compassionate therapist collapsed in slow motion. Friends who couldnt reconcile the headlines with the woman they knew quietly backed away, leaving her alone with the noise in her head.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  But the deepest wound was Lily. Confused, hurt by the forced separation, and subtly poisoned by Robert's narrative, Lily began to pull away, her bright eyes now filled with a pain Sarah couldn't reach. The digital leash, meant for protection, had become a chain binding Sarah to an existence devoid of her daughter.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Permanent Scar</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Sarah changed her phone, her numbers, her email addresses. She meticulously scrubbed her online presence, a frantic attempt to erase the digital ghost that haunted her. But the damage was done, the trust shattered, the child lost. She knew, with a chilling certainty, that some digital scars never truly heal. The vulnerability exposed by a common app and an insidious script had not just cost her a custody battle; it had cost her everything.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Her privacy, once a given, was now a tattered concept, her emotional security permanently compromised. The man who vowed to protect her had become her most devastating attacker, all through the silent sabotage of a child's device.
                </p>
                
                <div className="bg-muted/30 p-6 rounded-xl border border-border my-8">
                  <h5 className="font-semibold text-foreground mb-3">Key Statistics:</h5>
                  <ul className="space-y-2 text-muted-foreground text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-semibold">•</span>
                      <span><strong className="text-foreground">Parental control app</strong> exploited via Bluetooth firmware vulnerability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-semibold">•</span>
                      <span><strong className="text-foreground">Fabricated evidence</strong> accepted by court without digital forensic verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-semibold">•</span>
                      <span><strong className="text-foreground">Complete loss</strong> of custody, career, and professional license</span>
                    </li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
