const pages = [
  { href: 'index.html',      label: 'Home' },
  { href: 'workshops.html',  label: 'Workshops' },
  { href: 'register.html',   label: 'Daftar' },
  { href: 'guidelines.html', label: 'Guidelines' },
  { href: 'request.html',    label: 'Request Training' },
  { href: 'sop.html',        label: 'Hall SOP' },
  { href: 'about.html',      label: 'About' },
  { href: 'contact.html',    label: 'Contact' },
];

function buildNav() {
  const current = location.pathname.split('/').pop() || 'index.html';

  const logoHtml = `
    <a class="nav-brand" href="index.html">
      <img src="images/logo.png" alt="Salam EduMed">
    </a>`;

  const linksHtml = pages.map((p, i) => {
    const active = current === p.href ? ' active' : '';
    const cls = i === 2 ? ' btn-nav' : '';
    return `<li><a href="${p.href}" class="${cls}${active}">${p.label}</a></li>`;
  }).join('');

  const mobileLinksHtml = pages.map(p => {
    const active = current === p.href ? ' active' : '';
    return `<a href="${p.href}" class="${active}">${p.label}</a>`;
  }).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav class="navbar">
      ${logoHtml}
      <ul class="nav-links">${linksHtml}</ul>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobileMenu">${mobileLinksHtml}</div>
  `);

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
}

document.addEventListener('DOMContentLoaded', buildNav);
