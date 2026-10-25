/* =========================================================
   1. EDIT THIS PART ONLY (your pictures, links and projects)
   ========================================================= */
const CONFIG = {
  // YOUR 2 PICTURES: put them inside the "images" folder and match the file names below.
  // hero  = the big photo at the top of the page
  // about = the round photo in the About section
  // (to use the same picture twice, just write the same file name on both lines)
  photos: {
    hero:  "images/hero.jpg",
    about: "images/about.png",
  },

  // Social links. Replace the links with your real ones, or delete a line to remove it.
  socials: [
    { name: "GitHub",    icon: "github",    url: "https://github.com/daisxzymae" },
    { name: "Gmail",     icon: "gmail",     url: "mailto:daisymaemendoza412@gmail.com" },
  ],
};

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    desc: "A personal website that introduces me, presents my skills and projects, and provides a way to contact me.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Personal project", dot: "#3d7bff",
    link: "#home",           // later: your GitHub repo or live site link
    image: "images/portfolio.png",
    art: "browser",
  },
  {
    title: "Classroom Attendance System",
    desc: "A proposed system for recording student attendance, viewing attendance history, and generating attendance summaries for selected subjects.",
    tags: ["C++ / Web", "Database", "School Project"],
    status: "Proposed project", dot: "#38c6e8",
    link: "",                // empty = button stays disabled until you add a link
    image: "",
    art: "table",
  },
  {
    title: "Future Project",
    desc: "This section is reserved for another project I create as I continue to practice programming and explore new technologies.",
    tags: ["Coming Soon"],
    status: "In planning", dot: "#8d9ab0",
    link: "",
    image: "",
    art: "soon",
  },
];

/* =========================================================
   2. SITE CODE (you don't need to change anything below)
   ========================================================= */

/* ---------- pictures (with a simple fallback if a file is missing) ---------- */
const fallbackPhoto = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'>
     <rect width='400' height='500' fill='#10151d'/>
     <circle cx='200' cy='190' r='70' fill='#3d4a60'/>
     <path d='M60 500c0-110 62-170 140-170s140 60 140 170z' fill='#3d4a60'/>
     <text x='200' y='470' text-anchor='middle' font-family='sans-serif' font-size='18' fill='#98a3b7'>add your photo in images/</text>
   </svg>`);
document.querySelectorAll(".profile-img").forEach(img => {
  img.addEventListener("error", () => { img.src = fallbackPhoto; }, { once: true });
  img.src = CONFIG.photos[img.dataset.photo];
});

/* ---------- social icons (round buttons) ---------- */
document.querySelectorAll("[data-socials]").forEach(box => {
  box.innerHTML = CONFIG.socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}" title="${s.name}">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/${s.icon}.svg" alt="" />
    </a>`).join("");
});

