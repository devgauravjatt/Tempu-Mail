import { Button } from "@/components/ui/button";
import { Copy, RefreshCw, Replace, Mail } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useRevalidator } from "react-router";
import { toast } from "sonner";

export default function AppHeader({ mail, resetMail }: { mail: string; resetMail: () => void }) {
  const revalidator = useRevalidator();

  const handleCopy = () => {
    navigator.clipboard.writeText(mail);
    toast.success("Copied to clipboard!");
  };

  const handleRefresh = () => {
    revalidator.revalidate();

    toast.info("Refreshed mail!");
  };

  const handleReset = () => {
    resetMail();
    revalidator.revalidate();
  };

  return (
    <div className="border border-border bg-sidebar p-4  flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* LEFT — EMAIL INFORMATION */}
      <div className="flex items-center gap-3">
        <Mail className="h-6 w-6" />
        <div>
          <p className="text-sm text-muted-foreground">Your Temporary Email</p>
          <h2 className="text-xl font-semibold">{mail}</h2>
        </div>
      </div>

      {/* RIGHT — ACTION BUTTONS */}
      <div className="flex items-center gap-3">
        {/* Copy Button */}
        <Button variant="outline" size="md" onClick={handleCopy}>
          <Copy className="h-5 w-5 mr-2" />
          Copy
        </Button>
        {/* Change Button */}
        <Button variant="outline" size="md" onClick={handleReset}>
          <Replace className="h-5 w-5 mr-2" />
          Change
        </Button>
        {/* Refresh Button */}
        <Button variant="outline" size="md" onClick={handleRefresh}>
          <RefreshCw className="h-5 w-5 mr-2" />
          Refresh
        </Button>
        {/* Mode Toggle */}
        <ModeToggle />
      </div>
    </div>
  );
}
