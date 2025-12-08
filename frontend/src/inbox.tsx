import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useLoaderData } from "react-router";
import type { MailDataLoader } from "./services/mail";
import { TimeAgo } from "./components/TimeAgo";

export default function Inbox() {
  // Fake mail data (replace with API later)
  const emails = useLoaderData<MailDataLoader>();

  // Show 10 at first
  const [visibleCount, setVisibleCount] = useState(10);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* Inbox Title */}
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <Mail className="h-8 w-8" />
        Inbox
      </h1>

      {/* Email List */}
      <div className="space-y-4">
        {emails.slice(0, visibleCount).map((email) => (
          <div
            key={email.id}
            className="p-5 rounded-xl border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-pointer"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">{email.from.address}</h3>
                <p className="text-sm text-muted-foreground">{email.from.name}</p>
                <p className="text-sm mt-1">{email.intro.replaceAll("*", " ")}</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap ml-2">
                <TimeAgo date={email.createdAt} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < emails.length && (
        <div className="flex justify-center mt-8">
          <Button size="lg" variant="outline" onClick={() => setVisibleCount((prev) => prev + 10)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
