import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="page grow flex flex-col">
      <main>
        <Header />
        <section class="py-10 w-full p-2.5">
          <div class="max-w-[1260px] mx-auto">
            <Slot />
          </div>
        </section>
      </main>
      <div class="grow flex flex-col">
        <div class="grow flex flex-col">
          <Footer />
        </div>
      </div>
    </div>
  );
});
