import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainRouting from './routes/MainRouting';

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem('accessToken');

    if ((path === '/admin' || path === '/admin/clients') && !token) {
      navigate('/admin/login');
    } else if (token && path === '/admin/login' || path === '/admin') {
      navigate('/admin/clients');
    }
  }, [location, navigate]);

  return <MainRouting />;
};
