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
  {
    id: 11,
    title: "Onboarding redesign driven by support data",
    hook: "Cut first-week support tickets in half by rethinking the first-run experience",
    tags: ["innovation"],
    star: {
      situation:
        "New users were filing support tickets within their first three days, all asking the same setup questions the product should have answered.",
      task: "Redesign the onboarding flow to reduce support load without adding a heavy tutorial layer.",
      action:
        "Mapped the top 10 ticket categories to specific moments in the onboarding flow. Replaced a static walkthrough with contextual guidance that appeared at decision points.",
      result:
        "First-week support tickets dropped 52%. Activation rate improved and the approach was extended to two other product lines.",
    },
  },
  {
    id: 12,
    title: "Saying no to a pet feature from a founder",
    hook: "Redirected a founder's feature idea without damaging the relationship",
    tags: ["conflict"],
    star: {
      situation:
        "The company founder wanted a specific dashboard widget built based on how he personally used the product. No other users had requested it.",
      task: "Decline the request without alienating the founder or appearing dismissive of his input.",
      action:
        "Pulled usage data showing the dashboard patterns of the top 50 active accounts. Presented the data alongside his request so the gap was visible, then proposed a lightweight alternative that addressed his underlying need.",
      result:
        "Founder agreed to shelve the original idea. The alternative shipped in half the time and saw broader adoption.",
    },
  },
  {
    id: 13,
    title: "Running a design sprint with a remote team across four time zones",
    hook: "Adapted a five-day sprint into an async-first format that actually worked",
    tags: ["cross-functional", "innovation"],
    star: {
      situation:
        "Team was distributed across US, Europe, and Asia. A traditional design sprint was impossible — there was only a two-hour overlap window.",
      task: "Get the benefits of a design sprint without requiring synchronous participation for five straight days.",
      action:
        "Broke the sprint into async exercises with clear deliverables and deadlines per phase. Used the two-hour overlap for critique and decision-making only. Built a shared FigJam board as the single source of truth.",
      result:
        "Sprint completed in six days instead of five, but produced a testable prototype. The async format became the team's default for future sprints.",
    },
  },
  {
    id: 14,
    title: "Navigating a product decision with incomplete data",
    hook: "Made a defensible call when the research budget was zero",
    tags: ["ambiguity"],
    star: {
      situation:
        "Product needed to choose between two checkout flow approaches. There was no budget for user research and the deadline was two weeks out.",
      task: "Make a decision that the team could commit to without proper validation.",
      action:
        "Ran a lightweight competitive audit of six comparable products, combined it with existing analytics on drop-off points, and documented the assumptions behind the recommendation so they could be tested post-launch.",
      result:
        "Team shipped with confidence. Post-launch metrics validated the approach, and the assumptions doc became a template for future low-data decisions.",
    },
  },
  {
    id: 15,
    title: "Mentoring a junior designer through their first lead role",
    hook: "Coached without taking over — they owned the outcome",
    tags: ["leadership"],
    star: {
      situation:
        "A junior designer was given lead on a visible project. They had the skills but had never run a project end-to-end or presented to stakeholders.",
      task: "Support them enough to succeed without undermining their ownership or doing the work for them.",
      action:
        "Set up weekly 1:1s focused on their questions, not my feedback. Helped them prep for stakeholder meetings by role-playing tough questions. Reviewed work only when they asked.",
      result:
        "They delivered the project on time and received strong feedback from leadership. They led the next project without any coaching scaffolding.",
    },
  },
  {
    id: 16,
    title: "Killing a feature that the team had already built",
    hook: "Advocated for removal after launch data contradicted the hypothesis",
    tags: ["failure", "influence"],
    star: {
      situation:
        "A feature the team spent six weeks building launched to flat engagement. The PM wanted to iterate, but the data suggested the premise was wrong, not the execution.",
      task: "Build the case for removing the feature without demoralizing the team that built it.",
      action:
        "Compiled the usage data alongside the original hypothesis. Framed removal as a win for focus rather than a failure of the work. Presented a reallocation plan showing what the team could ship instead.",
      result:
        "Feature was removed in the next sprint. Team morale stayed intact, and the reallocation delivered a higher-impact improvement within the quarter.",
    },
  },
  {
    id: 17,
    title: "Accessibility audit that changed the roadmap",
    hook: "Turned a compliance checkbox into a strategic priority",
    tags: ["influence", "prioritization"],
    star: {
      situation:
        "Accessibility was treated as a nice-to-have. The product had significant WCAG failures but no one was prioritizing fixes because there was no customer pressure.",
      task: "Elevate accessibility from a backlog afterthought to a roadmap item without waiting for a legal threat.",
      action:
        "Ran an audit and quantified the impact — number of affected users, revenue at risk from enterprise procurement requirements, and cost of retrofitting later versus fixing now. Presented findings to the product leadership team.",
      result:
        "Accessibility work was added to the next quarter's roadmap. Two enterprise deals that had stalled on compliance moved forward after the fixes shipped.",
    },
  },
  {
    id: 18,
    title: "Resolving a design-engineering standoff over animation",
    hook: "Found the technical middle ground that satisfied both sides",
    tags: ["conflict", "cross-functional"],
    star: {
      situation:
        "Design team wanted rich transition animations. Engineering said the animation library would add 40kb to the bundle and wasn't worth the performance hit.",
      task: "Find a solution both sides could accept without either feeling like they lost.",
      action:
        "Sat down with the lead engineer to understand the actual constraints. Identified that CSS transitions could cover 80% of the desired animations with zero bundle impact. Built a prototype proving it.",
      result:
        "Shipped with CSS-only animations. Design got the polish they wanted, engineering kept the bundle lean, and both teams referenced this as a model for resolving similar tradeoffs.",
    },
  },
  {
    id: 19,
    title: "Building a business case for a design tools migration",
    hook: "Got budget approval by quantifying designer time wasted on tooling friction",
    tags: ["prioritization"],
    star: {
      situation:
        "The team was on an outdated design tool that slowed collaboration and caused version control issues. Leadership didn't see tooling as a priority.",
      task: "Make the case for migration in terms leadership would act on — cost and velocity, not designer happiness.",
      action:
        "Tracked time spent on workarounds over two weeks across the team. Translated hours into dollars and projected the annual cost of inaction versus the one-time cost of migration.",
      result:
        "Budget approved within two weeks. Migration completed in a month with measurable improvement in design-to-handoff cycle time.",
    },
  },
  {
    id: 20,
    title: "Launching a product with no prior user research",
    hook: "Shipped a v1 by treating the launch itself as the research phase",
    tags: ["ambiguity", "innovation"],
    star: {
      situation:
        "Company wanted to enter a new market segment with no existing user relationships and no time for a traditional discovery phase.",
      task: "Ship something useful fast enough to learn from real usage rather than hypothetical feedback.",
      action:
        "Designed a minimal v1 scoped to one core workflow. Instrumented it heavily for analytics and embedded a feedback mechanism directly in the UI. Treated the first 30 days as a structured learning period.",
      result:
        "v1 shipped in five weeks. Usage data from the first month directly shaped the v2 roadmap, which retained 70% of early adopters.",
    },
  },
];
