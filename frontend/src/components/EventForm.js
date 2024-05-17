import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    // by providing action attribute we can trigger the action of out choice
    // we provide path to it.
    // <Form method="post" action="/events/new" className={classes.form}>
    <section className=" flex justify-center items-center">
    <Form method="post" className=" w-full max-w-xl space-y-5">
      <p className="grid grid-cols-2 ">
        <label htmlFor="title" className="text-base tracking-widest ">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          required
          className="text-sm capitalize font-medium text-gray-700 px-2 p-1 rounded"
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
          required
          className="text-sm capitalize font-medium text-gray-700 px-2 p-1 rounded"
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
          required
          className="text-sm capitalize font-medium text-gray-700 px-2 p-1 rounded"
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
          required
          className="text-sm capitalize font-medium text-gray-700 px-2 p-1 rounded"
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className="flex justify-end gap-10">
        <button type="button" className="text-base  bg-stone-500 px-5 py-1 rounded font-medium hover:scale-105 hover:shadow-lg hover:shadow-stone-950" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting} className="text-base bg-stone-500 px-5 py-1 rounded font-medium hover:scale-105 hover:shadow-lg hover:shadow-stone-950">
          {isSubmitting ? "Submitting" : "Save"}
        </button>
      </div>
    </Form>
    </section>
  );
}

export default EventForm;
