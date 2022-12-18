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
          <AuthRedirect>
            <CatalogPage />
          </AuthRedirect>
        }
      />
      <Route
        path="/details/:alphaCode"
        element={
          <AuthRedirect>
            <DetailsPage />
          </AuthRedirect>
        }
      />
      <Route
        path="/login"
        element={
          <AuthRedirect redirectUrl="/" authRequired={false}>
            <LoginPage />
          </AuthRedirect>
        }
      />
      <Route path="*" element={<NotFoundLayout />} />
    </Routes>
  );
};

function AuthRedirect({
  children,
  redirectUrl = "/login",
  authRequired = true,
}: {
  children?: JSX.Element;
  redirectUrl?: string;
  authRequired?: boolean;
}) {
  const auth = useAppSelector(getAuthStateSelector);
  const location = useLocation();

  if ((auth === null && authRequired) || (auth !== null && !authRequired)) {
    return <Navigate to={redirectUrl} state={{ from: location }} replace />;
  }

  return children ?? null;
}
