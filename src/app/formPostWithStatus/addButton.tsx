"use client"
/*This is a clientside component, as JS is required to disable the button */

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export const AddButton = () => {
    // The experimental useFormStatus hook can be used within Form Actions, and provides the pending property.
    const { pending } = useFormStatus();

  return (
    <button
        disabled={pending}
        type="submit"
        className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center py-4 px-4 rounded-lg my-3"
    >
        Add Todo
    </button>
  )
}

