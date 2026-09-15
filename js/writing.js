const writingItems = [
  {
    title: "Why your environment variables aren't safe",
    platform: "Flutterwave Engineering",
    date: "February 2025",
    sortDate: "2025-02-27",
    summary:
      "A security-focused guide on why environment variables alone are not enough to protect secrets in production applications.",
    tags: ["Security", "Fintech", "DevOps"],
    url: "https://dev.to/flutterwaveeng/why-your-environment-variables-arent-safe-4pjo",
    featured: true,
  },
  {
    title: "Here's How Standardization Can Fix the Identity Security Problem",
    platform: "The New Stack",
    date: "February 2025",
    sortDate: "2025-02-05",
    summary:
      "An essay on how standardized identity practices can reduce fragmentation and improve security across modern software systems.",
    tags: ["Security", "Identity", "DevOps"],
    url: "https://thenewstack.io/heres-how-standardization-can-fix-the-identity-security-problem/",
    featured: true,
  },
  {
    title: "From Code to Cloud: Deploying your Flutter Application to Globe",
    platform: "DEV Community",
    date: "January 2025",
    sortDate: "2025-01-16",
    summary:
      "A walkthrough for deploying a Flutter application to Globe, covering build setup, configuration, and release workflow.",
    tags: ["Flutter", "Mobile", "Cloud", "Tutorial"],
    url: "https://dev.to/phenzic/from-code-to-cloud-deploying-your-flutter-application-to-globe-2nc",
    featured: false,
  },
  {
    title: "Getting Started with PAIMA and Scroll",
    platform: "Hashnode",
    date: "February 2024",
    sortDate: "2024-02-08",
    summary:
      "An introduction to PAIMA, an app-specific L2 framework for onchain games, with a practical getting-started path on Scroll.",
    tags: ["Web3", "Scroll", "Gaming", "Tutorial"],
    url: "https://phensics.hashnode.dev/getting-started-with-paima-and-scroll",
    featured: true,
  },
  {
    title: "Building a DID Starter Dapp with Spruce and NextJs",
    platform: "Hashnode",
    date: "February 2024",
    sortDate: "2024-02-06",
    summary:
      "A tutorial on building a decentralized identity starter app using SpruceID tooling and Next.js.",
    tags: ["Web3", "Identity", "Next.js", "Tutorial"],
    url: "https://phensics.hashnode.dev/building-a-did-dapp-with-spruce-and-nextjs",
    featured: false,
  },
  {
    title:
      "How to build a ZK-Proof Voting Contract on The Scroll Network with Noir",
    platform: "Hashnode",
    date: "February 2024",
    sortDate: "2024-02-06",
    summary:
      "A step-by-step guide to building a zero-knowledge voting contract on Scroll using Noir.",
    tags: ["Web3", "Scroll", "ZK", "Solidity"],
    url: "https://phensics.hashnode.dev/build-a-zk-proof-voting-contract-with-noir-on-scroll-sapolia",
    featured: false,
  },
  {
    title:
      "How to Create and Call On-Chain Contracts with HardHat on the Scroll Network",
    platform: "Hashnode",
    date: "January 2024",
    sortDate: "2024-01-30",
    summary:
      "A practical Hardhat tutorial for deploying and interacting with smart contracts on Scroll testnet.",
    tags: ["Web3", "Scroll", "Hardhat", "Tutorial"],
    url: "https://phensics.hashnode.dev/calling-on-chain-contracts-with-hardhat-on-scroll-testnet",
    featured: false,
  },
  {
    title:
      "Solving Git Submodule Error In Foundry Project: 'git submodule exited with code 1 | 128'",
    platform: "Hashnode",
    date: "January 2024",
    sortDate: "2024-01-22",
    summary:
      "A troubleshooting guide for resolving common git submodule failures when working with Foundry projects.",
    tags: ["Foundry", "DevTools", "Git", "Tutorial"],
    url: "https://phensics.hashnode.dev/solving-git-submodule-error-in-foundry-project-git-submodule-exited-with-code-1-128",
    featured: false,
  },
  {
    title: "How To Integrate Direct Card Payment on Your Website Using Flutterwave",
    platform: "Flutterwave Engineering",
    date: "November 2024",
    sortDate: "2024-11-27",
    summary:
      "A developer guide to integrating Flutterwave direct card payments into a website checkout flow.",
    tags: ["Fintech", "Payments", "Tutorial", "API"],
    url: "https://dev.to/flutterwaveeng/how-to-integrate-direct-card-payment-on-your-website-using-flutterwave-hg8",
    featured: false,
  },
  {
    title: "Understand what JavaScript deobfuscation is in web scraping",
    platform: "DEV Community",
    date: "November 2024",
    sortDate: "2024-11-18",
    summary:
      "An explainer on JavaScript deobfuscation techniques and why they matter when scraping dynamic websites.",
    tags: ["Web Scraping", "JavaScript", "Tutorial"],
    url: "https://dev.to/phenzic/understand-what-javascript-deobfuscation-is-in-web-scraping-1o24",
    featured: false,
  },
  {
    title:
      "How to Build a Product Scraper for Infinite Scroll Websites using ZenRows Web Scraper",
    platform: "DEV Community",
    date: "November 2024",
    sortDate: "2024-11-18",
    summary:
      "A hands-on tutorial for scraping infinite-scroll product listings with ZenRows and handling pagination challenges.",
    tags: ["Web Scraping", "Python", "Tutorial"],
    url: "https://dev.to/phenzic/how-to-build-a-product-scraper-for-infinite-scroll-websites-using-zenrows-web-scraper-549i",
    featured: false,
  },
  {
    title: "How to Integrate a Payment Gateway in an E-commerce Application",
    platform: "Flutterwave Engineering",
    date: "October 2024",
    sortDate: "2024-10-15",
    summary:
      "A step-by-step guide to adding payment gateway integration to an e-commerce application.",
    tags: ["Fintech", "Payments", "E-commerce", "Tutorial"],
    url: "https://dev.to/flutterwaveeng/how-to-integrate-a-payment-gateway-in-an-e-commerce-application-28ji",
    featured: false,
  },
  {
    title: "Transaction Verification in Fintech Applications: A Step-By-Step Guide",
    platform: "Flutterwave Engineering",
    date: "September 2024",
    sortDate: "2024-09-17",
    summary:
      "A practical guide to verifying transactions in fintech apps, covering flows, edge cases, and developer checks.",
    tags: ["Fintech", "Payments", "Tutorial"],
    url: "https://dev.to/flutterwaveeng/transaction-verification-in-fintech-applications-a-step-by-step-guide-213j",
    featured: false,
  },
  {
    title: "A Developer's Guide to Verifying Customer Financial Data in Nigeria",
    platform: "Flutterwave Engineering",
    date: "September 2024",
    sortDate: "2024-09-09",
    summary:
      "A Nigeria-focused developer guide to verifying customer financial data for compliance and onboarding workflows.",
    tags: ["Fintech", "Payments", "Nigeria", "Tutorial"],
    url: "https://dev.to/flutterwaveeng/a-developers-guide-to-verifying-customer-financial-data-in-nigeria-37oj",
    featured: false,
  },
  {
    title: "The Amazing SQL Server Data Types (And When to Use Them)",
    platform: "Adam the Automator",
    date: "2023",
    sortDate: "2023-05-01",
    summary:
      "A tutorial on SQL Server data types, when to use each one, and how to choose the right type for your schema.",
    tags: ["SQL Server", "Databases", "Tutorial"],
    url: "https://adamtheautomator.com/sql-server-data-types/",
    featured: false,
  },
  {
    title: "Trusting Veeam AWS Backup to Protect Files",
    platform: "Adam the Automator",
    date: "2023",
    sortDate: "2023-04-01",
    summary:
      "A walkthrough of using Veeam on AWS to back up and protect files in cloud infrastructure.",
    tags: ["AWS", "Backup", "DevOps", "Tutorial"],
    url: "https://adamtheautomator.com/veeam-aws/",
    featured: false,
  },
  {
    title: "Automating Tasks Using Bash Scripts and Cron Jobs with AWS",
    platform: "Adam the Automator",
    date: "2023",
    sortDate: "2023-03-01",
    summary:
      "A tutorial on automating routine AWS tasks with Bash scripts and scheduled cron jobs.",
    tags: ["AWS", "Bash", "Automation", "Tutorial"],
    url: "https://adamtheautomator.com/automating-tasks/",
    featured: false,
  },
  {
    title: "Deploying a Smart Contract Using EthersJs and Ganache",
    platform: "Hashnode",
    date: "September 2022",
    sortDate: "2022-09-30",
    summary:
      "A beginner-friendly guide to deploying a smart contract locally using Ethers.js, solc, and Ganache.",
    tags: ["Web3", "Ethereum", "Smart Contracts", "Tutorial"],
    url: "https://phensics.hashnode.dev/deploying-a-smart-contract-using-ethersjs-and-ganache",
    featured: false,
  },
  {
    title: "How to create a Webex Clone With 100ms",
    platform: "100ms",
    date: "June 2022",
    sortDate: "2022-06-25",
    summary:
      "A tutorial on building a Webex-style video conferencing app using the 100ms JavaScript SDK.",
    tags: ["WebRTC", "JavaScript", "Video", "Tutorial"],
    url: "https://www.100ms.live/blog/webex-clone",
    featured: false,
  },
  {
    title: "Solving The Oracle Problem",
    platform: "Hashnode",
    date: "June 2022",
    sortDate: "2022-06-24",
    summary:
      "An introduction to blockchain oracle design and how oracles bridge onchain contracts with offchain data.",
    tags: ["Web3", "Oracles", "Smart Contracts"],
    url: "https://phensics.hashnode.dev/solving-the-oracle-problem",
    featured: false,
  },
  {
    title: "The Basic Solidity Guide",
    platform: "Hashnode",
    date: "June 2022",
    sortDate: "2022-06-24",
    summary:
      "A foundational Solidity guide for web developers moving into smart contract development.",
    tags: ["Web3", "Solidity", "Tutorial"],
    url: "https://phensics.hashnode.dev/the-basic-solidity-guide",
    featured: false,
  },
  {
    title: "Understanding The Decentralized Storage",
    platform: "Hashnode",
    date: "June 2022",
    sortDate: "2022-06-22",
    summary:
      "An overview of decentralized storage systems and why they matter for web3 application design.",
    tags: ["Web3", "Storage", "IPFS"],
    url: "https://phensics.hashnode.dev/understanding-the-decentralized-storage",
    featured: false,
  },
  {
    title: "Introduction to R Studio",
    platform: "Hashnode",
    date: "January 2021",
    sortDate: "2021-01-16",
    summary:
      "A beginner introduction to R Studio for statistical computing and data analysis workflows.",
    tags: ["R", "Data Science", "Tutorial"],
    url: "https://phensics.hashnode.dev/introduction-to-r-studio",
    featured: false,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("writing-list");
  if (!target) {
    return;
  }

  const { renderWritingCards, sortRecentFirst } = window.Portfolio;
  const sortedWriting = sortRecentFirst(writingItems);

  let activeCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    const filtered = sortedWriting.filter((item) => {
      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery) ||
        item.summary.toLowerCase().includes(searchQuery) ||
        item.platform.toLowerCase().includes(searchQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery));

      if (!matchesSearch) {
        return false;
      }

      if (activeCategory === "all") {
        return true;
      }

      const category = activeCategory.toLowerCase();
      return (
        item.platform.toLowerCase().includes(category) ||
        item.tags.some((tag) => tag.toLowerCase().includes(category))
      );
    });

    renderWritingCards(target, filtered);
  }

  const searchInput = document.getElementById("writing-search");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchQuery = event.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  const filterContainer = document.getElementById("writing-filters");
  if (filterContainer) {
    filterContainer.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-btn");
      if (!button) {
        return;
      }

      filterContainer
        .querySelectorAll(".filter-btn")
        .forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeCategory = button.dataset.filter || "all";
      applyFilters();
    });
  }

  applyFilters();
});
