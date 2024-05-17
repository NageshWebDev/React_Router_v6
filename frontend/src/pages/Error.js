import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from '../components/MainNavigation'
export function Error() {
  const error = useRouteError();
  console.log("error.data : ", error.data)
  console.log("error.status : ",error.status)

  let title = 'An error occured!'
  let message = 'Something went wrong!'
  
  if(error.status === 500) {
    // message = JSON.parse(error.data).message
    message = error.data.message
    console.log('message : ', message)
  }

  if(error.status === 404) {
    title = 'Not Found!'
    message = 'Could not find resource or page.'
  }

  return (
    <>
    <MainNavigation />
    <PageContent title={title}>
      <p className="text-xl">{message}</p>
    </PageContent>
    </>
  );
}
