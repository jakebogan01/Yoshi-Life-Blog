import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="grow bg-[#6DE75B] bg-opacity-50 p-5 text-center">
      <p>Copyright 2023 Yoshi Life</p>
    </footer>
  );
});
