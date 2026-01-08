import { Shield, Lock, Eye, Server, Clock, RefreshCw } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Session Locking",
    description: "One active session per user. Multiple login attempts blocked.",
  },
  {
    icon: Server,
    title: "Server-Side Validation",
    description: "All answers and timing validated on secure backend.",
  },
  {
    icon: Clock,
    title: "Time Drift Protection",
    description: "Server-synced timers prevent client-side manipulation.",
  },
  {
    icon: RefreshCw,
    title: "Graceful Recovery",
    description: "Auto-reconnect and progress sync after network issues.",
  },
  {
    icon: Eye,
    title: "Privacy Focused",
    description: "No webcam monitoring. No screen recording. Just fair exams.",
  },
  {
    icon: Shield,
    title: "Audit Logging",
    description: "Complete activity logs for transparency and review.",
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Enterprise-Grade Security
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Designed to Fail <span className="text-gradient">Gracefully</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              The system prioritizes fairness and accessibility while avoiding invasive 
              surveillance—maintaining exam integrity without compromising student privacy.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-3 p-4 rounded-xl bg-card border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 border border-border shadow-xl">
              {/* Shield animation */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full gradient-hero flex items-center justify-center shadow-glow">
                    <Shield className="h-16 w-16 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-secondary/30 animate-ping" />
                </div>
              </div>

              {/* Security stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-display text-2xl font-bold text-foreground">256-bit</div>
                  <div className="text-xs text-muted-foreground">Encryption</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-secondary">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-success">100%</div>
                  <div className="text-xs text-muted-foreground">GDPR Ready</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 px-4 py-2 rounded-full bg-card shadow-lg border border-border animate-float">
              <span className="text-sm font-medium text-success">✓ SOC 2 Type II</span>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-card shadow-lg border border-border animate-float" style={{ animationDelay: "1.5s" }}>
              <span className="text-sm font-medium text-secondary">✓ ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
