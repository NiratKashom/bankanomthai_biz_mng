import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { ProtectRoute } from "./ProtectRoute";
import Login from "@/pages/Login";
import Expense from "@/pages/Expense";
import Storefront from "@/pages/Storefront";
import Home from "@/pages/Home";
import Report from "@/pages/Report";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    // {
    //   path: "/about-us",
    //   element: <div>About Us</div>,
    // },
    {
      path: "/report",
      element: <Report />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/expense",
          element: <Expense />,
        },
        {
          path: "/storefront",
          element: <Storefront />,
        },
        {
          path: "/report",
          element: <Report />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <Login />,
    },
  ];

  return (
    <RouterRoutes>
      {routesForPublic.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {!token &&
        routesForNotAuthenticatedOnly.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      {routesForAuthenticatedOnly.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
          {route.children.map((child) => (
            <Route key={child.path} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
      <Route path="*" element={<div>Not found Ja</div>} />
    </RouterRoutes>
  );
};

export default Routes;
