import { Suspense, lazy } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

const Auth = lazy(() => import('./Auth'));
const ProtectedRouter = lazy(() => import('./ProtectedRouter'));

export const Router = () => (
  <BrowserRouter>
    <Suspense>
      <Routes>
        <Route index element={<Navigate to="/auth/login" replace />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/*" element={<ProtectedRouter />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
