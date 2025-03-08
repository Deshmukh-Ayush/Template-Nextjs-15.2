import {z} from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url()
    // add further configs
})

export const env = envSchema.parse({
    DATABASE_URL: process.env.DATABASE_URL,
    // add further configs
})