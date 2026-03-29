import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";

const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "leadership", label: "Leadership" },
  { value: "conflict", label: "Conflict" },
  { value: "ambiguity", label: "Ambiguity" },
  { value: "failure", label: "Failure" },
  { value: "cross-functional", label: "Cross-functional" },
  { value: "influence", label: "Influence" },
  { value: "innovation", label: "Innovation" },
  { value: "prioritization", label: "Prioritization" },
];

interface CategoryTabsProps {
  activeCategories: Set<Category>;
  filterFavorites: boolean;
  onToggleFavorites: () => void;
  onChange: (category: Category | "all") => void;
  onHover: (category: Category | null) => void;
}

export function CategoryTabs({ activeCategories, filterFavorites, onToggleFavorites, onChange, onHover }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={activeCategories.size === 0 && !filterFavorites ? "default" : "outline"}
        size="sm"
        className="rounded-full"
        onClick={() => onChange("all")}
      >
        All
      </Button>
      <Button
        variant={filterFavorites ? "default" : "outline"}
        size="icon"
        className={cn("rounded-full h-8 w-8")}
        onClick={onToggleFavorites}
        aria-label="Filter favorites"
      >
        <Star className={cn("h-3.5 w-3.5", filterFavorites && "fill-current")} />
      </Button>
      {CATEGORIES.filter((cat) => cat.value !== "all").map((cat) => {
        const isActive = activeCategories.has(cat.value as Category);
        return (
          <Button
            key={cat.value}
            variant={isActive ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => onChange(cat.value)}
            onMouseEnter={() => onHover(cat.value as Category)}
            onMouseLeave={() => onHover(null)}
          >
            {cat.label}
          </Button>
        );
      })}
    </div>
  );
}
