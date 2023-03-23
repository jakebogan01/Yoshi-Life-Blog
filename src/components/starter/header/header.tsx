import { component$ } from '@builder.io/qwik';
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class="bg-[#319A15]">
      <nav class="flex items-center p-2.5 max-w-[1260px] mx-auto">
        <img src="/yoshi_block.png" alt="logo" class="w-10 h-[50px]" />
        <h1 class="ml-2.5 mr-auto font-bold text-[2em]">Yoshi Life</h1>
        <ul>
          <li class="inline-block ml-2.5">
            <Link href="/" class="text-white py-1 px-2 rounded hover:bg-white hover:text-[#111111] transition-colors">Home</Link>
          </li>
          <li class="inline-block ml-2.5">
            <Link href="/about" class="text-white py-1 px-2 rounded hover:bg-white hover:text-[#111111] transition-colors">About</Link>
          </li>
          <li class="inline-block ml-2.5">
            <Link href="/contact" class="text-white py-1 px-2 rounded hover:bg-white hover:text-[#111111] transition-colors">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
