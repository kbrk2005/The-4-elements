import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Play, CheckCircle2, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-secondary/5 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 animate-fade-in">
              <Shield className="h-4 w-4" />
              Secure & Accessible Online Examinations
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Conduct Exams with{" "}
              <span className="text-gradient">Confidence</span> & Integrity
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A modern examination platform designed for fairness, reliability, and accessibility. 
              No invasive surveillance—just smart, secure testing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/auth?mode=signup">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[
                "Auto-save Progress",
                "Reconnect Support",
                "Fair Evaluation",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Exam Interface Preview */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative bg-card rounded-2xl shadow-2xl p-6 border border-border">
              {/* Mock exam header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div>
                  <h3 className="font-display font-semibold text-foreground">Computer Science 101</h3>
                  <p className="text-sm text-muted-foreground">Final Examination</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/10 text-warning text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-warning"></span>
                  </span>
                  45:23 remaining
                </div>
              </div>

              {/* Mock question */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="px-2 py-1 rounded bg-muted font-medium">Q5 of 20</span>
                  <span className="text-secondary">● Autosaved</span>
                </div>

                <p className="text-foreground font-medium">
                  What is the time complexity of binary search algorithm?
                </p>

                <div className="space-y-3">
                  {["O(n)", "O(log n)", "O(n²)", "O(1)"].map((option, i) => (
                    <div
                      key={option}
                      className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        i === 1
                          ? "border-secondary bg-secondary/5"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          i === 1 ? "border-secondary bg-secondary" : "border-muted-foreground"
                        }`}>
                          {i === 1 && <div className="w-2 h-2 rounded-full bg-secondary-foreground" />}
                        </div>
                        <span className={i === 1 ? "text-foreground font-medium" : "text-muted-foreground"}>
                          {option}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation dots */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <Button variant="ghost" size="sm">Previous</Button>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i === 4 ? "bg-secondary" : i < 4 ? "bg-success" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <Button variant="secondary" size="sm">Next</Button>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 p-3 rounded-xl bg-card shadow-lg border border-border animate-float">
              <div className="flex items-center gap-2 text-success text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                Progress Saved
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-card shadow-lg border border-border animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2 text-secondary text-sm font-medium">
                <Shield className="h-4 w-4" />
                Secure Session
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
