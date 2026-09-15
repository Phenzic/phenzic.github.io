const documentationBuilt = [
  { title: "Lumana Documentation", platform: "Lumana", date: "2025", sortDate: "2025-06-01", summary: "Product and developer documentation for Lumana’s AI video-security platform, covering setup, configuration, and technical onboarding.", tags: ["AI", "Developer Docs", "Enterprise"], url: "" },
  { title: "Zarklab Documentation", platform: "Zarklab", date: "2025", sortDate: "2025-01-01", summary: "Product and developer documentation for Zarklab’s AI platform, covering setup, integration, and technical usage.", tags: ["AI", "Developer Docs", "API"], url: "https://docs.zarklab.ai" },
  { title: "Chaos Labs Documentation", platform: "Chaos Labs", date: "2024", sortDate: "2024-03-01", summary: "Technical documentation for risk and analytics tooling used across DeFi protocols and onchain markets.", tags: ["Web3", "DeFi", "Risk"], url: "https://docs.chaoslabs.xyz/" },
  { title: "Flutterwave Developer Documentation", platform: "Flutterwave", date: "2024", sortDate: "2024-06-01", summary: "Getting-started guides and API documentation for payment integrations, transfers, and verification flows.", tags: ["Fintech", "Payments", "API"], url: "https://developer.flutterwave.com/docs/getting-started" },
  { title: "Fuel Developer Documentation", platform: "Fuel Labs", date: "2024", sortDate: "2024-04-01", summary: "Developer documentation for the Fuel network, its toolchain, SDKs, and dApp development workflows.", tags: ["Web3", "Blockchain", "API"], url: "https://docs.fuel.network/" },
  { title: "Celo Developer Documentation", platform: "Celo Foundation", date: "2023", sortDate: "2023-06-01", summary: "Guides, references, and onboarding paths for builders in the Celo ecosystem.", tags: ["Web3", "Blockchain", "Smart Contracts"], url: "https://docs.celo.org/developer" },
];

const review = (platform, url = "") => ({
  title: `${platform} Documentation`, platform, date: "2025–2026", sortDate: "2025-01-01",
  summary: "Managed migration delivery and/or reviewed the post-migration documentation experience for quality, accuracy, structure, and usability.",
  tags: ["Mintlify", "Migration", "QA Review"], url, private: !url,
});

const documentationMigrations = [
  review("Rive", "https://rive.app/docs/getting-started/introduction"),
  review("Omni"), review("Antithesis", "https://antithesis.com/docs"), review("io.net", "https://docs.io.net"),
  review("Dayona"), review("Shinami", "https://docs.shinami.com"), review("Densify"), review("Streamkap", "https://docs.streamkap.com"),
  review("Lerian", "https://docs.lerian.studio"), review("Mayan", "https://docs.mayan.finance"), review("Capa"), review("Create with Play"),
  review("E2B", "https://docs.e2b.dev"), review("Kanji"), review("Weights & Biases", "https://docs.wandb.ai"), review("Runalloy"),
  review("Arcium", "https://docs.arcium.com"), review("Pleo"), review("Hedera", "https://docs.hedera.com"), review("Anvil"),
  review("Chronosphere", "https://docs.chronosphere.io"), review("AirOps", "https://docs.airops.com"), review("Sift"), review("Softr", "https://docs.softr.io"),
  review("Spire"), review("WhiteBIT", "https://docs.whitebit.com"), review("Cartesia", "https://docs.cartesia.ai"), review("Box Support", "https://support.box.com"),
  review("Box Developer", "https://developer.box.com"), review("CData"), review("Usehat"), review("FrankieOne"), review("Synthesized"),
  review("Draftable", "https://help.draftable.com"), review("Iron", "https://docs.iron.xyz"), review("Coinbase"), review("Flinks"),
  review("ConductorOne"), review("AODocs", "https://support.aodocs.com"), review("QA Wolf", "https://docs.qawolf.com"), review("TRM Labs", "https://docs.trmlabs.com"),
  review("BenefitFlow"), review("Marqeta", "https://www.marqeta.com/docs"), review("Caplena"), review("Semgrep", "https://semgrep.dev/docs"),
  review("MX"), review("Camoag"), review("AssemblyAI", "https://www.assemblyai.com/docs"), review("Mixpanel", "https://docs.mixpanel.com"),
  review("Vespa", "https://docs.vespa.ai"), review("Shinkei"),
];

function setupDocumentationSection({ listId, searchId, filtersId, items, emptyMessage }) {
  const target = document.getElementById(listId);
  if (!target) return;
  const { renderWritingCards, sortRecentFirst, renderEmpty } = window.Portfolio;
  const sortedItems = sortRecentFirst(items);
  let activeCategory = "all";
  let searchQuery = "";
  const applyFilters = () => {
    const filtered = sortedItems.filter((item) => {
      const haystack = [item.title, item.summary, item.platform, ...item.tags].join(" ").toLowerCase();
      return (!searchQuery || haystack.includes(searchQuery)) && (activeCategory === "all" || haystack.includes(activeCategory));
    });
    filtered.length ? renderWritingCards(target, filtered, "View Documentation") : renderEmpty(target, emptyMessage);
  };
  document.getElementById(searchId)?.addEventListener("input", (event) => { searchQuery = event.target.value.toLowerCase().trim(); applyFilters(); });
  document.getElementById(filtersId)?.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn"); if (!button) return;
    event.currentTarget.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active"); activeCategory = button.dataset.filter || "all"; applyFilters();
  });
  applyFilters();
}

document.addEventListener("DOMContentLoaded", () => {
  setupDocumentationSection({ listId: "documentation-built-list", searchId: "documentation-built-search", filtersId: "documentation-built-filters", items: documentationBuilt, emptyMessage: "No documentation matches your filter." });
  setupDocumentationSection({ listId: "documentation-migrations-list", searchId: "documentation-migrations-search", items: documentationMigrations, emptyMessage: "No documentation matches your search." });
});
