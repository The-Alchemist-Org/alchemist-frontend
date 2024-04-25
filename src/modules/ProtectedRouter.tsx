import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from 'context';

export default () => {
  const { isLoggedIn, loadingUser, hasToken } = useAuthContext();

  if (loadingUser && hasToken()) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <Routes>
      {
        // TODO: Add a layout component to the element of * route
      }
      <Route path="*" element={<Suspense><div /></Suspense>}>
        <Route path="home/*" element={<Suspense><div> This is home</div></Suspense>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
};
