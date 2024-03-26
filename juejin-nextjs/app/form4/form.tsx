'use client'

import { Key, useOptimistic } from 'react'
import { useFormState } from 'react-dom'
import { createToDo } from './actions';

export default function Form({ todos }: any) {
  const [state, sendFormAction] = useFormState(createToDo, { message: '' })

  const [optimistiToDos, addOptimisticTodo] = useOptimistic(
    todos.map((i: any) => ({text: i})),
    (state, newTodo) => [
      ...state,
      {
        text: newTodo,
        sending: true
      }
    ]
  );

  async function formAction(formData: { get: any; }) {
    addOptimisticTodo(formData.get("todo"));
    await sendFormAction(formData);
  }

  // console.log(optimistiToDos)

  return (
    <>
      <form action={formAction}>
        <input type="text" name="todo" />
        <button type="submit"> Add </button>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
      <ul>
        {optimistiToDos.map(({text, sending}: any, i: Key | null | undefined) => <li key={i}>{text}{!!sending && <small> (Sending...)</small>}</li>)}
      </ul>
    </>
  )
}
