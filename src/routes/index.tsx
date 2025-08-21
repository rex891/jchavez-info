import { db } from "$/db";
import { users } from "$/db/schema";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useUserCount = routeLoader$(async () => {
  const count = await db.select().from(users).execute();
  return count.length;
});

export default component$(() => {
  const userCount = useUserCount();
  return (
    <div class="flex h-full items-center justify-center">
      <div>
        Can't wait to see what you build with qwik! User count:
        {userCount.value}
        <br />
        Happy coding!
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
