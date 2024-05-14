import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="p-10 text-3xl font-bold tracking-wide">
        <Outlet />
      </main>
    </>
  );
}
