// Base URL of the backend API.
// Override by setting REACT_APP_API_URL in frontend/.env (see .env.example).
const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";

export default API_BASE_URL;
