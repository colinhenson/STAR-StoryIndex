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
  activeCategory: Category | "all";
  onChange: (category: Category | "all") => void;
}

export function CategoryTabs({ activeCategory, onChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <Button
          key={cat.value}
          variant={activeCategory === cat.value ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(cat.value)}
        >
          {cat.label}
        </Button>
      ))}
    </div>
  );
}
