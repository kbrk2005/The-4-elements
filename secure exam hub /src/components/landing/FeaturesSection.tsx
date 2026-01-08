import { 
  Shield, 
  Wifi, 
  Clock, 
  CheckSquare, 
  Users, 
  BarChart3,
  Accessibility,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Non-Invasive Security",
    description: "Smart integrity measures without invasive surveillance. Fair proctoring that respects privacy.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Wifi,
    title: "Network Resilience",
    description: "Auto-save and seamless reconnection. Never lose progress due to connection issues.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Clock,
    title: "Server-Synced Timer",
    description: "Accurate timing synchronized with server. No client-side manipulation possible.",
    color: "bg-warning/10 text-warning",
  },
  {
    icon: CheckSquare,
    title: "Smart Evaluation",
    description: "Instant grading for MCQs with support for manual review of subjective answers.",
    color: "bg-success/10 text-success",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Separate interfaces for students, instructors, and administrators.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Comprehensive reports on exam performance, question difficulty, and student progress.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Accessibility,
    title: "Accessibility First",
    description: "Keyboard navigation, screen reader support, and high contrast modes.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Lock,
    title: "Session Locking",
    description: "One device, one session. Prevent multiple login attempts during exams.",
    color: "bg-destructive/10 text-destructive",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for <span className="text-gradient">Integrity</span> & Accessibility
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to ensure fair, reliable, and accessible examinations 
            without compromising on security.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
