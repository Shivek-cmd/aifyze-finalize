GoHighLevel Dashboard Styling: Element-by-Element CSS Customization Guide (2026)
Style every part of your GoHighLevel dashboard with custom CSS. Button colors, headers, sidebars, cards, fonts, and loading animations with copy-paste code.

Anas Uddin
April 9, 2020
4 min read
If you manage a GoHighLevel agency, you know the dashboard is where your team and clients spend most of their time. While full dashboard themes change the overall color scheme, sometimes you need more surgical control -- changing just the button colors, adjusting the header font, or tweaking the sidebar without affecting everything else.

This guide breaks down GHL dashboard styling element by element. Each section targets a specific part of the interface with CSS code you can copy, customize, and paste into your agency settings. Mix and match the pieces that matter to your brand.

Where to Add These CSS Snippets
All custom CSS goes into the same place:

1. Log into your GoHighLevel agency account.

2. Navigate to Settings > Company.

3. Find the Custom CSS field.

4. Paste your CSS code.

5. Click Save.

You can combine multiple snippets from this guide into a single stylesheet. Just paste them one after another in the Custom CSS field.

Pro tip: Start each snippet with a CSS comment (like /* Header Styling */) so you can quickly find and edit specific sections later.

Quick Action Buttons
The quick action buttons (commonly found at the top of the dashboard for actions like adding contacts, creating opportunities, or sending messages) are one of the first things users interact with. Here is how to restyle them.

Change Button Background Color
/* Quick Action Button - Background Color */
.quick-actions .btn,
.quick-action-btn,
.hl_quick-actions button {
  background-color: #2563eb !important;
  border-color: #2563eb !important;
  color: #ffffff !important;
  border-radius: 6px !important;
  transition: all 0.2s ease-in-out;
}

.quick-actions .btn:hover,
.quick-action-btn:hover,
.hl_quick-actions button:hover {
  background-color: #1d4ed8 !important;
  border-color: #1d4ed8 !important;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
}

Copy

Outline-Style Buttons
If you prefer a lighter look, use outline-style buttons instead:

/* Quick Action Button - Outline Style */
.quick-actions .btn,
.quick-action-btn {
  background-color: transparent !important;
  border: 2px solid #2563eb !important;
  color: #2563eb !important;
  border-radius: 6px !important;
  font-weight: 600 !important;
  transition: all 0.2s ease-in-out;
}

.quick-actions .btn:hover,
.quick-action-btn:hover {
  background-color: #2563eb !important;
  color: #ffffff !important;
}

Copy

Main Header Styling
The top header bar runs across the entire width of the dashboard. It typically contains the agency logo, search bar, notifications, and user profile. Customizing this area makes an immediate visual impact.

Header Background and Text Color
/* Main Header - Background & Text */
.topbar,
.hl_header,
header.navbar {
  background-color: #0f172a !important;
  border-bottom: 2px solid #1e293b !important;
}

.topbar .nav-link,
.topbar .navbar-text,
.hl_header a,
.hl_header span {
  color: #e2e8f0 !important;
}

.topbar .nav-link:hover,
.hl_header a:hover {
  color: #ffffff !important;
}

Copy

Header with Gradient Background
For a more dynamic header, use a gradient:

/* Main Header - Gradient Background */
.topbar,
.hl_header,
header.navbar {
  background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%) !important;
  border-bottom: 2px solid rgba(255, 255, 255, 0.08) !important;
}

Copy

Custom Header Font
Change the font family in the header to match your brand typography:

/* Main Header - Custom Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.topbar,
.topbar *,
.hl_header,
.hl_header * {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
}

Copy

You can replace Inter with any Google Font. Popular choices for SaaS dashboards include Inter, Plus Jakarta Sans, DM Sans, and Outfit.

Sidebar Navigation
The sidebar is where users navigate between modules (contacts, conversations, opportunities, calendars, and more). Styling it properly creates a strong visual anchor for your brand.

Sidebar Background Color
/* Sidebar - Background */
.left-sidebar,
.sidebar-nav,
.hl_sidebar,
nav.sidebar {
  background-color: #0c1929 !important;
}

Copy

Sidebar Link Colors and Active State
/* Sidebar - Link Colors */
.left-sidebar .sidebar-nav ul li a,
.hl_sidebar a,
nav.sidebar a {
  color: #8ba3be !important;
  padding: 10px 16px !important;
  border-radius: 6px !important;
  margin: 2px 8px !important;
  transition: all 0.15s ease;
}

