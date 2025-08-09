import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex items-center">
      <h1>Hi 👋</h1>
      <div class="bg-slate-200">jchavez info here</div>
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
