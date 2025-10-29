import "./App.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function App() {
  const isActive = true;
  return (
    <div>
      <Button>버튼</Button>
      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
      </div>
      <div className="text-primary">primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">destructive</div>
    </div>
  );
}

export default App;
