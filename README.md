# Hair Address Unisex Salon Website

A premium salon demo website built with React, Vite, Tailwind CSS, Framer Motion, React Router, and Lucide Icons.

## Project Structure

```text
hair-address-salon-website/
├── public/
├── src/
│   ├── components/
│   │   ├── BookingForm.jsx
│   │   ├── CTASection.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── MapSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── Services.jsx
│   │   ├── SpecialOffer.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhatsAppButton.jsx
│   ├── data/
│   │   ├── salonConfig.json
│   │   ├── services.json
│   │   └── testimonials.json
│   ├── pages/
│   │   ├── BookingPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── Home.jsx
│   │   └── ServicesPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default build command `npm run build`.
4. Use `dist` as the output directory.

### Netlify

1. Push the project to GitHub.
2. Create a new site from Git in Netlify.
3. Set build command to `npm run build`.
4. Set publish directory to `dist`.

## Notes

- Update `src/data/salonConfig.json` if you want to refine address details or map coordinates.
- Replace remote gallery images with salon-owned assets for a production handoff.
