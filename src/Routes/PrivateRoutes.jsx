import UseAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = UseAuth();

  return (
    <div>
      {Object.keys(auth.user).length > 0 ? (
        <main className="flex items-center justify-center bg-deepDark py-8">
          <div className="max-w-[1368px] flex-1 container">
            <Outlet />
          </div>
        </main>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRoutes;
