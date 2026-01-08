import { FileText, Play, CheckCircle, Award } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Create Exam",
    description: "Instructors set up exams with questions, time limits, and difficulty levels.",
    color: "from-primary to-primary/80",
  },
  {
    icon: Play,
    step: "02",
    title: "Take Exam",
    description: "Students access secure exam interface with auto-save and timer.",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Auto Evaluation",
    description: "MCQs graded instantly. Subjective answers flagged for manual review.",
    color: "from-success to-success/80",
  },
  {
    icon: Award,
    step: "04",
    title: "View Results",
    description: "Students receive detailed feedback. Instructors access analytics.",
    color: "from-accent to-accent/80",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Streamlined <span className="text-gradient">Workflow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From exam creation to result analysis—everything flows seamlessly.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step card */}
                <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-300 relative z-10">
                  {/* Step number */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white font-display font-bold mb-4`}>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-display font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection dot */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-card border-4 border-secondary z-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
