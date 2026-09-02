# Personal Portfolio Website — Taiye Mukaila Bilikis

**Future Computer Engineer & Networking Specialist**  
*Ahmadu Bello University (ABU), Zaria &bull; Department of Computer Engineering (Networking Track)*

---

## 🌟 Overview

This repository contains the multi-page portfolio website and data architecture for **Taiye Mukaila Bilikis**, built adhering to strict web standards:
- **No JavaScript Runtime:** Zero external scripts, inline script tags, or DOM manipulation.
- **Pure Web Standards:** Standards-compliant HTML5/XHTML, pure CSS3 (Flexbox & CSS Grid, CSS `:target` modals, CSS checkbox menu), and JSON data architecture.
- **Structured Data:** Centralized entity modeling in `data/data.json` and semantic JSON-LD embedded in every page `<head>`.
- **Aesthetic:** Engineered Emerald & Forest Green color scheme (`#061A0A`, `#01590E`, `#10B981`, `#F6FAF6`).

---

## 📁 Directory Hierarchy

```
├── index.html                  # 1. Home Page (Hero, focus areas, at-a-glance snapshot)
├── about.html                  # 2. About Me (Academic identity, learning mindset, strengths)
├── education.html              # 3. Educational Background (Timeline, capstone, certifications)
├── skills.html                 # 4. Technical Skills (Pills across programming, networking, IoT, cloud)
├── projects.html               # 5. Projects (Showcases with pure CSS :target modal popups)
├── hobbies.html                # 6. Hobbies & Interests (Learning, cooking, reading, smiling & tech interests)
├── cv.html                     # 7. Curriculum Vitae (Printable styling & PDF download action)
├── contact.html                # 8. Contact Me (Direct contact channels & semantic form)
├── style.css                   # Root stylesheet fallback
├── me.jpg                      # Profile photograph fallback
├── pro.jpg                     # Project hardware photograph fallback
├── assets/
│   ├── css/
│   │   └── style.css           # Modular pure CSS stylesheet (Emerald design tokens)
│   └── images/
│       ├── me.jpg              # Profile photograph
│       └── pro.jpg             # Project image (Smart Air Quality Monitoring System)
├── data/
│   └── data.json               # Centralized structured JSON dataset
├── TECHNICAL_REPORT.md         # Comprehensive architectural & CMS evaluation report
└── README.md                   # Project overview & deployment guide
```

---

## 🚀 Key Features

1. **8 Semantic Pages:** Full navigation between Home, About Me, Education, Skills, Projects, Hobbies, CV, and Contact.
2. **Pure CSS Interactivity:**
   - Responsive mobile navigation toggle via pure CSS checkbox hack (`#nav-toggle:checked ~ .nav-links`).
   - Interactive project architecture popups using pure CSS `:target` pseudo-classes (`#modal-air-quality:target`).
   - Collapsible coursework details using native `<details><summary>` with CSS-styled rotation indicators.
3. **Structured Data Modeling:** Complete entity model in `data/data.json` and JSON-LD (`Schema.org/Person`, `Schema.org/CreativeWork`, `Schema.org/AboutPage`, `Schema.org/ProfilePage`, `Schema.org/ContactPage`).
4. **Accessible & Responsive:** WCAG 2.1 AAA color contrast, skip navigation link, `:focus-visible` outlines, and responsive scaling from 320px mobile to 4K displays.
5. **Print-Optimized CV:** `cv.html` features dedicated `@media print` rules for clean single/double-page PDF generation without header/footer clutter.

---

## 🌐 Live Deployment Instructions

### GitHub Pages
1. Push this repository to GitHub (`https://github.com/teetechie75/portfolio`).
2. Go to **Settings &rarr; Pages**.
3. Under **Build and deployment &rarr; Branch**, select `main` and root `/`.
4. Click **Save**. The website will be live at: `https://teetechie75.github.io/portfolio/index.html`.

### Local Viewing
Simply double-click `index.html` or open it with any modern web browser (Chrome, Firefox, Safari, Edge).

---

## 📄 License & Attribution
&copy; 2026 Taiye Mukaila Bilikis. All rights reserved.
