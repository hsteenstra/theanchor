/* =========================================================
   THE ANCHOR: builds every page from data.js
   ========================================================= */
(function () {
  const A = window.ANCHOR;
  const $ = (sel, root = document) => root.querySelector(sel);
  const page = document.body.dataset.page;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const parseDate = (d) => { const [y, m, day] = d.split("-").map(Number); return new Date(y, m - 1, day); };
  const fmtDate = (d) => parseDate(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });


  /* Anchor illustration for the strip under the photo: a shaded anchor lying on its side,
     with a rope from its ring that continues across the page as the .rope bar. */
  const ANCHOR_SHAPES = `
    <circle cx="200" cy="40" r="28" class="ring"/>
    <rect x="100" y="92" width="200" height="22" rx="11"/>
    <circle cx="100" cy="103" r="16"/><circle cx="300" cy="103" r="16"/>
    <rect x="187" y="60" width="26" height="420" rx="4"/>
    <path d="M58 352 Q70 488 200 492 Q330 488 342 352" class="arms"/>
    <path d="M58 296 L20 374 L58 356 L96 374 Z"/>
    <path d="M342 296 L304 374 L342 356 L380 374 Z"/>
    <path d="M172 486 L200 520 L228 486 Z"/>`;
  const ANCHOR_ART = `<svg class="anchor-art" viewBox="0 0 230 170" aria-hidden="true">
    <defs>
      <linearGradient id="iron" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#3a6ee0"/><stop offset=".55" stop-color="#1f4fbf"/><stop offset="1" stop-color="#0d1f45"/>
      </linearGradient>
      <linearGradient id="strand">
        <stop offset="0" stop-color="#0a1736"/><stop offset=".45" stop-color="#5c82d6"/><stop offset=".6" stop-color="#3a62bd"/><stop offset="1" stop-color="#0a1736"/>
      </linearGradient>
      <pattern id="rope" width="7" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
        <rect width="7" height="10" fill="url(#strand)"/>
      </pattern>
    </defs>
    <g transform="translate(200 58) rotate(70) scale(0.34) translate(-200 -40)" class="anchor-body">${ANCHOR_SHAPES}</g>
    <g class="rope-art">
      <path d="M206 64 C196 104 164 70 148 92 C136 110 160 124 136 132 C118 138 112 122 104 116" class="rope-shadow"/>
      <path d="M206 64 C196 104 164 70 148 92 C136 110 160 124 136 132 C118 138 112 122 104 116"/>
      <path d="M209 58 L232 58" class="rope-shadow"/>
      <path d="M209 58 L232 58"/>
    </g>
  </svg>`;
  const SMALL_ANCHOR = `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="32" cy="11" r="6"/><path d="M32 17v40M20 27h24M10 38c0 11 10 19 22 19s22-8 22-19"/><path d="M4 42l6-5 6 5M48 42l6-5 6 5"/></svg>`;

  /* ---------- Header ---------- */
  const navItems = [
    ["index.html", "Home", "home"],
    ["index.html#news", "News", ""],
    ["pop-culture.html", "Pop Culture", "pop-culture"],
    ["podcast.html", "Podcast", "podcast"],
    ["archives.html", "Archives", "archives"],
    ["index.html#poll", "Polls", ""],
    ["about.html", "About", "about"],
  ];

  $("#site-header").innerHTML = `
    <a class="skip" href="#main">Skip to content</a>
    <div class="topbar"><div class="wrap">
      <span class="top-date">Home of the Shipbuilders</span>
      <span class="top-count"><span id="top-count">Loading countdown…</span></span>
    </div></div>
    <header class="masthead">
      <a href="index.html"><h1>The Anchor</h1></a>
      <p class="tagline">The Student Newspaper of Morse High School</p>
    </header>
    <div class="ears"><div class="wrap">
      ${ANCHOR_ART}
      <div class="rope" aria-hidden="true"></div>
      <div class="ear right"><span>${new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span><b>Bath, Maine</b></div>
    </div></div>
    <nav class="nav" aria-label="Main"><div class="wrap">
      <button class="menu-btn" aria-expanded="false">☰ Menu</button>
      <ul>
        ${navItems.map(([href, label, key]) => `<li><a href="${href}"${key === page ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
        <li><a class="pitch-link" href="submit.html"${page === "submit" ? ' aria-current="page"' : ""}>Pitch a Story</a></li>
      </ul>
    </div></nav>
    <div class="ticker" aria-label="Announcements"><div class="wrap">
      <span class="ticker-label">Bulletin</span>
      <div class="ticker-items">${A.announcements.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    </div></div>`;

  const nav = $(".nav");
  $(".menu-btn").addEventListener("click", (e) => {
    const open = nav.classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });

  /* ---------- Footer ---------- */
  $("#site-footer").innerHTML = `
    <footer><div class="wrap">
      <div>
        <p class="f-brand">The Anchor</p>
        <p>The student newspaper of Morse High School.<br>Home of the Shipbuilders · Bath, Maine</p>
      </div>
      <div><h4>Read</h4><ul>
        <li><a href="index.html#news">Latest Stories</a></li>
        <li><a href="pop-culture.html">Pop Culture</a></li>
        <li><a href="podcast.html">The Anchor Podcast</a></li>
        <li><a href="archives.html">Archives</a></li>
      </ul></div>
      <div><h4>Get Involved</h4><ul>
        <li><a href="submit.html">Pitch a Story</a></li>
        <li><a href="index.html#poll">Vote in the Poll</a></li>
        <li><a href="about.html">About Us</a></li>
      </ul></div>
    </div>
    <div class="f-bottom">© ${new Date().getFullYear()} The Anchor · Morse High School Student Press</div></footer>`;

  /* ---------- Countdown ---------- */
  function nextBreak() {
    const now = new Date();
    return A.breaks.map((b) => ({ ...b, at: parseDate(b.start) })).find((b) => b.at > now);
  }
  function tick() {
    const b = nextBreak();
    const top = $("#top-count");
    const big = $("#countdown");
    if (!b) {
      top.textContent = "Enjoy your break!";
      if (big) big.hidden = true;
      return;
    }
    const ms = b.at - new Date();
    const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
    top.innerHTML = `<b>${d} day${d === 1 ? "" : "s"}</b> until ${esc(b.name)}`;
    if (big) {
      $("#cd-name").textContent = b.name;
      $("#cd-date").textContent = `Begins ${b.at.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}.`;
      [["cd-d", d], ["cd-h", h], ["cd-m", m], ["cd-s", s]].forEach(([id, v]) => ($("#" + id).textContent = String(v).padStart(2, "0")));
    }
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- Story helpers ---------- */
  const photo = (s) =>
    `<div class="photo ${s.color || "blue"}">${s.image ? `<img src="${esc(s.image)}" alt="${esc(s.imageCaption || "")}">` : SMALL_ANCHOR}</div>`;
  const link = (s) => `story.html?id=${encodeURIComponent(s.id)}`;
  const isPop = (s) => s.category === "Pop Culture";
  const byline = (s) => `<div class="byline"><b>${esc(s.author)}</b> · ${fmtDate(s.date)}</div>`;

  /* ---------- Polls (votes saved in this browser) ---------- */
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };

  function renderPoll(el, poll) {
    const key = "anchor-poll-" + poll.id;
    const data = store.get(key) || { counts: poll.options.map(() => 0), mine: null };

    if (data.mine === null) {
      el.innerHTML = `
        <h3>${esc(poll.question)}</h3>
        <form class="poll-form">
          <div class="poll-opts">
            ${poll.options.map((o, i) => `<label class="poll-opt"><input type="radio" name="opt" value="${i}">${esc(o)}</label>`).join("")}
          </div>
          <button class="btn" type="submit" disabled>Vote</button>
        </form>`;
      const form = $("form", el);
      form.addEventListener("change", () => ($("button", form).disabled = false));
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const i = Number(new FormData(form).get("opt"));
        data.counts[i] += 1;
        data.mine = i;
        store.set(key, data);
        renderPoll(el, poll);
      });
      return;
    }

    const total = data.counts.reduce((a, b) => a + b, 0) || 1;
    el.innerHTML = `
      <h3>${esc(poll.question)}</h3>
      <div class="poll-opts">
        ${poll.options.map((o, i) => {
          const pct = Math.round((data.counts[i] / total) * 100);
          return `<div class="poll-result${i === data.mine ? " mine" : ""}"><div class="bar" style="width:${pct}%"></div>
            <div class="row"><span>${esc(o)}</span><span>${pct}%</span></div></div>`;
        }).join("")}
      </div>
      <p class="poll-meta">Thanks for voting! ${total} vote${total === 1 ? "" : "s"}.</p>`;
  }

  /* ---------- Podcast ---------- */
  function renderPodcast(el, limit) {
    const eps = A.podcast.slice(0, limit || A.podcast.length);
    if (!eps.length) {
      el.innerHTML = `
        <div class="pod-empty">
          <div class="video-ph"><div class="play"></div></div>
          <div>
            <span class="kicker">Coming soon</span>
            <h3>Episode 1 is coming soon</h3>
            <p>We're working on our first episode. When it's out, you can watch it here.</p>
          </div>
        </div>`;
      return;
    }
    el.innerHTML = `<div class="pod-grid">${eps.map((ep) => `
      <article class="episode">
        <div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(ep.youtubeId)}" title="${esc(ep.title)}" loading="lazy" allowfullscreen allow="accelerometer; encrypted-media; picture-in-picture"></iframe></div>
        <h3>${esc(ep.title)}</h3>
        <div class="byline">${fmtDate(ep.date)}</div>
        ${ep.description ? `<p>${esc(ep.description)}</p>` : ""}
      </article>`).join("")}</div>`;
  }

  /* ---------- Pitch form ---------- */
  function wirePitch(form) {
    if (!form) return;
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = $("button", form);
      btn.disabled = true;
      btn.textContent = "Sending…";
      let ok = true;
      if (A.submitEndpoint) {
        try {
          const r = await fetch(A.submitEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
          ok = r.ok;
        } catch { ok = false; }
      }
      if (ok) {
        form.outerHTML = `<div class="thanks"><h4>Thanks!</h4><p>We got your story idea.</p></div>`;
      } else {
        btn.disabled = false;
        btn.textContent = "Try again";
      }
    });
  }

  /* ---------- Pages ---------- */
  if (page === "home") {
    const [lead, ...rest] = A.stories.filter((s) => !isPop(s));
    $("#top-stories").innerHTML = `
      <a class="lead" href="${link(lead)}">
        ${lead.image ? photo(lead) : ""}
        <span class="kicker">${esc(lead.category)}</span>
        <h2>${esc(lead.title)}</h2>
        <p class="lead-dek">${esc(lead.dek)}</p>
        <p>${esc(lead.body[0])}</p>
        ${byline(lead)}
      </a>
      <div class="side-list">
        ${rest.slice(0, 4).map((s) => `
          <a class="side-item${s.image ? " has-img" : ""}" href="${link(s)}">
            <div><span class="kicker">${esc(s.category)}</span><h3>${esc(s.title)}</h3><p class="dek">${esc(s.dek)}</p>${byline(s)}</div>
            ${s.image ? photo(s) : ""}
          </a>`).join("")}
      </div>`;
    const pop = A.stories.filter(isPop)[0];
    if (pop) {
      $("#pop-culture").innerHTML = `
        <a class="pop-col" href="${link(pop)}">
          <div class="pop-main">
            <span class="kicker">${fmtDate(pop.date)}</span>
            <h3>${esc(pop.title)}</h3>
            <p class="pop-by">by <b>${esc(pop.author)}</b></p>
            <p class="pop-dek">${esc(pop.dek)}</p>
            <span class="read-more">Read the column →</span>
          </div>
          ${pop.topics ? `<div class="pop-topics"><h4>In this column</h4><ol>${pop.topics.map((t) => `<li>${esc(t)}</li>`).join("")}</ol></div>` : ""}
        </a>`;
    } else {
      $("#pop-section").hidden = true;
    }
    if (A.edition) $("#news .sec-head").insertAdjacentHTML("beforeend", `<span class="edition">${esc(A.edition)}</span>`);
    renderPodcast($("#podcast"), 3);
    renderPoll($("#weekly-poll"), A.weeklyPoll);
    wirePitch($("#pitch-form"));
  }

  if (page === "story") {
    const id = new URLSearchParams(location.search).get("id");
    const s = A.stories.find((x) => x.id === id) || A.stories[0];
    document.title = `${s.title} | The Anchor`;
    $("#article").innerHTML = `
      <span class="kicker">${esc(s.category)}</span>
      <h1>${esc(s.title)}</h1>
      <p class="dek">${esc(s.dek)}</p>
      ${byline(s)}
      <figure>${photo(s)}${s.imageCaption ? `<figcaption class="caption">${esc(s.imageCaption)}</figcaption>` : ""}</figure>
      <div class="article-body">${s.body.map((p) => `<p>${esc(p)}</p>`).join("")}</div>`;
    const more = A.stories.filter((x) => x.id !== s.id).slice(0, 4);
    $("#more").innerHTML = more.map((x) => `
      <a class="card" href="${link(x)}">${photo(x)}<span class="kicker">${esc(x.category)}</span><h3>${esc(x.title)}</h3>${byline(x)}</a>`).join("");
  }

  if (page === "podcast") renderPodcast($("#podcast"));

  if (page === "pop-culture") {
    const cols = A.stories.filter(isPop);
    $("#pop-list").innerHTML = cols.length
      ? `<ul class="arch-list">${cols.map((c) => `<li><a href="${link(c)}"><span>${esc(c.dek)}</span><span class="byline">${fmtDate(c.date)}</span></a></li>`).join("")}</ul>`
      : `<div class="empty"><h3>No columns yet</h3></div>`;
  }

  if (page === "archives") {
    const el = $("#archives");
    el.innerHTML = A.archives.length
      ? `<ul class="arch-list">${A.archives.map((a) => `<li><a href="${esc(a.link)}"><span>${esc(a.title)}</span><span class="byline">${fmtDate(a.date)}</span></a></li>`).join("")}</ul>`
      : `<div class="empty"><h3>No past editions yet</h3><p>Edition I is our first. Older editions will show up here after Edition II comes out.</p></div>`;
  }

  if (page === "submit") wirePitch($("#pitch-form"));
})();
