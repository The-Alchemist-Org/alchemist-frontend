import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { IngredientsContextProvider, useAuthContext } from 'context';
import { DashboardLayout, Loading } from 'components';

export default () => {
  const { isLoggedIn, loadingUser, hasToken } = useAuthContext();

  if (loadingUser && hasToken()) {
    return <div className="h-screen flex items-center justify-center"><Loading /></div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  const DrinkConfigRouter = lazy(() => import('./DrinkConfigSettings'));

  return (
    <IngredientsContextProvider>
      <Routes>
        <Route path="*" element={<DashboardLayout />}>
          <Route path="home/*" element={<Suspense><div> This is home</div></Suspense>} />
          <Route path="settings/drink-config/*" element={<Suspense><DrinkConfigRouter /></Suspense>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </IngredientsContextProvider>
  );
};
