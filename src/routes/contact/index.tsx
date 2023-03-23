import { component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline";

export default component$(() => {
  useStylesScoped$(ContactStyles)

  const formVisible = useSignal(false)
  const formState = useStore({ name: "", message: "" })

  return (
    <article class="bg-white p-5 rounded-lg drop-shadow-md m-2.5">
      <h2 class="font-geo font-bold m-0 text-[1.8em]">Contact</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at excepturi facilis neque quidem reiciendis tenetur totam vitae voluptatem voluptates?</p>

      {/*click event*/}
      <button onClick$={() => formVisible.value = true } class="bg-amber-500 border-0 border-none py-2 px-2.5 mt-4 rounded text-white cursor-pointer font-poppins">
        Contact Me
      </button>

      {/*hides form bases on formVisible variable*/}
      {formVisible.value && (
        <form
          preventDefault:submit
          class="mt-5"
          onSubmit$={() => {
            /*
            prevents default action of form
            use onsubmit event to print to console the values of formState
            clears states on submit
            */
            console.log(formState.name, formState.message)
            formState.name = ""
            formState.message = ""
          }}>
          <label>
            <span>Your name:</span>
            <input
              value={formState.name /*two-way binding clears sate on submit*/}
              onInput$={(e) => formState.name = (e.target as HTMLInputElement).value /*onInput event that grabs value user types*/}
              class="block w-[400px] p-[5px] my-2.5 mx-5 border border-[#dddddd] rounded"
              type="text"
            />
          </label>
          <label>
            <span>Your message:</span>
            <textarea
              value={formState.message /*two-way binding clears sate on submit*/}
              onInput$={(e) => formState.message = (e.target as HTMLInputElement).value /*onInput event that grabs value user types*/}
              class="block w-[400px] p-[5px] my-2.5 mx-5 border border-[#dddddd] rounded"></textarea>
          </label>
          <button class="bg-amber-500 border-0 border-none py-2 px-2.5 rounded text-white cursor-pointer font-poppins">Send</button>

          {/*outputs input values from formState*/}
          <p>{formState.name}</p>
          <p>{formState.message}</p>
        </form>
      )}

    </article>
  )
});