/* ---------- project thumbnails (simple drawings, used when there is no screenshot) ---------- */
const ART = {
  browser: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#3d7bff"/>
    <rect x="40" y="30" width="240" height="140" rx="8" fill="#fff"/><rect x="40" y="30" width="240" height="22" rx="8" fill="#0c0f14"/>
    <circle cx="56" cy="41" r="4" fill="#8d9ab0"/><circle cx="70" cy="41" r="4" fill="#8d9ab0"/><circle cx="84" cy="41" r="4" fill="#8d9ab0"/>
    <circle cx="90" cy="88" r="18" fill="#dfe9fb"/><rect x="122" y="76" width="110" height="10" rx="5" fill="#0c0f14"/><rect x="122" y="94" width="76" height="8" rx="4" fill="#8d9ab0"/>
    <rect x="58" y="126" width="62" height="30" rx="5" fill="#edf3fe"/><rect x="129" y="126" width="62" height="30" rx="5" fill="#edf3fe"/><rect x="200" y="126" width="62" height="30" rx="5" fill="#edf3fe"/></svg>`,
  table: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#0b1426"/>
    <rect x="40" y="30" width="240" height="140" rx="8" fill="#1f2733"/>
    <rect x="52" y="42" width="90" height="10" rx="5" fill="#38c6e8"/>
    <g fill="#8d9ab0"><rect x="52" y="68" width="70" height="7" rx="3"/><rect x="52" y="88" width="70" height="7" rx="3"/><rect x="52" y="108" width="70" height="7" rx="3"/><rect x="52" y="128" width="70" height="7" rx="3"/></g>
    <g fill="#3d7bff"><rect x="160" y="68" width="22" height="7" rx="3"/><rect x="190" y="68" width="22" height="7" rx="3"/><rect x="220" y="68" width="22" height="7" rx="3"/>
    <rect x="160" y="88" width="22" height="7" rx="3"/><rect x="190" y="88" width="22" height="7" rx="3"/>
    <rect x="160" y="108" width="22" height="7" rx="3"/><rect x="220" y="108" width="22" height="7" rx="3"/>
    <rect x="190" y="128" width="22" height="7" rx="3"/><rect x="220" y="128" width="22" height="7" rx="3"/></g></svg>`,
  soon: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#161d29"/>
    <rect x="40" y="30" width="240" height="140" rx="8" fill="none" stroke="#8d9ab0" stroke-width="2" stroke-dasharray="8 7"/>
    <text x="160" y="108" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="18" fill="#98a3b7">&lt;coming soon/&gt;</text></svg>`,
};

document.getElementById("projectGrid").innerHTML = PROJECTS.map(p => `
  <article class="project reveal">
    <div class="thumb">
      ${p.image ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy">` : ART[p.art]}
    </div>
    <div class="body">
      <span class="status" style="--dot:${p.dot}">${p.status}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      ${p.link
        ? `<a class="btn btn-solid" href="${p.link}">View Project</a>`
        : `<a class="btn btn-solid" aria-disabled="true">${p.status === "In planning" ? "Coming Soon" : "In Proposal"}</a>`}
    </div>
  </article>`).join("");

/* ---------- tech row: duplicate icons so the scroll loops forever ---------- */
const track = document.getElementById("track");
track.innerHTML += track.innerHTML;

/* ---------- contact drawer ---------- */
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");

function closeMenu() { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
function toggleDrawer(open) {
  drawer.classList.toggle("open", open);
  overlay.classList.toggle("open", open);
  drawer.setAttribute("aria-hidden", String(!open));
  closeMenu();
}
document.getElementById("openContact").addEventListener("click", e => { e.preventDefault(); toggleDrawer(true); });
document.getElementById("closeContact").addEventListener("click", () => toggleDrawer(false));
overlay.addEventListener("click", () => toggleDrawer(false));
document.addEventListener("keydown", e => { if (e.key === "Escape") toggleDrawer(false); });

/* ---------- mobile menu ---------- */
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a:not(.btn)").forEach(a => a.addEventListener("click", closeMenu));

/* ---------- fade-in on scroll ---------- */
const reveal = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("show"); reveal.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));

/* ---------- highlight the current section in the navbar ---------- */
const links = [...navLinks.querySelectorAll("a:not(.btn)")];
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("#home, #about, #skills, #projects, #contact").forEach(s => spy.observe(s));

/* ---------- back-to-top button ---------- */
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => toTop.classList.toggle("visible", window.scrollY > 500), { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- contact form: opens the visitor's email app with the message filled in ---------- */
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(form);
  const name = d.get("name").trim(), email = d.get("email").trim(), message = d.get("message").trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
    note.textContent = "Please fill in your name, a valid email and a message.";
    note.className = "form-note error";
    return;
  }
  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
  window.location.href = `mailto:daisymaemendoza412@gmail.com?subject=${subject}&body=${body}`;
  note.textContent = "Opening your email app… thank you for reaching out!";
  note.className = "form-note";
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();