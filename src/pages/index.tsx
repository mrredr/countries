import { getAuthStateSelector } from "enteties/auth";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAppSelector } from "shared/hooks";
import { NotFoundLayout } from "shared/ui/layouts";
import { CatalogPage } from "./catalog";
import { DetailsPage } from "./details";
import { LoginPage } from "./login";

export const Routing = () => {
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
};

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAppSelector(getAuthStateSelector);
  const location = useLocation();

  if (auth === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
