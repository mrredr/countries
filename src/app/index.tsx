import { CatalogPage } from "pages/catalog";
import { DetailsPage } from "pages/details";
import { LoginPage } from "pages/login";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "shared/hooks/use-auth";
import { NotFoundLayout } from "shared/ui/layouts";
import "./App.css";

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <CatalogPage />
          </RequireAuth>
        }
      />
      <Route
        path="/details/:alphaCode"
        element={
          <RequireAuth>
            <DetailsPage />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundLayout />} />
    </Routes>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
