import { useState } from "react";
import { useMutation } from "convex/react";
import { error } from "console";

export const useApiMutation = (mutationFunction: any) => {
    const [pending, setPending] = useState(false);
    const ApiMutation = useMutation(mutationFunction);

    const mutate = (payload: any) => {
        setPending(true);
        return ApiMutation(payload)
        .finally(() => setPending(false))
        .then((result) => {
            return result
        })
        .catch ((error) => {
            throw error;
        });
    };

    return {
        mutate,
        pending,
    };
};