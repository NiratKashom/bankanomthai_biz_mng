import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { ProtectRoute } from "./ProtectRoute";
import Login from "@/pages/Login";
import Expense from "@/pages/Expense";
import Storefront from "@/pages/Storefront";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
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
          element: <div>User Home Page</div>,
        },
        {
          path: "/expense",
          element: <Expense />,
        },
        {
          path: "/storefront",
          element: <Storefront />,
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
            <Route
              key={child.path}
              path={child.path}
              element={child.element}
            />
          ))}
        </Route>
      ))}
      <Route path="*" element={<div>Not found Ja</div>} />
    </RouterRoutes>
  );
};

export default Routes;
