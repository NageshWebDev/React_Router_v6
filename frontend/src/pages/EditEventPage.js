import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export function EditEventPage() {
  // const fetchedData = useLoaderData(); // looks for the closest available loader data
  const fetchedData = useRouteLoaderData("eventDetailId");
  console.log("🚀 ~ EditEventPage ~ fetchedData:", fetchedData);
  return <EventForm method="PATCH" event={fetchedData.data.event} />;
}
