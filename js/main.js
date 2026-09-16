(function () {
  const pages = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "projects", label: "Projects", href: "projects.html" },
    { key: "writing", label: "Writing", href: "writing.html" },
    {
      key: "documentation",
      label: "Documentation",
      href: "documentation.html",
    },
    { key: "timeline", label: "Timeline", href: "timeline.html" },
  ];

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function currentPage() {
    return document.body.dataset.page || "home";
  }

  function linkAttributes(url) {
    if (!url) {
      return "";
    }

    const isExternal = /^https?:\/\//i.test(url);
    return isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
  }

  function renderTags(tags = []) {
    return tags
      .slice(0, 3)
      .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
      .join("");
  }

  function renderSocialLinks(items = []) {
    return items
      .map(
        (item) => `
        <a class="social-link" href="${escapeHtml(item.href)}" aria-label="${escapeHtml(item.label)}"${linkAttributes(item.href)}>
          <i class="${escapeHtml(item.icon)}" aria-hidden="true"></i>
        </a>
      `,
      )
      .join("");
  }

  function renderNav() {
    const target = document.getElementById("site-nav");
    if (!target) {
      return;
    }

    const active = currentPage();
    target.innerHTML = `
      <nav class="navbar navbar-expand-lg sticky-top site-nav" aria-label="Primary navigation">
        <div class="container">
          <a class="navbar-brand fw-bold" href="index.html">${escapeHtml(profile.brandName)}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNav" aria-controls="primaryNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="primaryNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              ${pages
                .map(
                  (page) => `
                <li class="nav-item">
                  <a class="nav-link${page.key === active ? " active" : ""}" href="${page.href}"${page.key === active ? ' aria-current="page"' : ""}>${page.label}</a>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>
        </div>
      </nav>
    `;
  }

  function renderFooter() {
    const target = document.getElementById("site-footer");
    if (!target) {
      return;
    }

    target.innerHTML = `
      <footer class="site-footer">
        <div class="container d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
          <div>
            <strong>${escapeHtml(profile.brandName)}</strong>
            <span class="d-block d-sm-inline ms-sm-2">${escapeHtml(profile.footerText)}</span>
          </div>
          <div class="small">&copy; ${new Date().getFullYear()} ${escapeHtml(profile.brandName)}</div>
        </div>
      </footer>
    `;
  }

  function renderEmpty(target, message) {
    if (!target) {
      return;
    }

    target.innerHTML = `
      <div class="col-12">
        <div class="content-card text-center py-5">
          <p class="mb-0 text-secondary fs-5">${escapeHtml(message)}</p>
        </div>
      </div>
    `;
  }

  function featured(items = [], limit = 3) {
    return sortRecentFirst(items.filter((item) => item.featured)).slice(
      0,
      limit,
    );
  }

  function sortRecentFirst(items = []) {
    return [...items].sort((a, b) => dateValue(b) - dateValue(a));
  }

  function sortTimelineRecentFirst(items = []) {
    return [...items].sort(
      (a, b) => timelineDateValue(b) - timelineDateValue(a),
    );
  }

  function dateValue(item) {
    const source = item.sortDate || item.date || "";
    const value = Date.parse(source);
    return Number.isNaN(value) ? 0 : value;
  }

  function timelineDateValue(item) {
    const year = Number.parseInt(item.year, 10) || 0;
    return year * 100 + monthValue(item.date);
  }

  function monthValue(date = "") {
    const months = {
      january: 1,
      february: 2,
      march: 3,
      april: 4,
      may: 5,
      june: 6,
      july: 7,
      august: 8,
      september: 9,
      october: 10,
      november: 11,
      december: 12,
    };
    const matches =
      String(date)
        .toLowerCase()
        .match(/[a-z]+/g) || [];
    const values = matches.map((word) => months[word]).filter(Boolean);
    return values.length ? values[values.length - 1] : 0;
  }

  function renderHome() {
    const heroName = document.getElementById("hero-name");
    if (!heroName) {
      return;
    }

    const projectItems = typeof projects !== "undefined" ? projects : [];
    const articleItems =
      typeof writingItems !== "undefined" ? writingItems : [];

    heroName.textContent = profile.displayName;
    document.getElementById("hero-headline").textContent = profile.headline;
    document.getElementById("hero-bio").textContent = profile.bio;

    document.getElementById("hero-roles").innerHTML = profile.roles
      .map((role) => `<span class="tag">${escapeHtml(role)}</span>`)
      .join("");

    document.getElementById("focus-list").innerHTML = profile.focus
      .map(
        (item) =>
          `<li><i class="fas fa-check-circle" aria-hidden="true"></i><span>${escapeHtml(item)}</span></li>`,
      )
      .join("");

    document.getElementById("hero-socials").innerHTML = renderSocialLinks(
      profile.socials,
    );

    const statsEl = document.getElementById("hero-stats");
    if (statsEl && Array.isArray(profile.stats)) {
      statsEl.innerHTML = profile.stats
        .map(
          (item) =>
            `<div class="col-6 col-lg-3"><div class="stat-tile"><div class="stat-value">${escapeHtml(item.value)}</div><div class="stat-label">${escapeHtml(item.label)}</div></div></div>`,
        )
        .join("");
    }

    const clientsEl = document.getElementById("hero-clients");
    if (clientsEl && Array.isArray(profile.clients)) {
      clientsEl.innerHTML = profile.clients
        .map((name) => `<span class="client-chip">${escapeHtml(name)}</span>`)
        .join("");
    }

    document.getElementById("hero-actions").innerHTML = profile.ctas
      .map((cta) => {
        return `
          <a class="btn btn-outline-primary" href="${escapeHtml(cta.href)}"${linkAttributes(cta.href)}>
            <i class="fas ${escapeHtml(cta.icon)} me-2" aria-hidden="true"></i>${escapeHtml(cta.label)}
          </a>
        `;
      })
      .join("");

    renderProjectCards(
      document.getElementById("featured-projects"),
      featured(projectItems),
    );
    renderWritingCards(
      document.getElementById("featured-writing"),
      featured(articleItems),
    );

    const builtDocumentation =
      window.documentationBuilt ||
      (typeof documentationBuilt !== "undefined" ? documentationBuilt : []);
    const docTarget = document.getElementById("featured-documentation");
    if (docTarget) {
      renderWritingCards(
        docTarget,
        sortRecentFirst(builtDocumentation).slice(0, 3),
        "View Documentation",
      );
    }
  }

  function getPlatformLogo(platform = "") {
    const p = String(platform).toLowerCase();
    if (p.includes("lumana")) return "fas fa-video";
    if (p.includes("zarklab")) return "fas fa-wand-magic-sparkles";
    if (p.includes("chaos labs")) return "fas fa-flask-vial";
    if (p.includes("flutterwave")) return "fas fa-bolt";
    if (p.includes("fuel")) return "fas fa-fire";
    if (p.includes("celo")) return "fas fa-circle-nodes";
    if (p.includes("rive")) return "fas fa-film";
    if (p.includes("github")) return "fab fa-github";
    if (p.includes("medium")) return "fab fa-medium";
    if (p.includes("hashnode")) return "fas fa-code";
    if (p.includes("dev community") || p.includes("dev")) return "fab fa-dev";
    if (p.includes("logrocket")) return "fas fa-rocket";
    if (p.includes("loginradius")) return "fas fa-shield-halved";
    if (p.includes("trading") || p.includes("market")) return "fas fa-chart-line";
    if (p.includes("open source")) return "fas fa-code-branch";
    if (p.includes("mev") || p.includes("arbitrage")) return "fas fa-network-wired";
    if (p.includes("game")) return "fas fa-gamepad";
    if (p.includes("cli")) return "fas fa-terminal";
    if (p.includes("bot")) return "fas fa-paper-plane";
    if (p.includes("security")) return "fas fa-lock";
    if (p.includes("ai")) return "fas fa-brain";
    return "fas fa-file-code";
  }

  function getPublicationLogoUrl(platform = "", articleUrl = "") {
    const p = String(platform).toLowerCase();
    const domains = {
      "flutterwave engineering": "flutterwave.com",
      "the new stack": "thenewstack.io",
      "dev community": "dev.to",
      hashnode: "hashnode.com",
      "adam the automator": "adamtheautomator.com",
      "100ms": "100ms.live",
      medium: "medium.com",
      logrocket: "logrocket.com",
      loginradius: "loginradius.com",
      "github gist": "github.com",
    };

    const domain = Object.entries(domains).find(([name]) => p.includes(name))?.[1];
    if (domain) {
      return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(domain)}`;
    }

    try {
      return `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(new URL(articleUrl).origin)}`;
    } catch {
      return "";
    }
  }

  function renderProjectCards(target, items) {
    if (!target) {
      return;
    }

    if (!items.length) {
      renderEmpty(target, "No projects match your filter.");
      return;
    }

    target.innerHTML = items
      .map(
        (project) => {
          const logoIcon = getPlatformLogo(project.type || project.stack?.[0]);
          return `
      <div class="col-md-6 col-xl-4">
        <article class="content-card d-flex flex-column h-100">
          <div class="d-flex align-items-start justify-content-between gap-2 mb-3">
            <div>
              <div class="card-meta mb-1">${escapeHtml(project.type)} · ${escapeHtml(project.date)}</div>
              <h3 class="h4 mb-0">${escapeHtml(project.title)}</h3>
            </div>
            <div class="card-logo" title="${escapeHtml(project.type)}" aria-hidden="true">
              <i class="${logoIcon}"></i>
            </div>
          </div>
          <p class="text-secondary flex-grow-1">${escapeHtml(project.description)}</p>
          <div class="d-flex flex-wrap gap-2 mt-3">${renderTags(project.stack)}</div>
          ${renderProjectLinks(project)}
        </article>
      </div>
    `;
        },
      )
      .join("");
  }

  function renderItemLink(item, linkLabel) {
    if (item.private) {
      return `<p class="text-secondary small mt-4 mb-0"><i class="fas fa-lock me-2" aria-hidden="true"></i>Private documentation</p>`;
    }

    if (!item.url) {
      return `<p class="text-secondary small mt-4 mb-0"><i class="fas fa-lock me-2" aria-hidden="true"></i>Private documentation</p>`;
      // return `<p class="text-secondary small mt-4 mb-0">Documentation link coming soon.</p>`;
    }

    return `
      <a class="btn btn-outline-primary mt-4" href="${escapeHtml(item.url)}"${linkAttributes(item.url)}>
        <i class="fas fa-arrow-right me-2" aria-hidden="true"></i>${escapeHtml(linkLabel)}
      </a>
    `;
  }

  function renderWritingCards(target, items, linkLabel = "Read Article") {
    if (!target) {
      return;
    }

    if (!items.length) {
      renderEmpty(target, "No articles match your filter.");
      return;
    }

    target.innerHTML = items
      .map(
        (item) => {
          const publicationLogo = getPublicationLogoUrl(item.platform, item.url);
          return `
      <div class="col-md-6 col-xl-4">
        <article class="content-card d-flex flex-column h-100">
          <div class="d-flex align-items-start justify-content-between gap-2 mb-3">
            <div>
              <div class="card-meta mb-1">${escapeHtml(item.platform)} · ${escapeHtml(item.date)}</div>
              <h3 class="h4 mb-0">${escapeHtml(item.title)}</h3>
            </div>
            <div class="card-logo publication-logo" title="${escapeHtml(item.platform)}">
              ${publicationLogo ? `<img src="${escapeHtml(publicationLogo)}" alt="${escapeHtml(item.platform)} logo" loading="lazy" />` : `<i class="${getPlatformLogo(item.platform || item.tags?.[0])}" aria-hidden="true"></i>`}
            </div>
          </div>
          <p class="text-secondary flex-grow-1">${escapeHtml(item.summary)}</p>
          <div class="d-flex flex-wrap gap-2 mt-3">${renderTags(item.tags)}</div>
          ${renderItemLink(item, linkLabel)}
        </article>
      </div>
    `;
        },
      )
      .join("");
  }

  function renderProjectLinks(project) {
    const url = project.demoUrl || project.githubUrl;
    if (!url) {
      return "";
    }

    return `
      <div class="d-flex flex-wrap gap-2 mt-4">
        <a class="btn btn-outline-primary" href="${escapeHtml(url)}"${linkAttributes(url)}>
          <i class="fas fa-arrow-right me-2" aria-hidden="true"></i>Open Project
        </a>
      </div>
    `;
  }

  window.Portfolio = {
    escapeHtml,
    featured,
    linkAttributes,
    renderEmpty,
    renderFooter,
    renderNav,
    renderSocialLinks,
    renderTags,
    renderProjectLinks,
    renderProjectCards,
    renderWritingCards,
    sortRecentFirst,
    sortTimelineRecentFirst,
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderNav();
    renderFooter();
    renderHome();
  });
})();
