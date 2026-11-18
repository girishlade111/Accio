### Problem Summary
In mobile viewport testing (320px–375px), automated layout audit identified several interactive controls with clickable bounding boxes under the recommended 44x44px (or minimum 24x24px for WCAG 2.5.8 Target Size).

### Specific Targets Under 44px
1. **Contact Page Social Links**:
   - Elements: `<a href="..." aria-label="GitHub Profile">` wrapping 16px SVG icons.
   - Bounding rect is `16px × 16px` without touch padding, making them difficult to tap accurately on small mobile touchscreens.
2. **Footer Navigation Links**:
   - Inline text links (`Home`, `About`, `Skills`) have computed heights of ~16px with narrow horizontal hit areas.
3. **Back Buttons**:
   - `Back to Projects` and `Back to About` buttons have a tap height of 16px.

### Proposed Solution
1. Add minimum padding (`p-2.5` or `min-w-[44px] min-h-[44px] flex items-center justify-center`) around icon buttons and back navigation buttons.
2. Maintain compact visual appearance while expanding interactive hit area.