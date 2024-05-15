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
  const UserSettingsRouter = lazy(() => import('./UserSettings'));
  const SearchRouter = lazy(() => import('./Search'));
  const RecipesRouter = lazy(() => import('./Recipes'));

  return (
    <IngredientsContextProvider>
      <Routes>
        <Route path="*" element={<DashboardLayout />}>
          <Route path="home/*" element={<Suspense><SearchRouter /></Suspense>} />
          <Route path="recipes/*" element={<Suspense><RecipesRouter /></Suspense>} />
          <Route path="settings/drink-config/*" element={<Suspense><DrinkConfigRouter /></Suspense>} />
          <Route path="settings/user/*" element={<Suspense><UserSettingsRouter /></Suspense>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </IngredientsContextProvider>
  );
};
