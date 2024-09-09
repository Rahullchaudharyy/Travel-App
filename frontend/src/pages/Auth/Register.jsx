// import { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCredentials } from '../../redux/features/auth/authSlice';
// import { toast } from 'react-toastify';
// import { useRegisterMutation } from '../../redux/api/users';

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [ConfirmPassword, setConfirmPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [register, { isLoading }] = useRegisterMutation();
//   const { userInfo } = useSelector((state) => state.auth);
//   const { search } = useLocation();
//   const sp = new URLSearchParams(search);
//   const redirect = sp.get('redirect') || '/';

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect);
//     }
//   }, [navigate, redirect, userInfo]);

//   const SubmitHandler = async (e) => {
//     e.preventDefault();
//     if (!username || !email || !password) {
//       toast.error('Please fill all the fields');
//       return;
//     }

//     if (password !== ConfirmPassword) {
//       toast.error("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await register({ username, email, password }).unwrap();
//       await dispatch(setCredentials({ ...response }));
//       navigate(redirect);
//       toast.success("Account Created Successfully!");
//     } catch (error) {
//       console.log(error);
//       toast.error(error.data.message);
//     }
//   };

//   return (
//     <div>
//       <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
//         <form onSubmit={SubmitHandler}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="username">Username:</label>
//             <input
//               type="text"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="password">Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Confirm Password:</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={ConfirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             disabled={isLoading}
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Register
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p className="text-gray-600">Already have an account?
//             <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} className="text-blue-500 hover:underline ml-1">
//               Log in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { useRegisterMutation } from '../../redux/api/users';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState({}); // State for user location

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  // Get user's location when component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          toast.error("Unable to retrieve location.");
          console.error(error);
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  }, []);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      toast.error('Please fill all the fields');
      return;
    }
  
    if (password !== ConfirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
  
    try {
      // Send only required user data to the API
      const response = await register({ username, email, password }).unwrap();
      
      // Dispatch both userInfo and location to Redux
      dispatch(setCredentials({ userInfo: response, location }));
      
      navigate(redirect);
      toast.success("Account Created Successfully!");
    } catch (error) {
      console.log(error); // Log the full error object for debugging
  
      // Check if error.data exists and has a message property
      const errorMessage = error?.data?.message || 'An unexpected error occurred. Please try again.';
      toast.error(errorMessage);
    }
  };
  
  

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={SubmitHandler}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Already have an account?
            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} className="text-blue-500 hover:underline ml-1">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
