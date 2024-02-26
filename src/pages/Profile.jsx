import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { logout } from "../utils/auth";

const Profile = () => {
  const navigate = useNavigate();
  const { isLoading, user } = useAuth();

  const handleLogout = async () => {
    logout();
    navigate("/login");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="m-2">
      <p>Profile Page </p>
      <p>Email: {user?.email}</p>
      <button
        className="px-5 text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm  py-2.5 text-center"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