/* Sidebar - Hover State */
.left-sidebar .sidebar-nav ul li a:hover,
.hl_sidebar a:hover,
nav.sidebar a:hover {
  background-color: rgba(255, 255, 255, 0.06) !important;
  color: #ffffff !important;
}

/* Sidebar - Active/Selected State */
.left-sidebar .sidebar-nav ul li.active > a,
.hl_sidebar a.active,
nav.sidebar a.router-link-active {
  background-color: #2563eb !important;
  color: #ffffff !important;
  font-weight: 600 !important;
}

Copy

Sidebar Icons
If you want to change the color of sidebar icons:

/* Sidebar - Icon Colors */
.left-sidebar .sidebar-nav ul li a i,
.left-sidebar .sidebar-nav ul li a svg,
.hl_sidebar a svg {
  color: #607d9b !important;
  opacity: 0.8;
  transition: all 0.15s ease;
}

.left-sidebar .sidebar-nav ul li a:hover i,
.left-sidebar .sidebar-nav ul li a:hover svg,
.left-sidebar .sidebar-nav ul li.active > a i,
.left-sidebar .sidebar-nav ul li.active > a svg {
  color: #ffffff !important;
  opacity: 1;
}

Copy

Sidebar Divider Lines
Add subtle dividers between sidebar sections:

/* Sidebar - Section Dividers */
.left-sidebar .sidebar-nav ul li.nav-section {
  border-top: 1px solid rgba(255, 255, 255, 0.06) !important;
  margin-top: 8px !important;
  padding-top: 8px !important;
}

.left-sidebar .sidebar-nav ul li.nav-section span {
  color: #4a6580 !important;
  font-size: 0.7rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
}

Copy

Card Headers and Link Colors
Dashboard cards display data summaries, charts, and quick-access panels. Styling card headers and their links can tie the dashboard together visually.

Card Header Background and Text
/* Card Headers */
.card .card-header,
.card-header {
  background-color: #f8fafc !important;
  border-bottom: 1px solid #e2e8f0 !important;
  padding: 14px 20px !important;
}

.card .card-header h4,
.card .card-header h5,
.card .card-header .card-title {
  color: #1e293b !important;
  font-weight: 600 !important;
  font-size: 0.95rem !important;
}

Copy

Card Header Link Colors
Links inside card headers (like "View All" or date range selectors) often need their own styling:

/* Card Header - Link Colors */
.card .card-header a,
.card-header a {
  color: #2563eb !important;
  text-decoration: none !important;
  font-weight: 500 !important;
  transition: color 0.15s ease;
}

.card .card-header a:hover,
.card-header a:hover {
  color: #1d4ed8 !important;
  text-decoration: underline !important;
}

Copy

Card Body Styling
/* Card Body */
.card {
  border: 1px solid #e2e8f0 !important;
  border-radius: 10px !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
  overflow: hidden;
}

.card .card-body {
  padding: 20px !important;
}

Copy

Loading Animation
GoHighLevel displays a loading spinner or animation when navigating between pages or loading data. You can customize its color to match your brand.

Loading Spinner Color
/* Loading Animation - Spinner Color */
.spinner-border,
.loading-spinner,
.hl-loading {
  color: #2563eb !important;
  border-color: #2563eb !important;
  border-right-color: transparent !important;
}

Copy

Loading Bar Color
If the dashboard uses a top loading bar (progress bar style):

/* Loading Bar - Top Progress Bar */
.nprogress .bar,
#nprogress .bar {
  background-color: #2563eb !important;
  height: 3px !important;
}

.nprogress .peg,
#nprogress .peg {
  box-shadow: 0 0 10px #2563eb, 0 0 5px #2563eb !important;
}

Copy

Table and Data Styling
Many GHL dashboard views display data in tables (contacts, opportunities, campaigns). Here is how to style them:

/* Tables */
.table thead th {
  background-color: #f8fafc !important;
  color: #475569 !important;
  font-weight: 600 !important;
  font-size: 0.8rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
  border-bottom: 2px solid #e2e8f0 !important;
  padding: 12px 16px !important;
}

.table tbody td {
  padding: 12px 16px !important;
  border-bottom: 1px solid #f1f5f9 !important;
  color: #334155 !important;
  vertical-align: middle !important;
}

.table tbody tr:hover {
  background-color: #f8fafc !important;
}

Copy

Form Input Styling
Text fields, dropdowns, and other form inputs appear throughout the dashboard. Consistent input styling ties the interface together.

