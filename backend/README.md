# Backend — Yucatan Cenote Cave Maps

This is the NestJS backend for the Yucatan Cenote Cave Maps project. It provides a REST API for cenote data, including cave map image URLs (mocked as S3 links).

## Features
- REST API for cenote list and details
- Mock database with cenote info and image URLs
- Ready for future integration with AWS S3

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run start:dev
   ```
3. API available at [http://localhost:3001/cenotes](http://localhost:3001/cenotes)

## API Endpoints
- `GET /cenotes` — List all cenotes
- `GET /cenotes/:id` — Get details for a specific cenote

## Customization
- Add or edit cenote data in `src/cenotes/cenotes.service.ts`
- Update API logic in `src/cenotes/cenotes.controller.ts`

---
See the main `README.md` for project-wide instructions.
