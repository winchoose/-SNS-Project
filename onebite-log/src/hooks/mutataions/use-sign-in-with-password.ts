import { signInWithPassword } from "@/api/auth";
import type { UseMutationCallback } from "@/type";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSugnInWithPassword(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      console.error(error);
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
