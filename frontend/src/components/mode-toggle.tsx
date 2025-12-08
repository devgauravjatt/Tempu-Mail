import { Moon, Sun, MonitorCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/services/theme";

export function ModeToggle() {
  const theme = useTheme((s) => s.theme);
  const setTheme = useTheme((s) => s.setTheme);

  const toggle = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const Icon =
    theme === "dark" ? (
      <Moon className="h-5 w-5" />
    ) : theme === "light" ? (
      <Sun className="h-5 w-5" />
    ) : theme === "system" ? (
      <MonitorCog className="h-5 w-5" />
    ) : (
      <div className="relative h-5 w-5">
        <Moon className="absolute h-5 w-5 opacity-50" />
      </div>
    );

  return (
    <Button variant="outline" onClick={toggle}>
      {Icon}
    </Button>
  );
}
