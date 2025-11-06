import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodoData } from "@/hooks/quries/use-todos.data";
import { API_URL } from "@/lib/constants";
import type { Todo } from "@/store/types";
import { useQuery } from "@tanstack/react-query";

export default function TodoListPage() {
  const { data: todos, isLoading, error } = useTodoData();
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">Todo list</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
