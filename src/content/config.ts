import { defineCollection, z } from "astro:content";


const projects = defineCollection({
    schema: z.object({
        title: z.string(), 
        url: z.string().url(),
        language: z.string(),
        description: z.string(),
        img: z.string(),
    }), 
}); 

export const collection = { projects };

// This file is a schema definition for the content in the proyects collection. 
