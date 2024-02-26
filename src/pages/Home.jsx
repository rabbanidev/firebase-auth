import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0">
          <div className="p-6">
            <Link
              to="/login"
              className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-5"
            >
              Register
            </Link>
            <Link
              to="/reset-password"
              className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Reset
            </Link>
            <Link
              to="/profile"
              className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-5"
            >
              Profile / Protected Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
