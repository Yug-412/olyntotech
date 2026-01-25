import { Outlet } from "react-router-dom";

const LegalLayout = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "80px 0",
      }}
    >
      <Outlet />
    </main>
  );
};

export default LegalLayout;
