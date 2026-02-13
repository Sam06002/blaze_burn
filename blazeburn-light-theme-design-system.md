# BLAZEBURN — Complete Light Theme Design System & Prompts

---

## SECTION 1: COMPLETE COLOR DESIGN SYSTEM

### Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#faf6f0` | Main page background |
| `--bg-secondary` | `#f0e9de` | Alternate sections |
| `--bg-tertiary` | `#e8ddd0` | Cards, inputs, sidebar |
| `--bg-card` | `#ffffff` | Elevated card surfaces |
| `--bg-card-hover` | `#fdf9f4` | Card hover state |
| `--bg-overlay` | `rgba(250,246,240,0.92)` | Overlays, modals |

### Typography Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#1c1409` | Main headings, bold text |
| `--text-secondary` | `#4a3520` | Subheadings, labels |
| `--text-body` | `#5c4530` | Body paragraphs |
| `--text-muted` | `#8c7355` | Placeholder, captions |
| `--text-disabled` | `#b8a898` | Disabled states |
| `--text-inverse` | `#faf6f0` | Text on dark backgrounds |

### Accent & Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent` | `#9a7230` | Primary gold accent |
| `--accent-light` | `#c9a96e` | Soft gold, icons |
| `--accent-dark` | `#6b4e1a` | Hover on gold elements |
| `--accent-muted` | `rgba(154,114,48,0.12)` | Accent backgrounds |
| `--accent-muted-hover` | `rgba(154,114,48,0.22)` | Hover accent bg |

### Border & Divider Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--border-primary` | `rgba(154,114,48,0.3)` | Card borders, inputs |
| `--border-subtle` | `rgba(154,114,48,0.15)` | Section dividers |
| `--border-focus` | `rgba(154,114,48,0.7)` | Input focus state |
| `--border-card` | `rgba(92,74,42,0.12)` | Card borders |

### Shadow System

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 2px 8px rgba(92,74,42,0.08)` | Subtle lift |
| `--shadow-md` | `0 4px 20px rgba(92,74,42,0.12)` | Cards |
| `--shadow-lg` | `0 8px 40px rgba(92,74,42,0.16)` | Modals, dropdowns |
| `--shadow-hover` | `0 12px 40px rgba(154,114,48,0.18)` | Card hover |

### Navigation

| Token | Value | Usage |
|-------|-------|-------|
| `--nav-bg` | `rgba(250,246,240,0.96)` | Navbar background |
| `--nav-border` | `rgba(154,114,48,0.15)` | Navbar bottom border |
| `--nav-text` | `#4a3520` | Nav link color |
| `--nav-text-hover` | `#1c1409` | Nav link hover |
| `--nav-active` | `#9a7230` | Active nav link |
| `--nav-active-underline` | `#9a7230` | Active underline |

### Button System

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Primary Default | `#9a7230` | `#faf6f0` | none |
| Primary Hover | `#6b4e1a` | `#faf6f0` | none |
| Primary Active | `#4a3010` | `#faf6f0` | none |
| Outline Default | transparent | `#9a7230` | `2px solid #9a7230` |
| Outline Hover | `#9a7230` | `#faf6f0` | `2px solid #9a7230` |
| Ghost Default | transparent | `#5c4530` | none |
| Ghost Hover | `rgba(154,114,48,0.1)` | `#9a7230` | none |
| Disabled | `#e8ddd0` | `#b8a898` | none |

### Form Inputs

| State | Background | Border | Text |
|-------|-----------|--------|------|
| Default | `#ffffff` | `1px solid rgba(154,114,48,0.25)` | `#1c1409` |
| Focus | `#ffffff` | `2px solid rgba(154,114,48,0.7)` | `#1c1409` |
| Filled | `#fdf9f4` | `1px solid rgba(154,114,48,0.4)` | `#1c1409` |
| Error | `#fff5f5` | `1px solid #c0392b` | `#1c1409` |
| Placeholder | — | — | `#8c7355` |