/* Form Inputs */
.form-control,
input[type="text"],
input[type="email"],
input[type="password"],
input[type="search"],
textarea,
select.form-control {
  border: 1px solid #cbd5e1 !important;
  border-radius: 6px !important;
  padding: 8px 12px !important;
  font-size: 0.875rem !important;
  color: #334155 !important;
  background-color: #ffffff !important;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.form-control:focus,
input:focus,
textarea:focus {
  border-color: #2563eb !important;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1) !important;
  outline: none !important;
}

Copy

Global Font Override
To change the font across the entire dashboard:

/* Global Font Override */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

body,
.page-wrapper,
.left-sidebar,
.topbar,
.card,
.form-control,
.btn {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
}

Copy

Badge and Tag Styling
Contact tags, pipeline stage labels, and status badges appear frequently. Custom styling makes them easier to scan:

/* Badges and Tags */
.badge,
.tag,
.label {
  border-radius: 20px !important;
  padding: 4px 10px !important;
  font-size: 0.75rem !important;
  font-weight: 500 !important;
  letter-spacing: 0.02em !important;
}

.badge-primary {
  background-color: #dbeafe !important;
  color: #1e40af !important;
}

.badge-success {
  background-color: #dcfce7 !important;
  color: #166534 !important;
}

.badge-warning {
  background-color: #fef3c7 !important;
  color: #92400e !important;
}

.badge-danger {
  background-color: #fee2e2 !important;
  color: #991b1b !important;
}

Copy

Putting It All Together: A Complete Example
Here is a compact, combined stylesheet that applies a cohesive look using a modern blue brand color. Copy this entire block as a starting point and adjust the color values to match your brand.

/* ================================================
   GHL Dashboard - Complete Custom Styling
   Brand Color: #2563eb (adjust to your brand)
   ================================================ */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --brand: #2563eb;
  --brand-dark: #1d4ed8;
  --brand-light: #dbeafe;
  --sidebar-bg: #0c1929;
  --header-bg: #0f172a;
  --content-bg: #f1f5f9;
  --card-bg: #ffffff;
  --border: #e2e8f0;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
}

/* Font */
body, .page-wrapper, .left-sidebar, .topbar {
  font-family: 'Inter', sans-serif !important;
}

/* Sidebar */
.left-sidebar, .sidebar-nav {
  background-color: var(--sidebar-bg) !important;
}

.left-sidebar .sidebar-nav ul li a {
  color: #8ba3be !important;
  border-radius: 6px !important;
  margin: 2px 8px !important;
}

.left-sidebar .sidebar-nav ul li.active > a {
  background-color: var(--brand) !important;
  color: #fff !important;
}

/* Header */
.topbar {
  background-color: var(--header-bg) !important;
}

/* Content Area */
.page-wrapper {
  background-color: var(--content-bg) !important;
}

/* Cards */
.card {
  border: 1px solid var(--border) !important;
  border-radius: 10px !important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important;
}

/* Buttons */
.btn-primary, .btn-blue {
  background-color: var(--brand) !important;
  border-color: var(--brand) !important;
}

.btn-primary:hover, .btn-blue:hover {
  background-color: var(--brand-dark) !important;
}

/* Inputs */
.form-control:focus {
  border-color: var(--brand) !important;
  box-shadow: 0 0 0 3px rgba(37,99,235,0.1) !important;
}

Copy

Troubleshooting Common Issues
Styles not applying?
• Make sure you are using !important on your declarations. GHL's built-in styles have high specificity.

• Clear your browser cache or do a hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac).

• Check that the CSS is saved in the correct field under agency settings.

Styles broke after a GHL update?
• Open browser DevTools (F12) and inspect the affected element.

• Look for changed class names and update your selectors.

• GHL occasionally restructures its UI components, especially during major version updates.

CSS applies to places you did not intend?
• Use more specific selectors. Instead of styling all .btn elements, target .quick-actions .btn to limit scope.

• Use parent selectors to restrict where styles apply.

Need to find a specific element's class name?
• Right-click the element in your browser and select "Inspect."

• The DevTools Elements panel will highlight the HTML and show all applied classes.

• Copy the class name and use it in your custom CSS.

Final Thoughts
Element-by-element dashboard styling gives you precise control over how GoHighLevel looks for your team and clients. You do not have to change everything at once. Start with the highest-visibility elements (header, sidebar, buttons) and layer in additional customizations as needed.

Keep your CSS organized with comments, store a backup copy outside of GHL, and review your styles after platform updates. With a few well-chosen customizations, your dashboard will look like a purpose-built tool for your agency rather than an off-the-shelf product.

Get Started