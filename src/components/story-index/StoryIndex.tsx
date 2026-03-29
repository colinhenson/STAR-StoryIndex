"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { stories } from "@/data/stories";
import type { Category } from "@/lib/types";
import { useLocalStorageSet } from "@/hooks/useLocalStorageSet";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";
import { CategoryTabs } from "./CategoryTabs";
import { StoryCard } from "./StoryCard";

export function StoryIndex() {
  const [activeCategories, setActiveCategories] = useState<Set<Category>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
  const [favorites, toggleFavorite] = useLocalStorageSet("star-favorites");
  const [shared, toggleShared, clearShared] = useLocalStorageSet("star-shared");

  const toggleCategory = (category: Category | "all") => {
    if (category === "all") {
      setActiveCategories(new Set());
      return;
    }
    const next = new Set(activeCategories);
    if (next.has(category)) {
      next.delete(category);
    } else {
      next.add(category);
    }
    setActiveCategories(next);
  };

  const filtered = stories.filter((story) => {
    const matchesCategory =
      activeCategories.size === 0 ||
      [...activeCategories].every((cat) => story.tags.includes(cat));

    if (!matchesCategory) return false;

    if (!searchQuery) return true;

    const q = searchQuery.toLowerCase();
    return (
      story.title.toLowerCase().includes(q) ||
      story.hook.toLowerCase().includes(q) ||
      story.star.situation.toLowerCase().includes(q) ||
      story.star.task.toLowerCase().includes(q) ||
      story.star.action.toLowerCase().includes(q) ||
      story.star.result.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-6 flex flex-col gap-4">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">STAR Stories</h1>
          <div className="flex items-center gap-1">
            {shared.size > 0 && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={clearShared}>
                    <RotateCcw className="h-4 w-4" />
                    <span className="sr-only">Reset shared</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Reset shared</TooltipContent>
              </Tooltip>
            )}
            <ThemeToggle />
          </div>
        </header>

        {/* Search */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Tabs + result count — sticky */}
        <div className="sticky top-0 z-10 bg-background py-3 -my-3 flex flex-col gap-4">
          <CategoryTabs activeCategories={activeCategories} onChange={toggleCategory} onHover={setHoveredCategory} />
          <p className="text-xs text-muted-foreground">
            {filtered.length} of {stories.length} stories
          </p>
        </div>

        {/* Story list */}
        <div className="flex flex-col gap-3">
          {filtered.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              isFavorite={favorites.has(story.id)}
              isShared={shared.has(story.id)}
              onToggleFavorite={() => toggleFavorite(story.id)}
              onToggleShared={() => toggleShared(story.id)}
              hoveredCategory={hoveredCategory}
            />
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-8">
              No stories match your filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
