import { useNavigate } from "react-router-dom";

function LegalBackButton({ to = "/contact-us", label = "Back" }) {
  const navigate = useNavigate();

  return (
    <button
      className="legal-back-btn"
      onClick={() => navigate(to)}
      aria-label={`Back to ${label}`}
    >
      <svg
        className="back-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{label}</span>
    </button>
  );
}

export default LegalBackButton;
