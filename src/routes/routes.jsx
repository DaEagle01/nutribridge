import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import AllSupplies from '../pages/AllSupplies/AllSupplies';
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Login from '../pages/Login/Login';
import ViewSupplyDetails from '../pages/ViewSupplyDetails/ViewSupplyDetails';
import Register from '../pages/Signup/Register';
import DashboardLayout from '../components/layout/DashboardLayout';
import Supplies from '../pages/Dashboard/Supplies/Supplies';
import CreateSupply from '../pages/Dashboard/CreateSupply/CreateSupply';
import Leaderboard from '../pages/Leaderboard/Leaderboard';
import Community from '../pages/Community/Community';
import CreateTestimonial from '../pages/Dashboard/CreateTestimonial/CreateTestimonial';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "supplies",
        element: <AllSupplies />
      },
      {
        path: "supplies/:id",
        element: <ViewSupplyDetails />
      },
      {
        path: "leaderboard",
        element: <Leaderboard />
      },
      {
        path: "community",
        element: <Community />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
      {
        path: "create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
]);

export default router;
