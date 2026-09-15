const documentationBuilt = [
  {
    title: "Lumana Documentation",
    platform: "Lumana",
    date: "2025",
    sortDate: "2025-06-01",
    summary:
      "Product and developer documentation for Lumana’s AI video security platform — setup guides, configuration references, and onboarding for technical teams.",
    tags: ["AI", "Video Security", "Developer Docs", "Enterprise"],
    url: "",
    featured: false,
  },
  {
    title: "Zarklab Documentation",
    platform: "Zarklab",
    date: "2025",
    sortDate: "2025-01-01",
    summary:
      "Product and developer documentation for Zarklab’s AI platform, covering setup, integration, and usage for technical teams.",
    tags: ["AI", "Developer Docs", "API"],
    url: "https://docs.zarklab.ai",
    featured: true,
  },
  {
    title: "Chaos Labs Documentation",
    platform: "Chaos Labs",
    date: "2024",
    sortDate: "2024-03-01",
    summary:
      "Technical documentation for Chaos Labs risk and analytics tooling used across DeFi protocols and onchain markets.",
    tags: ["Web3", "DeFi", "Risk", "API"],
    url: "https://docs.chaoslabs.xyz/",
    featured: false,
  },
  {
    title: "Flutterwave Developer Documentation",
    platform: "Flutterwave",
    date: "2024",
    sortDate: "2024-06-01",
    summary:
      "Getting-started guides and API documentation for Flutterwave’s payment platform, helping developers integrate cards, transfers, and verification flows.",
    tags: ["Fintech", "Payments", "API"],
    url: "https://developer.flutterwave.com/docs/getting-started",
    featured: true,
  },
  {
    title: "Fuel Developer Documentation",
    platform: "Fuel Labs",
    date: "2024",
    sortDate: "2024-04-01",
    summary:
      "Developer documentation for the Fuel network — Sway smart contracts, the Fuel toolchain, SDKs, and dApp development guides.",
    tags: ["Web3", "Blockchain", "Smart Contracts", "API"],
    url: "https://docs.fuel.network/",
    featured: false,
  },
  {
    title: "Celo Developer Documentation",
    platform: "Celo Foundation",
    date: "2023",
    sortDate: "2023-06-01",
    summary:
      "Developer documentation for the Celo blockchain — guides, references, and onboarding paths for builders in the Celo ecosystem.",
    tags: ["Web3", "Blockchain", "Smart Contracts"],
    url: "https://docs.celo.org/developer",
    featured: true,
  },
];

const documentationMigrations = [
  {
    title: "Rive Documentation",
    platform: "Rive",
    date: "2023",
    sortDate: "2023-09-01",
    summary:
      "Migrated Rive’s developer documentation to Mintlify — restructuring navigation, onboarding content, and reference material for the animation runtime.",
    tags: ["Mintlify", "Migration", "Animation", "Developer Tools"],
    url: "https://rive.app/docs/getting-started/introduction",
    featured: true,
  },
];

function setupDocumentationSection({
  listId,
  searchId,
  filtersId,
  items,
  emptyMessage,
}) {
  const target = document.getElementById(listId);
  if (!target) {
    return;
  }

  const { renderWritingCards, sortRecentFirst, renderEmpty } = window.Portfolio;
  const sortedItems = sortRecentFirst(items);
  let activeCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    const filtered = sortedItems.filter((item) => {
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

    if (!filtered.length) {
      renderEmpty(target, emptyMessage);
      return;
    }

    renderWritingCards(target, filtered, "View Documentation");
  }

  const searchInput = document.getElementById(searchId);
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchQuery = event.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  const filterContainer = filtersId
    ? document.getElementById(filtersId)
    : null;
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
}

document.addEventListener("DOMContentLoaded", () => {
  setupDocumentationSection({
    listId: "documentation-built-list",
    searchId: "documentation-built-search",
    filtersId: "documentation-built-filters",
    items: documentationBuilt,
    emptyMessage: "No documentation matches your filter.",
  });

  setupDocumentationSection({
    listId: "documentation-migrations-list",
    searchId: "documentation-migrations-search",
    items: documentationMigrations,
    emptyMessage: "More Mintlify migrations coming soon.",
  });
});
