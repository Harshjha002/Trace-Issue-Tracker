'use client';
import React, { useState } from "react";
import { Button, Callout, Spinner, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";

import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import ErrorMessage from "@/components/ErrorMessage";
import { z } from "zod";
import dynamic from "next/dynamic";
import { Issue } from "@prisma/client";

const MDEditor =dynamic(() => import("@uiw/react-md-editor"),
{ssr:false}
)

type IssueFormData = z.infer<typeof createIssueSchema>;



const IssueForm = ({issue} :{issue?:Issue}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IssueFormData>({
        resolver: zodResolver(createIssueSchema),
    });

    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true);
            setError("");
            await axios.post("/api/issues", data);
            router.push("/issues");
        } catch {
            setError("An unexpected error occurred");
        } finally {
            setIsSubmitting(false);
        }
    });

    return (
        <div className="max-w-xl">
            {error && (
                <Callout.Root color="red" className="mb-5">
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            )}
            <form className="space-y-4" onSubmit={onSubmit}>
                <TextField.Root defaultValue={issue?.title} placeholder="Title" {...register("title")} />
                <ErrorMessage>{errors?.title?.message}</ErrorMessage>
                <div data-color-mode="light">
                    <Controller
                        name="description"
                        control={control}
                        defaultValue={issue?.description}
                        render={({ field }) => (
                            <MDEditor value={field.value} onChange={field.onChange} 
                            preview="edit"
                            height={300}
                            style={{borderRadius:20 , overflow:"hidden"}}
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.description?.message}</ErrorMessage>
                </div>
                <Button disabled={isSubmitting}>
                    Submit New Issue {isSubmitting && <Spinner />}
                </Button>
            </form>
        </div>
    );
};

export default IssueForm;