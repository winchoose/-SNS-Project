import { useCount } from "@/store/count";

export default function Vierwer() {
  const count = useCount();

  return <div>{count}</div>;
}
