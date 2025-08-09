import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { drizzle } from "drizzle-orm/node-postgres";

console.log({ component$, routeLoader$, drizzle });

// export const useGetUser = routeLoader$(async (requestEvent) => {
//   const userId = parseInt(requestEvent.params["userId"], 10);
//   return;
// });

export default component$(() => {
  return <div>usersid</div>;
  //   const user = useGetUser();
  //   return (
  //     <section>
  //       <h1>User detail</h1>
  //       {user.value ? (
  //         <>
  //           <p>Name: {user.value.name}</p>
  //           <p>Email: {user.value.email}</p>
  //         </>
  //       ) : (
  //         <p>User not found</p>
  //       )}
  //     </section>
  //   );
});
