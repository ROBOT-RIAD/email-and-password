import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
  const [registrerror, setregistrerror] = useState("");
  const [success, setsuccess] = useState("");

  const handleregistr = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Reset error and success messages
    setregistrerror("");
    setsuccess("");

    // Validation checks
    if (!email || !password) {
      setregistrerror("Please enter both email and password");
      return;
    }
    if (password.length < 6) {
      setregistrerror("Password must be at least 6 characters long");
      return;
    }

    // Firebase createUserWithEmailAndPassword
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setsuccess("User created successfully");

        
      })
      .catch((error) => {
        setregistrerror(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        <form onSubmit={handleregistr} className="space-y-4">
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
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <span>show</span>
          </div>

          <div>
            <input
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
              type="submit"
              value="Register"
            />
          </div>
        </form>       
        {registrerror && <p className="text-red-500">{registrerror}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <p> already have an account</p>
      </div>
    </div>
  );
};

export default Register;
