import { createBrowserRouter, Navigate } from 'react-router-dom';
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
    ],
  },
]);

export default router;