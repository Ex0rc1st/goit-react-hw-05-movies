import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import { Suspense } from 'react';
import { Layout } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
