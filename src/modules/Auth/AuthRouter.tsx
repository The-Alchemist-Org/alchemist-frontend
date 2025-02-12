import { lazy, useEffect } from 'react';
import {
  Route, Routes, Navigate, useNavigate,
} from 'react-router-dom';

const Login = lazy(() => import('./Login'));
const Signup = lazy(() => import('./Signup'));

export const AuthRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
