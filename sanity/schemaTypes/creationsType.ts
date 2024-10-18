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
      name: "selectedVideos",
      title: "Selection de videos (pour la page d'accueil)",
      type: "array",
      of: [{ type: "url" }],
    }),
    defineField({
      name: "videos",
      title: "Videos (16/9)",
      type: "array",
      of: [{ type: "url" }],
    }),
    defineField({
      name: "shorts",
      title: "Shorts (9/16)",
      type: "array",
      of: [{ type: "url" }],
    }),
  ],
});
