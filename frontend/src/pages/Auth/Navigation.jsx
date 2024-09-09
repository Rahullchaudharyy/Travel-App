import { AiOutlineHome, AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../redux/api/users';
import { logout } from '../../redux/features/auth/authSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error(error);
      toast.error('Logout failed. Please try again.');
    }
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo or Home Link */}
        <Link to="/" className="flex items-center text-2xl font-bold hover:text-yellow-300">
          <AiOutlineHome size={28} className="mr-2" />
          Home
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-6">
          <Link to="/Recomm" className="flex items-center text-lg hover:text-yellow-300">
            <MdOutlineLocalMovies size={24} className="mr-2" />
            Recommendations
          </Link>
        </div>

        {/* User Section */}
        <div className="relative flex items-center space-x-4">
          {userInfo ? (
            <div className="relative flex items-center">
              <button
                onClick={toggleDropDown}
                className="flex items-center text-lg font-semibold hover:text-yellow-300"
                aria-haspopup="true"
                aria-expanded={dropDownOpen}
              >
                <span>{userInfo.username}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ml-2 h-5 w-5 transition-transform ${dropDownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={dropDownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>

              {dropDownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg">
                  {userInfo.isAdmin && (
                    <li>
                      <Link to="/admin/movies/dashboard" className="block px-4 py-2 hover:bg-gray-100">
                        Dashboard
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                      Profile
                    </Link>
                  </li>

                  <li>
                    <button onClick={logoutHandler} className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <div className="flex space-x-5">
              <Link
                to="/login"
                className="flex items-center text-lg font-semibold hover:text-yellow-300"
                aria-label="Login"
              >
                <AiOutlineLogin size={24} className="mr-1" />
                LOGIN
              </Link>

              <Link
                to="/register"
                className="flex items-center text-lg font-semibold hover:text-yellow-300"
                aria-label="Register"
              >
                <AiOutlineUserAdd size={24} className="mr-1" />
                REGISTER
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
