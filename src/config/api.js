const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://olynto-backend.onrender.com";

export default API_URL;
