import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const UserModifier = lazy(() => import('./UserModifier'));

export const UserSettingsRouter = () => (
  <Routes>
    <Route path="/" index element={<UserModifier />} />
    <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
);
