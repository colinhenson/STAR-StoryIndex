"use client";

import { useState, Fragment } from "react";
import { ChevronDown, Star } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { Story, Category } from "@/lib/types";

const STAR_FIELDS: { key: keyof Story["star"]; label: string }[] = [
  { key: "situation", label: "Situation" },
  { key: "task", label: "Task" },
  { key: "action", label: "Action" },
  { key: "result", label: "Result" },
];

interface StoryCardProps {
  story: Story;
  isFavorite: boolean;
  isShared: boolean;
  onToggleFavorite: () => void;
  onToggleShared: () => void;
  hoveredCategory: Category | null;
}

export function StoryCard({
  story,
  isFavorite,
  isShared,
  onToggleFavorite,
  onToggleShared,
  hoveredCategory,
}: StoryCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div
        className={cn(
          "rounded-lg border border-border bg-card text-card-foreground transition-opacity",
          isShared && "opacity-50"
        )}
      >
        <div className="flex items-start gap-3 p-4">
          {/* Shared checkbox — outside trigger */}
          <div
            className="shrink-0 mt-0.5"
            onClick={(e) => e.stopPropagation()}
          >
            <Checkbox
              checked={isShared}
              onCheckedChange={onToggleShared}
              aria-label="Mark as shared"
            />
          </div>

          {/* Collapsible trigger wraps only the text content */}
          <CollapsibleTrigger className="flex-1 text-left flex items-start justify-between gap-3 hover:bg-muted/50 -m-1 p-1 rounded transition-colors min-w-0">
            <div className="flex flex-col gap-2 min-w-0">
              <span className="font-medium text-sm leading-snug">
                {story.title}
              </span>
              <span className="text-sm text-muted-foreground leading-snug">
                {story.hook}
              </span>
              <div className="flex flex-wrap items-center gap-1">
                {/* Favorite star — outside trigger */}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onToggleFavorite();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.stopPropagation();
                      e.preventDefault();
                      onToggleFavorite();
                    }
                  }}
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                  className="shrink-0 cursor-pointer"
                >
                  <Star
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isFavorite
                        ? "fill-primary text-primary"
                        : "text-input hover:text-primary"
                    )}
                  />
                </span>
                {story.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={hoveredCategory === tag ? "default" : "secondary"}
                    className="text-xs font-normal transition-colors"
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
        </div>

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
