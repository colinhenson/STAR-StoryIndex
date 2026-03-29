# STAR Story Index

A personal behavioral interview prep tool. Filter and browse a library of STAR stories by competency category and keyword — designed to sit open on a second screen or phone during a video interview as a quick memory aid.

Built with Next.js, Tailwind CSS v4, and shadcn/ui. Dark mode by default.

---

## Features

- **Category filtering** — filter by one or more competency categories. Multiple selections use AND logic, so only stories matching all selected categories are shown.
- **Search** — full-text search across titles, hooks, and all STAR fields.
- **Favorites** — click the star icon on any story to mark it as a favorite. Use this to flag your strongest stories for hiring managers or to spread them strategically across interviewers.
- **Shared tracking** — check the checkbox on a story after you've told it in an interview. Shared stories are dimmed so you can avoid repeating yourself across interviewers. Use the reset button in the header to clear all shared marks when starting a new interview loop.
- **Badge highlighting** — hover over a category button to highlight matching badges across all visible story cards.

> **Important:** Favorites and shared status are stored in your browser's localStorage. This means they are specific to the browser and device you're using. Prepare on the same device you plan to use during the interview.

---

## Running locally

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
bun run build
```

## Adding your own stories

Edit `src/data/stories.ts`. Each story has a title, a one-line hook, one or more category tags, and the four STAR fields. The file is self-documenting — follow the existing pattern.

Available tags: `leadership`, `conflict`, `ambiguity`, `failure`, `cross-functional`, `influence`, `innovation`, `prioritization`

---

## Hosting on Cloudflare Pages

This project is configured for deployment to [Cloudflare Pages](https://pages.cloudflare.com) via [`@cloudflare/next-on-pages`](https://github.com/cloudflare/next-on-pages).

### Connect your repo

1. Push this repo to GitHub
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**
3. Select your repo
4. Set the build configuration:
   - **Build command:** `bun run pages:build`
   - **Build output directory:** `.vercel/output/static`
   - **Environment variable:** `NODE_VERSION` = `20`
5. Deploy

Cloudflare Pages will automatically redeploy on every push to `main`.

### Manual deploy

To deploy from the command line:

```bash
bun run pages:build
bun run deploy
```

You'll be prompted to log in to Cloudflare on first use.
