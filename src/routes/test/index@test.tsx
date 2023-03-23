import { component$, useSignal, useStore } from "@builder.io/qwik";

export default component$(() => {
  const name = useSignal('yoshi') //normal data type variables

  const person = useStore({ name: "peach", age: 30 }) //stores object/arrays with multiple properties

  const blogs = useStore([
    {id: 1, title: 'My first blog'},
    {id: 2, title: 'My second blog'},
    {id: 3, title: 'My third blog'},
  ])

  return (
    <article class="bg-white p-5 rounded-lg drop-shadow-md m-2.5">
      <h2 class="font-geo font-bold m-0 text-[1.8em]">Test Layout</h2>

      <p>Hello, {name.value}</p>
      <p>Hello, {person.name} - {person.age}</p>

      {/*click event listener*/}
      <button onClick$={() => name.value = "Mario"} class="bg-amber-500 border-0 border-none py-2 px-2.5 my-4 mr-5 rounded text-white cursor-pointer font-poppins">
        Click me
      </button>
      <button onClick$={() => person.name = "Bowser"} class="bg-amber-500 border-0 border-none py-2 px-2.5 my-4 rounded text-white cursor-pointer font-poppins">
        Click me again
      </button>

      {blogs.map(blog => (
        <div key={blog.id}>{blog.title}</div>
      ))}

      <button onClick$={() => blogs.pop()} class="bg-amber-500 border-0 border-none py-2 px-2.5 mt-4 rounded text-white cursor-pointer font-poppins">
        Remove blog
      </button>
    </article>
  )
});