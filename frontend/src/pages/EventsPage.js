import { Await, defer, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { customFetch } from "../util/customFetch";
import { Suspense } from "react";
import { GenericLoading } from "../components/GenericLoading";

export function EventsPage() {
  const fetchedEvents = useLoaderData();
  console.log("fetchedEvents : ", fetchedEvents)
  // allEvent is an unresolved promise
  const { allEvent } = fetchedEvents;
  
  /*
  By default route transaction only occour when loader computed.
  but if we want to show loading state on route transaction (if data isn't available)
  then we can use combination of 'Suspense' and "Await"
  */

  return (
    <Suspense fallback={<GenericLoading />}>
      <Await resolve={allEvent}>
      {/* After allEvent get resolved, we pass the resolved data as parameters to the function*/}
        {(fetchedEvents) => {
          console.log("Await fetchedEvents : ", fetchedEvents)
          const {data} = fetchedEvents 
          const {events} = data 
          return <EventsList events={events} />}}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const { customGet } = customFetch();
  return customGet("http://localhost:8080/events");
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
  console.log('eventsLoader is called')
  /*
   The idea behind defer is that we have a value that will eventually resolve 
   to another value, which is the definition of a promise.

   laodEvents() returns a promise
   */
  return defer({
    allEvent: loadEvents(),
  });
}
