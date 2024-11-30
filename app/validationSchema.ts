import { z } from "zod"

export const createIssueSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, { message: "Title is required and cannot be empty." })
        .max(255, { message: "Title cannot exceed 255 characters." }),
    description: z
        .string()
        .trim()
        .min(1, { message: "Description is required and cannot be empty." })
});
