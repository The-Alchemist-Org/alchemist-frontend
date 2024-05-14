import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Overview = lazy(() => import('./Overview'));

export const SearchRouter = () => (
  <Routes>
    <Route path="/" element={<Suspense><Overview /></Suspense>} />
    <Route path="*" element={<Suspense><Navigate to="/" replace /></Suspense>} />
  </Routes>
);
