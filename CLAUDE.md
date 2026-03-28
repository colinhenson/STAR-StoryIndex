# STAR Story Index

A personal behavioral interview prep tool. A single-page web app that lets you filter and browse a library of pre-written STAR stories by competency category and keyword — designed to be open on a second screen or phone during a video interview as a memory aid.

This is a personal utility, not a public product. Optimize for clarity and maintainability over feature richness.

---

## Tech Stack

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme` in globals.css)
- **Components:** shadcn/ui (new-york style, CSS variables)
- **Package manager:** bun
- **Deployment target:** Cloudflare Pages via `@cloudflare/next-on-pages`

---

## Project Structure

```
src/
  app/
    globals.css           # Tailwind v4 + shadcn CSS variables, light/dark themes
    layout.tsx            # Geist font, ThemeProvider, metadata
    page.tsx              # Imports <StoryIndex /> only. No logic here.
  components/
    providers.tsx         # "use client" ThemeProvider wrapper (next-themes, dark default)
    story-index/
      StoryIndex.tsx      # "use client" — owns all filter/search state
      StoryCard.tsx       # Single story. Uses shadcn Collapsible to expand STAR detail.
      CategoryTabs.tsx    # Wrapping row of outline buttons, one per category + "All"
      SearchBar.tsx       # shadcn Input with a lucide Search icon prefix
      ThemeToggle.tsx     # shadcn Button toggling light/dark via next-themes
    ui/                   # shadcn auto-generated components (do not hand-write these)
  data/
    stories.ts            # The ONLY file edited to add/update stories. Typed array of Story objects.
  lib/
    types.ts              # Story and Category type definitions
    utils.ts              # cn() utility
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

The `tags` array on each story drives both category filtering and multi-competency matching. A story tagged `["conflict", "influence"]` appears under both filters. Tag stories based on what question types they best answer.

---

## Component Behavior

### `StoryIndex.tsx` (client component)
- State: `activeCategory: Category | "all"` and `searchQuery: string`
- Filtering logic: a story is shown if (a) its tags include `activeCategory` OR `activeCategory === "all"`, AND (b) the search query appears in title, hook, or any STAR field (case-insensitive)
- No URL params needed — this is a personal tool, state doesn't need to persist across sessions
- Renders: `<SearchBar>`, `<CategoryTabs>`, result count, list of `<StoryCard>`

### `CategoryTabs.tsx`
- A `flex flex-wrap` row of shadcn `Button` components — one per category plus "All"
- Active filter uses `variant="default"` (filled), inactive use `variant="outline"`
- Buttons wrap to a second line on narrow screens — no horizontal scrolling

### `StoryCard.tsx`
- Uses shadcn `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`
- Collapsed state: shows `title`, `hook`, and tag `Badge` components
- Expanded state: shows STAR fields in a two-column grid (muted uppercase label left, content right)
- Tags use shadcn `Badge` with `variant="secondary"` — color-coded per category

### `SearchBar.tsx`
- shadcn `Input` with a lucide `Search` icon absolutely positioned inside the left padding
- Clears on Escape key

### `ThemeToggle.tsx`
- shadcn `Button` with `variant="ghost"`, `size="icon"`, and `className="relative"`
- The `relative` class is required — without it the absolutely-positioned Moon icon escapes the button bounds and blocks taps on iOS Safari
- Uses `resolvedTheme` (not `theme`) from `next-themes` to avoid a hydration timing bug where `theme` is `undefined` on first render

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
3. Category filter buttons (wrapping row)
4. Result count (muted, small — "8 of 10 stories")
5. Stack of story cards

---

## Development

```bash
bun run dev
```

### Mobile testing on local network

When accessing the dev server from a phone (e.g. `http://10.76.0.127:3000`), Next.js blocks cross-origin requests to its dev resources by default, which prevents React from hydrating — the page loads but nothing interactive works. The fix is already in place in `next.config.ts`:

```ts
allowedDevOrigins: ["10.76.0.127"],
```

If your local network IP changes, update this value.

---

## Cloudflare Pages Deployment

Already configured. Scripts in `package.json`:

```bash
bun run pages:build   # builds for Cloudflare Edge via @cloudflare/next-on-pages
bun run deploy        # deploys to Cloudflare Pages via wrangler
```

`wrangler.toml` is at the project root. This app has no server-side logic, no Node APIs, and no dynamic routes — it builds cleanly for the Edge Runtime.

See `README.md` for full Cloudflare Pages setup instructions.

---

## What's Out of Scope

- No editing stories in the UI — edit `src/data/stories.ts` directly
- No authentication
- No backend
- No animations beyond what shadcn provides by default
- No analytics
