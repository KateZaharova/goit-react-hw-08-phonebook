//import styled from "styled-components";
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

/*
export const Layout = styled.div`
    display:flex;
    flex-direction: column;
    gap: 20px;
    max-width:1200px;
    margin: 0 auto;
    padding:0 15px;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`;*/