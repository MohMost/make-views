import { defineField, defineType } from "sanity";

export const creationsType = defineType({
  name: "videoSection",
  title: "Nos créations",
  type: "document",
  fields: [
    defineField({
      name: "h2Title",
      title: "Titre de section (par défaut : Nos Créations)",
      type: "string",
    }),
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      of: [{ type: "url" }],
    }),
  ],
});
