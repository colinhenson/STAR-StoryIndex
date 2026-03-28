import type { Story } from "@/lib/types";

// Edit this file to add, update, or remove your stories.
// Each story can have multiple tags — it will appear under every matching category tab.
// Keep STAR fields brief: enough to trigger your memory, not a full script.

export const stories: Story[] = [
  {
    id: 1,
    title: "Design system consolidation after acquisition",
    hook: "Unified three product teams onto a single system post-M&A",
    tags: ["leadership", "cross-functional", "influence"],
    star: {
      situation:
        "Two acquired startups brought incompatible design systems — three teams building independently with no shared foundation.",
      task: "Consolidate without a mandate. Needed buy-in from teams with strong ownership pride and no incentive to give up control.",
      action:
        "Ran cross-team audit workshops to surface overlap. Built a shared token layer first — low friction, high value. Migrated components incrementally so no team felt like they lost their system overnight.",
      result:
        "All three teams on one system within 6 months. Design review cycles shortened, and engineering stopped asking which component to use.",
    },
  },
  {
    id: 2,
    title: "Defended a phased approach against scope pressure",
    hook: "Pushed back when executives wanted everything in one quarter",
    tags: ["conflict", "influence", "prioritization"],
    star: {
      situation:
        "VP wanted a full platform redesign delivered in one quarter with a two-designer team.",
      task: "Communicate real constraints without sounding like resistance to the work.",
      action:
        "Built a phased roadmap with a risk/value matrix. Framed it as 'what we can guarantee vs. what we can attempt' rather than 'what we can and can't do.'",
      result:
        "Executive approved the phased plan. Phase 1 shipped on time and became the template for the rest of the roadmap.",
    },
  },
  {
    id: 3,
    title: "Recovering credibility after a failed launch",
    hook: "Turned a high-profile miss into a new process standard",
    tags: ["failure", "leadership"],
    star: {
      situation:
        "A major feature shipped with significant UX problems. Support tickets spiked, leadership was frustrated, and the team was demoralized.",
      task: "Fix the product and restore trust — without throwing the team under the bus.",
      action:
        "Ran a blameless post-mortem to identify the actual failure points. Shipped a rapid patch within two weeks, then used the post-mortem findings to establish a new design QA handoff process.",
      result:
        "Feature stabilized in three weeks. The handoff process was adopted org-wide and referenced in subsequent launches.",
    },
  },
  {
    id: 4,
    title: "Aligning stakeholders with no clear requirements",
    hook: "Structured ambiguity using OOUX before touching screens",
    tags: ["ambiguity", "leadership", "prioritization"],
    star: {
      situation:
        "Greenfield product with four stakeholders, each with a different mental model of what the product was for.",
      task: "Align the team around a buildable scope without months of analysis paralysis.",
      action:
        "Facilitated an OOUX workshop — mapped core objects and their relationships before any screens. This surfaced where everyone already agreed and made disagreements concrete and resolvable.",
      result:
        "Reached stakeholder alignment in two sessions. MVP shipped in 8 weeks with no significant scope changes mid-build.",
    },
  },
  {
    id: 5,
    title: "Earning engineering trust on a new team",
    hook: "Shifted from 'just the designer' to a genuine technical partner",
    tags: ["cross-functional", "influence", "innovation"],
    star: {
      situation:
        "Joined a team where engineers saw design as a bottleneck. Handoff was adversarial — specs arrived late, intent got lost in translation.",
      task: "Change the dynamic without being confrontational about the existing culture.",
      action:
        "Started pairing directly with engineers on specs. Contributed to Storybook documentation. Learned their constraints before proposing solutions rather than after.",
      result:
        "Within two quarters I was being included in architecture discussions. Design and engineering shipped together instead of in sequence.",
    },
  },
  {
    id: 6,
    title: "Shipped a production iOS app solo",
    hook: "Built and launched BitDek without an engineering team",
    tags: ["innovation", "ambiguity"],
    star: {
      situation:
        "Had a product concept I believed in — an iOS music player for audiophiles — but no engineering resources and no budget to hire.",
      task: "Get a real, shippable product into the App Store to validate the idea and prove the build model.",
      action:
        "Used AI coding tools (Claude Code, Cursor) to build and iterate without a traditional engineering partner — designing and developing in the same loop rather than sequentially.",
      result:
        "BitDek shipped to the App Store. Proved that a designer with the right tools can own the full build cycle, not just the design phase.",
    },
  },
  {
    id: 7,
    title: "Keeping a project on track through a reorg",
    hook: "Maintained momentum when the team structure changed mid-project",
    tags: ["ambiguity", "leadership", "cross-functional"],
    star: {
      situation:
        "Two months into a platform redesign, the team was reorganized and two key stakeholders changed roles. Context and momentum were at risk.",
      task: "Keep the project moving without restarting or losing what had already been decided.",
      action:
        "Created a running decision log artifact and ran rapid onboarding sessions for incoming stakeholders. Re-scoped what genuinely needed re-approval versus what could proceed as-is.",
      result:
        "Project continued on schedule. The decision log became a reused template across the org for handling mid-project personnel changes.",
    },
  },
  {
    id: 8,
    title: "Getting a product pivot approved through a prototype",
    hook: "Changed direction by showing, not arguing",
    tags: ["influence", "innovation", "leadership"],
    star: {
      situation:
        "PM was committed to a feature direction. User research pointed to a fundamentally different approach, but the data alone wasn't moving anyone.",
      task: "Change direction without undermining the PM or creating a political conflict.",
      action:
        "Built a prototype of the alternative approach over a weekend. Ran an impromptu session with three users during a sprint review — kept it low-stakes, positioned it as a question rather than a challenge.",
      result:
        "PM changed direction based on what he saw in the session. The prototype became the foundation for the next sprint.",
    },
  },
  {
    id: 9,
    title: "Inheriting a broken design system",
    hook: "Engineers had quietly stopped using it — fixed the trust, not just the assets",
    tags: ["failure", "cross-functional", "prioritization"],
    star: {
      situation:
        "Took over a design system that engineers had stopped trusting and were working around. The Figma files were maintained but adoption had collapsed.",
      task: "Understand why it broke down and fix the system — not just update the components.",
      action:
        "Interviewed five engineers to map the actual failure points. Rebuilt the top 20 most-used components with an engineer co-owner to restore credibility and catch integration issues early.",
      result:
        "Adoption climbed back to near 100% within two quarters. Co-ownership became the new standard for component maintenance.",
    },
  },
  {
    id: 10,
    title: "Triaging three competing VP-level priorities",
    hook: "Managed conflicting executive demands with one designer available",
    tags: ["prioritization", "conflict", "influence"],
    star: {
      situation:
        "Three VPs each believed their project was the top design priority. One designer was available. No one had visibility into what the others were asking for.",
      task: "Allocate fairly and transparently without picking political favorites or creating resentment.",
      action:
        "Built a shared prioritization rubric and got all three VPs in a room together. Facilitated a ranking session using the rubric so the decision came from them, not from me.",
      result:
        "Agreement reached in one meeting. All three projects shipped in sequence. No escalations, no end-runs around the process.",
    },
  },
];
