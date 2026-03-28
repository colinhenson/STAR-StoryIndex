"use client";

import { useState } from "react";
import { stories } from "@/data/stories";
import type { Category } from "@/lib/types";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";
import { CategoryTabs } from "./CategoryTabs";
import { StoryCard } from "./StoryCard";

export function StoryIndex() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = stories.filter((story) => {
    const matchesCategory =
      activeCategory === "all" || story.tags.includes(activeCategory);

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
          <ThemeToggle />
        </header>

        {/* Search */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Tabs */}
        <CategoryTabs activeCategory={activeCategory} onChange={setActiveCategory} />

        {/* Result count */}
        <p className="text-xs text-muted-foreground">
          {filtered.length} of {stories.length} stories
        </p>

        {/* Story list */}
        <div className="flex flex-col gap-3">
          {filtered.map((story) => (
            <StoryCard key={story.id} story={story} />
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
