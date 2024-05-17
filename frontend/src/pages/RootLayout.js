import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export function RootLayout() {
  /*
  useNavigation lets us find out whether our page, currently in an active transition,
  or loading data, or if we have no active transition going on.

  NOTE:
export function RootLayout() {
  const navigation = useNavigation()
  const  navigationState = navigation.state
  return (
    <>
      <MainNavigation />
      <main className="p-10 text-3xl font-bold tracking-wide">
      {navigationState === 'loading' && <p className="bg-stone-900 py-5 text-center rounded font-thin mb-10">Please wait a moment, fetching data</p>}
        <Outlet />
      </main>
    </>
  );
}
  
  Our message is displayed but route does not change, i.e until the data is fetched, URL remained http://localhost:3000,
  once the data is fetched message is loading message is removed and we navigate to the desired route
*/
  return (
    <>
      <MainNavigation />
      <main className="p-10 text-3xl font-bold tracking-wide">
        <Outlet />
      </main>
    </>
  );
}
