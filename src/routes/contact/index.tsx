import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline";

export default component$(() => {
  useStylesScoped$(ContactStyles)

  return (
    <article class="bg-white p-5 rounded-lg drop-shadow-md m-2.5">
      <h2 class="font-geo font-bold m-0 text-[1.8em]">Contact</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at excepturi facilis neque quidem reiciendis tenetur totam vitae voluptatem voluptates?</p>
    </article>
  )
});