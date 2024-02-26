import { useState } from "react";
import { NavLink } from "react-router-dom";
import { resetPasswordViaEmail } from "../utils/auth";

const ResetPassword = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSuccess(false);
    setError("");

    try {
      await resetPasswordViaEmail(email);
      setSuccess(true);
      reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setEmail("");
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Reset Password
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Reset Password"}
              </button>

              <div className="text-right">
                No Account?
                <NavLink to={"/register"} className="hover:underline">
                  Register
                </NavLink>
              </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {success && (
              <p className="text-green-500">
                Sent Password reset link in your email.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
