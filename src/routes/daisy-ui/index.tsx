import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="bg-base-100 border-base-300 collapse border">
        <input type="radio" name="my-accordion-1" checked />
        <div class="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div class="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div class="bg-base-100 border-base-300 collapse border">
        <input type="radio" name="my-accordion-1" />
        <div class="collapse-title font-semibold">
          I forgot my password. What should I do?
        </div>
        <div class="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div class="bg-base-100 border-base-300 collapse border">
        <input type="radio" name="my-accordion-1" />
        <div class="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div class="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
      <div class="p-4">
        <div role="alert" class="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Warning: Invalid email address!</span>
        </div>
      </div>
    </>
  );
});
