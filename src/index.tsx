import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './routes/ErrorPage';
import { ToDo } from './routes/ToDo';
import { Root } from './routes/Root';
import { Kanban } from './components/Kanban/Kanban';
import { Widgets } from './components/Widgets/Widgets';
import { Calendar } from './components/Calendar/Calendar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Widgets",
        element: <Widgets />,
      },
      {
        path: "to-do",
        element: <ToDo />,
      },
      {
        path: "kanban",
        element: <Kanban />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
