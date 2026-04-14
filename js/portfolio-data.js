var portfolioPlaceholderProject = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#1f1f1f"/><circle cx="180" cy="160" r="90" fill="#2d2d2d"/><circle cx="1000" cy="650" r="140" fill="#2a2a2a"/><rect x="120" y="120" width="960" height="560" rx="32" fill="#262626" stroke="#ffb400" stroke-width="4"/><text x="600" y="380" text-anchor="middle" fill="#ffb400" font-family="Arial, sans-serif" font-size="54" font-weight="700">Project Placeholder</text></svg>');
var projectPB = "img/project_pb.png";
var projectPT = "img/project_pt.png";
var productDC = "img/desk-clock-banner.png";
var productI45 = "img/invoice45_banner.png";
var toolsNotion = "img/6.png";
var toolsProject = "img/2.png";
var toolsWorkflow = "img/3.png";
var portfolioPlaceholderProduct = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#161616"/><rect x="90" y="90" width="1020" height="620" rx="36" fill="#202020" stroke="#ffb400" stroke-width="4"/><rect x="150" y="160" width="280" height="420" rx="22" fill="#2b2b2b"/><rect x="470" y="160" width="580" height="70" rx="16" fill="#2a2a2a"/><rect x="470" y="270" width="580" height="70" rx="16" fill="#2a2a2a"/><rect x="470" y="380" width="580" height="70" rx="16" fill="#2a2a2a"/><text x="600" y="660" text-anchor="middle" fill="#ffb400" font-family="Arial, sans-serif" font-size="54" font-weight="700">Product Placeholder</text></svg>');
var portfolioPlaceholderTool = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#191919"/><rect x="110" y="110" width="980" height="580" rx="34" fill="#242424" stroke="#ffb400" stroke-width="4"/><rect x="170" y="180" width="860" height="120" rx="20" fill="#303030"/><rect x="170" y="340" width="400" height="220" rx="20" fill="#2c2c2c"/><rect x="630" y="340" width="400" height="220" rx="20" fill="#2c2c2c"/><text x="600" y="650" text-anchor="middle" fill="#ffb400" font-family="Arial, sans-serif" font-size="54" font-weight="700">Tool Placeholder</text></svg>');

window.PORTFOLIO_DATA = {
  portfolioSections: {
    projects: [
      {
        title: "Custom CRM for Pool Service Business",
        category: "Operations & Delivery",
        image: projectPB,
        summary: "A tailored CRM solution built for a pool service business to manage customers, scheduling, job tracking, and follow-ups in one place.",
        details: [
          "Mapped end-to-end service workflows to define the data model and feature set.",
          "Built customer and job management modules with status tracking and history.",
          "Streamlined scheduling and follow-up processes to reduce manual overhead."
        ],
        stack: ["CRM Design", "Workflow Mapping", "Operations Systems", "Process Automation"],
        link: "https://poolbelt.com",
        linkLabel: "Open Project"
      },
      {
        title: "Custom ERP for Pool Construction",
        category: "Operations & Delivery",
        image: projectPT,
        summary: "A purpose-built ERP system for a pool construction business to manage projects, procurement, subcontractors, and financials end to end.",
        details: [
          "Defined core modules covering project lifecycle, material procurement, and subcontractor coordination.",
          "Built structured workflows for cost tracking, milestone management, and job site visibility.",
          "Consolidated fragmented tools into a single operational system to improve delivery consistency."
        ],
        stack: ["ERP Design", "Project Operations", "Procurement Workflows", "Process Consolidation"],
        link: "https://build.pool.tech",
        linkLabel: "Open Project"
      }
    ],
    products: [
      {
        title: "Desk Clock",
        category: "Product Build",
        image: productDC,
        summary: "A browser-based time management tool with world clocks, alarms, timers, and activity history — no account needed, works across all devices.",
        stack: ["Browser App", "Local-First", "Responsive Design", "Productivity"],
        link: "https://desk-clock.com",
        linkLabel: "Open App"
      },
      {
        title: "Invoice45.com",
        category: "Product Build",
        image: productI45,
        summary: "Professional invoices and proposals in under 45 seconds — built for small businesses, solopreneurs, and freelancers who need speed and simplicity.",
        stack: ["SaaS", "Invoicing", "Small Business", "Freelance Tools"],
        link: "https://invoice45.com",
        linkLabel: "Open App"
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
        image: toolsNotion,
        summary: "Structured Notion setups for task tracking, project visibility, documentation, and recurring team workflows.",
        stack: ["Notion", "Dashboards", "Documentation Systems"]
      },
      {
        title: "Project Tracking Frameworks",
        category: "Operations Toolkit",
        image: toolsProject,
        summary: "Reusable planning and tracking structures for aligning timelines, ownership, milestones, and execution status.",
        stack: ["Planning", "Status Tracking", "Execution Rhythm"]
      },
      {
        title: "Automation Workflows",
        category: "Process Enablement",
        image: toolsWorkflow,
        summary: "Practical workflow automations that reduce repetitive work and improve consistency across operations.",
        stack: ["Automation", "Process Design", "Operational Efficiency"]
      }
    ]
  }
};
