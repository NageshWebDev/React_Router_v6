import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
import { customFetch } from "../util/customFetch";

export function NewEventPage() {
  return <EventForm method="POST" />;
}
