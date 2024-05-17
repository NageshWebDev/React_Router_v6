import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {

  /*
  the end prop ensures that link (to) is only treated as active
  if the currently active route ends with 'to' path.
  */

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive})=>isActive ? classes.active:undefined} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({isActive})=>isActive ? classes.active:undefined} end>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
