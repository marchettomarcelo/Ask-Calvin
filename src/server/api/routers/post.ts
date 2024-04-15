import { z } from "zod";
import generateCalvinResponse from "~/ai/ai";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const calvinRouter = createTRPCRouter({
  askAQuestion: publicProcedure
    .input(z.object({ question: z.string() }))
    .mutation(async ({ input }) => {
      const data = await generateCalvinResponse({ question: input.question });
      return data;
    }),
});
