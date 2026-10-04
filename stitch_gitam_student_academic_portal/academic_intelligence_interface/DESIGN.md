---
name: Academic Intelligence Interface
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0d50d5'
  on-secondary: '#ffffff'
  secondary-container: '#386bef'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f1500'
  on-tertiary-container: '#c76c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b5c4ff'
  on-secondary-fixed: '#00174d'
  on-secondary-fixed-variant: '#003dab'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  tabular-stat:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system reflects a modern university academic environment re-imagined through the lens of a high-end productivity suite. It blends institutional authority with focused, distraction-free digital ergonomics. The interface caters to students, faculty advisors, and academic administrators who require immediate clarity over attendance, grades, scheduling, and degree progression.

The aesthetic philosophy centers on **Editorial Minimalism and Modern Corporate Precision**. It avoids juvenile ed-tech gamification, neon gradients, ornamental glassmorphism, and bloated SaaS tropes. Visual weight is communicated through architectural typography, disciplined micro-spacing, structured data tables, and subtle paper-like elevations that honor academic pedigree while enabling swift everyday task completion.

## Colors

The palette establishes an authoritative, collegiate ambiance anchored in deep navy slate, active university cobalt, and an academic gold accent used with deliberate restraint.

- **Primary Canvas & Surfaces**: Background canvas relies on `#F8FAFC`, providing cool relief against crisp pure white `#FFFFFF` cards and structural containers.
- **Structural Lines**: Subtle separation borders leverage `#E2E8F0` and `#CBD5E1`, ensuring cards retain shape without relying heavily on drop shadows.
- **Text & Hierarchy**: Primary copy uses `#0F172A` for high-contrast legibility. Supporting metadata uses `#475569` (Slate 600) and `#94A3B8` (Slate 400).
- **Secondary Interaction**: `#1A56DB` designates active states, primary CTA buttons, selected tabs, and links.
- **Academic Accent**: Warm amber/gold `#D97706` is reserved for honors indicators, key milestones, and scholarship notices.
- **Semantic Academic States**:
  - **Optimal (Safe)**: Emerald (`#059669` / background `#ECFDF5`) for attendance ≥ 80% and passing GPA metrics.
  - **Caution (Warning)**: Amber (`#D97706` / background `#FFFBEB`) for attendance between 75% and 79.9%.
  - **Critical (Action Required)**: Rose (`#E11D48` / background `#FFF1F2`) for attendance &lt; 75% or overdue academic holds.

## Typography

The type system is powered entirely by **Geist**, leveraging its geometric neutrality, monospaced-like tabular precision, and crisp rendering in dense data contexts.

- **Tabular Figures**: All metric counters, grade values, course codes, and attendance percentages must enforce font-variant-numeric: `tabular-nums` to eliminate layout shift and optimize column scanning.
- **Hierarchy Rules**: Display levels are reserved for the dashboard greeting, semester summaries, and primary transcript headers. Section headings lean into `headline-md` and `headline-sm` with tight tracking (`-0.015em`).
- **Metadata and Tags**: `label-xs` is systematically styled in uppercase tracking for status pills, course registration codes (e.g., `CSEN2011`), and credit unit markers.

## Layout & Spacing

The dashboard relies on an asymmetric **12-column responsive fluid grid** anchored by a fixed left navigation utility bar (64px collapsed, 240px expanded).

- **Grid Architecture**:
  - **Desktop (≥ 1280px)**: 12-column grid, 2rem margin, 1.5rem gutters. Typical split: 8-column analytical workspace (timetable, performance metrics, courses) and 4-column contextual utility (academic notices, attendance watch, deadlines).
  - **Tablet (768px - 1279px)**: 8-column grid, 1.5rem margin, 1rem gutters. Left rail collapses to an icon bar; right rail stacks beneath active coursework.
  - **Mobile (&lt; 768px)**: Single column fluid layout, 1rem margin, 0.75rem gutters. Navigation migrates to an anchored bottom tab system.
