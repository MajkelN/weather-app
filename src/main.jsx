import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home'
import Place from './routes/Place'
import ErrorPage from "./routes/Error";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/place/:namePlace",
    element: <Place />,
    errorElement: <ErrorPage />,
    loader: async ({ params }) => {
        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${params.namePlace}&days=2&aqi=no&alerts=no`);
        const weather = await res.json();

        if (res.status === 400) {
          throw new Response(weather.error.message, { status: res.status, statusText:  weather.error.message });
        }
        return weather;
    },
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
