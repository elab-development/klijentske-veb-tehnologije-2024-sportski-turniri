import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", "Dusan");
    navigate("/profile");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Prijava korisnika</h1>

      <button
        onClick={handleLogin}
        style={{
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
