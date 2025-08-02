import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex h-full items-center justify-center">
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Joe Chavez",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
