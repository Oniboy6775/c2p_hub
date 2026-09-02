
document.addEventListener('DOMContentLoaded', () => {
  setYear();
  initTheme();
  initMobileNav();
  initTyping();
  initAOS();
  initParticles();
  renderCertificates();
  renderGallery();
  renderVideos();
  initLightbox();
});

/* ---------- Footer year ---------- */
function setYear(){
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Theme toggle (dark "espresso" <-> light "parchment") ---------- */
function initTheme(){
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = btn ? btn.querySelector('i') : null;
  const saved = localStorage.getItem('kk-theme');

  if (saved === 'light') {
    root.setAttribute('data-theme', 'light');
    if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
  }

  if (btn){
    btn.addEventListener('click', () => {
      const isLight = root.getAttribute('data-theme') === 'light';
      if (isLight){
        root.removeAttribute('data-theme');
        localStorage.setItem('kk-theme', 'dark');
        if (icon){ icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('kk-theme', 'light');
        if (icon){ icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
      }
    });
  }
}

/* ---------- Mobile nav ---------- */
function initMobileNav(){
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    const open = links.classList.contains('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    const icon = toggle.querySelector('i');
    if (icon){
      icon.classList.toggle('fa-bars', !open);
      icon.classList.toggle('fa-xmark', open);
    }
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ---------- Typing effect on home page ---------- */
function initTyping(){
  const el = document.getElementById('typing');
  if (!el) return;

  const phrases = [
    'building machine learning models.',
    'training computer vision pipelines.',
    'shipping full-stack web apps.',
    'mentoring the next generation of AI builders.'
  ];

  let phraseIndex = 0, charIndex = 0, deleting = false;

  function tick(){
    const current = phrases[phraseIndex];
    el.textContent = deleting
      ? current.substring(0, charIndex--)
      : current.substring(0, charIndex++);

    let delay = deleting ? 35 : 55;

    if (!deleting && charIndex === current.length + 1){
      deleting = true;
      delay = 1400;
    } else if (deleting && charIndex === -1){
      deleting = false;
      charIndex = 0;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 300;
    }
    setTimeout(tick, delay);
  }
  tick();
}

/* ---------- AOS (scroll animations) ---------- */
function initAOS(){
  if (window.AOS){
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 40 });
  }
}

/* ---------- Particles background (home page only) ---------- */
function initParticles(){
  const target = document.getElementById('particles-js');
  if (!target || !window.particlesJS) return;

  particlesJS('particles-js', {
    particles: {
      number: { value: 46, density: { enable: true, value_area: 900 } },
      color: { value: ['#BE7E3F', '#E3AA6C', '#8C5E33'] },
      shape: { type: 'circle' },
      opacity: { value: 0.35, random: true },
      size: { value: 2.4, random: true },
      line_linked: {
        enable: true, distance: 130, color: '#BE7E3F', opacity: 0.15, width: 1
      },
      move: { enable: true, speed: 0.6, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: false },
        resize: true
      },
      modes: { grab: { distance: 140, line_linked: { opacity: 0.3 } } }
    },
    retina_detect: true
  });
}

const CERTIFICATES = [
  // -- Verified online (open external link) --
  { type: 'url', src: 'https://learn.saylor.org/admin/tool/certificate/index.php?code=6280966666KK', issuer: 'Saylor Academy', name: 'Artificial Intelligence' },
  { type: 'url', src: 'https://simpli-web.app.link/e/uZYzdw09ETb', issuer: 'Simplilearn', name: 'Machine Learning' },
  { type: 'url', src: 'https://simpli-web.app.link/e/43TjMhHaFTb', issuer: 'Simplilearn', name: 'AI / ML Project' },

  // -- Image certificates --
  { type: 'image', src: 'certificates/Deep Learning Essentials IBM.png', issuer: 'IBM', name: 'Deep Learning Essentials' },
  { type: 'image', src: 'certificates/ibm.png', issuer: 'IBM', name: 'IBM Certificate' },
  { type: 'image', src: 'certificates/react_udemy.jpg', issuer: 'Udemy', name: 'React' },

  // -- PDF certificates --
  { type: 'pdf', src: 'certificates/AI ML projects.pdf', name: 'AI/ML Projects' },
  { type: 'pdf', src: 'certificates/AI_for_Youth-Certificate_of_Completion__AI_for_Youth_4178.pdf', name: 'AI for Youth — Certificate of Completion' },
  { type: 'pdf', src: 'certificates/AI_Institute_of_Applied_Technology.pdf', name: 'AI Institute of Applied Technology' },
  { type: 'pdf', src: 'certificates/CertificateOfCompletion_Ethics in the Age of Generative AI.pdf', name: 'Ethics in the Age of Generative AI' },
  { type: 'pdf', src: 'certificates/Building_with_AI_SaylorAcademy.pdf', name: 'Building with AI — Saylor Academy' },
  { type: 'pdf', src: 'certificates/CertificateOfCompletion_What Is Generative AI.pdf', name: 'Generative AI' },
  { type: 'pdf', src: 'certificates/Chatbot_with_GenAI_Udemy.pdf', name: 'Chatbot with GenAI — Udemy' },
  { type: 'pdf', src: 'certificates/Demystifying_Intel®_Dev_Cloud_and_other_AI-Certificate_of_Completion_4190.pdf', name: 'Demystifying Intel DevCloud & Other AI' },
  { type: 'pdf', src: 'certificates/GenAI_and_Business_Applications.pdf', name: 'GenAI and Business Applications' },
  { type: 'pdf', src: 'certificates/Generative AI_Simplilearn.pdf', name: 'Generative AI' },
  { type: 'pdf', src: 'certificates/Introduction to AI.pdf', name: 'Introduction to AI' },
  { type: 'pdf', src: 'certificates/Introduction_to_Generative_AI-Certificate_of_Completion_4180.pdf', name: 'Introduction to Generative AI' },
  { type: 'pdf', src: 'certificates/Introduction_to_Responsible_AI_Skills-Certificate_of_Completion_4187.pdf', name: 'Introduction to Responsible AI' },
  { type: 'pdf', src: 'certificates/ITEssentialsUpdate20250527-26-4z3ayx.pdf', name: 'IT Essentials Update' },
  { type: 'pdf', src: 'certificates/DEVCON.pdf', name: 'Certificate of Completion' },
  { type: 'pdf', src: 'certificates/Digital_Readiness_for_Public_Sector_Leaders-Certificate_of_Completion_8940.pdf', name: 'Certificate of Completion' },
  { type: 'pdf', src: 'certificates/Mindluster_Certificate.pdf', name: 'Next js' },
  { type: 'pdf', src: 'certificates/ML and DL.pdf', name: 'ML and Deep Learning Project' }
];

function renderCertificates(){
  const grid = document.getElementById('cert-grid');
  if (!grid) return;

  if (!CERTIFICATES.length){
    grid.innerHTML = '<p class="cert-empty">No certificates added yet — list them in the CERTIFICATES array at the top of script.js.</p>';
    return;
  }

  grid.innerHTML = CERTIFICATES.map(cert => {
    const label = cert.issuer ? `${cert.issuer} — ${cert.name}` : cert.name;

    if (cert.type === 'image'){
      return `
        <a class="cert-card" href="${cert.src}" target="_blank" rel="noopener">
          <img src="${cert.src}" alt="${label}" loading="lazy">
          <span>${label}</span>
        </a>`;
    }
    if (cert.type === 'url'){
      return `
        <a class="cert-card" href="${cert.src}" target="_blank" rel="noopener">
          <i class="fa-solid fa-arrow-up-right-from-square fa-2x"></i>
          <span>${label}</span>
        </a>`;
    }
    return `
      <a class="cert-card" href="${cert.src}" target="_blank" rel="noopener">
        <i class="fa-solid fa-file-pdf fa-2x"></i>
        <span>${label}</span>
      </a>`;
  }).join('');
}


  //  Gallery — competition / event photos.
   
const GALLERY = [
  { src: 'gallery/image1.jpeg', caption: 'Recognition IIOE' },
  { src: 'gallery/image6.jpeg', caption: "Team Paravision" },
  { src: 'gallery/image4.jpeg', caption: 'TeamABU2026 Huawei ICT Competition' },
  { src: 'gallery/image8.jpeg', caption: 'Award' },
  { src: 'gallery/image2.jpeg', caption: 'Milestone' }
];


  //  Work videos — short clips of me at work.

const WORK_VIDEOS = [
  { src: 'media/CP2.mp4', title: "Teaching at Kids' Bootcamp", desc: 'A glimpse into a hands-on coding session with young learners in CP2 hub, Department of Computer Engineering ABU Zaria.' },
  { src: 'media/me.mp4', title: 'AI Mentorship Session', desc: 'Guiding students through an AI/ML project at ABU Zaria.' },
  { src: 'media/Video.mov', title: 'Huawei ICT Competition', desc: 'Competing on the global stage of the Huawei ICT Competition.' }
];

function renderGallery(){
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  if (!GALLERY.length){
    grid.innerHTML = '<p class="cert-empty">No photos added yet — list them in the GALLERY array in script.js.</p>';
    return;
  }

  grid.innerHTML = GALLERY.map((item, i) => `
    <figure class="gallery-item" data-index="${i}">
      <img src="${item.src}" alt="${item.caption}" loading="lazy"
           onerror="this.closest('.gallery-item').classList.add('img-missing')">
      <span class="gallery-missing-label">Add ${item.src}</span>
      <figcaption>${item.caption}</figcaption>
    </figure>
  `).join('');

  grid.querySelectorAll('.gallery-item').forEach(el => {
    el.addEventListener('click', () => {
      const item = GALLERY[Number(el.dataset.index)];
      openLightbox(item.src, item.caption);
    });
  });
}

function renderVideos(){
  const grid = document.getElementById('video-grid');
  if (!grid) return;

  if (!WORK_VIDEOS.length){
    grid.innerHTML = '<p class="cert-empty">No videos added yet — list them in the WORK_VIDEOS array in script.js.</p>';
    return;
  }

  grid.innerHTML = WORK_VIDEOS.map(v => `
    <div class="video-card">
      <video controls preload="none">
        <source src="${v.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="video-meta">
        <div class="video-title">${v.title}</div>
        <div class="video-desc">${v.desc}</div>
      </div>
    </div>
  `).join('');
}

/* ---------- Lightbox for gallery photos ---------- */
function openLightbox(src, caption){
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = caption || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.getElementById('lightbox-img').src = '';
  document.body.style.overflow = '';
}
function initLightbox(){
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  const closeBtn = document.getElementById('lightbox-close');
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}
