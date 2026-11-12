// Chapter list: built from sections with data-toc, highlights the one in view.
(function () {
  const sections = [...document.querySelectorAll("section[data-toc]")];
  const list = document.querySelector(".toc ol");
  const toc = document.querySelector(".toc");
  const pill = document.querySelector(".toc-pill");
  if (!list || !sections.length) return;
  sections.forEach((s) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + s.id;
    a.textContent = s.dataset.toc;
    li.appendChild(a);
    list.appendChild(li);
  });
  const links = [...list.querySelectorAll("a")];
  function update() {
    let i = 0;
    sections.forEach((s, k) => { if (s.getBoundingClientRect().top < window.innerHeight * 0.35) i = k; });
    links.forEach((a, k) => a.setAttribute("aria-current", k === i ? "true" : "false"));
    if (pill) {
      pill.querySelector(".toc-pill-name").textContent = sections[i].dataset.toc;
      pill.querySelector(".toc-pill-n").textContent = `${i + 1}/${sections.length}`;
    }
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
  if (pill) {
    pill.addEventListener("click", () => {
      const open = toc.classList.toggle("open");
      pill.setAttribute("aria-expanded", open);
    });
    links.forEach((a) => a.addEventListener("click", () => { toc.classList.remove("open"); pill.setAttribute("aria-expanded", "false"); }));
  }
})();
