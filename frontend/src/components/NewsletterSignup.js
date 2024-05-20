import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

function NewsletterSignup() {
  const [userEmail, setUSerEmail]= useState('')
  /*
    This component is present on navbar and in order to call the post request we need to call the action function of that route.
    Problem is we can't place news letter action function on each route as there can be action clash.
    
    one way to solve is to use useFetcher hook.
    this hook when executed gives you an object that includes a bunch of useful properties and methods.
    So Fetcher should basically be used whenever you wanna trigger, an action, or also a loader
    with help of the load function without actually navigating to the page to which the loader belongs
    or the page to which the action belongs.

    like : fetcher.Form
    if we use this Fetcher Form component like this which we can then this will actually still trigger
    an action but it will not initialize a route transition.
  */
  const fetcher = useFetcher();
  /*
   data : which is returned by the action or loader that's being triggered.
   state: The state you get from Fetcher instead tells you whether the Fetcher behind the scenes
          completed its loader or action that was triggered.
  */

  const {state, data} = fetcher

  useEffect(()=>{
    if(state === 'idle' && data && data.message) {
      window.alert(data.message)
      setUSerEmail('')
    }
  }, [data, state])

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className="flex justify-center items-center gap-5"
    >
      <input
        className="!pl-2 !py-0.5 !rounded-sm text-base font-thin text-gray-600"
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        value={userEmail}
        onChange={(e)=>setUSerEmail(e.target.value)}
      />
      <button className="text-base bg-amber-400 text-black/80 px-2 py-0.5 rounded font-medium">
        Sign up
      </button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
