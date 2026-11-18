### Problem Summary
Automated axe-core accessibility auditing discovered color contrast failures (WCAG 2.2 AA threshold < 4.5:1) on multiple text elements in both dark and light modes.

### Specific Violations Found
1. **Home Page Bottom Ambient Tagline**:
   - Element: `<div class="absolute bottom-8 text-[11px] text-[#555555] font-mono">Pune, India · Independent Developer</div>`
   - Computed contrast ratio on dark background (`#0c0c0c`) is **3.1:1**, falling below the mandatory **4.5:1** ratio.
2. **About & Projects Subtext**:
   - Class `text-neutral-500` computed against light theme (`#f8f8f8`) yields **3.4:1**, causing axe-core `color-contrast` failures.
3. **Card Subtitles**:
   - Class `text-white/40` on dark cards yields **2.8:1** contrast ratio.

### Proposed Solution
1. Replace `text-[#555555]` on Home with `text-neutral-400 dark:text-neutral-400 light:text-neutral-600` to ensure >= 4.5:1 contrast.
2. Adjust design tokens in `src/styles/global.css` so secondary text meets WCAG AA standards in both themes.