import Controlller from "@/components/counter/controller";
import Vierwer from "@/components/counter/viewer";

export default function CounterPage() {
  return (
    <div>
      <h1>Counter</h1>
      <Vierwer />
      <Controlller />
    </div>
  );
}