### Hero Section

| Element | Light Value |
|---------|------------|
| Overlay | `rgba(250,246,240,0.35)` |
| Title color | `#1c1409` |
| Subtitle color | `#4a3520` |
| Tagline color | `#9a7230` |

### Footer (KEEP DARK in both themes)

| Token | Value |
|-------|-------|
| `--footer-bg` | `#1a0f06` |
| `--footer-text` | `#f0e9de` |
| `--footer-muted` | `#9a8070` |
| `--footer-accent` | `#c9a96e` |
| `--footer-border` | `rgba(201,169,110,0.2)` |
| `--footer-icon-bg` | `rgba(201,169,110,0.1)` |
| `--footer-icon-border` | `rgba(201,169,110,0.3)` |

> Footer stays dark in BOTH themes — it anchors the page visually

### Sidebar (Menu Page)

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | `#f0e9de` | `#5c4530` | `1px solid rgba(154,114,48,0.15)` |
| Item Default | transparent | `#5c4530` | none |
| Item Hover | `rgba(154,114,48,0.08)` | `#4a3520` | none |
| Item Active | `rgba(154,114,48,0.15)` | `#9a7230` | `3px solid #9a7230` (left) |

### Search Bar (Menu Page)

| State | Background | Border | Text |
|-------|-----------|--------|------|
| Default | `#ffffff` | `1px solid rgba(154,114,48,0.25)` | `#1c1409` |
| Focus | `#ffffff` | `2px solid #9a7230` | `#1c1409` |
| Placeholder | — | — | `#8c7355` |

---

## SECTION 2: TYPOGRAPHY SYSTEM

```
Fonts (Google Fonts):
- Cormorant Garamond: Headings (weights 300, 400, 500, 600)
- Jost: Body, Nav, Labels (weights 300, 400, 500)

LIGHT THEME SPECIFIC:
- H1: Cormorant Garamond 300, color: #1c1409
- H2: Cormorant Garamond 400, color: #1c1409
- H3: Cormorant Garamond 500, color: #1c1409
- Body: Jost 300, color: #5c4530, line-height: 1.9
- Nav: Jost 400, color: #4a3520, uppercase, letter-spacing: 0.12em
- Labels: Jost 500, color: #9a7230, uppercase, letter-spacing: 0.15em
- Captions: Jost 300, color: #8c7355
```

---

## SECTION 3: COMPONENT-SPECIFIC PROMPTS

### PROMPT 1: Complete CSS Variables Update

