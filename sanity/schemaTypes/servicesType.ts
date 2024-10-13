// schemas/services.ts
import { defineField, defineType } from "sanity";

export const servicesType = defineType({
  name: "servicesSection",
  title: "Nos services",
  type: "document",
  fields: [
    defineField({
      name: "h2Title",
      title: "Titre de section (par-dessus : Nos Services)",
      type: "string",
    }),
    defineField({
      name: "servicesList",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object", // Each service will have its own object structure
          fields: [
            defineField({
              name: "title",
              title: "Nom du service",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description du service",
              type: "text", // Allows for longer text
            }),
          ],
        },
      ],
    }),
  ],
});
