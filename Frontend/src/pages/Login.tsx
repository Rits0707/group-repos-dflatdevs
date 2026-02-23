import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const mockRole = "Applicant"; // change manually to test

  const handleLogin = () => {
    if (mockRole === "Applicant") navigate("/applicant");
    // if (mockRole === "Office") navigate("/office");
    // if (mockRole === "Reviewer") navigate("/reviewer");
  };

  return (
    <div>
      <h1>Membee Login (Mock)</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}