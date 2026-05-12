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

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
