import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { drizzle } from "drizzle-orm/node-postgres";
import { schema } from "../../../drizzle/schema";
export const useCreateUser = routeAction$(
  async (data) => {
    const db = drizzle(process.env.DATABASE_URL!);
    const user = await db.insert(schema.users).values(data);
    return user;
  },
  zod$({
    name: z.string(),
    email: z.string().email(),
  }),
);

export default component$(() => {
  const createUserAction = useCreateUser();
  return (
    <section>
      <h1>Create User</h1>
      <Form action={createUserAction}>
        <label>
          Name
          <input name="name" value={createUserAction.formData?.get("name")} />
        </label>
        <label>
          Email
          <input name="email" value={createUserAction.formData?.get("email")} />
        </label>
        <button type="submit">Create</button>
      </Form>
      {createUserAction.value && (
        <div>
          <h2>User created successfully!</h2>
        </div>
      )}
    </section>
  );
});
