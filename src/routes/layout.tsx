import Navigation from "@/components/navigation/navigation";
import { component$, Slot } from "@builder.io/qwik";
export default component$(() => {
  return (
    <>
      <Navigation />
      <Slot />
    </>
  );
});
