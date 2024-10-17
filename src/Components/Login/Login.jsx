import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Reset error and success messages
    setLoginError("");
    setSuccess("");

    // Validation
    if (!email || !password) {
      setLoginError("Please enter both email and password");
      return;
    }

    // Firebase signInWithEmailAndPassword
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Login successful");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = document.getElementById("email").value;
    if (!email) {
      setLoginError("Please enter your email to reset password");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccess("Password reset email sent");
        setLoginError("");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <div>
            <input
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
              type="submit"
              value="Login"
            />
          </div>
        </form>

        <p>
          <a
            onClick={handleForgetPassword}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Forgot password?
          </a>
        </p>

        {loginError && <p className="text-red-500">{loginError}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <p>
          New to this website? Please{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
