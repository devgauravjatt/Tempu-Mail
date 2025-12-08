import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { Shield, Clock, Mail, Zap } from "lucide-react";

export default function Welcome() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Mail,
      title: "Temporary Inbox",
      desc: "Instant disposable email for privacy.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      desc: "Your identity stays protected always.",
    },
    {
      icon: Clock,
      title: "Fast & Reliable",
      desc: "Emails delivered within seconds.",
    },
    {
      icon: Zap,
      title: "No Sign Up",
      desc: "Start using instantly, no account needed.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-auto px-6 py-10 text-center bg-background">
      {/* Image Section
      <img
        src="/welcome.png" // ← Replace with your image
        alt="Welcome"
        className="w-64 h-64 object-contain mb-8 drop-shadow-lg"
      /> */}

      {/* Title */}
      <h1 className="text-4xl font-bold mb-3">Welcome to Tempu Mail</h1>

      {/* Description */}
      <p className="text-lg text-muted-foreground max-w-xl mb-10">
        Create temporary email addresses instantly. Fast, private, secure — perfect for sign-ups,
        testing, and avoiding spam.
      </p>

      {/* ---------- 4 FEATURE BOXES ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mb-10 w-full">
        {features.map((f, i) => (
          <div
            key={i}
            className="hover-zoom p-3 rounded-2xl border border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <f.icon className="h-8 w-8 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <Button size="lg" onClick={() => navigate("/inbox")} className="px-8 text-lg">
        Go to Inbox
      </Button>
    </div>
  );
}
