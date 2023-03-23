import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline";
import type { PropFunction } from "@builder.io/qwik";

interface ModalProps {
  size: "sm" | "lg", /*adding props*/
  frosted?: boolean, /*adds boolean type prop*/
  close: PropFunction<() => void>, /*adds function type prop that returns void*/
}

export default component$((props: ModalProps) => {
  useStylesScoped$(ModalStyles)

  return(
    <div class={`fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 ${props.frosted && 'modal'}`}>
      {/*adds props dynamically, frosted is added by ternary operator*/}
      <div class={`relative bg-white p-5 rounded-lg drop-shadow-lg my-[100px] mx-auto ${props.size} ${props.frosted && 'frosted'}`}>
        <div
          onClick$={props.close /*passes function prop*/}
          class={`absolute top-2.5 right-2.5 py-1 px-2 bg-[#dfdfdf] text-[#777777] text-[0.8em] rounded cursor-pointer ${props.frosted && 'close'}`}>
          close
        </div>
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