```css
/* Copy-paste this COMPLETE variables block into your global CSS */

:root,
html[data-theme="light"] {
  /* Backgrounds */
  --bg-primary: #faf6f0;
  --bg-secondary: #f0e9de;
  --bg-tertiary: #e8ddd0;
  --bg-card: #ffffff;
  --bg-card-hover: #fdf9f4;
  --bg-overlay: rgba(250, 246, 240, 0.92);

  /* Typography */
  --text-primary: #1c1409;
  --text-secondary: #4a3520;
  --text-body: #5c4530;
  --text-muted: #8c7355;
  --text-disabled: #b8a898;
  --text-inverse: #faf6f0;

  /* Accent */
  --accent: #9a7230;
  --accent-light: #c9a96e;
  --accent-dark: #6b4e1a;
  --accent-muted: rgba(154, 114, 48, 0.12);
  --accent-muted-hover: rgba(154, 114, 48, 0.22);

  /* Borders */
  --border-primary: rgba(154, 114, 48, 0.3);
  --border-subtle: rgba(154, 114, 48, 0.15);
  --border-focus: rgba(154, 114, 48, 0.7);
  --border-card: rgba(92, 74, 42, 0.12);

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(92, 74, 42, 0.08);
  --shadow-md: 0 4px 20px rgba(92, 74, 42, 0.12);
  --shadow-lg: 0 8px 40px rgba(92, 74, 42, 0.16);
  --shadow-hover: 0 12px 40px rgba(154, 114, 48, 0.18);

  /* Navigation */
  --nav-bg: rgba(250, 246, 240, 0.96);
  --nav-border: rgba(154, 114, 48, 0.15);
  --nav-text: #4a3520;
  --nav-text-hover: #1c1409;
  --nav-active: #9a7230;

  /* Buttons */
  --btn-primary-bg: #9a7230;
  --btn-primary-text: #faf6f0;
  --btn-primary-hover: #6b4e1a;
  --btn-outline-border: #9a7230;
  --btn-outline-text: #9a7230;
  --btn-outline-hover-bg: #9a7230;
  --btn-outline-hover-text: #faf6f0;

  /* Forms */
  --input-bg: #ffffff;
  --input-border: rgba(154, 114, 48, 0.25);
  --input-border-focus: rgba(154, 114, 48, 0.7);
  --input-text: #1c1409;
  --input-placeholder: #8c7355;

  /* Hero */
  --hero-overlay: rgba(250, 246, 240, 0.35);
  --hero-title: #1c1409;
  --hero-subtitle: #4a3520;
  --hero-tagline: #9a7230;

  /* Footer — always dark */
  --footer-bg: #1a0f06;
  --footer-text: #f0e9de;
  --footer-muted: #9a8070;
  --footer-accent: #c9a96e;
  --footer-border: rgba(201, 169, 110, 0.2);
  --footer-icon-bg: rgba(201, 169, 110, 0.1);
  --footer-icon-border: rgba(201, 169, 110, 0.3);

  /* Cards */
  --card-bg: #ffffff;
  --card-border: rgba(92, 74, 42, 0.12);
  --card-shadow: var(--shadow-md);
  --card-hover-shadow: var(--shadow-hover);
  --card-title: #1c1409;
  --card-text: #5c4530;
  --card-accent: #9a7230;
}

html[data-theme="dark"] {
  --bg-primary: #0d0a08;
  --bg-secondary: #141009;
  --bg-tertiary: rgba(255, 248, 235, 0.04);
  --bg-card: rgba(255, 248, 235, 0.04);
  --bg-card-hover: rgba(255, 248, 235, 0.07);
  --bg-overlay: rgba(13, 10, 8, 0.85);

  --text-primary: #f5f0e8;
  --text-secondary: #c4b99a;
  --text-body: #c4b99a;
  --text-muted: #8a7d6b;
  --text-disabled: #5a5040;
  --text-inverse: #0d0a08;

  --accent: #c9a96e;
  --accent-light: #e8d5b0;
  --accent-dark: #a07830;
  --accent-muted: rgba(201, 169, 110, 0.15);
  --accent-muted-hover: rgba(201, 169, 110, 0.25);

  --border-primary: rgba(201, 169, 110, 0.25);
  --border-subtle: rgba(201, 169, 110, 0.12);
  --border-focus: rgba(201, 169, 110, 0.7);
  --border-card: rgba(201, 169, 110, 0.1);

  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.5);
  --shadow-hover: 0 12px 40px rgba(201, 169, 110, 0.15);

  --nav-bg: rgba(13, 10, 8, 0.96);
  --nav-border: rgba(201, 169, 110, 0.12);
  --nav-text: #c4b99a;
  --nav-text-hover: #f5f0e8;
  --nav-active: #c9a96e;

  --btn-primary-bg: #c9a96e;
  --btn-primary-text: #0d0a08;
  --btn-primary-hover: #a07830;
  --btn-outline-border: #c9a96e;
  --btn-outline-text: #c9a96e;
  --btn-outline-hover-bg: #c9a96e;
  --btn-outline-hover-text: #0d0a08;

  --input-bg: rgba(255, 248, 235, 0.05);
  --input-border: rgba(201, 169, 110, 0.25);
  --input-border-focus: rgba(201, 169, 110, 0.6);
  --input-text: #f5f0e8;
  --input-placeholder: #8a7d6b;

  --hero-overlay: rgba(13, 10, 8, 0.55);
  --hero-title: #f5f0e8;
  --hero-subtitle: #c4b99a;
  --hero-tagline: #c9a96e;

  --footer-bg: #1a0f06;
  --footer-text: #f0e9de;
  --footer-muted: #9a8070;
  --footer-accent: #c9a96e;
  --footer-border: rgba(201, 169, 110, 0.2);
  --footer-icon-bg: rgba(201, 169, 110, 0.1);
  --footer-icon-border: rgba(201, 169, 110, 0.3);

  --card-bg: rgba(255, 248, 235, 0.04);
  --card-border: rgba(201, 169, 110, 0.12);
  --card-shadow: var(--shadow-md);
  --card-hover-shadow: var(--shadow-hover);
  --card-title: #f5f0e8;
  --card-text: #c4b99a;
  --card-accent: #c9a96e;
}
```

