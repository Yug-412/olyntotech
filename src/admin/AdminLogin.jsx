import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  // Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: form.username.trim(),
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Login success
      localStorage.setItem("adminAuth", "true");
      localStorage.setItem("adminId", data.adminId);

      navigate("/admin/inquiry");

    } catch (err) {
      setError(err.message || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-modal">
      <form className="admin-card" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Admin username"
          value={form.username}
          onChange={handleChange}
          autoComplete="username"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
