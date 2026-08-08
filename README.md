# School Management System (MERN-style, MySQL)

A student registration and fee management system for a school administration, built as a university project in 2022. An admin logs in, registers students, generates monthly fee challans (vouchers) per class, records payments, and prints challans.

## Features

- Admin login with JWT stored in an httpOnly cookie; passwords hashed with bcrypt
- Student registration with full personal/guardian details
- View and edit student records in an editable table
- Monthly fee challan generation per class, with unpaid balance carried forward from the previous month
- View and edit fee records, mark challans as paid
- Print challans for a class and issue date (via `react-to-print`)

## Tech stack

| Layer    | Technology |
|----------|------------|
| Frontend | React 17 (Create React App), React Router 6, Material-UI v4, material-table, Axios |
| Backend  | Node.js, Express 4, `jsonwebtoken`, `bcryptjs` |
| Database | MySQL (via the `mysql` driver) |

## Project structure

```
backend/
  app.js              # Express app entry point
  config.js           # MySQL connection (from env vars)
  helper/validate.js  # JWT validation + admin check middleware
  routers/user.js     # /register, /login
  routers/admin.js    # student + fee CRUD (JWT-protected)
frontend/
  src/apiConfig.js        # API base URL (REACT_APP_API_URL)
  src/App/App.js          # routes
  src/component/          # Login, Header, Sidebar
  src/PagesLayoutAdmin/   # dashboard pages, add student, print challan
  src/AdminFoam/          # editable student/fee tables, fee form
```

## Prerequisites

- Node.js (the frontend uses `react-scripts` 4, which predates Node 17's OpenSSL changes — Node 16 is the safest choice; on newer Node you may need `NODE_OPTIONS=--openssl-legacy-provider`)
- MySQL server

## Database setup

The original SQL schema file is not included in the repository. The code expects a MySQL database with three tables:

- `adminRegister` — `name`, `password` (bcrypt hash), `isAdmin`
- `studentinfo` — `Student_name`, `Student_id` (format `S<number>`), `Class`, `gender`, `Age`, `B_form`, `Religion`, `Nationality`, `DOB`, `POB`, `Address`, `DOA`, `F_name`, `F_contact`, `F_occupation`, `F_office_address`, `F_nationality`, `M_name`, `M_contact`, `G_name`, `G_contact`, `G_relation`
- `voucher` — `Challan_number`, `Student_id`, `Class`, `Issue_date`, `Due_date`, `Anual_charge`, `Addmision_fee`, `Tution_fee`, `Exam_fee`, `Lab_fee`, `Extra_fee`, `TotalAmount`, `Feestatus`, `recievedBy`

Column names (including their original spellings) must match exactly; several inserts rely on column order.

## Running (intended usage)

Backend:

```bash
cd backend
npm install
cp .env.example .env   # fill in DB credentials and a JWT secret
npm start              # runs on PORT (default 5000) via nodemon
```

Frontend:

```bash
cd frontend
npm install
cp .env.example .env   # optional; defaults to http://localhost:5000/api/v1
npm start              # CRA dev server on port 3000
```

Create the first admin account by POSTing to the API, then log in through the UI:

```bash
curl -X POST http://localhost:5000/api/v1/register \
  -H "Content-Type: application/json" \
  -d '{"name": "admin", "password": "yourpassword", "isAdmin": true}'
```

## Configuration

All backend configuration is via environment variables (see `backend/.env.example`): `API_URL`, `PORT`, `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_DATABASE`, `JWT_SECRET`. The frontend reads `REACT_APP_API_URL` (see `frontend/.env.example`).

## API overview

Base path: `API_URL` (default `/api/v1`). All `/admin/*` routes require a valid `accessToken` cookie with `isAdmin: true`.

| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/register` | Create an admin account (unauthenticated — see limitations) |
| POST | `/login` | Log in; sets `accessToken` cookie |
| GET | `/admin/getStudent` | List students |
| POST | `/admin/addStudentInfo` | Add a student (IDs auto-generated as `S<n>`) |
| PUT | `/admin/updateStudent` | Update a student |
| GET | `/admin/getFeeDetails` | List all fee challans |
| POST | `/admin/addFeeInfo` | Generate monthly challans for a class |
| POST | `/admin/getFeeDetailsByClass` | Challans for a class + issue date |
| POST | `/admin/getChallan` | Single challan by number |
| PUT | `/admin/updateFeeDetails` | Update a challan / mark paid |

## Known limitations

- The `/register` endpoint is unauthenticated, so anyone who can reach the API can create an admin account. It exists to bootstrap the first admin; disable or protect it in any real deployment.
- The SQL schema file is not included; tables must be created manually to match the columns listed above.
- Dependencies date from early 2022 (React 17, `react-scripts` 4, Express 4, `mysql` 2) and were not upgraded during cleanup; `npm install`/`npm start` were not re-verified on current toolchains, so the run instructions above describe the intended usage.
- No automated tests.
- No delete operations for students or challans; the department management feature was never completed and its dead code has been removed.
- JWT cookies are issued without an expiry (`maxAge` is commented out) and without the `secure`/`sameSite` flags — acceptable for local development only.
- CORS is locked to `http://localhost:3000`.

## Project status

Archival university project (built March 2022). Cleaned up in 2026: directories lowercased, hardcoded URLs and the JWT secret moved to environment variables, string-concatenated SQL parameterized, dead code removed, and this README rewritten. Not actively maintained.