---

### PROMPT 2: Apply Variables to All Components

```
Now apply the CSS variables to every component throughout 
the entire codebase. Replace ALL hardcoded colors:

/* BODY */
body {
  background-color: var(--bg-primary);
  color: var(--text-body);
  transition: background-color 0.5s ease, color 0.5s ease;
}

/* NAVIGATION */
nav, header, .navbar {
  background: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  backdrop-filter: blur(12px);
}
.nav-link { color: var(--nav-text); }
.nav-link:hover { color: var(--nav-text-hover); }
.nav-link.active { color: var(--nav-active); }

/* ALL HEADINGS */
h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
}

/* ALL BODY TEXT */
p, li, span:not(.accent) {
  color: var(--text-body);
}

/* ACCENT TEXT */
.accent, .gold-text, [class*="accent"] {
  color: var(--accent);
}

/* ALL CARDS */
.card, [class*="-card"], [class*="card-"] {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  color: var(--text-body);
}
.card:hover, [class*="-card"]:hover {
  box-shadow: var(--card-hover-shadow);
  border-color: var(--border-primary);
}
.card h3, .card h4 { color: var(--card-title); }
.card p { color: var(--card-text); }

/* HERO SECTION */
.hero-overlay, [class*="hero"] .overlay {
  background: var(--hero-overlay);
}
.hero h1, .hero-title { color: var(--hero-title); }
.hero h2, .hero-subtitle { color: var(--hero-subtitle); }
.hero .tagline { color: var(--hero-tagline); }

/* SECTIONS */
.section-primary { background: var(--bg-primary); }
.section-secondary { background: var(--bg-secondary); }

/* ALL BUTTONS */
.btn-primary {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  border: none;
}
.btn-primary:hover { background: var(--btn-primary-hover); }

.btn-outline {
  background: transparent;
  color: var(--btn-outline-text);
  border: 2px solid var(--btn-outline-border);
}
.btn-outline:hover {
  background: var(--btn-outline-hover-bg);
  color: var(--btn-outline-hover-text);
}

/* ALL INPUTS */
input, textarea, select {
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  color: var(--input-text);
}
input:focus, textarea:focus, select:focus {
  border-color: var(--input-border-focus);
  outline: none;
}
input::placeholder, textarea::placeholder {
  color: var(--input-placeholder);
}

/* FOOTER — always dark regardless of theme */
footer {
  background: var(--footer-bg) !important;
  color: var(--footer-text);
}
footer p, footer span, footer a {
  color: var(--footer-muted);
}
footer .accent, footer [class*="accent"] {
  color: var(--footer-accent);
}
footer .social-icon {
  background: var(--footer-icon-bg);
  border: 1px solid var(--footer-icon-border);
  color: var(--footer-accent);
}
footer hr, footer .divider {
  border-color: var(--footer-border);
}
```

---

### PROMPT 3: Fix Menu Page for Light Theme

