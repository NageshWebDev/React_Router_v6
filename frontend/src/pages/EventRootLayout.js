import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export function EventRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
