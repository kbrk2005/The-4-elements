import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Shield,
  Mail,
  Lock,
  User,
  GraduationCap,
  BookOpen,
  Settings,
  ArrowLeft,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { z } from "zod";

/* ================= VALIDATION ================= */
const emailSchema = z.string().email("Please enter a valid email address");
const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters");
const nameSchema = z.string().min(2, "Name must be at least 2 characters");

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, signUp, signIn, loading: authLoading } = useAuth();

  const [mode, setMode] = useState(
    searchParams.get("mode") === "signup" ? "signup" : "login"
  );
  const [selectedRole, setSelectedRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [errors, setErrors] = useState({});

  /* ================= REDIRECT IF LOGGED IN ================= */
  useEffect(() => {
    if (user && !authLoading) {
      navigate("/dashboard");
    }
  }, [user, authLoading, navigate]);

  const roles = [
    {
      id: "student",
      icon: GraduationCap,
      label: "Student",
      description: "Take exams and view results",
    },
    {
      id: "instructor",
      icon: BookOpen,
      label: "Instructor",
      description: "Create and manage exams",
    },
    {
      id: "admin",
      icon: Settings,
      label: "Admin",
      description: "Full system access",
    },
  ];

  /* ================= FORM VALIDATION ================= */
  const validateForm = () => {
    const newErrors = {};

    try {
      emailSchema.parse(formData.email);
    } catch (e) {
      newErrors.email = e.errors[0].message;
    }

    try {
      passwordSchema.parse(formData.password);
    } catch (e) {
      newErrors.password = e.errors[0].message;
    }

    if (mode === "signup") {
      try {
        nameSchema.parse(formData.name);
      } catch (e) {
        newErrors.name = e.errors[0].message;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT HANDLER ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (mode === "signup") {
        const { error } = await signUp(
          formData.email,
          formData.password,
          formData.name,
          selectedRole
        );

        if (error) {
          toast.error(error.message);
          return;
        }

        toast.success("Account created successfully!");
        localStorage.setItem({"username":formData.name,"password":formData.password})
        navigate("/dashboard");
      } else {
        const { error } = await signIn(
          formData.email,
          formData.password
        );

        if (error) {
          toast.error("Invalid email or password");
          return;
        }

        toast.success("Welcome back!");
        navigate("/dashboard");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ================= LOADING ================= */
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* LEFT PANEL */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />

        <div>
          <Link to="/" className="flex items-center gap-2 text-primary-foreground mb-12">
            <ArrowLeft className="h-5 w-5" />
            Back to home
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Shield className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary-foreground">
              ExamShield
            </span>
          </div>

          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            {mode === "login" ? "Welcome back!" : "Join ExamShield"}
          </h1>

          <p className="text-primary-foreground/80 text-lg">
            {mode === "login"
              ? "Sign in to access your exams and results."
              : "Create an account to start online exams."}
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {/* MODE TOGGLE */}
          <div className="flex p-1 bg-muted rounded-lg mb-8">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2 rounded-md ${
                mode === "login" ? "bg-card shadow-sm" : ""
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2 rounded-md ${
                mode === "signup" ? "bg-card shadow-sm" : ""
              }`}
            >
              Create Account
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === "signup" && (
              <>
                <Label>Role</Label>
                <div className="grid grid-cols-3 gap-3">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-3 border rounded-lg ${
                        selectedRole === role.id
                          ? "border-secondary"
                          : ""
                      }`}
                    >
                      <role.icon className="mx-auto mb-1" />
                      {role.label}
                    </button>
                  ))}
                </div>

                <Label>Name</Label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </>
            )}

            <Label>Email</Label>
            <Input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <Label>Password</Label>
            <Input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Please wait..." : mode === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;