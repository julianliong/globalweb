import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"

const blog = defineCollection({
    loader: glob({
        pattern:"**/*.md",
        base:"./src/blog"
    }),
});

export const collections = {blog}