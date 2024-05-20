// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { EditEventPage } from "./pages/EditEventPage";
import {
  eventDetailAction,
  eventDetailLoader,
  EventDetailPage,
} from "./pages/EventDetailPage";
import { eventsLoader, EventsPage } from "./pages/EventsPage";
import { HomePage } from "./pages/HomePage";
import { NewEventPage } from "./pages/NewEventPage";
import { EventRootLayout } from "./pages/EventRootLayout";
import { Error } from "./pages/Error";
import { formAction } from "./components/EventForm";
import { Newsletter, action as newsletterAction } from "./pages/Newsletter";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: formAction,
          },
          {
            id: "eventDetailId",
            path: ":eventId",
            loader: eventDetailLoader, // This loader data is available to childern too, remember childern need to use useRouteLoaderData(<id>), where id is "eventDetailId"
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDetailAction,
              },
              { path: "edit", element: <EditEventPage />, action: formAction },
            ],
          },
          
        ],
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
