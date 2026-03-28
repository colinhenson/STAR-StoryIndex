# STAR Story Index

A personal behavioral interview prep tool. Filter and browse a library of STAR stories by competency category and keyword — designed to sit open on a second screen or phone during a video interview as a quick memory aid.

Built with Next.js, Tailwind CSS v4, and shadcn/ui. Dark mode by default.

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
