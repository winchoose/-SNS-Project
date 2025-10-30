import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

function App() {
  const isActive = true;
  return (
    <div className="p-5">
      <Toaster />

      <Textarea />

      <Input placeholder="입력..." />

      <Button
        onClick={() => {
          toast("토스트메세지", { position: "top-center" });
        }}
      >
        버튼
      </Button>
      <Button variant={"destructive"}>버튼</Button>
      <Button variant={"ghost"}>버튼</Button>
      <Button variant={"link"}>버튼</Button>
      <Button variant={"outline"}>버튼</Button>
      <Button variant={"secondary"}>버튼</Button>
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
