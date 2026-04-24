import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Forecasting } from '../pages/Forecasting';
import { AiReport } from '../pages/AiReport';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/forecasting', element: <Forecasting /> },
  { path: '/ai-report', element: <AiReport /> },
]);