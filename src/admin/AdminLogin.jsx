import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
    return regex.test(password);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(form.password)) {
      setError(
        "Password must be at least 8 characters and include 1 letter, 1 number, and 1 symbol."
      );
      return;
    }

    const res = await fetch(
      `http://localhost:5000/admin?username=${form.username}&password=${form.password}`
    );
    const data = await res.json();

    if (data.length > 0) {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/inquiry");

    } else {
      setError("Invalid username or password");
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
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
