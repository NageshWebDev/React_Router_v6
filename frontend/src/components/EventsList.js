import { Link } from "react-router-dom";
import classes from "./EventsList.module.css";

function formatDate(date) {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  return new Date(date).toLocaleDateString("en-US", options);
}

function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h1 className="text-lg font-medium">All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={`${classes.item} text-base font-thin`}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2 className="text-xl text-gray-300 font-medium capitalize ">
                  {event.title}
                </h2>
                <time className="text-sm font-medium">
                  {formatDate(event.date)}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
