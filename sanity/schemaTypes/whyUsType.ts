// schemas/aboutUs.ts
import { defineField, defineType } from "sanity";

export const whyUsType = defineType({
  name: "aboutUs",
  title: "Pourquoi nous choisir ?",
  type: "document",
  fields: [
    defineField({
      name: "h2Title",
      title: "Titre de section (par défaut : Pourquoi nous choisir ?)",
      type: "string",
    }),
    defineField({
      name: "descriptionText",
      title: "Text",
      type: "text", // Allows for longer text
    }),
  ],
});