```
Fix the Menu page so it looks elegant in light theme:

/* Menu hero section */
.menu-hero, .menu-page-header {
  background: var(--bg-secondary);
  color: var(--text-primary);
}
.menu-hero h1 { color: var(--text-primary); }
.menu-hero p { color: var(--text-body); }

/* Search bar wrapper section */
.search-section, .search-wrapper {
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

/* Search input */
.search-bar, .search-input {
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  color: var(--input-text);
  border-radius: 8px;
  padding: 14px 20px;
  font-family: 'Jost', sans-serif;
  font-size: 16px;
  width: 60%;
  box-shadow: var(--shadow-sm);
}
.search-bar:focus {
  border-color: var(--input-border-focus);
  box-shadow: 0 0 0 3px var(--accent-muted);
}

/* Cuisine Sidebar */
.cuisine-sidebar {
  background: var(--bg-tertiary);
  border-right: 1px solid var(--border-subtle);
  border-radius: 12px;
}
.cuisine-sidebar .title {
  color: var(--text-primary);
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 16px;
  margin-bottom: 16px;
}
.cuisine-item {
  color: var(--text-body);
  padding: 12px 16px;
  border-radius: 6px;
  font-family: 'Jost', sans-serif;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.cuisine-item:hover {
  background: var(--accent-muted);
  color: var(--accent);
}
.cuisine-item.active {
  background: var(--accent-muted-hover);
  color: var(--accent);
  border-left: 3px solid var(--accent);
  font-weight: 500;
  padding-left: 13px;
}

/* Cuisine Banner Image Text */
.cuisine-banner-text {
  color: #ffffff !important;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
}

/* Menu item cards */
.menu-item-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  color: var(--text-primary);
  padding: 16px 20px;
  border-radius: 8px;
}
.menu-item-card:hover {
  border-color: var(--border-primary);
  box-shadow: var(--shadow-sm);
}
```

---

### PROMPT 4: Fix Hero Noise/Grain Texture

```
Remove the white grainy/noise texture effect from the hero 
section. Find and delete any of these causing the grain:

1. Remove any CSS that adds noise texture:
   - Delete any: filter: noise() or similar filter effects
   - Remove any pseudo-element (::before, ::after) on hero 
     that has: opacity, background with noise/grain image
   - Remove any: background-image with url() pointing to 
     a noise or grain texture
   - Remove any SVG filter with feTurbulence applied to hero

2. Remove the --bg-noise variable or noise overlay if present:
   background-image: none; on hero section

3. Ensure hero overlay is ONLY:
   background: var(--hero-overlay); 
   (a simple rgba color, nothing else)

4. The hero image should display cleanly with only 
   a color overlay — no texture, no grain, no noise.

Keep the hero image itself and the gradient overlay.
Only remove the grainy texture layer.
```

---

### PROMPT 5: Fix Amenities Cards Red Borders & Visibility

```
Fix the Premium Amenities section cards in light theme:

1. Remove all red border/highlight artifacts from cards
   These are likely debug outlines — remove any:
   outline: red; or border: red; or box-shadow with red

2. Make card titles visible in light theme:
   .amenity-card .card-title,
   .amenity-card h3 {
     color: #ffffff !important; 
     /* titles on image cards stay white always */
     text-shadow: 0 2px 8px rgba(0,0,0,0.7);
   }

3. Card overlay text always white (on image backgrounds):
   .amenity-card .overlay-text,
   .amenity-card .card-description {
     color: rgba(255,255,255,0.9) !important;
     text-shadow: 0 1px 4px rgba(0,0,0,0.6);
   }

4. Card image overlay gradient:
   .amenity-card::after,
   .amenity-card .overlay {
     background: linear-gradient(
       to bottom,
       rgba(0,0,0,0.1) 0%,
       rgba(0,0,0,0.75) 100%
     );
   }

Note: Image cards with overlay text should ALWAYS keep
white text regardless of light/dark theme — the contrast
comes from the image overlay, not the theme.
```

