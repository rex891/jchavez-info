import { component$, useSignal, useTask$ } from '@builder.io/qwik'
import {
  Form,
  routeAction$,
  routeLoader$,
  server$,
} from '@builder.io/qwik-city'

export const useJokeVoteAction = routeAction$((props) => {
  console.log('Vote', props)
})

export const useDadJoke = routeLoader$(async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  })
  return (await response.json()) as {
    id: string
    status: number
    joke: string
  }
})

export default component$(() => {
  const dadJokeSignal = useDadJoke()
  const favoriteJokeAction = useJokeVoteAction()
  const isFavoriteSignal = useSignal(false)

  useTask$(({ track }) => {
    track(() => isFavoriteSignal.value)

    console.log('FAVORITE (isomorphic)', isFavoriteSignal.value)
    server$(() => {
      console.log('FAVORITE (server)', isFavoriteSignal.value)
    })()
  })

  return (
    <section class="h-full flex items-center justify-center">
      {dadJokeSignal.value.joke}
      <Form class="flex gap-2 " action={favoriteJokeAction}>
        <input type="hidden" name="jokeID" value={dadJokeSignal.value.id} />
        <button class="btn btn-primary" name="vote" value="up">
          👍
        </button>
        <button class="btn btn-primary" name="vote" value="down">
          👎
        </button>
      </Form>
      <button
        onClick$={() => {
          isFavoriteSignal.value = !isFavoriteSignal.value
        }}
      >
        {isFavoriteSignal.value ? '❤️' : '🤍'}
      </button>
    </section>
  )
})
