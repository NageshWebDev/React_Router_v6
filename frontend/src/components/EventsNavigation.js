import { NavLink } from "react-router-dom";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {

  const customClass = 'text-lg font-medium'

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink            
              to="/events"
              className={({ isActive }) =>
                `${isActive ? classes.active : ''} ${customClass}`
              }
              end
            >
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/new"
              className={({ isActive }) =>
                `${isActive ? classes.active : ''} ${customClass}`
              }
              end
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
