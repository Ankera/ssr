'use client'
// app/submit-button.jsx
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? 'Adding' : 'Add'}
    </button>
  )
}
