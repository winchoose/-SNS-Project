import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import IndexPage from "@/pages/index-page";
import SignInpage from "@/pages/sign-in-page";
import SignUppage from "@/pages/sign-up-page";
import CounterPage from "@/pages/counter-page";
import TodoListPage from "@/pages/todo-list-page";
import TodoDetaolPage from "@/pages/todo-detail-page";
function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/" element={<IndexPage />} />
      <Route path="/todolist" element={<TodoListPage />} />
      <Route path="/todolist/:id" element={<TodoDetaolPage />} />

      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInpage />} />
        <Route path="/sign-up" element={<SignUppage />} />
      </Route>
    </Routes>
  );
}

export default App;
