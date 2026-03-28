"use client";

import { useState, Fragment } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Story, Category } from "@/lib/types";

const categoryColors: Record<Category, string> = {
  leadership: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  conflict: "bg-red-500/15 text-red-700 dark:text-red-300",
  ambiguity: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  failure: "bg-orange-500/15 text-orange-700 dark:text-orange-300",
  "cross-functional": "bg-violet-500/15 text-violet-700 dark:text-violet-300",
  influence: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
  innovation: "bg-green-500/15 text-green-700 dark:text-green-300",
  prioritization: "bg-pink-500/15 text-pink-700 dark:text-pink-300",
};

const STAR_FIELDS: { key: keyof Story["star"]; label: string }[] = [
  { key: "situation", label: "Situation" },
  { key: "task", label: "Task" },
  { key: "action", label: "Action" },
  { key: "result", label: "Result" },
];

export function StoryCard({ story }: { story: Story }) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="rounded-lg border border-border bg-card text-card-foreground">
        <CollapsibleTrigger className="w-full text-left p-4 flex items-start justify-between gap-3 hover:bg-muted/50 transition-colors rounded-lg">
          <div className="flex flex-col gap-2 min-w-0">
            <span className="font-medium text-sm leading-snug">{story.title}</span>
            <span className="text-sm text-muted-foreground leading-snug">{story.hook}</span>
            <div className="flex flex-wrap gap-1">
              {story.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={cn("text-xs font-normal border-0", categoryColors[tag])}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 mt-0.5 text-muted-foreground transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-4 pb-4 border-t border-border mt-0 pt-4">
            <div className="grid grid-cols-[6rem_1fr] gap-x-4 gap-y-3">
              {STAR_FIELDS.map(({ key, label }) => (
                <Fragment key={key}>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground pt-0.5">
                    {label}
                  </span>
                  <span className="text-sm leading-relaxed">
                    {story.star[key]}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
