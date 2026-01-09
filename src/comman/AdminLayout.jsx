const AdminLayout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "24px"
      }}
    >
      {children}
    </div>
  );
};

export default AdminLayout;
