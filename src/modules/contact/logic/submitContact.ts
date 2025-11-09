import { Prisma } from "@prisma/client"
import { db } from "~/server/db"
import type { ContactInput } from "./contactSchema"

export async function submitContact(data: ContactInput) {
  try {
    return await db.contact.create({
      data,
    })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      const conflictError = new Error(
        "A contact with this email and phone already exists.",
      ) as Error & { statusCode?: number }
      conflictError.statusCode = 409
      throw conflictError
    }

    throw error
  }
}
