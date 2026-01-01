import { signInWithPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSugnInWithPassword() {
  return useMutation({
    mutationFn: signInWithPassword,
  });
}
