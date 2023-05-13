"use client"
/*This is a clientside component, as JS is required to disable the button */

import { useRef, useTransition } from 'react';

export default function AddButton ({ 
  addTodo, 
}: { 
  addTodo: (todo: string) => Promise<void>; 
}){    

  /*addTodo() received here is a server fn(), which runs on the server and as well as on the client
    addTodo() updates the server state[todos.push(todo)]and then
    refreshes the page[revalidatePath("/formPostWithTransition)"]
  */

  let [ pending, setTransition ] = useTransition();
  const todoRef = useRef<HTMLButtonElement>(null);

  /*The text input and the addTodo() in the button's onClick are connect using ref, to provide the data*/

  return (
    <div>
      <input 
        ref={todoRef}
        type="text" 
        name="todo" 
        className="border border-gray-300 rounded-lg py-4 px-4 mx-4 text-basis" 
      />
      {/*pending - froom startTransition() helpls get the status of the operation*/}
      <button
          disabled={pending} 
          onClick={async ()=>{
            {/*useTransition() to monitor the state of the executed action*/}
            setTransition(async () =>{
              await addTodo(todoRef.current!.value);
            })
          }}
          className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center py-4 px-4 rounded-lg my-3"
      >
          Add Todo
      </button>
    </div>
  )
}

