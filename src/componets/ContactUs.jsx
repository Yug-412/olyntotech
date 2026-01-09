import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://olynto-backend.onrender.com/api/inquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌ Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-overlay"></div>

        <div className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Speak directly with our AI Architects and start building smarter
            systems.
          </p>

          <form className="contact-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Write your message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* ================= OUR LOCATION ================= */}
      <section className="location-section">
        <div className="location-container">
          <div className="location-info">
            <h2>Our Location</h2>

            <div className="location-card">
              <h4>Registered Office</h4>
              <p>
                140 E Broadway
                <br />
                Suite 25
                <br />
                Jackson, WY 83001
              </p>

              <div className="location-hours">
                <span>Office Hours</span>
                <strong>9:00 AM – 6:00 PM</strong>
              </div>
            </div>
          </div>

          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.105525742055!2d-110.75985329999999!3d43.479268100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53531a42de40e725%3A0xa6f4cba91e424240!2s140%20E%20Broadway%20Ave%20%2325%2C%20Jackson%2C%20WY%2083001%2C%20USA!5e0!3m2!1sen!2sin!4v1767610366362!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
