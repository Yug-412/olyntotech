import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminInquiry.css";

const AdminInquiry = () => {
  const navigate = useNavigate();

  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  /* 🔐 ADMIN AUTH CHECK */
  useEffect(() => {
    const isAdmin = localStorage.getItem("adminAuth");
    if (!isAdmin) {
      navigate("/admin/login", { replace: true });
    }
  }, [navigate]);

  /* 📥 FETCH INQUIRIES (MONGODB) */
  useEffect(() => {
    fetch("http://localhost:5000/api/inquiries")
      .then((res) => res.json())
      .then((data) => {
        setInquiries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  /* 🗑️ DELETE INQUIRY */
  const handleRemove = async (id) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;

    await fetch(`http://localhost:5000/api/inquiries/${id}`, {
      method: "DELETE",
    });

    setInquiries((prev) => prev.filter((item) => item._id !== id));
  };

  /* 🚪 LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login", { replace: true });
  };

  /* 📅 DATE FORMAT */
  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="admin-inquiry-page fade-in">
      <div className="admin-header">
        <div>
          <h2>Client Inquiries</h2>
          <span>{inquiries.length} Total</span>
        </div>

        <button className="remove-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {loading ? (
        <p className="loading-text">Loading inquiries...</p>
      ) : inquiries.length === 0 ? (
        <p className="empty-text">No inquiries found</p>
      ) : (
        <div className="table-wrapper slide-up">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {inquiries.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>

                  <td>
                    <span className="message-cell" title={item.message}>
                      {item.message}
                    </span>
                  </td>

                  <td>{formatDate(item.createdAt)}</td>

                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminInquiry;
