import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export function EventDetailPage() {
  // const fetchedEvents = useLoaderData();
  const fetchedEvents = useRouteLoaderData("event-detail");
  console.log("🚀 ~ EventDetailPage ~ fetchedEvents:", fetchedEvents);
  return (
    <>
      <EventItem event={fetchedEvents.data.event} />
    </>
  );
}

export async function eventDetailLoader({ request, params }) {
  console.log("🚀 ~ eventDetailLoader ~ request:", request);
  console.log("🚀 ~ eventDetailLoader ~ params:", params);
  const id = params.eventId;
  console.log("🚀 ~ eventDetailLoader ~ id:", id);

  const response = await fetch("http://localhost:8080/events/" + id);
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

export async function eventDetailAction({ request, params }) {
  console.log("🚀 ~ eventDetailAction ~ request:", request);
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!response.ok) {
    throw {
      success: false,
      data: {},
      message: "Could NOT delete events.",
    };
  } else {
    return redirect("/events");
  }
}
