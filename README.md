# MallSphere AI Powered Interactive Sales Deck

Interactive, non-linear browser sales deck for leasing, sponsorship and events. This repository is organized into a clean two-folder structure: `/frontend` for the React/Vite app and `/backend` for server logic.

## Project Summary

MallSphere is a demo interactive sales deck showcasing attractions, dining, retail and event spaces with modular components and a contact flow for lead capture.

## Features

- Non-linear section navigation
- Interactive attractions, dining, retail and events modules
- Contact modal and sponsorship conversion flow
- Tailwind CSS design system and Framer Motion interactions

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js (Express or minimal server)
- Tooling: npm, PostCSS, Vite

## Repository Layout

```
/frontend         # React app (Vite)
/backend          # Backend services
README.md
.gitignore
```

## Setup Instructions

Frontend

```bash
cd frontend
npm install
npm run dev
```

Backend

```bash
cd backend
npm install
npm start
```

## Build & Run

- Build frontend: `npm run build` (from `/frontend`)
- Preview frontend production build: `npm run preview` (from `/frontend`)
- Start backend: `npm start` (from `/backend`)

## Screenshots

Add screenshots to `/frontend/public` and reference here. (Placeholder)

## Deployment

1. Build the frontend and deploy static output to Vercel/Netlify or a static host.
2. Deploy `/backend` to any Node hosting provider (Heroku, Render, DigitalOcean App Platform) and configure environment variables.

## Notes

- Copy `.env.example` to `.env` in the appropriate folder and set production secrets.
- This repository intentionally excludes `node_modules` and build output.

---
Prepared by automation to produce a single, production-ready repository structure.
