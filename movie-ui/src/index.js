import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ExplorePage from './pages/ExplorePage';
import DetailsPage from './pages/DetailsPage';
import SearchPage from './pages/SearchPage';
import TicketBookingPage from './pages/TicketBookingPage';
import LocationPage from './pages/LocationPage';
import ContactUsPage from './pages/ContactUsPage';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home /> // Provided the element for the child route
            },
            {
                path: ':explore', // Updated path to 'explore'
                element: <ExplorePage />
            },
            {
               path: ':explore/:id',
               element : <DetailsPage/>
            },
            {
              path : "search",
              element : <SearchPage/>
            },
            {
              path : "contact",
              element : <ContactUsPage />
            },
            {
              path : "locations",
              element : <LocationPage />
            },
            {
              path : "book-online",
              element : <TicketBookingPage />
            }
        ]
    }
]);
export default router;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();