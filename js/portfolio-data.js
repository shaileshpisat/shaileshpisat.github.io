var portfolioPlaceholderProject = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#1f1f1f"/><circle cx="180" cy="160" r="90" fill="#2d2d2d"/><circle cx="1000" cy="650" r="140" fill="#2a2a2a"/><rect x="120" y="120" width="960" height="560" rx="32" fill="#262626" stroke="#ffb400" stroke-width="4"/><text x="600" y="380" text-anchor="middle" fill="#ffb400" font-family="Arial, sans-serif" font-size="54" font-weight="700">Project Placeholder</text></svg>');
var portfolioPlaceholderProduct = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#161616"/><rect x="90" y="90" width="1020" height="620" rx="36" fill="#202020" stroke="#ffb400" stroke-width="4"/><rect x="150" y="160" width="280" height="420" rx="22" fill="#2b2b2b"/><rect x="470" y="160" width="580" height="70" rx="16" fill="#2a2a2a"/><rect x="470" y="270" width="580" height="70" rx="16" fill="#2a2a2a"/><rect x="470" y="380" width="580" height="70" rx="16" fill="#2a2a2a"/><text x="600" y="660" text-anchor="middle" fill="#ffb400" font-family="Arial, sans-serif" font-size="54" font-weight="700">Product Placeholder</text></svg>');
var portfolioPlaceholderTool = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#191919"/><rect x="110" y="110" width="980" height="580" rx="34" fill="#242424" stroke="#ffb400" stroke-width="4"/><rect x="170" y="180" width="860" height="120" rx="20" fill="#303030"/><rect x="170" y="340" width="400" height="220" rx="20" fill="#2c2c2c"/><rect x="630" y="340" width="400" height="220" rx="20" fill="#2c2c2c"/><text x="600" y="650" text-anchor="middle" fill="#ffb400" font-family="Arial, sans-serif" font-size="54" font-weight="700">Tool Placeholder</text></svg>');

window.PORTFOLIO_DATA = {
  portfolioSections: {
    projects: [
      {
        title: "Project Management Landing Page",
        category: "Strategy & Delivery",
        image: portfolioPlaceholderProject,
        summary: "A focused landing page experience built around project management consulting, positioning, and lead generation.",
        details: [
          "Clarified service positioning for project and delivery consulting.",
          "Structured the page around trust, clarity, and action-oriented sections.",
          "Designed for a cleaner conversion path from landing to inquiry."
        ],
        stack: ["HTML", "CSS", "Bootstrap", "Content Strategy"],
        link: "pm_land.html",
        linkLabel: "Open Project"
      },
      {
        title: "Food Website Experience",
        category: "Frontend Build",
        image: portfolioPlaceholderProject,
        summary: "A restaurant-style website prototype with promotional sections, menu storytelling, and conversion-oriented layout blocks.",
        details: [
          "Built a visually driven layout with clear promotional sections.",
          "Balanced menu storytelling with call-to-action placement.",
          "Used a simple frontend stack for a fast, readable prototype."
        ],
        stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        link: "food_site/index.html",
        linkLabel: "View Demo"
      }
    ],
    products: [
      {
        title: "CRM Dashboard Concept",
        category: "Product Operations",
        image: portfolioPlaceholderProduct,
        summary: "A dashboard-style interface concept aimed at organizing operational workflows, visibility, and structured team activity.",
        stack: ["Dashboard UI", "Operations Thinking", "Workflow Design"],
        link: "bams_crm/index.html",
        linkLabel: "Open Dashboard"
      },
      {
        title: "Personal Portfolio Refresh",
        category: "Personal Brand",
        image: portfolioPlaceholderProduct,
        summary: "A personal profile site being reshaped around clearer storytelling, shared data-driven content, and a stronger professional narrative.",
        stack: ["HTML", "CSS", "JavaScript", "Content Structure"],
        link: "index.html",
        linkLabel: "View Site"
      }
    ],
    clients: [
      {
        name: "Product Teams",
        summary: "Worked with teams that need clearer execution, stronger coordination, and more dependable delivery systems.",
        highlights: ["Delivery planning", "Stakeholder coordination", "Operational clarity"]
      },
      {
        name: "Growing Digital Businesses",
        summary: "Supported business-facing initiatives where process maturity, visibility, and structured follow-through mattered most.",
        highlights: ["Workflow improvement", "Cross-functional alignment", "Execution rhythm"]
      },
      {
        name: "Internal Operations Stakeholders",
        summary: "Built systems and working structures that help internal stakeholders understand progress, priorities, and blockers.",
        highlights: ["Reporting visibility", "Notion systems", "Automation opportunities"]
      }
    ],
    toolsTemplates: [
      {
        title: "Notion Workspaces",
        category: "Systems Template",
        image: portfolioPlaceholderTool,
        summary: "Structured Notion setups for task tracking, project visibility, documentation, and recurring team workflows.",
        stack: ["Notion", "Dashboards", "Documentation Systems"]
      },
      {
        title: "Project Tracking Frameworks",
        category: "Operations Toolkit",
        image: portfolioPlaceholderTool,
        summary: "Reusable planning and tracking structures for aligning timelines, ownership, milestones, and execution status.",
        stack: ["Planning", "Status Tracking", "Execution Rhythm"]
      },
      {
        title: "Automation Workflows",
        category: "Process Enablement",
        image: portfolioPlaceholderTool,
        summary: "Practical workflow automations that reduce repetitive work and improve consistency across operations.",
        stack: ["Automation", "Process Design", "Operational Efficiency"]
      }
    ]
  }
};
