import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  redirect,
} from "react-router-dom";
import { customFetch } from "../util/customFetch";

function EventForm({ method, event }) {
  /*
    It gives us access to the data returned by our closest action.
    till now, we are using action either for sumitting form data or delete an event.
    but we also want to alert the user regarding the validation error.

    our backend is returning status code 422 in case of validation error, i.e.
    user forgets to fill a field either at the time of updating an event or creating new event.
  */
  const actionData = useActionData();
  console.log("🚀 ~ EventForm ~ actionData:", actionData);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <section className=" flex justify-center items-center">
      {/*
        This form will automatically trigger the action function of the currently active route,
        i.e. the route for which this form was loaded. 

        You could also send the request to a different route by adding
        the action prop here to this form component and setting this to any other path.
        Then in that case, the action of another path, of another route definition object, would be triggered.
        like this, 
                  <Form method="post" action="/any-other-path" className={classes.form}>

        but if you wanna trigger the action of the currently active route, you don't need the action prop.
      */}
      <Form method={method} className=" w-full max-w-xl space-y-5">
        {actionData && actionData.errors && (
          <div className="text-xs font-medium text-gray-400 bg-black/25 p-3 px-5 rounded space-y-2">
            <p className="text-red-400 text-base border-b border-gray-600">
              Error(s)
            </p>
            <ul className="flex gap-5 justify-start">
              {Object.values(actionData.errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          </div>
        )}
        <p className="grid grid-cols-2 ">
          <label htmlFor="title" className="text-base tracking-widest ">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="text-sm capitalize font-medium text-gray-700 px-2 p-1 rounded bg-gray-200 "
            defaultValue={event ? event.title : ""}
          />
        </p>
        <p className="grid grid-cols-2">
          <label className="text-base tracking-widest" htmlFor="image">
            Image
          </label>
          <input
            id="image"
            type="url"
            name="image"
            className="text-sm capitalize font-medium text-gray-700 px-2 p-1 rounded bg-gray-200"
            defaultValue={event ? event.image : ""}
          />
        </p>
        <p className="grid grid-cols-2">
          <label className="text-base tracking-widest" htmlFor="date">
            Date
          </label>
          <input
            id="date"
            type="date"
            name="date"
            className="text-sm capitalize font-medium text-gray-700 px-2 p-1 rounded bg-gray-200"
            defaultValue={event ? event.date : ""}
          />
        </p>
        <p className="grid grid-cols-2">
          <label className="text-base tracking-widest" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="5"
            className="text-sm capitalize font-medium text-gray-700 px-2 p-1 rounded bg-gray-200"
            defaultValue={event ? event.description : ""}
          />
        </p>
        <div className="flex justify-end gap-10">
          <button
            type="button"
            className="text-base  bg-stone-500 px-5 py-1 rounded font-medium hover:scale-105 hover:shadow-lg hover:shadow-stone-950"
            onClick={cancelHandler}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            className="text-base bg-stone-500 px-5 py-1 rounded font-medium hover:scale-105 hover:shadow-lg hover:shadow-stone-950"
          >
            {isSubmitting ? "Saving" : "Save"}
          </button>
        </div>
      </Form>
    </section>
  );
}

export default EventForm;

export async function formAction({ request, params }) {
  console.log("🚀 ~ formAction is called");
  const method = request.method;
  console.log("🚀 ~ formAction ~ method:", method);
  const formData = await request.formData();

  const eventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };
  console.log("eventData : ", eventData);

  const { customPost, customPatch } = customFetch();

  if (method === "PATCH") {
    const eventId = params.eventId;
    const response = await customPatch(
      `http://localhost:8080/events/${eventId}`,
      JSON.stringify(eventData)
    );
    console.log("Action response : ", response);
    if (response?.errors) return response;
  }

  if (method === "POST") {
    const response = await customPost(
      "http://localhost:8080/events",
      JSON.stringify(eventData)
    );
    console.log("Action response : ", response);
    if (response?.errors) return response;
  }

  return redirect("/events");
}
