import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export function NewEventPage() {
  return <EventForm />;
}

export async function newEventAction({ request, params }) {
  console.log("🚀 ~ newEventAction is called");
  const formData = await request.formData();
  console.log("🚀 ~ newEventAction ~ formData:", formData);

  const eventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };
  console.log("eventData : ", eventData);
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  console.log(response);
  if (!response.ok) {
    throw {
      success: false,
      data: {},
      message: "Could NOT fetch events.",
    };
  }

  return redirect("/events");
}
