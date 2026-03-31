var blogPlaceholderFeature = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720"><rect width="1200" height="720" fill="#141414"/><rect x="70" y="70" width="1060" height="580" rx="34" fill="#1f1f1f" stroke="#ffb400" stroke-width="4"/><circle cx="240" cy="220" r="90" fill="#2c2c2c"/><rect x="420" y="180" width="510" height="36" rx="12" fill="#333"/><rect x="420" y="250" width="420" height="30" rx="10" fill="#2d2d2d"/><rect x="180" y="400" width="840" height="22" rx="10" fill="#2d2d2d"/><rect x="180" y="450" width="720" height="22" rx="10" fill="#2d2d2d"/><rect x="180" y="500" width="620" height="22" rx="10" fill="#2d2d2d"/><text x="600" y="620" text-anchor="middle" fill="#ffb400" font-family="Arial, sans-serif" font-size="48" font-weight="700">Featured Post</text></svg>');
var blogPlaceholderPost = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#161616"/><rect x="60" y="60" width="780" height="480" rx="28" fill="#202020" stroke="#ffb400" stroke-width="4"/><rect x="120" y="120" width="660" height="180" rx="18" fill="#2b2b2b"/><rect x="120" y="340" width="420" height="24" rx="10" fill="#303030"/><rect x="120" y="392" width="560" height="20" rx="10" fill="#2d2d2d"/><rect x="120" y="438" width="480" height="20" rx="10" fill="#2d2d2d"/><text x="450" y="505" text-anchor="middle" fill="#ffb400" font-family="Arial, sans-serif" font-size="40" font-weight="700">Blog Placeholder</text></svg>');

window.BLOG_DATA = {
  featured: {
    category: "Featured",
    date: "March 2026",
    readTime: "6 min read",
    title: "How I Think About Delivery Systems That Actually Hold Up",
    excerpt: "A practical look at building delivery systems that reduce friction, improve visibility, and make execution easier for teams under pressure.",
    link: "blog-post.html",
    linkLabel: "Read Article",
    image: blogPlaceholderFeature
  },
  posts: [
    {
      category: "Project Management",
      date: "March 2026",
      readTime: "5 min read",
      title: "Why Project Status Updates Usually Fail",
      excerpt: "A simple way to make updates clearer, faster to scan, and more useful for stakeholders.",
      link: "blog-post.html",
      image: blogPlaceholderPost
    },
    {
      category: "Automation",
      date: "February 2026",
      readTime: "4 min read",
      title: "Where Automation Helps Most in Day-to-Day Operations",
      excerpt: "Examples of repetitive tasks worth automating first, especially in delivery and operations workflows.",
      link: "blog-post.html",
      image: blogPlaceholderPost
    },
    {
      category: "Notion Systems",
      date: "January 2026",
      readTime: "7 min read",
      title: "Designing a Notion Workspace People Will Actually Use",
      excerpt: "How to keep a workspace structured enough for visibility without making it heavy for the team.",
      link: "blog-post.html",
      image: blogPlaceholderPost
    },
    {
      category: "AI Workflows",
      date: "December 2025",
      readTime: "5 min read",
      title: "Using AI for Operations Without Creating Extra Noise",
      excerpt: "A grounded approach to introducing AI where it supports coordination, documentation, and repeatable work.",
      link: "blog-post.html",
      image: blogPlaceholderPost
    }
  ],
  platforms: [
    {
      label: "LinkedIn",
      icon: "fa-linkedin",
      url: "https://www.linkedin.com/"
    },
    {
      label: "Medium",
      icon: "fa-medium",
      url: "https://medium.com/"
    },
    {
      label: "Substack",
      icon: "fa-envelope-open",
      url: "https://substack.com/"
    },
    {
      label: "YouTube",
      icon: "fa-youtube-play",
      url: "https://www.youtube.com/"
    }
  ]
};
