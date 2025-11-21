import { API_URL } from "@/lib/constants";
import type { Todo } from "@/store/types";

export async function updateTodo(todo: Partial<Todo> & { id: string }) {
  const reponse = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  });

  if (!reponse.ok) throw new Error("Update Todo Failed");
  const data: Todo = await reponse.json();
  return data;
}
