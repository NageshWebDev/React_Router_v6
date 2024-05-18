import { redirect, useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import { customFetch } from "../util/customFetch";

export function EventDetailPage() {
  const fetchedEventDetail = useRouteLoaderData("eventDetailId");
  console.log("fetchedEventDetail : ", fetchedEventDetail);
  return (
    <>
      <EventItem event={fetchedEventDetail.data.event} />
    </>
  );
}

export async function eventDetailLoader({ request, params }) {
  console.log("Event Detail page loader");
  const id = params.eventId;
  const { customGet } = customFetch();
  const data = await customGet(`http://localhost:8080/events/${id}`);
  console.log("Loader Data:", data);
  return data;
}

export async function eventDetailAction({ request, params }) {
  console.log("🚀 ~ eventDetailAction ~ request:", request);
  const id = params.eventId;
  const { customDelete } = customFetch();
  await customDelete(`http://localhost:8080/events/${id}`);
  return redirect("/events");
}
