# STAR Story Index

A personal behavioral interview prep tool. A single-page web app that lets you filter and browse a library of pre-written STAR stories by competency category and keyword — designed to be open on a second screen or phone during a video interview as a memory aid.

This is a personal utility, not a public product. Optimize for clarity and maintainability over feature richness.

---

## Tech Stack

- **Framework:** Next.js (App Router, TypeScript) — same setup as the uishadcn-playground
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme` in globals.css)
- **Components:** shadcn/ui (new-york style, CSS variables)
- **Package manager:** bun
- **Deployment target:** Cloudflare Pages via `@cloudflare/next-on-pages`

Copy `globals.css`, `components.json`, `lib/utils.ts`, and the root layout pattern from the uishadcn-playground as the starting point.

---

## Project Structure

```
src/
  app/
    globals.css           # Copy from uishadcn-playground — includes @theme, dark mode, shadcn vars
    layout.tsx            # Minimal shell. Include next-themes ThemeProvider for dark mode toggle.
    page.tsx              # Imports <StoryIndex /> only. No logic here.
  components/
    story-index/
      StoryIndex.tsx      # "use client" — owns all filter/search state (useState only, no external state lib)
      StoryCard.tsx       # Single story. Uses shadcn Collapsible to expand STAR detail.
      CategoryTabs.tsx    # shadcn Tabs — one tab per competency category + "All"
      SearchBar.tsx       # shadcn Input with a lucide Search icon prefix
      ThemeToggle.tsx     # shadcn Button (icon) toggling light/dark via next-themes
    ui/                   # shadcn auto-generated components (do not hand-write these)
  data/
    stories.ts            # The ONLY file edited to add/update stories. Typed array of Story objects.
  lib/
    types.ts              # Story and Category type definitions
    utils.ts              # cn() utility — copy from uishadcn-playground
```

---

## Types (`src/lib/types.ts`)

```ts
export type Category =
  | "leadership"
  | "conflict"
  | "ambiguity"
  | "failure"
  | "cross-functional"
  | "influence"
  | "innovation"
  | "prioritization";

export interface StarDetail {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface Story {
  id: number;
  title: string;       // Short memory hook — the thing you say to yourself to recall the story
  hook: string;        // One-line summary shown in collapsed card state
  tags: Category[];    // Can have multiple — story appears under each matching tab
  star: StarDetail;    // Keep each field brief: enough to trigger memory, not a full script
}
```

---

## Data Layer (`src/data/stories.ts`)

A plain typed TypeScript array. No database, no API, no React Query needed.

```ts
import type { Story } from "@/lib/types";

export const stories: Story[] = [
  // ... story objects
];
```

The `tags` array on each story drives both tab filtering and multi-competency matching. A story tagged `["conflict", "influence"]` appears under both tabs. There are no "right" tags — tag stories based on what question types they best answer.

---

## Component Behavior

### `StoryIndex.tsx` (client component)
- State: `activeCategory: Category | "all"` and `searchQuery: string`
- Filtering logic: a story is shown if (a) its tags include `activeCategory` OR `activeCategory === "all"`, AND (b) the search query appears in title, hook, or any STAR field (case-insensitive)
- No URL params needed — this is a personal tool, state doesn't need to persist across sessions
- Renders: `<SearchBar>`, `<CategoryTabs>`, result count, list of `<StoryCard>`

### `CategoryTabs.tsx`
- Uses shadcn `Tabs`, `TabsList`, `TabsTrigger`
- Tab labels: All, Leadership, Conflict, Ambiguity, Failure, Cross-functional, Influence, Innovation, Prioritization
- Wrap in horizontal scroll on mobile so tabs don't wrap to multiple lines

### `StoryCard.tsx`
- Uses shadcn `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`
- Collapsed state: shows `title`, `hook`, and tag `Badge` components
- Expanded state: shows STAR fields in a simple two-column layout (label left, content right)
- STAR labels: Situation, Task, Action, Result — rendered as muted uppercase labels
- Tags use shadcn `Badge` with `variant="secondary"` — one badge per tag, styled by category color

### `SearchBar.tsx`
- shadcn `Input` with a lucide `Search` icon absolutely positioned inside the left padding
- Clears on Escape key

### `ThemeToggle.tsx`
- shadcn `Button` with `variant="ghost"` and `size="icon"`
- Lucide `Sun` / `Moon` icons toggling via `next-themes` `useTheme`

---

## Layout & Visual Intent

This is a utility, not a portfolio piece. Aim for:
- Clean, readable, high-contrast
- Comfortable on a 13" laptop at ~60% width (second monitor scenario) AND on a phone
- Dark mode as the default (interviews often happen at night, low ambient light)
- No hero sections, no marketing copy, no decoration

Page structure (top to bottom):
1. Minimal header: app name left, theme toggle right
2. Search bar (full width)
3. Category tabs (horizontal scroll on mobile)
4. Result count (muted, small — "8 of 10 stories")
5. Stack of story cards

---

## shadcn Components to Install

Run these before writing any component code:

```bash
bunx --bun shadcn@latest add input
bunx --bun shadcn@latest add tabs
bunx --bun shadcn@latest add badge
bunx --bun shadcn@latest add collapsible
bunx --bun shadcn@latest add button
```

Check `src/components/ui/` after each — shadcn may have already installed some as dependencies.

---

## Cloudflare Pages Deployment

Add to `package.json` scripts:

```json
"pages:build": "bunx @cloudflare/next-on-pages",
"deploy": "bunx wrangler pages deploy .vercel/output/static"
```

Create `wrangler.toml` at project root:

```toml
name = "star-index"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]

[build]
command = "bun run pages:build"
```

Add `@cloudflare/next-on-pages` and `wrangler` as dev dependencies:

```bash
bun add -d @cloudflare/next-on-pages wrangler
```

This app has no server-side logic, no Node APIs, and no dynamic routes — it will build cleanly for the Edge Runtime without any special configuration.

---

## What "Done" Looks Like

- [ ] Page loads showing all stories
- [ ] Category tabs filter the list correctly
- [ ] Keyword search filters across title, hook, and STAR fields
- [ ] Category + search filters combine (AND logic)
- [ ] Each card expands/collapses to show/hide STAR detail
- [ ] Result count updates with filters
- [ ] Dark mode toggle works and persists (next-themes localStorage)
- [ ] Responsive: usable on mobile without horizontal scroll (except the tabs row)
- [ ] `bun run pages:build` completes without errors

---

## What's Out of Scope

- No editing stories in the UI — edit `src/data/stories.ts` directly
- No authentication
- No backend
- No animations beyond what shadcn provides by default
- No analytics
