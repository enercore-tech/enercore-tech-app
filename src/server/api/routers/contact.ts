import { createTRPCRouter, publicProcedure } from "~/server/api/trpc"
import { ContactInputSchema } from "~/modules/contact/logic/contactSchema"
import { submitContact } from "~/modules/contact/logic/submitContact"
import { TRPCError } from "@trpc/server"

export const contactRouter = createTRPCRouter({

  submit: publicProcedure
    .input(ContactInputSchema)
    .mutation(async ({ input }) => {
      try {
        return await submitContact(input)
      } catch (err) {
        console.error("Contact submission error:", err)
                
        const error = err as Error & { statusCode?: number }
        if (error.statusCode === 409) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "This contact already exists.",
          })
        }

        // Provide more detailed error message
        const errorMessage = err instanceof Error ? err.message : "Something went wrong."
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: errorMessage,
        })
      }
    }),
})

