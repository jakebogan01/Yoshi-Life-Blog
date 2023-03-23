import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline";

export default component$(() => {
  useStylesScoped$(ModalStyles)

  return(
    <div class="fixed w-full h-full top-0 left-0 bg-black bg-opacity-50">
      <div class="relative bg-white p-5 rounded-lg drop-shadow-lg my-[100px] mx-auto max-w-3xl">
        <div class="absolute top-2.5 right-2.5 py-1 px-2 bg-[#dfdfdf] text-[#777777] text-[0.8em] rounded cursor-pointer">close</div>
        <main class="bg-transparent">
          <Slot name="content" />
        </main>
        <footer class="bg-transparent pt-5 border-t border-dashed border-[#dddddd] text-center">
          <Slot name="footer" />
        </footer>
      </div>
    </div>
  )
})