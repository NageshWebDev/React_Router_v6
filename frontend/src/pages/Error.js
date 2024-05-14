import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export function Error() {
  const routeError = useRouteError();
  return (
    <PageContent title="An error occured!">
      <p className="text-xl">Something went wrong!</p>
      <p className="text-xl">{routeError.data}</p>
    </PageContent>
  );
}
