import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Header from "~/components/starter/header/header";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div>
        <Header />
        <p>THIS IS THE TEST LAYOUT</p>
        <Slot />
    </div>
  );
});
