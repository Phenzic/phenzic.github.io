const project = (title, type, description, stack, githubUrl, demoUrl = "", date = "2022", sortDate = "") => ({
  title,
  type,
  date,
  sortDate: sortDate || (date === "2026" ? "2026-01-01" : `2022-01-${String(11 - projects.length).padStart(2, "0")}`),
  description,
  stack,
  githubUrl,
  demoUrl,
  featured: true,
});
const projects = [];

projects.push(
  project("Soothsay", "AI Editorial Audit", "The first writer-facing LLMEO audit tool. Grades drafts on how well ChatGPT, Perplexity, Claude, and Gemini cite them, alongside SEO, readability, and originality.", ["AI", "Next.js", "LLMEO"], "", "http://soothsay.io/", "2026", "2026-01-01"),
  project("MERN Clothing Store", "Full-Stack Web App", "A full-stack ecommerce build with a Node, Express, React, and MongoDB stack.", ["React", "Node.js", "MongoDB"], "https://github.com/Phenzic/MERN-Website"),
  project("DBank", "Internet Computer Dapp", "A simple banking dapp built on the Internet Computer to explore Motoko and decentralised application logic.", ["Internet Computer", "Motoko", "JavaScript"], "https://github.com/Phenzic/icp-project-dbank-app", "https://kxkuz-gyaaa-aaaal-aaqdq-cai.raw.ic0.app/"),
  project("DKeeper", "Web3 Notes App", "A decentralised note-keeping app built with Internet Computer and Motoko.", ["Internet Computer", "Motoko", "Web3"], "https://github.com/Phenzic/dkeeper"),
  project("Crypto Dunk", "NFT Marketplace", "An NFT marketplace experiment built on the Internet Computer.", ["NFTs", "Internet Computer", "Motoko"], "https://github.com/Phenzic/Open-Phit......NFT-Ecommerce"),
  project("Phitcoin", "Token Dapp", "A token experiment built with Internet Computer and Motoko.", ["Internet Computer", "Motoko", "Token"], "https://github.com/Phenzic/phit-coin"),
);

window.projects = projects;

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("projects-list");
  if (!target) return;
  const { renderProjectCards, sortRecentFirst } = window.Portfolio;
  let activeCategory = "all";
  let searchQuery = "";
  const applyFilters = () => renderProjectCards(target, sortRecentFirst(projects).filter((project) => {
    const haystack = [project.title, project.description, project.type, ...project.stack].join(" ").toLowerCase();
    return (!searchQuery || haystack.includes(searchQuery)) && (activeCategory === "all" || haystack.includes(activeCategory));
  }));
  document.getElementById("project-search")?.addEventListener("input", (event) => { searchQuery = event.target.value.toLowerCase().trim(); applyFilters(); });
  document.getElementById("project-filters")?.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn"); if (!button) return;
    event.currentTarget.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active"); activeCategory = button.dataset.filter || "all"; applyFilters();
  });
  applyFilters();
});
