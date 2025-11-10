import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoById(id: number) {
  return useQuery({
    queryFn: () => fetchTodoById,
    queryKey: ["todos", id],
  });
}
