import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginSecret, setLoginSecret] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupSecret, setSignupSecret] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username: loginUsername, secret: loginSecret })
      .then((r) => props.onAuth({ ...r.data, secret: loginSecret }))
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username: signupUsername,
        secret: signupSecret,
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .then((r) => props.onAuth({ ...r.data, secret: signupSecret }))
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{showLoginForm ? "Log in" : "Sign up"}</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={showLoginForm ? onLogin : onSignup}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={showLoginForm ? loginUsername : signupUsername}
                onChange={(e) => showLoginForm ? setLoginUsername(e.target.value) : setSignupUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={showLoginForm ? loginSecret : signupSecret}
                onChange={(e) => showLoginForm ? setLoginSecret(e.target.value) : setSignupSecret(e.target.value)}
              />
            </div>
            {!showLoginForm && (
              <>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-800 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {showLoginForm ? "Log in" : "Sign up"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm">
            {showLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={toggleForm} className="font-medium text-orange-800 hover:text-orange-700">
              {showLoginForm ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
