# Majornomics Backend

This is the backend API for Majornomics. It provides endpoints for program data, recommendations, universities, and user interactions. The API supports the frontend by exposing structured, queryable data related to postsecondary programs, costs, and labor-market metrics.

The backend is built with Node.js, Express, and TypeScript, with MongoDB as the data store.

- The frontend repo can be found here: https://github.com/NeftalemMG/Majornomics.git

---

## Key Features

- University program data retrieval
- Recommendation endpoint
- Seed data loading for initial development
- Modular route and controller structure

---

## Tech Stack

- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- Nodemon (development)

---

## Running the Project

Install dependencies:
**npm install**



Start development server:
**npm run dev**


Start production server:
**npm run start**


---

## Environment Variables

Create a `.env` file:

- MONGODB_URI= <"your-mongodb-connection">
- PORT=5000


---

## API Overview

### University Routes
- `GET /api/unis/all`
- `POST /api/unis/find`
- `POST /api/unis/comp`
- `POST /api/unis/search`

### Recommendation Routes
- `POST /api/recommendations`
  - Returns program suggestions based on input criteria.

### Seed Data Routes
- `GET /api/seed`
  - Populates database with development data.

### User Routes
- `GET /api/users`

---

## Notes

- `dummyData.ts` is used only during development.
- The backend is designed to be stateless and API-driven, with no server-side rendering.