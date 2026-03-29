import { Button } from "@/components/ui/button";
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
  onChange: (category: Category | "all") => void;
  onHover: (category: Category | null) => void;
}

export function CategoryTabs({ activeCategories, onChange, onHover }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => {
        const isActive =
          cat.value === "all"
            ? activeCategories.size === 0
            : activeCategories.has(cat.value);
        return (
          <Button
            key={cat.value}
            variant={isActive ? "default" : "outline"}
            size="sm"
            onClick={() => onChange(cat.value)}
            onMouseEnter={() => onHover(cat.value === "all" ? null : cat.value)}
            onMouseLeave={() => onHover(null)}
          >
            {cat.label}
          </Button>
        );
      })}
    </div>
  );
}
