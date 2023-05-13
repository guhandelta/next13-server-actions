import { revalidatePath } from "next/cache";

const todos: string[] = [
  "Learn ReactJS"
]

export default function Home() {
  /* Server Actions are an alpha feature in Next.js, built on top of React Actions. They enable 
  server-side data mutations, reduced client-side JavaScript, and progressively enhanced forms. 
  Server Actions are global and are not session specific, the same data would be rendered wherever may it be
  accessed from.
  Actually creating a server action creates an API. This should also be provided with the same layer of security
  as like the ones preovided to the other endpoints published in the server.
  */
  async function addTodo(data:FormData) {
    /* FormData => Provides a way to easily construct a set of key/value pairs representing form fields and 
    their values, which can then be easily sent using the XMLHttpRequest.send() method. 
    It uses the same format a form would use if the encoding type were set to "multipart/form-data".*/
    "use server"; //To say this fn() is a server action, 
    console.log(todos);
    // get the data and corece it to a string 
    // get() is FormData obj method
    const chunk = data.get("todo") as string;
    todos.push(chunk);
    revalidatePath("/"); //Refreshes the page
    console.log(todos);
  }

  return (
    <main className="p-5">
      <h1 className="text-4xl-font-bold">Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action={addTodo}>
        <input 
          type="text" 
          name="todo" 
          className="border border-gray-300 rounded-lg py-4 px-4 mx-4 text-basis" 
        />
        <button
          type="submit"
          className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center py-4 px-4 rounded-lg my-3"
        >
          Add Todo
        </button>
      </form>
    </main>
  )
}
