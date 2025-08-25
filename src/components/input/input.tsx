import { component$ } from '@builder.io/qwik'

type Props = {
  enabled?: boolean
  placeholder?: string
}

// We can use JS's destructuring of props to provide a default value.
export default component$<Props>(({ enabled = true, placeholder = '' }) => {
  return (
    <input
      class="bg-white text-black"
      disabled={!enabled}
      placeholder={placeholder}
    />
  )
})
