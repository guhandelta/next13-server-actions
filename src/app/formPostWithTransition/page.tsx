import { revalidatePath } from "next/cache";
import AddButton from "./addButton";

const todos: string[] = [
  "Learn ReactJS"
]

export default function Home(){

  async function addTodo(todo: string) {
    /* FormData => Provides a way to easily construct a set of key/value pairs representing form fields and 
    their values, which can then be easily sent using the XMLHttpRequest.send() method. 
    It uses the same format a form would use if the encoding type were set to "multipart/form-data".*/
    "use server"; //To say this fn() is a server action, 

    await new Promise(res => setTimeout(res, 3000))

    console.log(todos);

    todos.push(todo);
    revalidatePath("/formPostWithTransition"); //Refreshes the page
    console.log(todos);
  }

  /*Here, instead of posting the data to the form as in formPostWithStatus, the addTodo server action is 
  isolated and called as any other fn() by passing it as a prop to the button*/

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold text-center">Todos</h1>
      <h3 className="text-4xl font-bold text-center">Form Post With Transition</h3>
      <br /><br /><br />
      <ul className="bottom-10">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <div>
        <AddButton addTodo={addTodo} />
      </div>
    </main>
  )
}
