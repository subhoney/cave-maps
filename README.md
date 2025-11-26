# Yucatan Cenote Cave Maps

This project displays cave maps for cenotes in the Yucatan region of Mexico, focusing on Playa del Carmen and Tulum. It features a React frontend and a NestJS backend, with mock integration for S3-hosted cave map images.

## Features
- Interactive list of cenotes with cave map images
- Bio section for notable cave diver Roberto Castillo
- Dive Rite-inspired color theme and style
- Backend API serving cenote data and image URLs

## Structure
- `frontend/` — React app for user interface
- `backend/` — NestJS API for cenote data
- `img/` — Source images (moved to frontend/public/img for serving)

## Local Development
1. Install dependencies in both `frontend` and `backend`:
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```
2. Start the backend:
   ```sh
   npm run start:dev
   ```
3. Start the frontend:
   ```sh
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment
- Designed for future AWS hosting (S3 for frontend, ECS/Lambda for backend)

## Credits
- Cave diver bio: Roberto Castillo
- Dive Rite color theme

---
See `frontend/README.md` and `backend/README.md` for more details on each part.
