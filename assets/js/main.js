
window.addEventListener("error", (event) => {
  console.error(
    "Presentation initialization error:",
    event.error || event.message
  );
});

if (!window.PRESENTATION_CONTENT) {
  console.error(
    "Presentation content failed to load. Check that assets/data/content.js is reachable."
  );
}

const content = window.PRESENTATION_CONTENT;

const $ = (selector, root = document) =>
  root.querySelector(selector);

const esc = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));

const meta = content.meta;


// ======================================================
// HERO / COVER INFORMATION
// ======================================================

$("#hero-subtitle").textContent = meta.subtitle;

$("#hero-institution").innerHTML = `
  ${esc(meta.program)}<br>
  ${esc(meta.faculty)}<br>
  ${esc(meta.university)} · ${esc(meta.year)}
`;

$("#hero-group").innerHTML = `
  ${esc(meta.group)}<br>
  <small>${meta.members.length} CONTRIBUTORS</small>
`;


// ======================================================
// TEAM MEMBERS TABLE
// ======================================================

function renderTeamMembers() {
  const heroInner = $(".hero-inner");

  if (!heroInner || !Array.isArray(meta.members)) {
    console.warn("Hero container or team member data not found.");
    return;
  }

  const members = document.createElement("aside");

  members.className = "hero-members";

  members.setAttribute("aria-label", "Daftar anggota kelompok");

  members.innerHTML = `
    <div class="hero-members-heading">
      <span class="hero-members-label">GROUP 08</span>
      <span class="hero-members-count">
        ${String(meta.members.length).padStart(2, "0")} MEMBERS
      </span>
    </div>

    <h2 class="hero-members-title">Project Team</h2>

    <div class="hero-members-table">
      <div class="hero-members-row hero-members-header">
        <span>NAME</span>
        <span>STUDENT ID</span>
      </div>

      ${meta.members.map((member, index) => `
        <div class="hero-members-row">
          <span class="hero-member-name">
            <small>${String(index + 1).padStart(2, "0")}</small>
            ${esc(member.name)}
          </span>

          <span class="hero-member-id">
            ${esc(member.id)}
          </span>
        </div>
      `).join("")}
    </div>

    <p class="hero-members-footer">
      INFORMATION SYSTEMS · 2026
    </p>
  `;

  heroInner.appendChild(members);
}


// ======================================================
// TEAM MEMBERS DESIGN
// CSS IS INJECTED AUTOMATICALLY
// ======================================================

function injectTeamMembersStyles() {
  const style = document.createElement("style");

  style.textContent = `
    .hero-members {
      position: absolute;
      z-index: 5;
      right: 0;
      top: 51%;
      transform: translateY(-50%);

      width: min(355px, 31%);
      padding: 25px 24px 20px;

      background: rgba(255,255,255,.035);
      border: 1px solid rgba(182,154,104,.38);

      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);

      color: var(--ivory);
    }

    .hero-members-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;

      padding-bottom: 14px;
      border-bottom: 1px solid rgba(243,240,233,.18);
    }

    .hero-members-label {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: .22em;
      color: var(--gold);
    }

    .hero-members-count {
      font-size: 8px;
      letter-spacing: .13em;
      color: var(--gray);
    }

    .hero-members-title {
      margin: 17px 0 18px;

      font-family: var(--serif);
      font-size: 29px;
      font-weight: 400;
      line-height: 1.1;

      color: var(--ivory);
    }

    .hero-members-table {
      width: 100%;
    }

    .hero-members-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 12px;

      padding: 12px 0;

      border-bottom: 1px solid rgba(243,240,233,.12);
    }

    .hero-members-header {
      padding-top: 0;
      padding-bottom: 10px;
    }

    .hero-members-header span {
      font-size: 8px;
      font-weight: 600;
      letter-spacing: .14em;
      color: var(--gold);
    }

    .hero-member-name {
      display: flex;
      align-items: center;
      gap: 10px;

      font-family: var(--sans);
      font-size: 11px;
      font-weight: 500;
      line-height: 1.4;
      color: var(--ivory);
    }

    .hero-member-name small {
      flex-shrink: 0;
      font-size: 8px;
      letter-spacing: .08em;
      color: var(--gold);
    }

    .hero-member-id {
      font-size: 10px;
      letter-spacing: .025em;
      color: #b9b3a8;
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
    }

    .hero-members-footer {
      margin: 17px 0 0;

      font-size: 8px;
      letter-spacing: .16em;
      color: var(--gray);
    }

    /* Prevent the title from colliding with the team table */
    @media (min-width: 821px) {
      .hero h1 {
        max-width: 62%;
      }

      .hero-description {
        max-width: 390px;
      }
    }

    @media (max-width: 1100px) and (min-width: 821px) {
      .hero-members {
        width: 34%;
        padding: 20px 17px;
      }

      .hero-members-title {
        font-size: 25px;
      }

      .hero-member-name {
        font-size: 10px;
      }

      .hero-member-id {
        font-size: 9px;
      }

      .hero h1 {
        font-size: clamp(65px, 8vw, 100px);
      }
    }

    /* Tablet and mobile */
    @media (max-width: 820px) {
      .hero-inner {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .hero h1 {
        max-width: 100%;
      }

      .hero-members {
        position: relative;
        top: auto;
        right: auto;
        transform: none;

        width: min(100%, 480px);
        margin-top: 35px;
        padding: 20px;
      }

      .hero-members-title {
        font-size: 26px;
      }

      .hero-member-name {
        font-size: 11px;
      }
    }

    @media (max-width: 520px) {
      .hero-members {
        margin-top: 28px;
        padding: 17px;
      }

      .hero-members-title {
        font-size: 24px;
      }

      .hero-members-row {
        padding: 10px 0;
        gap: 8px;
      }

      .hero-member-name {
        font-size: 10px;
      }

      .hero-member-id {
        font-size: 9px;
      }
    }
  `;

  document.head.appendChild(style);
}

