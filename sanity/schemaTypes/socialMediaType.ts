// schemas/socialMedia.js

import { defineType, defineField } from "sanity";

export const socialMediaType = defineType({
  name: "socialMedia",
  title: "Réseaux sociaux",
  type: "document",
  fields: [
    defineField({
      name: "platform",
      title: "Platform Name",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link URL",
      type: "url",
    }),
    defineField({
      name: "icon",
      title: "SVG Icon",
      type: "image", // You can also use a custom SVG input type if you have a plugin
      options: {
        hotspot: true,
      },
    }),
  ],
});
