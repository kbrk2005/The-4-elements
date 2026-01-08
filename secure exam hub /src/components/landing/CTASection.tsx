import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-12 md:p-16 text-center">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary-foreground/80 text-sm font-medium mb-6">
              <GraduationCap className="h-4 w-4" />
              Ready to transform examinations?
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Start Conducting Secure Exams Today
            </h2>

            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join institutions worldwide using ExamShield for fair, accessible, 
              and reliable online examinations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="xl" asChild className="bg-white hover:bg-white/90 text-primary">
                <Link to="/auth?mode=signup">
                  Get Started Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                Schedule Demo
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/60 mt-6">
              No credit card required · Free for up to 50 students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
