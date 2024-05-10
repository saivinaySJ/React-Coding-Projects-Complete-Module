import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormData() {
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("email", "saivinay130@gmail.com");
    localStorage.setItem("password", "croma@1234");
    const emailData = localStorage.getItem("email");
    const passwordData = localStorage.getItem("password");

    if (formData.email === emailData && formData.password === passwordData) {
      navigate("/Home");
    }
  }
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default FormData;