- **Rhythm & Alignment**: Vertical rhythm follows an explicit 4px / 8px baseline. Dense content rows (such as exam schedules and course tables) maintain 12px vertical padding, avoiding both crowded data cells and vacant dead space.

## Elevation & Depth

Visual separation relies on **low-contrast micro-outlines paired with subtle ambient diffusion**. The interface avoids exaggerated elevations, emphasizing flat surface clarity akin to an executive financial or academic terminal.

- **Base Layer (Level 0)**: `#F8FAFC` canvas. Flat, raw background.
- **Surface Layer (Level 1)**: Pure white `#FFFFFF` cards, panels, and data tables bounded by a 1px solid border (`#E2E8F0`). Shadow is muted: `0 1px 3px 0 rgba(15, 23, 42, 0.04)`.
- **Raised Interactive Layer (Level 2)**: Hover states for course cards, active search dropdowns, and flyout filters. Shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Overlay & Modal Layer (Level 3)**: Course registration modals, transcript detail drawers. Shadow: `0 12px 24px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.04)`. Uses a dim backdrop of `#0F172A` at 40% opacity without heavy blur.

## Shapes

The interface embraces a **Soft architectural shape language** (`roundedness: 1`), instilling an organized, technical, and institutional aesthetic.

- **Micro Components (0.25rem / 4px)**: Status badges, input tags, data grid cells, and tooltips.
- **Core Elements (0.375rem to 0.5rem / 6px to 8px)**: Standard buttons, text field containers, course item cards, and dropdown menus.
- **Macro Containers (0.75rem / 12px)**: Primary metric dashboards, transcript panels, and schedule calendar containers.
- **Strictly Prohibited**: Full pill-shaped CTA buttons or bubbly round corners. All radii must feel intentional and disciplined.

## Components

### Buttons
- **Primary**: Solid `#0F172A` background, `#FFFFFF` text, `0.375rem` border radius, medium weight typography. Focus state displays a 2px offset ring in `#1A56DB`.
- **Secondary (Institutional)**: Solid `#1A56DB` background, `#FFFFFF` text, used for primary academic actions (e.g., "Register for Electives").
- **Outline / Subtle**: Transparent background, 1px border `#E2E8F0`, `#0F172A` text. Hover shifts background to `#F1F5F9`.
- **Ghost**: Zero border, `#475569` text, used for breadcrumbs and tertiary pagination controls.

### Cards & Analytical Panels
- Composed of `#FFFFFF` surfaces with a 1px border `#E2E8F0`.
- Card headers feature an explicit bottom divider line `#F1F5F9` separating the title/actions from the content body.
- Stat cards feature large tabular metrics (e.g., `88.4%`, `3.82 CGPA`) accompanied by micro-pills showing semantic delta or attendance safety margin.

### Status Chips & Attendance Badges
- **Safe (> 75% Attendance)**: `#ECFDF5` background, `#047857` text, 1px border `#A7F3D0`.
- **Warning (75% - 80% Caution Zone)**: `#FFFBEB` background, `#B45309` text, 1px border `#FDE68A`.
- **Critical (< 75% Shortage)**: `#FFF1F2` background, `#BE123C` text, 1px border `#FECDD3`. Includes a leading warning icon dot.
- Form factor: Compact padding (2px 8px), `11px` uppercase bold text.

### Form Inputs & Search
- Background `#FFFFFF`, 1px border `#CBD5E1`, text `#0F172A`. Height constrained to 38px for desktop.
- Focused state: Border changes to `#1A56DB` with an ambient glow of `0 0 0 3px rgba(26, 86, 219, 0.12)`.
- Placeholder text in `#94A3B8`.

### Tables & Course Rosters
- Alternating row styling is avoided; clean 1px border `#F1F5F9` bottom borders define rows.
- Table headers (`th`) utilize `label-xs` typography in `#64748B`, uppercase with background `#F8FAFC`.
- Rows highlight with `#F8FAFC` on mouse hover, rendering clickable academic rows intuitive.