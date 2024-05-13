import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const DrinkConfigModifier = lazy(() => import('./DrinkConfigModifier'));

export const DrinkConfigRouter = () => (
  <Routes>
    <Route path="/" index element={<DrinkConfigModifier />} />
    <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
);
