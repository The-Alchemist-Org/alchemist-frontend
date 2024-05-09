import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from 'context';
import { DashboardLayout, Loading } from 'components';

export default () => {
  const { isLoggedIn, loadingUser, hasToken } = useAuthContext();

  if (loadingUser && hasToken()) {
    return <div className="h-screen flex items-center justify-center"><Loading /></div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <Routes>
      <Route path="*" element={<DashboardLayout />}>
        <Route path="/*" element={<Suspense><div> This is home</div></Suspense>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
};
