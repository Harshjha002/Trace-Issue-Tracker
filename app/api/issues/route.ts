import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

import { z } from "zod"

const createIssueSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, { message: "Title is required and cannot be empty." })
        .max(255, { message: "Title cannot exceed 255 characters." }),
    description: z
        .string()
        .trim()
        .min(1, { message: "Description is required and cannot be empty." })
})

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = createIssueSchema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description }
    })

    return NextResponse.json(newIssue, { status: 201 })

}