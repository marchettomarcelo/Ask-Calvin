import { z } from "zod";
import generateCalvinResponse from "~/ai/ai";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const calvinRouter = createTRPCRouter({
  askAQuestion: publicProcedure
    .input(z.object({ question: z.string() }))
    .mutation(async ({ input }) => {
      const response = await axios.post("http://13.58.137.130:3000/generate", {
        question: input.question,
      });
      
      return response.data.respoonse;
    }),
});
