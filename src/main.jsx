import './index.css';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import Home from './home.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Home />
    <Analytics />
  </>
);