---

### PROMPT 6: Footer Fix for Light Theme

```
The footer must stay dark in BOTH light and dark themes.
Fix the footer to use its own dedicated variables:

footer {
  background-color: #1a0f06 !important;
  color: #f0e9de;
}

footer .footer-logo-text,
footer .brand-name {
  color: #f0e9de;
  font-family: 'Cormorant Garamond', serif;
}

footer .footer-tagline {
  color: #9a8070;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

footer .footer-link,
footer .website-url {
  color: #c9a96e;
  text-decoration: none;
}

footer .contact-section h4,
footer .follow-section h4 {
  color: #f0e9de;
  font-family: 'Jost', sans-serif;
  font-size: 13px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

footer .contact-item {
  color: #9a8070;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-family: 'Jost', sans-serif;
  font-size: 14px;
}

footer .contact-icon {
  color: #c9a96e;
  width: 20px;
  height: 20px;
}

footer .social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(201, 169, 110, 0.1);
  border: 1px solid rgba(201, 169, 110, 0.3);
  color: #c9a96e;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

footer .social-icon:hover {
  background: #c9a96e;
  color: #1a0f06;
  border-color: #c9a96e;
}

footer hr, footer .footer-divider {
  border: none;
  border-top: 1px solid rgba(201, 169, 110, 0.2);
  margin: 32px 0 24px;
}

footer .copyright {
  color: #6a5a4a;
  font-family: 'Jost', sans-serif;
  font-size: 13px;
  text-align: center;
}

/* CRITICAL: Add !important to prevent theme override */
html[data-theme="light"] footer {
  background-color: #1a0f06 !important;
}
html[data-theme="light"] footer * {
  /* Don't inherit light theme colors in footer */
}
```

---

### PROMPT 7: Theme Switcher Visual Update

```
Update the floating theme switcher button to reflect 
the current theme state clearly:

.theme-switcher {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 9999;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.switcher-track {
  width: 56px;
  height: 28px;
  border-radius: 100px;
  padding: 3px;
  display: flex;
  align-items: center;
  transition: background 0.4s ease, border-color 0.4s ease;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}

/* Dark theme switcher appearance */
html[data-theme="dark"] .switcher-track {
  background: rgba(201, 169, 110, 0.2);
  border: 1px solid rgba(201, 169, 110, 0.4);
}
html[data-theme="dark"] .switcher-thumb {
  transform: translateX(0px);
  background: #c9a96e;
}
html[data-theme="dark"] .icon-moon { 
  display: block; 
  color: #0d0a08; 
  font-size: 14px;
}
html[data-theme="dark"] .icon-sun { display: none; }

/* Light theme switcher appearance */
html[data-theme="light"] .switcher-track {
  background: rgba(154, 114, 48, 0.15);
  border: 1px solid rgba(154, 114, 48, 0.4);
}
html[data-theme="light"] .switcher-thumb {
  transform: translateX(28px);
  background: #9a7230;
}
html[data-theme="light"] .icon-sun { 
  display: block; 
  color: #faf6f0; 
  font-size: 14px;
}
html[data-theme="light"] .icon-moon { display: none; }

.switcher-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1),
              background 0.4s ease;
}

.theme-switcher:hover .switcher-track {
  box-shadow: 0 4px 20px rgba(154,114,48,0.3);
}
```

---

## SECTION 4: APPLY ORDER

1. **PROMPT 1** — Replace all CSS variables (both dark + light)
2. **PROMPT 2** — Apply variables to all components globally  
3. **PROMPT 4** — Remove hero grain/noise texture
4. **PROMPT 3** — Fix menu page specifically
5. **PROMPT 5** — Fix amenities cards red borders
6. **PROMPT 6** — Lock footer to always dark
7. **PROMPT 7** — Polish theme switcher button

---

*Blazeburn Design System v2.0 — Light & Dark Theme*
