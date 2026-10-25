# Unique Digital Tech — Website

React 18 + Vite + Tailwind CSS 3 + React Router 6.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure
```
src/
  components/layout/    Navbar, Footer, Layout, ScrollToTop
  components/ui/        Button, Icon, SectionHeading, PageHero
  components/sections/  Reusable page sections
  data/site.js          ALL content (services, stack, metrics, contact)
  pages/                Home, About, Services, ServiceDetail, Contact, NotFound
```
Edit `src/data/site.js` to change services, numbers or contact details.
For Vercel/Netlify SPA routing, redirect all paths to `/index.html`.
