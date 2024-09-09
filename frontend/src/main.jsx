import { createRoot } from "react-dom/client";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Auth/Register.jsx";
import Login from "./pages/Auth/Login.jsx";
import PrivateRoute from "./pages/Auth/PrivateRoute.jsx";
import Profile from './pages/user/Profile.jsx'
import "./index.css";
import Recomm from "./components/Recomm.jsx"

// Define routes
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public routes */}
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

       
      <Route path="/Recomm" element={<Recomm/>}/>
      
      {/* Private route */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile/>} />
      </Route>

      
    </Route>
  )
);

// Render the application
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
