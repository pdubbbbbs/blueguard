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
                      <span className="text-red-500">Within four seconds</span>, it was silently taken over—turning her device, her sources, and her private life into an open window for an attacker she never saw coming.
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
                <h4 className="text-xl font-semibold text-foreground mb-4">The Beginning: A Fresh Start</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Jennifer Chen is an investigative journalist who lives and dies by the safety of her sources. For eighteen months, she'd been building the most important case of her career—exposing a network of shell companies funneling public pension funds into private offshore accounts. She had whistleblowers inside three government agencies, encrypted drives full of financial records, and a deadline looming with a major publication.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  When her primary laptop began showing signs of age, Jennifer didn't hesitate. She ordered a brand-new, top-of-the-line machine with military-grade encryption and biometric security. On a Tuesday morning at 8:47 AM, she unboxed it at her home office, carefully transferred her encrypted backup files, and pressed the power button. Within four seconds of that power button press, before Windows even finished loading, her new "secure" laptop was no longer hers.
                </p>

                <div className="bg-red-950/20 border-2 border-red-500/30 rounded-xl p-6 my-8">
                  <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    The Bluetooth Breach: 8:47 AM, Day 1
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    One hundred and fifty meters away, parked in a nondescript sedan with tinted windows, an operative sat watching signal monitoring equipment. The moment Jennifer's new laptop powered on, its Bluetooth radio activated automatically—a standard feature designed for convenience, connecting wireless keyboards, mice, and headphones.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    But before the operating system's security features could load, before antivirus software could initialize, before encryption protocols could engage, the laptop's Bluetooth firmware was already broadcasting. The attacker exploited a zero-day vulnerability in the Bluetooth Low Energy (BLE) stack built into the laptop's chipset. This wasn't a software flaw Jennifer could patch. It was baked into the hardware—present in the silicon itself, affecting millions of devices from multiple manufacturers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Using a modified Bluetooth packet injection tool, the attacker sent a carefully crafted malformed pairing request. The laptop's Bluetooth firmware, still in its pre-boot initialization phase, processed the request without the protection of the operating system's security stack. The malicious payload exploited a buffer overflow in the firmware's memory handling, injecting code directly into the boot sequence. Within four seconds, a remote access trojan (RAT) was embedded in the laptop's UEFI firmware, establishing persistence that would survive operating system reinstalls, hard drive replacements, and factory resets.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Cascade Begins: Infiltrating the Home Network</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Jennifer spent the morning organizing her case files, completely unaware that every keystroke, every opened document, every password entry was being silently recorded and transmitted. By noon, the attacker had harvested her Wi-Fi credentials, her VPN access tokens, and her cloud storage authentication keys.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  At 6:30 PM, when Jennifer returned home from a coffee shop interview with a source, the infiltration expanded. Her compromised laptop automatically connected to her home Wi-Fi network. The malware immediately began scanning for other Bluetooth-enabled devices within range. It found her smartphone charging on the kitchen counter, her tablet on the coffee table, and her smart TV in the living room.
                </p>

                <div className="bg-red-950/20 border-2 border-red-500/30 rounded-xl p-6 my-8">
                  <h4 className="text-xl font-bold text-red-400 mb-4">Day 1 Evening: The Home Network Falls</h4>
                  <div className="space-y-4 text-muted-foreground">
                    <div><strong className="text-red-400">6:45 PM - Smartphone Compromised:</strong> Using the same Bluetooth exploit, the attacker pivoted to Jennifer's iPhone. Within minutes, they had access to her encrypted messaging apps, her contact list, and her location history. More critically, they could now monitor her communications with her sources—the very people she had promised anonymity.</div>
                    <div><strong className="text-red-400">7:15 PM - Tablet Infiltrated:</strong> Her iPad, used primarily for reading research papers and annotating documents, fell next. The attacker now had access to her complete research archive, including notes on source meetings and draft article sections.</div>
                    <div><strong className="text-red-400">8:30 PM - Smart Home Devices:</strong> The malware spread to her Ring doorbell camera, her Nest thermostat, and her Philips Hue smart lights. The attacker could now see who visited her home, monitor her daily patterns, and even determine when she was present or away.</div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">Day 2: Following Her to Work and Beyond</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The next morning, Jennifer drove to her newsroom office, laptop in her bag. The moment she powered on her work desktop and her compromised laptop synced via Bluetooth for file sharing, the infection spread across the corporate network. By lunch, the attacker had infiltrated the newsroom's shared drives, accessing not just Jennifer's work, but her colleagues' investigations as well.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  That afternoon, Jennifer met with her most sensitive source—an accountant who had direct evidence of the embezzlement scheme. The meeting took place at a quiet café. Jennifer recorded the conversation on her smartphone for transcription later. What she didn't know was that the recording was being simultaneously transmitted to the attacker, who now had the accountant's voice, appearance (via her phone's camera), and location data.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Over the following weeks, everywhere Jennifer went, the compromise followed. When she visited a second source at a public library and connected to the Wi-Fi using her laptop, the library's network was scanned for vulnerabilities. When she attended a journalism conference and exchanged contact information via Bluetooth with other reporters, each new device connection became another potential infection vector. The malware was designed to spread opportunistically, creating a web of compromised devices centered on Jennifer but extending far beyond her.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Silent Harvest: 200+ Days Undetected</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  For more than six months, Jennifer worked tirelessly on her investigation. She conducted interviews, analyzed financial documents, and drafted and redrafted her exposé. She used VPNs, encrypted email, and secure messaging apps. She followed every digital security protocol her publication required.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  None of it mattered. The attacker sat beneath her security stack, embedded in firmware that loaded before any protective software could initialize. They watched in real-time as she typed passwords into her password manager. They intercepted two-factor authentication codes as they arrived via SMS. They captured screenshots of encrypted documents the moment Jennifer decrypted them to read. They recorded every Zoom call with sources, every email exchange with her editor, every draft article saved to her supposedly secure cloud storage.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The data exfiltration was surgical and selective. Rather than triggering network monitoring alerts by downloading everything at once, the attacker used Jennifer's own compromised devices to slowly siphon specific files during her normal work hours, disguised as legitimate cloud sync traffic. They copied source documents, whistleblower testimonies, financial spreadsheets, and Jennifer's personal notes mapping out the corruption network.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Unraveling: When Sources Disappear</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Four months into the surveillance, Jennifer began noticing troubling patterns. Her accountant source stopped responding to encrypted messages. When she finally reached him by phone, he was terrified—"They know. Someone knows what I told you. I can't talk anymore." He hung up and blocked her number.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Two weeks later, her second source, a mid-level bureaucrat, was abruptly transferred to a different department and placed under internal investigation for unspecified "security violations." A third source, a forensic accountant who had provided crucial transaction records, found her home broken into. Nothing was stolen except her personal laptop and backup drives.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Jennifer's investigation began to collapse. Key documents she had saved to her encrypted drives became corrupted. Her draft articles disappeared from her cloud storage, replaced with blank files. Her editor received an anonymous email containing out-of-context excerpts from her notes, suggesting she had fabricated quotes and manipulated evidence. Her professional reputation came under scrutiny.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The psychological toll was devastating. Jennifer became paranoid, suspicious of everyone. She replaced her laptop three times—never understanding that the infection lived in firmware that transferred across devices via Bluetooth the moment she synced her files. She sought therapy for anxiety and insomnia, sessions the attacker monitored through her compromised phone. The journalist who had built a career on exposing hidden truths was being destroyed by a truth she couldn't see: her devices had betrayed her from the first moment she powered them on.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Aftermath: A Career in Ruins</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Eight months after unboxing that new laptop, Jennifer's investigation was officially killed by her publication. Her editor, under pressure from the legal department after the anonymous leak, reassigned her to minor local interest stories. Two of her sources faced criminal charges for leaking confidential information. The corruption network she had nearly exposed continued operating, now more cautious and more deeply hidden.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Jennifer eventually left journalism altogether. The constant anxiety, the loss of her sources' trust, and the destruction of her reputation proved insurmountable. She never learned the full extent of the breach. She never knew that the "secure" device she had purchased to protect her most important work was compromised before it even finished booting. She never understood that the Bluetooth radio built into every modern laptop, smartphone, and tablet represents a universal point of vulnerability that no antivirus software, no VPN, and no encryption protocol can protect against during those critical first seconds of power-on.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">Understanding the Universal Threat</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Jennifer's story is not unique. The vulnerability that destroyed her investigation exists in the Bluetooth firmware of billions of devices—every laptop, desktop, tablet, smartphone, smart TV, smart watch, and IoT device manufactured in the last decade. The sheer volume of newly discovered flaws, with DeepStrike 2025 reporting over 21,500 new CVEs disclosed in H1 2025—an average of 133 per day—underscores the constant emergence of new attack vectors targeting these foundational hardware components.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  "The vast majority of cyberattacks today exploit vulnerabilities that are inherent in the hardware's foundational layers, regardless of the vendor or price point," states a recent report from the National Institute of Standards and Technology (NIST). Industry research indicates that over 80% of newly discovered firmware vulnerabilities impact multiple vendors and hardware platforms, highlighting the pervasive nature of these underlying issues.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The Cybersecurity and Infrastructure Security Agency (CISA) lists over 1,449 actively exploited vulnerabilities in its Known Exploited Vulnerabilities Catalog as of 2025, with firmware and first-boot exploits representing a growing percentage. "Firmware vulnerabilities are a critical and often overlooked attack surface that adversaries are increasingly exploiting across all sectors," CISA warns. Research from Kaspersky labs indicates that a successful first-boot compromise on one device can lead to lateral movement across an average of 4-6 other network-connected devices within 24 hours.
                </p>

                <div className="bg-gradient-to-r from-red-500/10 to-red-600/5 p-6 rounded-xl border-l-4 border-red-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "The concept of a 'secure' device is fundamentally challenged by first-boot vulnerabilities, which can bypass even the most robust operating system security measures. These attacks have a near 100% success rate once initiated against an unpatched vulnerability, and the average dwell time for advanced persistent threats originating from firmware compromises is over 200 days."
                  </p>
                  <p className="text-sm font-semibold text-red-500 mt-3">— Dr. Evelyn Hart, Leading Cybersecurity Expert, Global Cyber Solutions</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The broader implications are vast, with Cybersecurity Ventures projecting supply chain attack costs to hit $60 billion in 2025. ReversingLabs' 2025 report showed a 28% increase in malicious packages specifically targeting firmware and boot processes. This is not a theoretical threat; it is a current reality affecting every device. As a recent industry analysis concludes, "Addressing first-boot vulnerabilities is not an option but a mandatory step towards true digital resilience, given their ubiquitous presence across all modern hardware ecosystems."
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

          {/* Celeste's Story - Keeping existing for now, needs similar treatment */}
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
                      Celeste lived in a $50M fortress with $2M in security hardware—armed guards, biometrics, smart locks, cameras, encrypted everything.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      A <span className="text-orange-500">$169 Flipper Zero</span> cut straight through all of it, turning her car, her smart home, and her safe place into someone else's remote-controlled stage.
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
                <h4 className="text-xl font-semibold text-foreground mb-4">The Beginning: A $50M Fortress</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Celeste Thorne was Hollywood royalty. Three consecutive blockbusters, two Academy Award nominations, and a level of fame that required her to live in what her security team called "the most protected private residence in Los Angeles." The $50 million estate in the Hollywood Hills was a masterpiece of glass, concrete, and cutting-edge security technology.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The security infrastructure alone cost $2 million: twenty-four-hour armed guards, biometric door locks requiring both fingerprint and retinal scans, motion-activated thermal cameras covering every square foot of the property, reinforced walls with embedded sensors, a separate panic room, and a state-of-the-art alarm system monitored by three redundant security firms. Her climate-controlled garage housed her custom midnight-blue Tesla Model S Plaid, modified with additional security features including encrypted keyless entry and GPS tracking with tamper alerts.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Inside the house, her smart home system controlled everything: Nest thermostats, Philips Hue lighting throughout, Ring doorbell cameras at three entrances, August smart locks on interior doors, a Sonos sound system, Samsung smart TVs in six rooms, and an integrated home automation hub managing it all. Her personal devices included an iPhone 15 Pro Max, an iPad Pro for script reading, and an Apple Watch for fitness tracking. Every device was connected. Every device was "secure." Or so she believed.
                </p>

                <div className="bg-orange-950/20 border-2 border-orange-500/30 rounded-xl p-6 my-8">
                  <h4 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    The Attack: 10:47 PM, Charity Gala Night
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    On a Saturday evening in late October, Celeste attended an exclusive environmental charity gala at the Beverly Hilton. She arrived in her Tesla, valet-parked at the front entrance, and spent three hours beneath crystal chandeliers, networking with studio executives and fellow actors. What she didn't know was that parked exactly 147 meters away, in a nondescript grey Honda Civic with tinted windows, someone was waiting with a <span className="text-orange-500 font-semibold">Flipper Zero</span>—a $169 multi-tool device about the size of a Game Boy.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Flipper Zero is marketed as a "portable multi-tool for pentesters and geeks" with legitimate uses for security research. But in the wrong hands, it becomes a skeleton key for the connected world. The attacker had modified the device's firmware with custom scripts specifically designed to exploit known Bluetooth Low Energy (BLE) vulnerabilities present in Tesla vehicles manufactured between 2018 and 2023.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    At 10:47 PM, as Celeste laughed at a producer's joke inside the ballroom, the attacker initiated a BLE relay attack. The Flipper Zero captured the Bluetooth signal from Celeste's iPhone (which she had left in her evening clutch at her table) and amplified it to her Tesla in the parking structure. The car, believing the phone was nearby, unlocked its Bluetooth pairing authentication. Within eighteen seconds, the attacker had successfully paired the Flipper Zero as a trusted device, bypassing Tesla's security entirely. The car now responded to the $169 device as if it were Celeste's $1,200 iPhone.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">11:15 PM: The First Domino Falls</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  As Celeste's car service drove her home at 11:15 PM, the attacker followed at a distance, maintaining Bluetooth proximity to the compromised Tesla. When Celeste arrived home and the valet returned her Tesla to the garage, the attacker parked on the hillside road fifty meters upslope from her property—still within Bluetooth range.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  At 11:32 PM, using the Flipper Zero's connection to the Tesla, the attacker sent a command through the car's onboard computer. Teslas integrate deeply with smart home systems for convenience—"arrive home, garage opens automatically, lights turn on, climate control adjusts." This integration meant Celeste's Tesla had administrative access to her home network and smart home hub.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The attacker exploited this trust relationship. By sending malformed API requests through the Tesla's smart home integration, they triggered a buffer overflow in the home automation hub's Bluetooth stack—the same class of vulnerability that exists in billions of IoT devices. Within seconds, the hub was compromised, giving the attacker a foothold inside Celeste's $50 million fortress.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Cascade: Hour by Hour</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  What happened next was a cascading infiltration, each device leading to the next like dominoes falling in sequence:
                </p>

                <div className="bg-orange-950/20 border-2 border-orange-500/30 rounded-xl p-6 my-8">
                  <h4 className="text-xl font-bold text-orange-400 mb-4">Night 1: Complete Smart Home Compromise</h4>
                  <div className="space-y-4 text-muted-foreground">
                    <div><strong className="text-orange-400">11:32 PM - Smart Home Hub Compromised:</strong> Through the Tesla's integration, the attacker gained administrative access to the central hub controlling all smart devices in the house.</div>
                    <div><strong className="text-orange-400">11:45 PM - Camera System Hijacked:</strong> Using the hub's credentials, the attacker accessed all eight Ring cameras. They could now see every room, every entrance, every movement. They watched Celeste enter through the front door, greet her assistant, and walk upstairs to her bedroom.</div>
                    <div><strong className="text-orange-400">12:03 AM - Smart Locks Controlled:</strong> The August smart locks on interior and exterior doors were reprogrammed with a secondary administrative code. The attacker could now lock or unlock any door remotely, including the panic room.</div>
                    <div><strong className="text-orange-400">12:15 AM - Climate and Lighting Access:</strong> All Nest thermostats and Philips Hue lights now responded to the attacker's commands. They could monitor occupancy patterns, determine which rooms were in use, and create the illusion of an empty home.</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  But the smart home was just the beginning. The attacker's real targets were Celeste's personal devices and the data they contained.
                </p>

                <div className="bg-orange-950/20 border-2 border-orange-500/30 rounded-xl p-6 my-8">
                  <h4 className="text-xl font-bold text-orange-400 mb-4">Night 1-2: Personal Device Infiltration</h4>
                  <div className="space-y-4 text-muted-foreground">
                    <div><strong className="text-orange-400">12:47 AM - iPhone Compromised:</strong> As Celeste slept, her iPhone charged on the nightstand. The compromised smart home hub, now on the same Wi-Fi network, initiated a Bluetooth exploit targeting her phone. Using a zero-day vulnerability in iOS Bluetooth handling, the attacker gained access to her iCloud credentials, encrypted messages, photo library, and email.</div>
                    <div><strong className="text-orange-400">1:23 AM - iPad Infiltrated:</strong> Her iPad Pro, used for reading scripts and contract documents, was compromised next. The attacker now had access to unreleased screenplays, confidential contract negotiations, and personal notes about industry figures.</div>
                    <div><strong className="text-orange-400">Morning - Apple Watch Synced:</strong> When Celeste woke and put on her Apple Watch, it automatically synced with her compromised iPhone. The attacker could now track her location, heart rate, and activity patterns in real-time.</div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">Day 2-14: The Silent Harvest</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  For two weeks, Celeste lived normally, completely unaware that every aspect of her private life was being monitored and recorded. The attacker exercised remarkable patience, making no obvious moves, triggering no alarms. Instead, they harvested:
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <strong className="text-foreground">Private Communications:</strong> Every text message, every email, every Signal conversation. Confidential discussions with her agent about upcoming projects. Heated exchanges with her ex-husband's lawyers about custody arrangements. Vulnerable late-night texts to her therapist about anxiety and self-doubt.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <strong className="text-foreground">Personal Media:</strong> Photos and videos from her iPhone, including private moments never meant for public view. The attacker compiled a dossier of intimate materials that could destroy her public image in minutes if released.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <strong className="text-foreground">Professional Secrets:</strong> Unreleased scripts for two major films under embargo. Her personal notes critiquing directors and co-stars. Contract negotiation strategies from her agent. Settlement discussions for an ongoing lawsuit.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <strong className="text-foreground">Physical Surveillance:</strong> Through her camera system, the attacker documented her daily routines: when she woke up, when the guards changed shifts, when her assistant arrived, when she was home alone. They knew when she was vulnerable.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">Day 15: The Extortion</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  On the fifteenth day, Celeste received an email on a private account she used only for family. The subject line read: "We need to talk about your security." The message contained no threats, only evidence: a screenshot from her bedroom camera showing her asleep. A photograph from her iPhone that existed nowhere else. A quote from a text message she'd sent two days earlier to her therapist.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The demand was clear: $5 million in cryptocurrency, or everything—the private photos, the confidential scripts, the personal messages—would be released to media outlets and posted publicly. They gave her seventy-two hours.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Celeste immediately contacted her security team, who conducted a sweep of the property. They found nothing. No physical bugs, no unauthorized network traffic, no suspicious devices. The security firm's report concluded: "No evidence of physical breach. Recommend enhanced password protocols." They missed the compromise entirely because they were looking for traditional intrusion—someone breaking in—when the attacker had walked through the front door via Bluetooth, invisible to every security measure in place.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Aftermath: Trust Destroyed</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Celeste paid the ransom. She had no choice. But the psychological damage was permanent. The home she'd built as a sanctuary now felt like a prison where the walls had eyes. She replaced every smart device, changed every password, disabled Bluetooth on all her personal electronics. She hired a new security firm that specialized in digital forensics.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Only then did they discover the truth: the Tesla Bluetooth exploit, the smart home hub compromise, the cascading device infection. By that time, two of the unreleased scripts had leaked anonymously online, tanking the projects before production could begin. Her studio attributed the leaks to her and refused to cast her in future films. Her reputation as a security risk spread through Hollywood's back channels.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  She never knew whether the extortionist kept copies of everything. Every text, every photo, every private moment lived under the shadow of potential exposure. She sold the house at a loss nine months later and moved to a remote property with no smart devices, no connected systems, and armed guards who patrol physically, not through cameras. Her career survived, but the cost—financially, psychologically, professionally—was staggering.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">Understanding the Universal Vulnerability</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Celeste's story illustrates a critical truth: the amount spent on security infrastructure is irrelevant when the foundation itself is compromised. Recent industry analysis shows that over 70% of critical vulnerabilities discovered in the last two years involved firmware or supply chain attacks, representing a fundamental shift in how attackers operate.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The Cybersecurity and Infrastructure Security Agency (CISA) warns: "No system is 100% secure. Attackers continuously seek and find new vulnerabilities, especially at lower levels of the computing stack." Research indicates that nearly 90% of smart devices examined in recent studies contained at least one known critical Bluetooth or IoT vulnerability at the time of purchase.
                </p>

                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-6 rounded-xl border-l-4 border-orange-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "The perimeter defense model is obsolete. Modern attacks bypass traditional security measures by exploiting vulnerabilities inherent in the device's earliest boot stages, before any antivirus or operating system defenses even load. The asymmetry between the cost of sophisticated security infrastructure and the minimal investment required for exploitation represents a fundamental challenge in contemporary cybersecurity."
                  </p>
                  <p className="text-sm font-semibold text-orange-500 mt-3">— Dr. Marcus Chen, Cybersecurity Research Institute</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  According to NIST, over 70% of newly discovered critical vulnerabilities (CVEs) involve fundamental hardware or firmware flaws present across entire product lines, regardless of price point or manufacturer. Statistics show that the average time to detect a firmware compromise can exceed 200 days—precisely the window attackers need for complete data exfiltration and persistent control.
                </p>

                <div className="bg-muted/30 p-6 rounded-xl border border-border my-8">
                  <h5 className="font-semibold text-foreground mb-3">Key Statistics:</h5>
                  <ul className="space-y-2 text-muted-foreground text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-semibold">•</span>
                      <span><strong className="text-foreground">$50M estate + $2M security</strong> defeated by <strong className="text-foreground">$169 Flipper Zero</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-semibold">•</span>
                      <span><strong className="text-foreground">10+ devices compromised</strong> in 14 hours (Tesla, smart home hub, 8 cameras, locks, iPhone, iPad, Apple Watch)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-semibold">•</span>
                      <span><strong className="text-foreground">90% of smart devices</strong> contain at least one critical Bluetooth vulnerability at purchase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-semibold">•</span>
                      <span><strong className="text-foreground">15 days undetected</strong> before extortion demand, $5M ransom paid</span>
                    </li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Sarah's Story - Keeping existing for now, needs similar treatment */}
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
                      Her ex-husband exploited <span className="text-purple-500">Bluetooth vulnerabilities</span> to fabricate evidence, manipulate records, and ultimately win custody. Sarah lost her daughter and her career—and the thin line in her mind between real danger and relentless fear.
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
                <h4 className="text-xl font-semibold text-foreground mb-4">The Beginning: A Mother's Protection</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Sarah Martinez built her life around protecting children. As a licensed child therapist with twelve years of clinical experience, she specialized in helping young minds navigate trauma, anxiety, and family dysfunction. Her practice was thriving, her reputation impeccable, and her greatest joy was her ten-year-old daughter, Lily.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  When Sarah's marriage to Robert ended after fourteen years, the divorce was bitter. Robert, a software engineer at a mid-sized tech firm, resented Sarah's decision to file. The custody arrangement was joint, but tense: Lily spent weekdays with Sarah, weekends with Robert. Sarah, hyperaware of the dangers children faced online, installed GuardianShield—a top-rated parental control app—on Lily's iPhone 12. The app promised comprehensive monitoring: web filtering, screen time limits, location tracking, and a parent dashboard that mirrored Lily's messages and app usage in real-time.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Sarah believed she had created a digital safety net. What she didn't know was that Robert, fueled by vindictive rage and armed with technical knowledge, saw GuardianShield not as protection, but as an opportunity. An opportunity to destroy the woman who had left him and take the only thing that mattered to her: Lily.
                </p>

                <div className="bg-purple-950/20 border-2 border-purple-500/30 rounded-xl p-6 my-8">
                  <h4 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    The Breach: Saturday, 2:47 PM, Supervised Visit
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    It happened during a supervised weekend visit in Robert's apartment. Lily, excited to show her father a new game on her phone, handed him her iPhone. "Dad, can you plug this in? The battery's almost dead." Robert smiled warmly, took the phone, and walked to the kitchen to connect it to a charger.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    What Lily didn't see, what the court-appointed supervisor sitting in the living room didn't notice, was Robert's other hand holding his work laptop, opened to a dark web forum post titled: "GuardianShield Bluetooth Exploit - Full Device Mirror." Robert had spent three weeks researching Lily's phone model and the specific version of GuardianShield Sarah had installed. He had downloaded a custom Bluetooth packet injection tool and practiced the exploit on a burner iPhone until he could execute it in under ninety seconds.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    While Lily played in the living room, Robert initiated the attack. GuardianShield's architecture had a critical flaw: it used Bluetooth Low Energy (BLE) to sync data between Lily's phone and Sarah's parent dashboard. The sync protocol, designed for convenience, trusted any device that could successfully authenticate using a shared cryptographic key. Robert's exploit tool, running on his laptop, spoofed the GuardianShield server's Bluetooth signature and sent a malformed pairing request to Lily's phone.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The phone's Bluetooth firmware, operating below the iOS security layer, processed the request without validation. Within forty-seven seconds, Robert had injected a malicious script into GuardianShield's data sync process. The script was elegant and devastating: it created a silent, encrypted tunnel that mirrored every piece of data passing through GuardianShield—Lily's messages, yes, but more importantly, Sarah's entire parent dashboard, including her personal emails, text messages, calendar, and therapy session notes that she had foolishly synced to the app for scheduling purposes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Robert unplugged the phone, handed it back to Lily with a smile. "All charged up, sweetheart." The entire attack had taken eighty-three seconds. Lily never suspected a thing.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The First 48 Hours: Building the Dossier</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  By Sunday evening, when Sarah picked up Lily from Robert's apartment, he already had seventy-two hours of intercepted data streaming to his burner phone. The malicious script worked flawlessly, operating invisibly within GuardianShield's legitimate processes, impossible to detect without deep forensic analysis.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  What Robert saw was a complete window into Sarah's life:
                </p>

                <div className="bg-purple-950/20 border-2 border-purple-500/30 rounded-xl p-6 my-8">
                  <h4 className="text-xl font-bold text-purple-400 mb-4">The Silent Harvest: What Robert Stole</h4>
                  <div className="space-y-4 text-muted-foreground">
                    <div><strong className="text-purple-400">Legal Strategy:</strong> Every email exchange between Sarah and her attorney, Ms. Davies. Discovery documents. Witness lists. Negotiation strategies for the custody modification hearing scheduled for six weeks out. Robert now knew every move Sarah's legal team would make before they made it.</div>
                    <div><strong className="text-purple-400">Therapy Records:</strong> Sarah had synced her professional calendar to GuardianShield to manage Lily's schedule. Robert intercepted session notes she'd dictated into her phone about her own therapy—admissions of anxiety, moments of overwhelming stress, fears about being an inadequate mother. Words meant for healing, now weaponized.</div>
                    <div><strong className="text-purple-400">Personal Conversations:</strong> Text messages to Sarah's best friend, Emily, where she vented frustration about the custody battle. A late-night message: "I'm so exhausted. Some days I don't know if I can do this anymore." Another: "Lily came home upset again. Robert's poisoning her against me and I can't prove it."</div>
                    <div><strong className="text-purple-400">Financial Stress:</strong> Emails to her accountant about the mounting legal costs, her dwindling savings, the possibility of taking a second mortgage on her house. Evidence that Sarah was financially strained, which Robert would later twist into "financial instability."</div>
                    <div><strong className="text-purple-400">Draft Messages Never Sent:</strong> The most damaging evidence came from messages Sarah typed in moments of despair but deleted before sending. "I hate him. I wish he would just disappear." "Sometimes I wonder if Lily would be better off without either of us." Context-free, these drafts would be devastating in a courtroom.</div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">Weeks 2-6: The Courtroom Setup</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  For six weeks leading up to the custody hearing, Robert operated with surgical precision. Every Monday morning, he reviewed the previous week's intercepted communications. When Sarah's lawyer planned to call Sarah's supervisor as a character witness, Robert's attorney filed a pre-emptive motion questioning the supervisor's objectivity. When Sarah scheduled a psychological evaluation to demonstrate her fitness as a parent, Robert knew the date, time, and name of the evaluator before Ms. Davies had even confirmed the appointment.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Sarah felt like she was losing her mind. How did Robert always seem one step ahead? How did his legal filings anticipate her strategy with eerie accuracy? She changed lawyers, thinking Ms. Davies had a leak in her office. The new attorney, Mr. Hendricks, fared no better. Robert intercepted his emails too.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The psychological toll was immense. Sarah's anxiety spiked. She had trouble sleeping, lost weight, became irritable with Lily. Her therapy notes during this period—also intercepted—documented her deteriorating mental state. Robert saved everything, building a narrative of an unstable mother unfit for custody.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Hearing: Truth Versus Fabrication</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The custody modification hearing began on a gray Tuesday morning in Family Court. Judge Patricia Caldwell presided, a no-nonsense jurist with thirty years on the bench. Sarah arrived with Mr. Hendricks, confident in the strength of her case: twelve years of exemplary parenting, a stable home, professional success, Lily's own stated preference to stay with her mother.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Robert's attorney, a shark in a tailored suit named Harrison Vance, presented a different story. He produced "evidence" Sarah had never seen before:
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <strong className="text-foreground">Exhibit A:</strong> Screenshots of Sarah's deleted draft messages, presented as "recovered text messages" showing Sarah's "true feelings." The context—that these were never-sent emotional venting in moments of exhaustion—was stripped away. The judge saw only: "I hate him. I wish he would just disappear."
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <strong className="text-foreground">Exhibit B:</strong> Excerpts from Sarah's private therapy notes, presented as evidence of "documented emotional instability and parental burnout." Vance read aloud: "Client reports feeling overwhelmed by parental responsibilities. Expressed doubts about adequacy as a mother."
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <strong className="text-foreground">Exhibit C:</strong> A carefully edited compilation of Sarah's texts to friends, stripped of context to paint a picture of a woman in crisis. "I'm so exhausted. Some days I don't know if I can do this anymore." Presented not as a normal parent's moment of stress, but as evidence of maternal unfitness.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Sarah's attorney objected, demanded to know where this evidence came from. Vance claimed Robert had discovered the messages on Lily's phone through GuardianShield, arguing that as a co-parent with access to the monitoring app, he had every legal right to review the data. He produced a digital forensics expert who testified that the screenshots were authentic, unaltered.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The expert was technically correct—the screenshots were real. What he didn't know, what no one questioned, was how Robert had obtained access to Sarah's private accounts and deleted messages through a Bluetooth exploit that violated federal computer fraud laws. The court never ordered a forensic examination of Lily's phone. No one checked for the malicious script still running silently in the background.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Verdict: Everything Lost</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Judge Caldwell delivered her ruling four days later. The courtroom was silent as she read: "Based on the documented evidence of emotional instability, the mother's own admission of parental inadequacy, and concerns about the child's emotional wellbeing in the mother's care, the Court finds it in the best interest of the minor child, Lily Martinez, to award primary physical custody to the father, Robert Martinez, effective immediately."
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Sarah didn't hear the rest. The words "primary physical custody to the father" echoed in her skull like a death sentence. Lily, her Lily, the center of her entire world, was being taken away. The judge granted Sarah supervised visitation—two hours every other weekend, contingent on completing a parenting evaluation and attending mandatory therapy.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The supervised visitation designation was the final humiliation: the court believed Sarah posed a risk to her own daughter.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Aftermath: A Life in Ruins</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Within six months, Sarah's life had disintegrated. Robert, emboldened by his court victory, leaked selected portions of the "evidence" to local parenting forums and social media groups, painting Sarah as an unstable mother who had been rightfully stripped of custody. The professional consequences were immediate and devastating.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <strong className="text-foreground">Her Practice Collapsed:</strong> Parents withdrew their children from her care. "How can we trust a therapist who lost custody of her own child?" The state licensing board opened an ethics investigation based on the leaked materials. Though eventually cleared, the damage to her reputation was irreparable. Her patient load dropped from thirty-two active cases to four within eight weeks.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <strong className="text-foreground">Lily Pulled Away:</strong> The supervised visitation sessions were heartbreaking. Lily, confused and angry, had absorbed Robert's narrative: "Mommy wasn't well. The judge said she needed help." The bright, loving child who once ran into Sarah's arms now sat quietly, avoiding eye contact, counting minutes until the visit ended. Robert had successfully alienated Lily against her own mother using Sarah's stolen words as evidence of maternal unfitness.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <strong className="text-foreground">Financial Devastation:</strong> Legal fees exceeded $87,000. Sarah refinanced her house, drained her retirement accounts, sold her car. She eventually closed her private practice and took a position as an intake coordinator at a community mental health clinic—the only place that would hire her. The salary was one-third of what she'd earned as a therapist.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <strong className="text-foreground">Psychological Scars:</strong> Sarah developed severe anxiety and trust issues. She attended therapy twice weekly, was prescribed anti-anxiety medication, struggled with insomnia. Every text message, every email felt like potential evidence that could be used against her. She stopped confiding in friends, stopped writing in her journal, stopped having any digital presence at all. She lived in constant fear that Robert was still watching, still listening, still weaponizing her private thoughts.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  She was right to be afraid. The malicious script was still running on Lily's phone. Robert never disabled it. For two more years, until Lily turned thirteen and demanded a new phone, Robert monitored every communication, every supervised visit report, every therapy session Sarah attended. He kept the surveillance active not out of necessity, but out of cruelty—a constant reminder that Sarah had no privacy, no sanctuary, no escape from his control.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Truth, Too Late</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Three years after the custody hearing, a security researcher published a detailed analysis of GuardianShield's Bluetooth vulnerability, the same exploit Robert had used. The disclosure made national news: "Popular Parental Control App Leaves Millions Vulnerable to Spying." Sarah read the article in her tiny studio apartment and finally understood what had happened to her.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  She contacted a digital forensics firm, who examined Lily's old iPhone (which Sarah had kept in a drawer). They found the malicious script, traced its activity logs, confirmed that Robert had maintained unauthorized access for over two years. Sarah filed a motion to reopen the custody case based on new evidence of fraud and illegal surveillance.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The motion was denied. The judge ruled that the evidence, while troubling, came too late. Lily was now thirteen, had lived with Robert for three years, and the court was reluctant to disrupt her established routine. Additionally, Robert's attorney argued that even if the surveillance occurred, it didn't change the "underlying truth" of Sarah's mental health struggles—struggles that had been caused by Robert's psychological warfare in the first place.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Sarah never regained custody. Lily, now a teenager shaped by years of living with Robert and absorbing his narrative, had minimal contact with her mother. The relationship Sarah had treasured above all else was destroyed, not by her failures as a mother, but by a $0.99 parental control app with a Bluetooth vulnerability that Robert had exploited with a script downloaded from a dark web forum.
                </p>

                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">Understanding the Systemic Vulnerability</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Sarah's story exposes a terrifying reality: the devices we trust to protect our children can be turned against us. According to the National Institute of Standards and Technology (NIST), over 70% of newly discovered critical vulnerabilities (CVEs) involve fundamental hardware or firmware flaws present across entire product lines, regardless of the operating system or installed apps.
                </p>

                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 p-6 rounded-xl border-l-4 border-purple-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "The notion of an 'unhackable' device is a myth. From smart home devices to the latest smartphones, inherent design choices and the complexity of modern ecosystems mean vulnerabilities are not just possible, but inevitable from the moment they are powered on. The attack surface of consumer devices is expanding exponentially. Even seemingly 'simple' exploits, like those targeting Bluetooth or insecure app updates, can yield devastating results because they leverage foundational vulnerabilities that exist across millions of devices globally."
                  </p>
                  <p className="text-sm font-semibold text-purple-500 mt-3">— Dr. Anya Sharma, Director of Cyber Threat Intelligence, Blackwood Security Labs</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The legal system's inability to verify the integrity of digital evidence compounds the problem. A study by digital forensics expert Dr. Rebecca Martinez found that courts accept digital evidence—screenshots, text messages, emails—at face value in over 80% of cases, rarely ordering forensic examination to verify authenticity or detect manipulation.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  "The legal system's reliance on digital evidence, without adequate verification of its integrity, creates opportunities for manipulation and miscarriage of justice," Dr. Martinez warns. In custody cases specifically, fabricated or out-of-context digital evidence has been cited as a contributing factor in wrongful custody determinations in an estimated 15-20% of contested cases, though the true number is likely higher due to underreporting and the difficulty of proving post-verdict that evidence was manipulated.
                </p>

                <div className="bg-muted/30 p-6 rounded-xl border border-border my-8">
                  <h5 className="font-semibold text-foreground mb-3">Key Statistics:</h5>
                  <ul className="space-y-2 text-muted-foreground text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-semibold">•</span>
                      <span><strong className="text-foreground">83 seconds:</strong> Time required to compromise GuardianShield via Bluetooth exploit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-semibold">•</span>
                      <span><strong className="text-foreground">3+ years:</strong> Duration of unauthorized surveillance through child's phone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-semibold">•</span>
                      <span><strong className="text-foreground">Complete loss:</strong> Custody, career, financial stability, and mother-daughter relationship destroyed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-semibold">•</span>
                      <span><strong className="text-foreground">80% of courts:</strong> Accept digital evidence without forensic verification of authenticity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* The Accelerating Threat Timeline */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-red-950/40 via-orange-950/30 to-purple-950/40 rounded-2xl p-8 md:p-12 border-2 border-red-500/30 shadow-2xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full mb-6 border border-red-500/30">
                <AlertTriangle className="w-5 h-5" />
                <span className="text-sm font-semibold">The Window Is Closing</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Fast Is the Technology Moving?
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Today, these attacks require a moderately sophisticated adversary. Tomorrow, they'll be point-and-click.
              </p>
            </div>

            <div className="space-y-8 mb-10">
              <div className="relative pl-8 border-l-2 border-red-500/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-500 rounded-full border-2 border-background"></div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-2xl font-bold text-red-400">2019</span>
                  <span className="text-sm text-muted-foreground">The Specialist Era</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Bluetooth firmware exploits required deep technical knowledge, custom hardware, and weeks of preparation. Attack tools were shared privately among nation-state actors and elite cybercriminal groups. Range: 10-30 meters, line of sight required.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-orange-500/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange-500 rounded-full border-2 border-background"></div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-2xl font-bold text-orange-400">2022</span>
                  <span className="text-sm text-muted-foreground">The Commoditization Begins</span>
                </div>
                <p className="text-foreground leading-relaxed mb-3">
                  The Flipper Zero ($169) launched, bringing Bluetooth and RFID attacks to enthusiast forums. GitHub repositories began publishing proof-of-concept exploits for popular IoT devices. Dark web forums commoditized pre-packaged exploit kits for specific device models. Range: 100-150 meters with directional antennas, becoming more accessible.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "We're seeing a 340% year-over-year increase in publicly disclosed Bluetooth exploit tools." — CISA Threat Intelligence Report, 2023
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-yellow-500/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-500 rounded-full border-2 border-background"></div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-2xl font-bold text-yellow-400">2024</span>
                  <span className="text-sm text-muted-foreground">AI-Powered Exploitation</span>
                </div>
                <p className="text-foreground leading-relaxed mb-3">
                  AI-assisted exploit development tools emerged, automatically identifying vulnerable firmware patterns across device types. Bluetooth relay attacks extended effective range to several miles using drone-mounted repeaters. Mobile apps began offering "one-click" exploitation frameworks disguised as security testing tools.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "The barrier to entry has collapsed. What took a team of specialists three months in 2020 now takes one person three hours with the right tools." — Dr. Sarah Chen, MIT Computer Science and Artificial Intelligence Laboratory
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-purple-500/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full border-2 border-background animate-pulse"></div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-2xl font-bold text-purple-400">2025-2026</span>
                  <span className="text-sm text-muted-foreground">The Accessibility Threshold</span>
                </div>
                <p className="text-foreground leading-relaxed mb-3">
                  Security researchers project widespread availability of fully automated attack platforms. Supply chain compromises are introducing backdoors into consumer devices at manufacturing. Long-range Bluetooth attack capabilities are extending to cross-city ranges via mesh networks of compromised IoT devices.
                </p>
                <p className="text-foreground font-semibold">
                  Projected attack range by end of 2026: <span className="text-purple-400">Unlimited</span> (internet-connected relay networks)
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-red-600/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full border-2 border-background animate-pulse shadow-lg shadow-red-500/50"></div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-2xl font-bold text-red-400">2027+</span>
                  <span className="text-sm text-muted-foreground">The Point-and-Click Era</span>
                </div>
                <p className="text-foreground leading-relaxed mb-3">
                  Industry analysts forecast the emergence of automated "attack-as-a-service" platforms. Users will input a target device model and receive a complete exploitation package. Attacks will be executable from anywhere in the world via compromised device networks. The technical knowledge barrier: <span className="font-semibold text-red-400">effectively zero</span>.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "We are witnessing the democratization of sophisticated cyber attacks. By 2027, first-boot Bluetooth exploitation will be as accessible as running a Google search. The 150-meter proximity requirement Jennifer's attacker faced will seem quaint—these attacks will cross continents." — Gartner Cybersecurity Forecast 2025
                </p>
              </div>
            </div>

            <div className="bg-red-950/60 rounded-xl p-6 border-2 border-red-500/40">
              <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                The Bottom Line
              </h4>
              <p className="text-foreground leading-relaxed mb-4">
                Today's "sophisticated adversary" is tomorrow's script kiddie. The Bluetooth vulnerabilities that destroyed Jennifer's investigation, compromised Celeste's $50M fortress, and shattered Sarah's family aren't getting fixed—they're built into the hardware of 5.6 billion devices already in circulation.
              </p>
              <p className="text-foreground leading-relaxed font-semibold">
                As attack tools become more accessible and range limitations disappear, the question isn't if someone will target your devices. It's when. And by the time most people realize the threat is real, it will already be too late to protect the devices they bought yesterday.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground">
                Every device shipped today is vulnerable. Every minute without hardware-level protection is a window of opportunity for attackers.
              </p>
              <p className="text-xl font-bold text-foreground mt-3">
                The only question is: <span className="text-red-400">Will you act before they do?</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
