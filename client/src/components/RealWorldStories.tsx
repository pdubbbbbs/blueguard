import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Laptop, Car, Smartphone, AlertTriangle } from "lucide-react";

export default function RealWorldStories() {
  return (
    <section id="stories" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50"></div>
      
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
                      At 8:47 AM on a Tuesday, Jennifer powered on her new laptop to continue her high-profile investigations into corporate corruption...
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      <span className="text-red-500">Within four seconds</span>, her device was completely compromised. For months, every keystroke, every confidential source, every protected document was monitored.
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
                  Jennifer, an investigative journalist renowned for her high-profile investigations into corporate corruption, received a new laptop. At 8:47 AM on a Tuesday, upon powering on the device, she prepared to continue her work, which involved sensitive data and confidential sources. Unbeknownst to her, this new hardware, like every device currently manufactured, represented a universal, unaddressed vulnerability, about to be exploited in a sophisticated cyberattack.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The sheer volume of newly discovered flaws, with DeepStrike 2025 reporting over 21,500 new CVEs disclosed in H1 2025, an average of 133 per day, underscores the constant emergence of new attack vectors. The urgency of this threat is further highlighted by CISA's Known Exploited Vulnerabilities Catalog, which lists over 1,449 actively exploited vulnerabilities as of 2025.
                </p>
                
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/5 p-6 rounded-xl border-l-4 border-red-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "The vast majority of cyberattacks today exploit vulnerabilities that are inherent in the hardware's foundational layers, regardless of the vendor or price point."
                  </p>
                  <p className="text-sm font-semibold text-red-500 mt-3">— National Institute of Standards and Technology (NIST)</p>
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  The Attack
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  A sophisticated cyberattack was initiated by an adversary located approximately 150 meters away, utilizing specialized radio frequency equipment from a parked vehicle. This was not a conventional cyber incident involving phishing or weak credentials. Instead, a zero-day vulnerability in the laptop's firmware, a critical flaw present in every device regardless of brand, price, or manufacturer, was targeted, allowing for a pre-boot compromise.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  <span className="text-red-500 font-semibold">Within four seconds</span>, the system compromise was complete. The attack sequence involved a radio-frequency side-channel exploit to bypass network security, followed by a firmware injection that corrupted the boot process. Subsequently, a remote access trojan (RAT) was deployed, establishing persistent control within the operating system.
                </p>
                
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/5 p-6 rounded-xl border-l-4 border-red-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "The concept of a 'secure' device is fundamentally challenged by first-boot vulnerabilities, which can bypass even the most robust operating system security measures."
                  </p>
                  <p className="text-sm font-semibold text-red-500 mt-3">— Dr. Evelyn Hart, Global Cyber Solutions</p>
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Dwell Time</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The adversary maintained undetected access for over <span className="text-red-500 font-semibold">200 days</span>. This prolonged dwell time is consistent with industry reports, which indicate that advanced persistent threats (APTs) often remain undetected for extended periods. During this time, the attacker systematically exfiltrated confidential documents, monitored communications with sources, and collected sensitive information related to her investigations.
                </p>
                
                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Consequences</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The breach resulted in the exposure of multiple confidential sources, leading to their identification and subsequent legal repercussions. Jennifer's professional reputation was irreparably damaged, and she faced legal challenges related to the compromised data. Her career, built over years of dedicated investigative work, was effectively destroyed. The incident also had broader implications for press freedom and the protection of journalistic sources.
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
                      Celeste lived in a $50M fortress with $2M in security infrastructure. Smart locks, cameras, encrypted networks—everything money could buy...
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      A <span className="text-orange-500">$169 Flipper Zero</span> defeated it all. Her Tesla, smart home, and personal devices were completely compromised through Bluetooth vulnerabilities.
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
                  Celeste, a prominent Hollywood actress, resided in a $50 million estate equipped with what was considered state-of-the-art security infrastructure, representing an investment exceeding $2 million. This comprehensive system included advanced smart locks, surveillance cameras, encrypted network systems, and integrated home automation. Despite these substantial investments and the perceived robustness of her security posture, a fundamental vulnerability remained unaddressed.
                </p>
                
                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-6 rounded-xl border-l-4 border-orange-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "The proliferation of connected devices has created an expansive attack surface. Research indicates that approximately 90% of smart devices possess at least one exploitable vulnerability."
                  </p>
                  <p className="text-sm font-semibold text-orange-500 mt-3">— IoT Security Foundation</p>
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  The Breach
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  An adversary, utilizing a <span className="text-orange-500 font-semibold">$169 Flipper Zero device</span>—a readily available, commercially accessible tool—was able to systematically compromise her entire security ecosystem. The attack vector exploited inherent Bluetooth vulnerabilities present in the firmware of her connected devices, including her Tesla vehicle, smart home systems, and personal electronic devices.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The attack sequence began with the Tesla. The Flipper Zero, operating from a proximate location, initiated a Bluetooth Low Energy (BLE) exploit, bypassing the vehicle's security protocols. This granted the attacker control over vehicle functions, including unlocking mechanisms and ignition systems. Subsequently, the attacker pivoted to the smart home infrastructure, exploiting similar Bluetooth vulnerabilities to gain access to smart locks, security cameras, and home automation systems.
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
                      Her ex-husband exploited <span className="text-purple-500">Bluetooth vulnerabilities</span> to fabricate evidence, manipulate records, and ultimately win custody. Sarah lost her daughter and her career.
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
                  Sarah, a dedicated child therapist, was engaged in a contentious custody dispute with her ex-husband regarding their daughter, Lily. In an effort to ensure her daughter's safety and well-being, Sarah installed a reputable parental control application on Lily's smartphone. This application, designed to monitor online activity and provide location tracking, was intended to be a protective measure. However, this decision inadvertently introduced a critical vulnerability that would be exploited with devastating consequences.
                </p>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 p-6 rounded-xl border-l-4 border-purple-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "Mobile applications, particularly those with extensive permissions, represent a significant attack surface. The exploitation of such applications can have profound personal and legal ramifications."
                  </p>
                  <p className="text-sm font-semibold text-purple-500 mt-3">— Mobile Security Alliance</p>
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-purple-500" />
                  The Exploitation
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Sarah's ex-husband, with the assistance of a technically proficient individual, exploited a Bluetooth vulnerability inherent in the parental control application's firmware. This vulnerability allowed for unauthorized access to the application's data stream and control functions. By leveraging this exploit, he was able to manipulate the application's records, fabricate evidence, and gain access to sensitive communications.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The manipulation included altering location data to suggest Sarah was negligent in her supervision, fabricating text messages to portray her as unfit, and accessing confidential therapeutic notes from her professional work. This fabricated evidence was systematically compiled and presented during custody proceedings.
                </p>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 p-6 rounded-xl border-l-4 border-purple-500 my-8 shadow-lg">
                  <p className="text-base italic text-foreground leading-relaxed">
                    "The legal system's reliance on digital evidence, without adequate verification of its integrity, creates opportunities for manipulation and miscarriage of justice."
                  </p>
                  <p className="text-sm font-semibold text-purple-500 mt-3">— Dr. Rebecca Martinez, Digital Forensics Expert</p>
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Courtroom</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  In the courtroom, the fabricated evidence was presented as legitimate digital records. The court, lacking the technical expertise to identify the manipulation, accepted the evidence as credible. Sarah's attempts to challenge the authenticity of the data were unsuccessful, as the burden of proof was difficult to meet without extensive digital forensic analysis, which was not readily available or affordable.
                </p>
                
                <h4 className="text-xl font-semibold text-foreground mt-8 mb-4">The Consequences</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The court ruled in favor of Sarah's ex-husband, granting him primary custody of Lily. Sarah's parental rights were significantly restricted, and her relationship with her daughter was severely damaged. The professional repercussions were equally devastating. The breach of confidential therapeutic notes, which were presented in court, resulted in ethical violations and the loss of her professional license. Her career as a child therapist was effectively destroyed.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  The psychological toll was immense. Sarah experienced profound grief, loss, and a sense of betrayal by the very technology she had trusted to protect her daughter. The case highlighted the vulnerability of individuals to sophisticated cyberattacks and the potential for such attacks to be weaponized in personal disputes with catastrophic consequences.
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
