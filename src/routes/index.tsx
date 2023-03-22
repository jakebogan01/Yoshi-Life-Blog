import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h2>Okie Dokie</h2>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Yoshi Life',
  meta: [
    {
      name: 'description',
      content: 'A blog site about everything Yoshi',
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'somehreflink'
    }
  ]
};
