import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './pages/login';
import './assets/reset.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Login />
    </StrictMode>
);
