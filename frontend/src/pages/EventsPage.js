import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export function EventsPage() {
  const fetchedEvents = useLoaderData();
  if (!fetchedEvents.success) {
    return <p>{fetchedEvents.message}</p>;
  }

  return <EventsList events={fetchedEvents.data.events} />;
}

/*
  When loader are executed ?

  The loader for the page will be called, right when we start navigating to that page
  NOT after the page component has been rendered.

  React router will wait for the data to be fetched, i.e. loader to be resolved,
  then renders the page with the fetched data.

  Downside there is a delay in route transition,
  where it looks to the user as if nothing is happening 
  
  ! can't use hooks in loader function
 */
export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw {
      success: false,
      data: {},
      message: "Could NOT fetch events.",
    };
  } else {
    return {
      success: true,
      data: await response.json(),
      message: "Events are fetched.",
    };
  }
}
