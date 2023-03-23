import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";
import Modal from "~/components/modal/modal";

export default component$(() => {
  useStylesScoped$(AboutStyles)

  const modalVisible = useSignal(false)

  return (
    <>
      <article class="bg-white p-5 rounded-lg drop-shadow-md m-2.5">
        <h2 class="font-geo font-bold m-0 text-[1.8em]">About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at excepturi facilis neque quidem reiciendis tenetur totam vitae voluptatem voluptates?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at excepturi facilis neque quidem reiciendis tenetur totam vitae voluptatem voluptates?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at excepturi facilis neque quidem reiciendis tenetur totam vitae voluptatem voluptates?</p>

        <button onClick$={() => modalVisible.value = true} class="bg-amber-500 border-0 border-none py-2 px-2.5 mt-5 rounded text-white cursor-pointer font-poppins">
          Open Modal
        </button>
      </article>

      {modalVisible.value && (
        <Modal>
          {/*output multiple slots from modal*/}
          <div q:slot="content">
            <h2 class="font-geo font-bold m-0 text-[1.8em]">Great News!!!</h2>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nostrum?</p>
          </div>
          <div q:slot="footer">
            <button class="bg-amber-500 border-0 border-none py-2 px-2.5 rounded text-white cursor-pointer font-poppins">Sign up now!</button>
          </div>
        </Modal>
      )}
    </>
  )
});