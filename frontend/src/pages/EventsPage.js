import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { customFetch } from "../util/customFetch";

export function EventsPage() {
  const fetchedEvents = useLoaderData();
  console.log('fetchedEvents : ', fetchedEvents)
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
  
  !! can't use hooks in loader function

  Data returned by loader is available to the current component.
  Data returned by loader is NOT available to the parent of current component.
  Data returned by loader is also available to the childern component.
  We could use fetched events data from useLoaderData hook, inside EventsList component.
 */
export function eventsLoader() {
  const {customGet}= customFetch()
  return customGet("http://localhost:8080/events")
}
