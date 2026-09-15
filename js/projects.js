const projects = [
  {
    title: "Perps Playground",
    type: "Market Structure Lab",
    date: "June 2026",
    sortDate: "2026-06-24",
    description:
      "A playground for reading perpetual-futures market structure in real time — compare venues, inspect funding and behaviour, and test ideas with a browser-local paper portfolio.",
    stack: ["Perpetual Futures", "Market Data", "Portfolio Tracking"],
    githubUrl: "",
    demoUrl: "https://perpsplayground.com",
    featured: true,
  },
  {
    title: "Prediction Market Trader",
    type: "Trading Automation",
    date: "March 2026",
    sortDate: "2026-03-30",
    description:
      "A research-and-execution setup for hourly crypto prediction markets, with live monitoring, trade records, performance tracking, and a local dashboard for staying honest about the numbers.",
    stack: ["Polymarket", "Trading Data", "Algorithmic Trading"],
    githubUrl: "",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Lighter Python SDK",
    type: "Open Source Contribution",
    date: "February 2026",
    sortDate: "2026-02-01",
    description:
      "Contributed to Lighter’s Python SDK, making its exchange infrastructure easier to work with programmatically.",
    stack: ["Python", "Exchange APIs", "Trading Infrastructure"],
    githubUrl: "https://github.com/Phenzic/lighter-python",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Crypto Market Engine",
    type: "Market Research Engine",
    date: "December 2025",
    sortDate: "2025-12-02",
    description:
      "A research engine for studying market-making and execution across Hyperliquid, Paradex, Lighter, and other derivatives venues.",
    stack: ["Market Making", "Crypto", "Research"],
    githubUrl: "https://github.com/Phenzic/dex-market-maker",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Quant Scrolls",
    type: "Research Archive",
    date: "August 2025",
    sortDate: "2025-08-26",
    description:
      "A contribution to a carefully assembled research shelf for quant finance, trading, MEV, execution, market microstructure, and decentralized markets.",
    stack: ["Quant Finance", "Trading Research", "Market Microstructure"],
    githubUrl: "https://github.com/Phenzic/quant-scrolls",
    demoUrl: "",
    featured: true,
  },
  {
    title: "Paradex RS",
    type: "Open Source Contribution",
    date: "August 2025",
    sortDate: "2025-08-09",
    description:
      "Contributed to a fast Rust client for Paradex, with REST and WebSocket access built for low-latency exchange workflows.",
    stack: ["Rust", "Exchange APIs", "Trading"],
    githubUrl: "https://github.com/Phenzic/paradex-rs",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Solana Atomic Arbitrage",
    type: "MEV Infrastructure",
    date: "July 2025",
    sortDate: "2025-07-08",
    description:
      "An atomic-arbitrage system for Solana: streaming transaction data, graph-based routing, token enrichment, durable logs, and Jupiter swap construction in one pipeline.",
    stack: ["Solana", "Yellowstone gRPC", "MEV"],
    githubUrl: "https://github.com/Phenzic/solana-atomic-arbs",
    demoUrl: "",
    featured: true,
  },
  {
    title: "Maven Fund R&D",
    type: "Crypto Research",
    date: "September 2024",
    sortDate: "2024-09-30",
    description:
      "A research home for Maven’s crypto-fund thesis, systematic market work, portfolio thinking, and risk-aware digital-asset research.",
    stack: ["Crypto", "Portfolio Strategy", "Risk Management"],
    githubUrl: "",
    demoUrl: "https://phenzic.eu.pythonanywhere.com",
    featured: false,
  },
  {
    title: "PyBit",
    type: "Open Source Contribution",
    date: "August 2024",
    sortDate: "2024-08-22",
    description:
      "Contributed to Bybit’s official Python connector, supporting both HTTP and WebSocket exchange integrations.",
    stack: ["Python", "Exchange APIs", "Trading Infrastructure"],
    githubUrl: "https://github.com/Phenzic/pybit",
    demoUrl: "",
    featured: false,
  },
  {
    title: "GhostNet",
    type: "Protocol",
    date: "January 2024",
    sortDate: "2024-01-04",
    description:
      "An experiment in private, permissionless peer-to-peer communication, inspired by Waku.",
    stack: ["P2P", "Privacy", "Decentralized Protocols"],
    githubUrl: "https://github.com/Phenzic/GhostNet",
    demoUrl: "",
    featured: false,
  },
  {
    title: "BattleGrid",
    type: "Strategy Game",
    date: "December 14, 2023",
    sortDate: "2023-12-14",
    description:
      "A tactical 11×11 strategy game where chess-like positioning meets modern units and asymmetric abilities.",
    stack: ["Game Design", "Strategy", "Grid Systems"],
    githubUrl: "https://github.com/Phenzic/battlegrid",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Binance DCA",
    type: "Trading Script",
    date: "October 2022",
    sortDate: "2022-10-10",
    description:
      "A simple Python script for automating scheduled crypto buys through Binance — built for disciplined DCA.",
    stack: ["Python", "Binance", "Crypto Automation"],
    githubUrl: "https://github.com/Phenzic/binance-dca",
    demoUrl: "",
    featured: false,
  },
  {
    title: "animeX",
    type: "CLI Tool",
    date: "March 2022",
    sortDate: "2022-03-28",
    description:
      "A command-line tool for pulling anime straight to a local machine.",
    stack: ["Python", "CLI", "Automation"],
    githubUrl: "https://github.com/Phenzic/animeX-v2",
    demoUrl: "",
    featured: false,
  },
  {
    title: "ReStatic",
    type: "Developer Tool",
    date: "December 2021",
    sortDate: "2021-12-10",
    description:
      "A Python utility that turns static HTML into Django or Flask-ready templates by cleaning up asset references automatically.",
    stack: ["Python", "Django/Flask", "Developer Tools"],
    githubUrl: "https://github.com/Phenzic/restatic",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Crypto Arbitrage",
    type: "Arbitrage Platform",
    date: "November 2021",
    sortDate: "2021-11-26",
    description:
      "An early crypto-arbitrage platform for comparing opportunities across centralized and decentralized exchanges.",
    stack: ["Crypto", "Arbitrage", "MEV"],
    githubUrl: "https://github.com/Phenzic/cc-arbitrage",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Docs to Markdown CLI",
    type: "CLI Tool",
    date: "October 2021",
    sortDate: "2021-10-26",
    description:
      "A command-line bridge from Google Docs to Markdown.",
    stack: ["Markdown", "Google Docs", "Automation"],
    githubUrl: "https://github.com/Phenzic/docs-to-md-cli",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Anime Hive",
    type: "Telegram Bot",
    date: "October 2020",
    sortDate: "2020-10-19",
    description:
      "A Telegram bot for anime downloads, recommendations, and information — with none of the ad clutter.",
    stack: ["Telegram Bot", "Python", "Automation"],
    githubUrl: "https://github.com/Phenzic/animehive",
    demoUrl: "",
    featured: false,
  },
  {
    title: "DevJobHub",
    type: "Job Alert Bot",
    date: "September 2020",
    sortDate: "2020-09-12",
    description:
      "A Telegram job-alert system that matched programmers with more relevant openings.",
    stack: ["Telegram Bot", "Jobs", "Automation"],
    githubUrl: "https://github.com/Phenzic/devjobhub",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Pwned Passwords",
    type: "Security Tool",
    date: "March 2020",
    sortDate: "2020-03-28",
    description:
      "A security utility for checking whether a password appears in known data breaches.",
    stack: ["Security", "Passwords", "Data Breach Checks"],
    githubUrl: "https://github.com/Phenzic/pwnedpasswords",
    demoUrl: "",
    featured: false,
  },
  {
    title: "QuickMed",
    type: "AI Healthcare",
    date: "December 2019",
    sortDate: "2019-12-30",
    description:
      "An early exploration of AI-assisted hospital diagnostics, spanning the dashboard, backend integration, and model-serving layers.",
    stack: ["AI", "Healthcare", "Diagnostics"],
    githubUrl: "https://github.com/Phenzic/QuickMed",
    demoUrl: "",
    featured: false,
  },
  {
    title: "NNDraw",
    type: "Visualization Tool",
    date: "September 2019",
    sortDate: "2019-09-24",
    description: "A small tool for making neural-network architectures easier to see and reason about.",
    stack: ["Neural Networks", "Visualization", "Machine Learning"],
    githubUrl: "https://github.com/Phenzic/NNDraw",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Im-Conv",
    type: "Web Utility",
    date: "September 2019",
    sortDate: "2019-09-19",
    description:
      "A Django utility for converting between PNG, JPEG, GIF, TIFF, WebP, PDF, and other image formats.",
    stack: ["Django", "Image Processing", "Web App"],
    githubUrl: "https://github.com/Phenzic/Im-Conv",
    demoUrl: "",
    featured: false,
  },
  {
    title: "PVault",
    type: "Security CLI",
    date: "September 2019",
    sortDate: "2019-09-11",
    description:
      "A Python CLI password manager for generating, encrypting, storing, and retrieving credentials with SQLite.",
    stack: ["Python", "Encryption", "Security"],
    githubUrl: "https://github.com/Phenzic/PVault",
    demoUrl: "",
    featured: false,
  },
  {
    title: "Cert-Gen",
    type: "Automation Tool",
    date: "September 2019",
    sortDate: "2019-09-08",
    description:
      "A certificate generator that maps CSV participant data onto image templates and removes the repetitive manual work.",
    stack: ["Python", "Image Processing", "Automation"],
    githubUrl: "https://github.com/Phenzic/Cert-Gen",
    demoUrl: "",
    featured: false,
  },
  {
    title: "HashDB",
    type: "Database Library",
    date: "August 2019",
    sortDate: "2019-08-15",
    description:
      "A lightweight, JSON-backed database library — an early experiment in making NoSQL feel approachable.",
    stack: ["Python", "NoSQL", "Database"],
    githubUrl: "https://github.com/Phenzic/HashDB",
    demoUrl: "",
    featured: false,
  },
  {
    title: "IPYNB Viewer",
    type: "Developer Tool",
    date: "August 2019",
    sortDate: "2019-08-12",
    description:
      "A browser-based Jupyter Notebook viewer for inspecting notebooks without firing up Anaconda or Jupyter locally.",
    stack: ["Jupyter", "Browser Tool", "Developer Tools"],
    githubUrl: "https://github.com/Phenzic/IPYNB-viewer",
    demoUrl: "",
    featured: false,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("projects-list");
  if (!target) {
    return;
  }

  const { renderProjectCards, sortRecentFirst } = window.Portfolio;
  const sortedProjects = sortRecentFirst(projects);

  let activeCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    const filtered = sortedProjects.filter((p) => {
      const matchesSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery) ||
        p.type.toLowerCase().includes(searchQuery) ||
        p.stack.some((s) => s.toLowerCase().includes(searchQuery));

      if (!matchesSearch) return false;

      if (activeCategory === "all") return true;
      const cat = activeCategory.toLowerCase();
      return (
        p.type.toLowerCase().includes(cat) ||
        p.stack.some((s) => s.toLowerCase().includes(cat))
      );
    });

    renderProjectCards(target, filtered);
  }

  const searchInput = document.getElementById("project-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  const filterContainer = document.getElementById("project-filters");
  if (filterContainer) {
    filterContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      filterContainer
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.filter || "all";
      applyFilters();
    });
  }

  applyFilters();
});