injectTeamMembersStyles();
renderTeamMembers();


// ======================================================
// IDENTITY STRIP
// ======================================================

$("#identity-inner").innerHTML = [
  ["COURSE", "Perencanaan dan Strategi Sistem Informasi"],
  ["LECTURER", meta.lecturer],
  ["PROGRAM", meta.program],
  ["INSTITUTION", meta.university]
].map(([key, value]) => `
  <div class="identity-item">
    ${esc(key)}
    <strong>${esc(value)}</strong>
  </div>
`).join("");


// ======================================================
// NAVIGATION MENU
// ======================================================

const nav = $("#main-nav");
const navMap = new Map();

content.sections.forEach((section) => {
  if (!navMap.has(section.nav)) {
    navMap.set(section.nav, section.id);
  }
});

nav.innerHTML = [...navMap].map(([label, id]) => `
  <a href="#${id}" data-target="${id}">
    ${esc(label)}
  </a>
`).join("");


// ======================================================
// CONTENT BLOCK RENDERER
// ======================================================

function renderBlock(block) {
  switch (block.type) {

    case "paragraph":
      return `<p>${esc(block.text)}</p>`;

    case "subhead":
      return `<h3>${esc(block.text)}</h3>`;

    case "quote":
      return `
        <blockquote class="quote-block">
          ${esc(block.text)}
        </blockquote>
      `;

    case "list":
      return `
        <ol class="editorial-list">
          ${block.items.map(item => `
            <li>${esc(item)}</li>
          `).join("")}
        </ol>
      `;

    case "case":
      return `
        <div class="case-list">
          ${block.items.map(item => `
            <div class="case-row">
              <span class="case-code">${esc(item[0])}</span>
              <strong>${esc(item[1])}</strong>
              <p>${esc(item[2])}</p>
            </div>
          `).join("")}
        </div>
      `;

    case "diagram":
      return `
        <div class="diagram-wrap">
          <p class="diagram-title">${esc(block.title)}</p>

          <div class="domain-grid">
            ${block.items.map(item => `
              <div class="domain-item">
                <span>${esc(item[0])}</span>
                <strong>${esc(item[1])}</strong>
                <p>${esc(item[2])}</p>
              </div>
            `).join("")}
          </div>
        </div>
      `;

    case "flow":
      return `
        <div class="diagram-wrap">
          <div class="flow-track" style="--count:${block.items.length}">
            ${block.items.map((item, index) => `
              <div class="flow-step">
                <strong>${esc(item)}</strong>
                <p>${esc(block.captions?.[index] || "")}</p>
              </div>
            `).join("")}
          </div>
        </div>
      `;

    case "matrix":
      return `<div class="matrix-component" data-matrix></div>`;

    case "grid":
      return `
        <div class="mc-grid">

          <div class="mc-cell">
            <span>FUTURE IMPACT · HIGH</span>
            <h4>Strategic</h4>
            <p>Aplikasi yang penting bagi keberhasilan strategi dan arah bisnis.</p>
            <em>Database · SI Hotel</em>
          </div>

          <div class="mc-cell">
            <span>FUTURE IMPACT · HIGH</span>
            <h4>High Potential</h4>
            <p>Aplikasi yang berpotensi memberi peluang strategis ke depan.</p>
            <em>SI Kemitraan · APEL</em>
          </div>

          <div class="mc-cell">
            <span>OPERATIONAL DEPENDENCE · HIGH</span>
            <h4>Key Operational</h4>
            <p>Kuadran ditampilkan sebagai bagian model; artikel yang dirangkum tidak menyebut contoh aplikasi secara eksplisit.</p>
          </div>

          <div class="mc-cell">
            <span>OPERATIONAL DEPENDENCE · LOW</span>
            <h4>Support</h4>
            <p>Kuadran ditampilkan sebagai bagian model; artikel yang dirangkum tidak menyebut contoh aplikasi secara eksplisit.</p>
          </div>

        </div>
      `;

    case "comparison":
      return `
        <div class="comparison-scroll">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Aspek</th>
                <th>FEAF</th>
                <th>Zachman</th>
                <th>CSF + Ward &amp; Peppard</th>
              </tr>
            </thead>

            <tbody>
              ${content.comparison.map(row => `
                <tr>
                  ${row.map(cell => `
                    <td>${esc(cell)}</td>
                  `).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;

    case "note":
      return `
        <aside class="note-block">
          ${esc(block.text)}
        </aside>
      `;

    case "evaluation":
      return `
        <div class="eval-list">
          ${block.items.map(item => `
            <div class="eval-item">
              <h4>${esc(item[0])}</h4>

              <div>
                <b>KELEBIHAN</b>
                <p>${esc(item[1])}</p>
              </div>

              <div>
                <b>KETERBATASAN</b>
                <p>${esc(item[2])}</p>
              </div>
            </div>
          `).join("")}
        </div>
      `;

    case "recommend":
      return `
        <div class="recommend-list">
          ${block.items.map(item => `
            <div class="recommend-row">
              <strong>${esc(item[0])}</strong>
              <p>${esc(item[1])}</p>
            </div>
          `).join("")}
        </div>
      `;

    case "metrics":
      return `
        <div class="metric-list">
          ${block.items.map(item => `
            <div class="metric">
              <span>${esc(item[0])}</span>
              <h4>${esc(item[1])}</h4>
              <p>${esc(item[2])}</p>
            </div>
          `).join("")}
        </div>
      `;

    case "numbered":
      return `
        <ol class="numbered-list">
          ${block.items.map(item => `
            <li>${esc(item)}</li>
          `).join("")}
        </ol>
      `;

    case "references":
      return `
        <ol class="reference-list">
          ${content.references.map(reference => `
            <li>
              ${esc(reference).replace(
                /(https?:\/\/[^\s]+)/g,
                '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
              )}
            </li>
          `).join("")}
        </ol>
      `;

    default:
      return "";
  }
}


// ======================================================
// RENDER ALL PRESENTATION SECTIONS
// ======================================================

$("#chapters").innerHTML = content.sections.map((section, index) => `
  <section
    class="chapter-section ${section.theme === "dark" ? "dark-section" : ""}"
    id="${section.id}"
    data-section-index="${index}"
  >

    <div class="section-shell">

      <header class="section-head reveal">

        <div class="section-meta">
          <span class="section-number">${esc(section.number)}</span>
          <span class="section-eyebrow">${esc(section.eyebrow)}</span>
          <span class="section-chapter">${esc(section.chapter)}</span>
        </div>

        <div>
          <h2 class="section-title">${esc(section.title)}</h2>
          <p class="section-lead">${esc(section.lead)}</p>
        </div>

      </header>

      <div class="section-body">

        <div class="section-aside">
          FIELD NOTES<br>
          INFORMATION SYSTEMS
        </div>

        <div class="content-flow">
          ${section.blocks.map(renderBlock).join("")}
        </div>

      </div>

    </div>

  </section>
`).join("");


// ======================================================
// INITIALIZE INTERACTIVE FEATURES
// ======================================================

window.renderInteractiveDiagrams(content);

window.initNavigation(content);

window.initPresentation(content);


// ======================================================
// SCROLL REVEAL ANIMATION
// ======================================================

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08
  }
);

document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});
