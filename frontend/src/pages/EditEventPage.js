import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export function EditEventPage() {
  // const fetchedData = useLoaderData(); // looks for the closest loader data
  const fetchedData = useRouteLoaderData("event-detail");
  console.log("🚀 ~ EditEventPage ~ fetchedData:", fetchedData);
  return <EventForm event={fetchedData.data.event} />;
}
