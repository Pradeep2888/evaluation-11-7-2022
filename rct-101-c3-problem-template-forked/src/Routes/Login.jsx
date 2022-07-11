import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const auth = useContext(AppContext);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success");
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/dashboard");
      })
      .catch((err) => {});
  }

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="login-form">
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              value={formState.email}
              onChange={handleChange}
              name="email"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={formState.password}
              onChange={handleChange}
              name="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
