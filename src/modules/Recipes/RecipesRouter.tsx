import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Overview = lazy(() => import('./Overview'));
const RecipesModifier = lazy(() => import('./RecipesModifier'));

export const RecipesRouter = () => (
  <Routes>
    <Route path="/" element={<Suspense><Overview /></Suspense>} />
    <Route path="create" element={<Suspense><RecipesModifier /></Suspense>} />
    <Route path="/:id">
      <Route path="edit" element={<Suspense><RecipesModifier isEdit /></Suspense>} />
    </Route>
    <Route path="*" element={(<Suspense><Navigate to="/recipes" replace /></Suspense>)} />
  </Routes>
);
